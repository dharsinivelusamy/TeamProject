package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem,Long>{
    List<CartItem> findByUserId(Long userId);
    // Optional<CartItem> findByProductId(Long productId);
    
   
}
