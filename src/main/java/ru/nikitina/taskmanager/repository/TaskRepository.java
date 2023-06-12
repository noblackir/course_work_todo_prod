package ru.nikitina.taskmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.nikitina.taskmanager.model.Project;
import ru.nikitina.taskmanager.model.State;
import ru.nikitina.taskmanager.model.Task;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task,Long> {
    List<Task> findAllByProjectAndState(Project project, State state);
}
