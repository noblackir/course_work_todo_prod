package ru.nikitina.taskmanager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.nikitina.taskmanager.model.*;
import ru.nikitina.taskmanager.repository.ProjectRepository;
import ru.nikitina.taskmanager.repository.StateRepository;
import ru.nikitina.taskmanager.repository.TaskRepository;

import java.util.List;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;
    @Autowired
    private ProjectRepository projectRepository;
    @Autowired
    private StateRepository stateRepository;
    public Task save(Project project,
                     Task task,
                     Difficulty difficulty,
                     State state,
                     List<Client> clients){
        task.setProject(project);
        task.setDifficulty(difficulty);
        task.setState(state);
        task.setClients(clients);
        return task;
    }
    public Task changeStatus(Long taskId, State state){
        Task task = taskRepository.findById(taskId).get();
        task.setState(state);
        return task;
    }
    public List<Task> getAllTasks(Long projectId, String stateName){
        Project project = projectRepository.findById(projectId).get();
        State state = stateRepository.findByTitle(stateName);
        return taskRepository.findAllByProjectAndState(project, state);
    };
}
