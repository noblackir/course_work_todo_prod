package ru.nikitina.taskmanager.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import ru.nikitina.taskmanager.model.Client;
import ru.nikitina.taskmanager.repository.ClientRepository;

import java.util.Optional;

@Service
public class ClientDetailsService implements UserDetailsService {
    @Autowired
    private ClientRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Client> student = repository.findByName(username);

        return student.map(ClientDetails::new)
                .orElseThrow(()->new UsernameNotFoundException("user not found"));
    }
}
