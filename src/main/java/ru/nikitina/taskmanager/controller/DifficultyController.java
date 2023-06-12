package ru.nikitina.taskmanager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.nikitina.taskmanager.model.Difficulty;
import ru.nikitina.taskmanager.service.DifficultyService;

import java.util.List;

@RestController
@RequestMapping("/difficulty")
@CrossOrigin
public class DifficultyController {
    @Autowired
    private DifficultyService difficultyService;
    @PostMapping
    public ResponseEntity<Difficulty> save(Difficulty difficulty){
        return new ResponseEntity<>(difficultyService.save(difficulty), HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<List<Difficulty>> getAll(){
        return new ResponseEntity<>(difficultyService.getAll(), HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id){
        difficultyService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
