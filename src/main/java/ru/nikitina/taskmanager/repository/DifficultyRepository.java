package ru.nikitina.taskmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.nikitina.taskmanager.model.Difficulty;

@Repository
public interface DifficultyRepository extends JpaRepository<Difficulty, Long> {
}
