package ru.nikitina.taskmanager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import ru.nikitina.taskmanager.model.Client;
import ru.nikitina.taskmanager.model.Project;
import ru.nikitina.taskmanager.repository.ClientRepository;
import ru.nikitina.taskmanager.repository.ProjectRepository;

import javax.swing.*;
import java.util.List;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;
    @Autowired
    private ClientRepository clientRepository;
    public Project save(Project project){
        return projectRepository.save(project);
    }

    public Project addClientToProject(Long projectId, Long clientId){
        Project project = projectRepository.findById(projectId).get();
        Client client = clientRepository.findById(clientId).get();
        List<Client> clients = project.getClients();
        clients.add(client);
        project.setClients(clients);
        return projectRepository.save(project);
    }

    public List<Project> getAll(PageRequest pageRequest){
        Page<Project> page = projectRepository.findAll(pageRequest);
        return page.getContent();
    }

    public Integer count(){
        return projectRepository.findAll().size();
    }
    public Project getById(Long id){
        return projectRepository.findById(id).get();
    }
}
