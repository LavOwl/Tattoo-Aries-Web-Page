package rigdag.tattoowbpg.controllers;

import java.io.IOException;
import java.time.LocalDate;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import jakarta.servlet.http.HttpServletRequest;
import rigdag.tattoowbpg.dto.ProfileDTO;
import rigdag.tattoowbpg.dto.SocialMediaDTO;
import rigdag.tattoowbpg.entities.Profile;
import rigdag.tattoowbpg.entities.SocialMedia;
import rigdag.tattoowbpg.services.ProfileService;
import rigdag.tattoowbpg.services.SocialMediaService;

import org.springframework.ui.Model;

@Controller
public class HomeController {

    @Autowired
    private ProfileService profileService;

    @Autowired
    private SocialMediaService socialMediaService;

    @ModelAttribute
    public void addHttpServletRequestToModel(HttpServletRequest request, Model model) {
        model.addAttribute("httpServletRequest", request);
    }

    @GetMapping("/login")
    public String login(){
        return "login";
    }

    @GetMapping("/")
    public String home(Model model) {
        return "home";
    }

    @PostMapping
    public void saveOrUpdate(@RequestBody SocialMedia SocialMedia){
        socialMediaService.saveOrUpdate(SocialMedia);
    }

    @GetMapping("/sobremi")
    public String petitions(Model model) {

        Profile profile = profileService.getProfile(1L).get();
        model.addAttribute("profile", new ProfileDTO(profile));
        model.addAttribute("socialMedia", socialMediaService.getSocialMedias().stream().map(f -> new SocialMediaDTO(f)).collect(Collectors.toList()));

        return "about";
    }

    @PostMapping("/actualizarPerfil")
    public String updateProfile(
        @RequestParam("fullname") String fullname, 
        @RequestParam("pronouns") String pronouns, 
        @RequestParam("description") String description, 
        @RequestParam("birthdate") Optional<LocalDate> birthdate,
        @RequestParam(name = "image", required = false) MultipartFile file, 
        Model model) throws IOException{

        Profile original = profileService.getProfile(1L).get();
        Profile profile = new Profile(fullname, birthdate.isPresent() ? birthdate.get() : original.getBirthDate(), pronouns, description, file != null ? file.getBytes() : original.getImage());

        profile.setId(1L);
        profileService.saveOrUpdate(profile);

        return "redirect:/sobremi";
    }
}
