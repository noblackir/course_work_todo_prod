package ru.nikitina.taskmanager.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.nikitina.taskmanager.model.Difficulty;
import ru.nikitina.taskmanager.model.State;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TaskCreationDTO {
    private ProjectDTO projectDTO;
    private TaskDTO taskDTO;
    private Difficulty difficulty;
    private State state;
    private List<ClientDTO> clientDTOS;
}
