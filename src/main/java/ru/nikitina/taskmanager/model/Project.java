package ru.nikitina.taskmanager.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "project")
public class Project {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "title")
    @NotNull(message = "Not empty!")
    private String title;
    @Column(name = "description", columnDefinition="TEXT")
    @NotNull(message = "Not empty!")
    private String description;
    @OneToMany(mappedBy = "project")
    private List<Task> tasks;
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "project_client",
            joinColumns = @JoinColumn(name = "project_id"),
            inverseJoinColumns = @JoinColumn(name = "client_id"))
    private List<Client> clients;
}
