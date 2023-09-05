package ru.startup.hr.controllers.v1;


import lombok.RequiredArgsConstructor;
        import org.springframework.web.bind.annotation.GetMapping;
        import org.springframework.web.bind.annotation.RequestMapping;
        import org.springframework.web.bind.annotation.RestController;

        import java.security.Principal;

@RestController
@RequiredArgsConstructor
@RequestMapping("/admin")
public class AdminController {
    @GetMapping("/test")
    public String unsecuredData() {
        return "admin data";
    }


    @GetMapping("/info")
    public String userData(Principal principal) {
        return principal.getName();
    }
}