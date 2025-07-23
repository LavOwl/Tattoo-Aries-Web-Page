package rigdag.tattoowbpg.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import rigdag.tattoowbpg.dto.ProfileDTO;
import rigdag.tattoowbpg.entities.Profile;
import rigdag.tattoowbpg.entities.TattooImage;
import rigdag.tattoowbpg.services.ProfileService;
import rigdag.tattoowbpg.services.TattooImageService;

@RestController //Equivalent to @Controller for the class + @ResponseBody for each method
@RequestMapping(path = "/api/images")
public class APIController {

    @Autowired
    private TattooImageService tattooImageService;

    @Autowired
    private ProfileService profileService;

    @GetMapping
    public List<TattooImage> getTattooDataByType(
        @RequestParam String type,
        @RequestParam int page)
    {
        return tattooImageService.getTattooPage(type, 0);
    }

    @GetMapping("/tattoo/data/{id}")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public TattooImage getTattooDataById(@PathVariable Long id){
        return tattooImageService.getTattooImage(id).orElse(null);

    }

    @GetMapping("/tattoo/{id}")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public byte[] getById(@PathVariable Long id){
        TattooImage tattooImage = tattooImageService.getTattooImage(id).orElse(null);
        if (tattooImage != null){
            return tattooImage.getImage();
        }
        else{
            return null;
        }
    }

    @GetMapping("/profile")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public ProfileDTO getProfile(){
        return new ProfileDTO(profileService.getProfile(1L).orElse(null));
    }
}
