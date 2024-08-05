// package com.example.demo.controller;

// import java.util.List;

// //import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.DeleteMapping;
// //import org.springframework.http.ResponseEntity;
// //import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.demo.model.Order;
// import com.example.demo.service.OrderService;

// @RestController
// @RequestMapping("/orders")
// public class OrderController {
//     @Autowired
//     private OrderService orderService;

//     @GetMapping("/{email}")
//     public ResponseEntity<List<Order>> getOrdersByUserEmail(@PathVariable String email) {
//         List<Order> orders = orderService.getOrdersByUserEmail(email);
//         return ResponseEntity.ok(orders);
//     }

//     @PostMapping
//     public ResponseEntity<Order> createOrder(@RequestBody Order order) {
//         Order savedOrder = orderService.saveOrder(order);
//         return ResponseEntity.ok(savedOrder);
//     }

//     @PutMapping("/{id}")
//     public ResponseEntity<Order> updateOrder(@PathVariable Long id, @RequestBody Order orderDetails) {
//         Order updatedOrder = orderService.updateOrder(id, orderDetails);
//         return ResponseEntity.ok(updatedOrder);
//     }

//     @DeleteMapping("/{id}")
//     public ResponseEntity<Void> deleteOrder(@PathVariable Long id) {
//         orderService.deleteOrder(id);
//         return ResponseEntity.noContent().build();
//     }

// }
