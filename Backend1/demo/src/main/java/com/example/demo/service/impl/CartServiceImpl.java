// package com.example.demo.service.impl;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.example.demo.model.Cart;
// import com.example.demo.model.CartItem;
// import com.example.demo.repository.CartItemRepository;
// import com.example.demo.repository.CartRepository;
// import com.example.demo.service.CartService;

// @Service
// public class CartServiceImpl implements CartService {

//     @Autowired
//     private CartRepository cartRepository;

//     @Autowired
//     private CartItemRepository cartItemRepository;

//     @Override
//     public Cart createCart() {
//         Cart cart = new Cart();
//         cart.setProductTotal(0.0);
//         return cartRepository.save(cart);
//     }

//     @Override
//     public Cart getCart(Long cartId) {
//         return cartRepository.findById(cartId).orElseThrow(() -> new RuntimeException("Cart not found"));
//     }

//     @Override
//     public Cart addItemToCart(Long cartId, CartItem item) {
//         Cart cart = getCart(cartId);
//         item.setCart(cart);
//         cart.getItems().add(item);
//         cartItemRepository.save(item);
//         return cartRepository.save(cart);
//     }

//     @Override
//     public Cart incrementItem(Long cartId, Long itemId) {
//         Cart cart = getCart(cartId);
//         cart.getItems().stream()
//             .filter(item -> item.getId().equals(itemId))
//             .findFirst()
//             .ifPresent(item -> {
//                 item.setQuantity(item.getQuantity() + 1);
//                 item.setProductSubTotal(item.getQuantity() * item.getProductPrice());
//                 cartItemRepository.save(item);
//             });
//         return cartRepository.save(cart);
//     }

//     @Override
//     public Cart decrementItem(Long cartId, Long itemId) {
//         Cart cart = getCart(cartId);
//         cart.getItems().stream()
//             .filter(item -> item.getId().equals(itemId))
//             .findFirst()
//             .ifPresent(item -> {
//                 if (item.getQuantity() > 1) {
//                     item.setQuantity(item.getQuantity() - 1);
//                     item.setProductSubTotal(item.getQuantity() * item.getProductPrice());
//                     cartItemRepository.save(item);
//                 } else {
//                     cart.getItems().remove(item);
//                     cartItemRepository.delete(item);
//                 }
//             });
//         return cartRepository.save(cart);
//     }

//     @Override
//     public Cart removeItem(Long cartId, Long itemId) {
//         Cart cart = getCart(cartId);
//         cart.getItems().stream()
//             .filter(item -> item.getId().equals(itemId))
//             .findFirst()
//             .ifPresent(item -> {
//                 cart.getItems().remove(item);
//                 cartItemRepository.delete(item);
//             });
//         return cartRepository.save(cart);
//     }

//     @Override
//     public void checkout(Long cartId) {
//         Cart cart = getCart(cartId);
//         // Implement checkout logic (e.g., create an order, empty the cart, etc.)
//         cart.getItems().clear();
//         cart.setProductTotal(0);
//         cartRepository.save(cart);
//     }
// }
