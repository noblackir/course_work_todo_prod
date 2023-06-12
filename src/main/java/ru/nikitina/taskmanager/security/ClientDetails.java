package ru.nikitina.taskmanager.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import ru.nikitina.taskmanager.model.Client;

import java.util.Collection;
import java.util.Collections;

public class ClientDetails implements UserDetails {
    @Autowired
    private final Client client;

    public ClientDetails(Client client) {
        this.client = client;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singletonList(new SimpleGrantedAuthority(client.getRoles()));
    }

    @Override
    public String getPassword() {
        return this.client.getPassword();
    }

    @Override
    public String getUsername() {
        return this.client.getName();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public Long getId() {return this.client.getId();}

    public String getEmail() {return this.client.getEmail();}

    public String getRoles() {return this.client.getRoles();}


    @Override
    public String toString() {
        return "ClientDetails{" +
                "client=" + client +
                '}';
    }
}
