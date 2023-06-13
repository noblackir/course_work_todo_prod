package ru.nikitina.taskmanager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.nikitina.taskmanager.model.*;
import ru.nikitina.taskmanager.repository.*;

import java.util.LinkedList;
import java.util.List;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;
    @Autowired
    private ProjectRepository projectRepository;
    @Autowired
    private RolesRepository rolesRepository;
    @Autowired
    private DifficultyRepository difficultyRepository;
    @Autowired
    private StateRepository stateRepository;
    @Autowired
    private ClientRepository clientRepository;
    public Task save(Project project, Task task, Difficulty difficulty, State state, List<Client> clients){
        Project newProject = projectRepository.findById(project.getId()).get();
        Difficulty newDifficulty = difficultyRepository.findById(difficulty.getId()).get();
        State newState = stateRepository.findById(1L).get();
        Client newClient = clientRepository.findById(clients.get(0).getId()).get();

        task.setProject(newProject);
        task.setDifficulty(newDifficulty);
        task.setState(newState);

        List<Client> newClientList = new LinkedList<>();
        newClientList.add(newClient);

        task.setClients(newClientList);

        return taskRepository.save(task);
    }
    public Task changeStatus(Long taskId, State state){
        Task task = taskRepository.findById(taskId).get();
        task.setState(state);
        return taskRepository.save(task);
    }
    public List<Task> getAllTasks(Long projectId, String stateName){
        Project project = projectRepository.findById(projectId).get();
        State state = stateRepository.findByTitle(stateName);
        return taskRepository.findAllByProjectAndState(project, state);
    };
}
