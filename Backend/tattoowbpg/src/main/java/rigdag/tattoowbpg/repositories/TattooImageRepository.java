package rigdag.tattoowbpg.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import rigdag.tattoowbpg.entities.TattooImage;

public interface TattooImageRepository extends JpaRepository<TattooImage, Long> {

    Page<TattooImage> findAllByTypeOrderByIdDesc(String type, Pageable pageable);

    Page<TattooImage> findAllByOrderByIdDesc(Pageable pageable);

    void deleteByTitle(String title);
}