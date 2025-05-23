package com.blogpessoal.controller;

import com.blogpessoal.dto.UsuarioLogin;
import com.blogpessoal.model.Usuario;
import com.blogpessoal.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin("*")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody UsuarioLogin usuarioLogin) {
        return usuarioService.logarUsuario(usuarioLogin)
                .map(token -> ResponseEntity.ok().body(token))
                .orElse(ResponseEntity.status(401).build());
    }

    @PostMapping
    public ResponseEntity<Object> cadastrar(@RequestBody Usuario usuario) {
        return usuarioService.cadastrarUsuario(usuario)
                .map(novoUsuario -> ResponseEntity.status(201).body(novoUsuario))
                .orElse(ResponseEntity.badRequest().body("Usuário já existente"));
    }
}
