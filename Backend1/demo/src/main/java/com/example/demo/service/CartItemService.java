package com.example.demo.service;

import com.example.demo.model.CartItem;
import com.example.demo.model.Product;
import com.example.demo.model.User;
import com.example.demo.repository.CartItemRepository;
import com.example.demo.repository.ProductRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartItemService {
    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private UserRepository userRepository;

    
    public CartItem createCartItem(Long userId, CartItem cartItem) {
        User user = userRepository.findById(userId).orElse(null);
        if (user != null) {
            cartItem.setUser(user);
            return cartItemRepository.save(cartItem);
        }
        return null;
    }

    public CartItem getCartItemById(Long id) {
        return cartItemRepository.findById(id).orElse(null);
    }
    public List<CartItem> getAllCartItems() {
        return cartItemRepository.findAll();
    }

    // public CartItem getCartItemById(Long cartItemId) {
    //     Optional<CartItem> cartItem = cartItemRepository.findById(cartItemId);
    //     return cartItem.orElse(null);
    // }

    public CartItem saveCartItem(CartItem cartItem) {
        return cartItemRepository.save(cartItem);
    }

    public void deleteCartItem(Long cartItemId) {
        cartItemRepository.deleteById(cartItemId);
    }
}
