package rigdag.tattoowbpg.dto;

import java.util.Base64;

import lombok.Data;
import rigdag.tattoowbpg.entities.TattooImage;

@Data
public class TattooImageDTO {
    private Long id;

    private String title;

    private String description;

    private String type;

    private String URL;

    public TattooImageDTO(TattooImage tattooImage, boolean isPreview){
        this.id = tattooImage.getId();
        this.title = tattooImage.getTitle();
        this.description = tattooImage.getDescription();
        this.type = tattooImage.getType();
        this.URL = isPreview ? "data:image/jpeg;base64," + Base64.getEncoder().encodeToString(tattooImage.getPreviewImage()) : "data:image/jpeg;base64," + Base64.getEncoder().encodeToString(tattooImage.getImage());
    }

}
