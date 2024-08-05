// package com.example.demo.model;

// import java.util.List;

// import com.fasterxml.jackson.annotation.JsonManagedReference;

// import jakarta.persistence.CascadeType;
// import jakarta.persistence.Entity;
// import jakarta.persistence.FetchType;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.OneToMany;

// @Entity
// public class Cart {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//     @JsonManagedReference
//     private List<CartItem> items;

//     private double productTotal;

//     public Long getId() {
//         return id;
//     }

//     public void setId(Long id) {
//         this.id = id;
//     }

//     public List<CartItem> getItems() {
//         return items;
//     }

//     public void setItems(List<CartItem> items) {
//         this.items = items;
//     }

//     public double getProductTotal() {
//         return productTotal;
//     }

//     public void setProductTotal(double productTotal) {
//         this.productTotal = productTotal;
//     }
    
// }
