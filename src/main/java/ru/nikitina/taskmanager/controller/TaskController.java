package ru.nikitina.taskmanager.controller;

import com.fasterxml.jackson.databind.annotation.JsonAppend;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;
import ru.nikitina.taskmanager.dto.TaskCreationDTO;
import ru.nikitina.taskmanager.model.Client;
import ru.nikitina.taskmanager.model.Project;
import ru.nikitina.taskmanager.model.State;
import ru.nikitina.taskmanager.model.Task;
import ru.nikitina.taskmanager.service.TaskService;

import java.util.List;

@RestController
@RequestMapping("/task")
public class TaskController {
    @Autowired
    private TaskService taskService;

    //СОЗДАНИЕ ТАСКА
    @PostMapping
    public ResponseEntity<Task> save(@RequestBody TaskCreationDTO taskCreationDTO){
        ModelMapper modelMapper = new ModelMapper();
        List<Client> clients = taskCreationDTO.getClientDTOS()
                                              .stream()
                                              .map(clientDTO -> modelMapper.map(clientDTO, Client.class)).toList();
        Task task = modelMapper.map(taskCreationDTO.getTaskDTO(), Task.class);
        Project project = modelMapper.map(taskCreationDTO.getProjectDTO(), Project.class);
        Task newTask = taskService.save(project, task, taskCreationDTO.getDifficulty(), taskCreationDTO.getState(), clients);
        return new ResponseEntity<>(newTask, HttpStatus.CREATED);
    }
    //ВЫВОД ТАСКОВ ПО ИХ СОСТОЯНИЮ
    @GetMapping("/{projectId}/{stateName}")
    public ResponseEntity<List<Task>> getTasksFromProject(@PathVariable("projectId") Long projectId,
                                                          @PathVariable("stateName") String stateName){
        return new ResponseEntity<>(taskService.getAllTasks(projectId, stateName), HttpStatus.OK);
    }
    //ИЗМЕНИТЬ СТАТУС ТАСКА НА ВЫБРАННЫЙ
    @PostMapping("/{taskId}")
    public ResponseEntity<Task> changeStatus(@PathVariable("taskId") Long taskId,
                                             @RequestBody State state){
        Task task = taskService.changeStatus(taskId, state);
        return new ResponseEntity<>(task, HttpStatus.OK);
    }
}
