package ru.nikitina.taskmanager.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Table(name = "state")
public class State {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @NotNull(message = "title is empty")
    @Column(name = "title")
    private String title;
    @JsonIgnore
    @OneToMany(mappedBy = "state")
    private List<Task> tasks;
    @Override
    public String toString() {
        return title;
    }
}
