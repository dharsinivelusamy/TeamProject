// package com.example.demo.controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.demo.model.Cart;
// import com.example.demo.model.CartItem;
// import com.example.demo.service.CartService;

// @RestController
// @RequestMapping("/api/cart")
// public class CartController {

//     @Autowired
//     private CartService cartService;

//     @PostMapping
//     public Cart createCart() {
//         return cartService.createCart();
//     }

//     @GetMapping("/{cartId}")
//     public Cart getCart(@PathVariable Long cartId) {
//         return cartService.getCart(cartId);
//     }

//     @PostMapping("/{cartId}/add")
//     public Cart addItemToCart(@PathVariable Long cartId, @RequestBody CartItem item) {
//         return cartService.addItemToCart(cartId, item);
//     }

//     @PutMapping("/{cartId}/increment/{itemId}")
//     public Cart incrementItem(@PathVariable Long cartId, @PathVariable Long itemId) {
//         return cartService.incrementItem(cartId, itemId);
//     }

//     @PutMapping("/{cartId}/decrement/{itemId}")
//     public Cart decrementItem(@PathVariable Long cartId, @PathVariable Long itemId) {
//         return cartService.decrementItem(cartId, itemId);
//     }

//     @DeleteMapping("/{cartId}/remove/{itemId}")
//     public Cart removeItem(@PathVariable Long cartId, @PathVariable Long itemId) {
//         return cartService.removeItem(cartId, itemId);
//     }

//     @PostMapping("/{cartId}/checkout")
//     public void checkout(@PathVariable Long cartId) {
//         cartService.checkout(cartId);
//     }
// }
package com.example.demo.controller;

import com.example.demo.model.CartItem;
import com.example.demo.service.CartItemService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cartItems")
public class CartItemController {

    @Autowired
    private CartItemService cartItemService;

    
    
    @PostMapping("/{userId}")
    public ResponseEntity<CartItem> createCartItem(@PathVariable Long userId, @RequestBody CartItem cartItem) {
        CartItem createdCartItem = cartItemService.createCartItem(userId, cartItem);
        if (createdCartItem != null) {
            return ResponseEntity.ok(createdCartItem);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<CartItem> getCartItemById(@PathVariable Long id) {
        CartItem cartItem = cartItemService.getCartItemById(id);
        return ResponseEntity.ok(cartItem);
    }
}
