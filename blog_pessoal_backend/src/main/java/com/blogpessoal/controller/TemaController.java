package com.blogpessoal.controller;

import com.blogpessoal.model.Tema;
import com.blogpessoal.repository.TemaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/temas")
@CrossOrigin("*")
public class TemaController {

    @Autowired
    private TemaRepository temaRepository;

    @GetMapping
    public ResponseEntity<List<Tema>> getAll() {
        return ResponseEntity.ok(temaRepository.findAll());
    }

    @PostMapping
    public ResponseEntity<Tema> post(@RequestBody Tema tema) {
        return ResponseEntity.status(201).body(temaRepository.save(tema));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tema> put(@PathVariable Long id, @RequestBody Tema tema) {
        if (!temaRepository.existsById(id)) return ResponseEntity.notFound().build();
        tema.setId(id);
        return ResponseEntity.ok(temaRepository.save(tema));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (!temaRepository.existsById(id)) return ResponseEntity.notFound().build();
        temaRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
