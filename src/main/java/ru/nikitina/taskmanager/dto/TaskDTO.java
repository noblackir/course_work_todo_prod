package ru.nikitina.taskmanager.dto;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.nikitina.taskmanager.model.Client;
import ru.nikitina.taskmanager.model.Difficulty;
import ru.nikitina.taskmanager.model.State;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TaskDTO {
    private Long id;
    private String title;
    private String description;
    private Date startDate;
    private Date finishDate;
}
