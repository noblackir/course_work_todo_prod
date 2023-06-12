package ru.nikitina.taskmanager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.nikitina.taskmanager.model.State;
import ru.nikitina.taskmanager.repository.StateRepository;

import java.util.List;

@Service
public class StateService {
    @Autowired
    private StateRepository stateRepository;

    public State save(State state){
        return stateRepository.save(state);
    }
    public List<State> getAll(){
        return stateRepository.findAll();
    }
    public void delete(Long id){
        stateRepository.deleteById(id);
    }
}
