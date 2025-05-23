package com.blogpessoal.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.blogpessoal.model.Postagem;

public interface PostagemRepository extends JpaRepository<Postagem, Long> {
    List<Postagem> findAllByUsuario_Id(Long id);
    List<Postagem> findAllByTema_Id(Long id);
}
