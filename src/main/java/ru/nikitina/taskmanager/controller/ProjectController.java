package ru.nikitina.taskmanager.controller;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.nikitina.taskmanager.dto.ProjectDTO;
import ru.nikitina.taskmanager.model.Project;
import ru.nikitina.taskmanager.service.ProjectService;
import ru.nikitina.taskmanager.service.TaskService;


@RestController
@RequestMapping("/project")
public class ProjectController {
    @Autowired
    private ProjectService projectService;
    @Autowired
    private TaskService taskService;

//    @GetMapping("/{id}")
//    public ResponseEntity<List<Project>> getTaskFromProject(@PathVariable("id") Long id){
//        taskService
//        return new ResponseEntity<>( , HttpStatus.OK);
//    }
    @PostMapping
    public ResponseEntity<Project> createProject(@RequestBody ProjectDTO projectDTO){
        ModelMapper modelMapper = new ModelMapper();
        Project project = modelMapper.map(projectDTO, Project.class);
        return new ResponseEntity<>(projectService.save(project), HttpStatus.CREATED);
    }
    @PostMapping
    public ResponseEntity<Project> addClientToProject(@RequestParam("projectId") Long projectId,
                                                      @RequestParam("clientId") Long clientId){
        return new ResponseEntity<>(projectService.addClientToProject(projectId, clientId), HttpStatus.OK);
    }
}
