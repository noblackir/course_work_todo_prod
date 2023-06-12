package ru.nikitina.taskmanager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;
import ru.nikitina.taskmanager.model.Difficulty;
import ru.nikitina.taskmanager.repository.DifficultyRepository;

import java.util.List;

@Service
public class DifficultyService {
    @Autowired
    private DifficultyRepository difficultyRepository;

    public Difficulty save(Difficulty difficulty){
        return difficultyRepository.save(difficulty);
    }
    public List<Difficulty> getAll(){
        return difficultyRepository.findAll();
    }
    public void delete(Long id){
        difficultyRepository.deleteById(id);
    }
}
