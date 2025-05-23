package com.blogpessoal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.blogpessoal.model.Tema;

public interface TemaRepository extends JpaRepository<Tema, Long> {
}
