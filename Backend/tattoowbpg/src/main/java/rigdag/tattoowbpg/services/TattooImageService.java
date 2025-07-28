package rigdag.tattoowbpg.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import rigdag.tattoowbpg.entities.TattooImage;
import rigdag.tattoowbpg.repositories.TattooImageRepository;

@Service
public class TattooImageService {
    @Autowired
    TattooImageRepository tattooImageRepository;

    @Transactional
    public List<TattooImage> getTattooImages(){
        return tattooImageRepository.findAll();
    }

    @Transactional
    public Optional<TattooImage> getTattooImage(Long id){
        return tattooImageRepository.findById(id);
    }


    @Transactional
    public void saveOrUpdate(TattooImage image){
        tattooImageRepository.save(image);
    }

    @Transactional
    public void delete(Long id){
        tattooImageRepository.deleteById(id);
    }

    @Transactional
    public void deleteTattooImageByTitle(String title) {
        tattooImageRepository.deleteByTitle(title);
    }

    @Transactional
    public List<TattooImage> getTattooPage(String type, int pageNumber){
        return tattooImageRepository.findAllByTypeOrderByIdDesc(type, PageRequest.of(pageNumber, 10)).getContent();
    }

    @Transactional
    public List<TattooImage> getAllTattooPage(int pageNumber){
        return tattooImageRepository.findAllByOrderByIdDesc(PageRequest.of(pageNumber, 10)).getContent();
    }
}
