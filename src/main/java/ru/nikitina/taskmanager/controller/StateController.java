package ru.nikitina.taskmanager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.nikitina.taskmanager.model.State;
import ru.nikitina.taskmanager.repository.StateRepository;
import ru.nikitina.taskmanager.service.StateService;

import java.util.List;

@RestController
@RequestMapping("/state")
public class StateController {
    @Autowired
    private StateService stateService;

    @PostMapping
    public ResponseEntity<State> save(State state){
        return new ResponseEntity<>(stateService.save(state), HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<List<State>> getAll(){
        return new ResponseEntity<>(stateService.getAll(), HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id){
        stateService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
