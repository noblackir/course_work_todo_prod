package ru.nikitina.taskmanager.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "task")
public class Task {
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
    @ManyToOne
    @JoinColumn(name = "difficulty_id")
    private Difficulty difficulty;
    @Column(name = "start_date")
    @NotNull(message = "Not empty!")
    private Date startDate;
    @Column(name = "finish_date")
    @NotNull(message = "Not empty!")
    private Date finishDate;
    @ManyToOne
    @JoinColumn(name = "state_id")
    private State state;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "project_id")
    private Project project;
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "task_client",
            joinColumns = @JoinColumn(name = "task_id"),
            inverseJoinColumns = @JoinColumn(name = "client_id"))
    private List<Client> clients;
}
