package ru.startup.hrbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.startup.hrbackend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
        User findByUsername(String name);
    }

