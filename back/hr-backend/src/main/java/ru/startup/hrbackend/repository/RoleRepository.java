package ru.startup.hrbackend.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import ru.startup.hrbackend.model.Role;



public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByName(String name);
}