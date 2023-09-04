package ru.startup.hr.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class MainController {
    @GetMapping("/unsecured")
    public String unsecuredData() {
        return "Unsecured data";
    }


    @GetMapping("/info")
    //Principal - текущий пользователь
    public String userData(Principal principal) {
        return principal.getName();
    }
}