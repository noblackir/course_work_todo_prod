package ru.nikitina.taskmanager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import ru.nikitina.taskmanager.model.Client;
import ru.nikitina.taskmanager.repository.ClientRepository;
import ru.nikitina.taskmanager.repository.RolesRepository;



@Service
public class ClientService {
    @Autowired
    private ClientRepository clientRepository;
    @Autowired
    private RolesRepository rolesRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    public Client getById(Long id){
        if (clientRepository.findById(id).isPresent())
            return clientRepository.findById(id).get();
        else return null;
    }
//    public Client save(Client client) throws UserAlreadyExistException {
//        if (clientRepository.findByName(client.getName()).isPresent())
//            throw new UserAlreadyExistException("name is exist already");
//        else{
//            client.setPassword(passwordEncoder.encode(client.getPassword()));
//            WishList wishList = new WishList(null, client, new LinkedList<>());
//            client.setWishList(wishList);
//            Roles role = rolesRepository.findByTitle("ROLE_USER");
//            client.setRole(role);
//            return clientRepository.save(client);
//        }
//    }
//    public Client update(Client oldClient, Client newClient){
//        if (newClient.getEmail() != null)
//            oldClient.setEmail(newClient.getEmail());
//        if (newClient.getName() != null)
//            oldClient.setName(newClient.getName());
//        if(newClient.getPassword() != null)
//            oldClient.setPassword(newClient.getPassword());
//        return clientRepository.save(oldClient);
//    }
//    public Client setNewRole(Client client, Roles role) throws RoleNotFoundException {
//        if (rolesRepository.findByTitle(role.getTitle()) != null){
//            client.setRole(rolesRepository.findByTitle(role.getTitle()));
//            return clientRepository.save(client);
//        }
//        else throw new RoleNotFoundException("role doesn't exist");
//    }
//    public void deleteById(Long id){
//        clientRepository.deleteById(id);
//    }
//    public Client findByName(String name) throws UserNotFoundException {
//        if(clientRepository.findByName(name).isPresent())
//            return clientRepository.findByName(name).get();
//        else throw new UserNotFoundException("user not found :(");
//    }
}
