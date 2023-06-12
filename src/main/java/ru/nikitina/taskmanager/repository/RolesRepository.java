package ru.nikitina.taskmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.nikitina.taskmanager.model.Roles;

@Repository
public interface RolesRepository extends JpaRepository<Roles, Long> {
    Roles findByTitle(String title);
}
