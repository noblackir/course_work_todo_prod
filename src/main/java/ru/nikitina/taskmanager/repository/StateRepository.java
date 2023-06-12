package ru.nikitina.taskmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.nikitina.taskmanager.model.State;

@Repository
public interface StateRepository extends JpaRepository<State, Long> {
    State findByTitle(String title);
}
