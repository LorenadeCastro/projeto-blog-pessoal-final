package com.blogpessoal.controller;

import com.blogpessoal.model.Postagem;
import com.blogpessoal.repository.PostagemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/postagens")
@CrossOrigin("*")
public class PostagemController {

    @Autowired
    private PostagemRepository postagemRepository;

    @GetMapping
    public ResponseEntity<List<Postagem>> getAll() {
        return ResponseEntity.ok(postagemRepository.findAll());
    }

    @GetMapping("/filtro")
    public ResponseEntity<List<Postagem>> filtrar(@RequestParam(required = false) Long autor,
                                                   @RequestParam(required = false) Long tema) {
        if (autor != null) return ResponseEntity.ok(postagemRepository.findAllByUsuario_Id(autor));
        if (tema != null) return ResponseEntity.ok(postagemRepository.findAllByTema_Id(tema));
        return ResponseEntity.ok(postagemRepository.findAll());
    }

    @PostMapping
    public ResponseEntity<Postagem> post(@RequestBody Postagem postagem) {
        return ResponseEntity.status(201).body(postagemRepository.save(postagem));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Postagem> put(@PathVariable Long id, @RequestBody Postagem postagem) {
        if (!postagemRepository.existsById(id)) return ResponseEntity.notFound().build();
        postagem.setId(id);
        return ResponseEntity.ok(postagemRepository.save(postagem));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (!postagemRepository.existsById(id)) return ResponseEntity.notFound().build();
        postagemRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
