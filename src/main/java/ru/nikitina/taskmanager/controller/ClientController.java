package ru.nikitina.taskmanager.controller;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.nikitina.taskmanager.dto.ClientDTO;
import ru.nikitina.taskmanager.model.Client;
import ru.nikitina.taskmanager.repository.ClientRepository;
import ru.nikitina.taskmanager.service.ClientService;

@RestController
@RequestMapping("/client")
@CrossOrigin
public class ClientController {
    @Autowired
    private ClientService clientService;

    @PostMapping
    public ResponseEntity<Client> save(@RequestBody ClientDTO clientDTO){
        ModelMapper modelMapper = new ModelMapper();
        Client client = clientService.save(modelMapper.map(clientDTO, Client.class));
        return new ResponseEntity<>(client, HttpStatus.CREATED);
    }

}
