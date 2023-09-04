package ru.startup.hr.service.security;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.startup.hr.entities.users.Role;
import ru.startup.hr.repositories.RoleRepository;


@Service
@RequiredArgsConstructor
public class RoleService {
    private final RoleRepository roleRepository;

    public Role getUserRole() {
        return roleRepository.findByName("ROLE_USER").get();
    }
}
