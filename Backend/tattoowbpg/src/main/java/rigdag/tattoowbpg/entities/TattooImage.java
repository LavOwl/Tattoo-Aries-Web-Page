package rigdag.tattoowbpg.entities;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name="Tattoo_Images")
public class TattooImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="title", nullable=false, length=511, unique=true)
    private String title;

    @Lob
    @Column(name="description", nullable=false, columnDefinition = "LONGBLOB")
    private String description;

    @Column(name="type", nullable=false, length = 511)
    private String type;

    @Lob
    @Column(name="image", columnDefinition = "LONGBLOB")
    private byte[] image;

    @Lob
    @Column(name="preview", columnDefinition = "LONGBLOB")
    private byte[] previewImage;

    public TattooImage(String title, String description, String type, byte[] image, byte[] previewImage) {
        this.title = title;
        this.description = description;
        this.type = type;
        this.image = image;
        this.previewImage = previewImage;
    }

}
