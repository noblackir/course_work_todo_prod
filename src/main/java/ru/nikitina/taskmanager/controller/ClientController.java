package ru.nikitina.taskmanager.controller;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.nikitina.taskmanager.dto.ClientDTO;
import ru.nikitina.taskmanager.model.Client;
import ru.nikitina.taskmanager.repository.ClientRepository;

@RestController
@RequestMapping("/client")
public class ClientController {
    @Autowired
    private ClientRepository clientRepository;

    @PostMapping
    public ResponseEntity<Client> save(@RequestBody ClientDTO clientDTO){
        ModelMapper modelMapper = new ModelMapper();
        Client client = clientRepository.save(modelMapper.map(clientDTO, Client.class));
        return new ResponseEntity<>(client, HttpStatus.CREATED);
    }

}
