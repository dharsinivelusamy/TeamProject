// package com.example.demo.service;

// import java.util.List;

// //import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.example.demo.model.Order;
// import com.example.demo.repository.OrderRepository;

// @Service
// public class OrderService {
//     @Autowired
//     private OrderRepository orderRepository;

//     public List<Order> getOrdersByUserEmail(String email) {
//         return orderRepository.findByUserEmail(email);
//     }

//     public Order saveOrder(Order order) {
//         return orderRepository.save(order);
//     }

//     public Order updateOrder(Long id, Order orderDetails) {
//         Order order = orderRepository.findById(id).orElseThrow(() -> new RuntimeException("Order not found with id " + id));
//         order.setCustomerName(orderDetails.getCustomerName());
//         order.setCustomerAddress(orderDetails.getCustomerAddress());
//         order.setCustomerEmail(orderDetails.getCustomerEmail());
//         order.setCustomerCity(orderDetails.getCustomerCity());
//         order.setCustomerZipcode(orderDetails.getCustomerZipcode());
//         order.setCustomerPhoneNo(orderDetails.getCustomerPhoneNo());
//         order.setTotal(orderDetails.getTotal());
//         order.setProduct(orderDetails.getProduct());
//         order.setQuantity(orderDetails.getQuantity());
//         order.setOrderDate(orderDetails.getOrderDate());
//         return orderRepository.save(order);
//     }

//     public void deleteOrder(Long id) {
//         orderRepository.deleteById(id);
//     }
// }
