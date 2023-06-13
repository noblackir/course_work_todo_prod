package ru.nikitina.taskmanager.controller;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;
import ru.nikitina.taskmanager.dto.ClientDTO;
import ru.nikitina.taskmanager.model.Client;
import ru.nikitina.taskmanager.model.Roles;
import ru.nikitina.taskmanager.repository.ClientRepository;
import ru.nikitina.taskmanager.service.ClientService;

@RestController
@RequestMapping("/client")
@CrossOrigin(origins = "http://localhost:3000")
public class ClientController {
    @Autowired
    private ClientService clientService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @PostMapping
    public ResponseEntity<Client> save(@RequestBody ClientDTO clientDTO){
        ModelMapper modelMapper = new ModelMapper();
        Client client = clientService.save(modelMapper.map(clientDTO, Client.class));
        return new ResponseEntity<>(client, HttpStatus.CREATED);
    }
    @PostMapping("/login")
    public ResponseEntity<ClientDTO> performLogin(@RequestBody ClientDTO clientDTO){
        ModelMapper modelMapper = new ModelMapper();
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(clientDTO.getName(), clientDTO.getPassword()));
        Client client = clientService.findByName(clientDTO.getName());
        ClientDTO returnClientDTO = modelMapper.map(client, ClientDTO.class);
        return new ResponseEntity<>(returnClientDTO, HttpStatus.ACCEPTED);
    }
}
