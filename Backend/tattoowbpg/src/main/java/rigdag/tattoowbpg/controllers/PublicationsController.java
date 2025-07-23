package rigdag.tattoowbpg.controllers;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import jakarta.servlet.http.HttpServletRequest;
import net.coobird.thumbnailator.Thumbnails;
import rigdag.tattoowbpg.dto.TattooImageDTO;
import rigdag.tattoowbpg.entities.TattooImage;
import rigdag.tattoowbpg.services.TattooImageService;

@Controller
public class PublicationsController {

    @Autowired
    TattooImageService tattooImageService;

    @ModelAttribute
    public void addHttpServletRequestToModel(HttpServletRequest request, Model model) {
        model.addAttribute("httpServletRequest", request);
    }
    
     @GetMapping("/publicaciones")
    public String publications(Model model) {
        return "publications";
    }

    @GetMapping("/publicacion/{id}")
    public String publication(Model model, Long id) throws ResponseStatusException{
        TattooImage tattoo = tattooImageService.getTattooImage(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Tattoo not found"));
        model.addAttribute("tattoo", new TattooImageDTO(tattoo, false));
        return "publication";
    }

    @PostMapping("/subirpublicacion")
    public String saveOrUpdate(
        @RequestParam("title") String title,
        @RequestParam("description") String description, 
        @RequestParam("type") String type, 
        @RequestParam("image") MultipartFile file, 
        Model model) throws IOException, InterruptedException{

        try {
            String extension = getFileExtension(file.getOriginalFilename()).toLowerCase();
    
            byte[] imageData;

            File uploadFile = File.createTempFile("temp_", ".jpg");

            switch (extension) {
                case "heic":
                case "avif":
                    
                    File tempInput = File.createTempFile("upload_", "." + extension);
                    file.transferTo(tempInput);
    
                    ProcessBuilder pb = new ProcessBuilder("magick", tempInput.getAbsolutePath(), uploadFile.getAbsolutePath());
                    pb.redirectErrorStream(true);
                    Process process = pb.start();
                    process.waitFor();
    
                    imageData = Files.readAllBytes(uploadFile.toPath());
                    tempInput.delete();
                    break;
    
                default:
                    file.transferTo(uploadFile);
                    imageData = file.getBytes();
            }

            Thumbnails.of(uploadFile).size(1280*3/4, 1280).outputQuality(0.85).toFile(uploadFile);
            TattooImage tattooImage = new TattooImage(title, description, type, imageData, Files.readAllBytes(uploadFile.toPath()));
            tattooImageService.saveOrUpdate(tattooImage);
            uploadFile.delete();

            model.addAttribute("message", "Image uploaded successfully!");
        } catch (Exception e) {
            model.addAttribute("message", "Failed to upload image: " + e.getMessage());
            throw e;
        }
        return "redirect:/publicaciones";
    }

    private String getFileExtension(String filename) {
        return filename != null && filename.contains(".")
            ? filename.substring(filename.lastIndexOf('.') + 1)
            : "";
    }
}
