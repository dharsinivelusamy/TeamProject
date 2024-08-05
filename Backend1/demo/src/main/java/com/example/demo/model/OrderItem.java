// package com.example.demo.model;

// //import java.util.List;

// //import jakarta.persistence.CascadeType;
// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// //import jakarta.persistence.JoinColumn;
// //import jakarta.persistence.ManyToOne;
// //import jakarta.persistence.OneToMany;
// import jakarta.persistence.JoinColumn;
// import jakarta.persistence.ManyToOne;

// @Entity
// public class OrderItem {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     private String productName;
//     private int quantity;
//     private double price;

//     @ManyToOne
//     @JoinColumn(name = "order_id")
//     private Order order;

//     public Long getId() {
//         return id;
//     }

//     public void setId(Long id) {
//         this.id = id;
//     }

//     public String getProductName() {
//         return productName;
//     }

//     public void setProductName(String productName) {
//         this.productName = productName;
//     }

//     public int getQuantity() {
//         return quantity;
//     }

//     public void setQuantity(int quantity) {
//         this.quantity = quantity;
//     }

//     public double getPrice() {
//         return price;
//     }

//     public void setPrice(double price) {
//         this.price = price;
//     }

//     public Order getOrder() {
//         return order;
//     }

//     public void setOrder(Order order) {
//         this.order = order;
//     }
    
// }
