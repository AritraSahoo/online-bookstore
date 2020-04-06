package com.aritra.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aritra.onlinebookstore.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

}
