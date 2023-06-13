package ru.nikitina.taskmanager.controller;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.nikitina.taskmanager.dto.ProjectDTO;
import ru.nikitina.taskmanager.model.Project;
import ru.nikitina.taskmanager.service.ProjectService;
import ru.nikitina.taskmanager.service.TaskService;

import java.util.List;


@RestController
@RequestMapping("/project")
@CrossOrigin(origins = "http://localhost:3000")
public class ProjectController {
    @Autowired
    private ProjectService projectService;
    @Autowired
    private TaskService taskService;

    @PostMapping
    public ResponseEntity<Project> createProject(@RequestBody ProjectDTO projectDTO){
        ModelMapper modelMapper = new ModelMapper();
        Project project = modelMapper.map(projectDTO, Project.class);
        return new ResponseEntity<>(projectService.save(project), HttpStatus.CREATED);
    }
    @PostMapping("/clients")
    public ResponseEntity<Project> addClientToProject(@RequestParam("projectId") Long projectId,
                                                      @RequestParam("clientId") Long clientId){
        return new ResponseEntity<>(projectService.addClientToProject(projectId, clientId), HttpStatus.OK);
    }
    @GetMapping
    @CrossOrigin(origins = "http://localhost:3000", exposedHeaders = "x-total-count")
    public ResponseEntity<List<Project>> getAll(@RequestParam(required = false, defaultValue = "0") int page,
                                                @RequestParam(required = false, defaultValue = "10") int size){
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set("x-total-count", projectService.count().toString());
        return new ResponseEntity<>(projectService.getAll(PageRequest.of(page, size)), responseHeaders, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Project> getById(@PathVariable("id") Long id){
        return new ResponseEntity<>(projectService.getById(id), HttpStatus.OK);
    }
}
