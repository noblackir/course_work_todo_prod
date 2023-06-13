package ru.nikitina.taskmanager.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "client")
public class Client {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name", unique = true)
    @NotNull(message = "Not empty!")
    private String name;
    @NotNull(message = "Not empty!")
    @Column(name = "password")
    private String password;

    @NotNull(message = "Not empty!")
    @Column(name = "first_name")
    private String firstName;

    @NotNull(message = "Not empty!")
    @Column(name = "second_name")
    private String secondName;
    @Email
    @NotNull(message = "Not empty!")
    @Column(name = "email")
    private String email;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "role_id")
    private Roles role;
    @JsonIgnore
    @ManyToMany(mappedBy = "clients")
    private List<Task> tasks;
    @JsonIgnore
    @ManyToMany(mappedBy = "clients")
    private List<Project> projects;

    public Roles getRole(){
        return role;
    }
    public String getRoles() {
        return role.toString();
    }
    @Override
    public String toString() {
        return "Client{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", roles=" + role +
                '}';
    }
}
