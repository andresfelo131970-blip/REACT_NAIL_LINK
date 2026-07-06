package com.naillink.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.naillink.backend.dto.LoginRequest;
import com.naillink.backend.dto.RegistroRequest;
import com.naillink.backend.service.AuthService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/registro")
    public String registrar(@RequestBody RegistroRequest request) {
        return authService.registrar(request);
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {
        return authService.login(request);
    }

}