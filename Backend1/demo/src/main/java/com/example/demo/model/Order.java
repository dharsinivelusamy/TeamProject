// package com.example.demo.model;

// import java.util.Date;
// //import java.util.List;

// //import jakarta.persistence.CascadeType;
// import jakarta.persistence.Entity;
// import jakarta.persistence.FetchType;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// //import jakarta.persistence.GeneratedValue;
// //import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.JoinColumn;
// import jakarta.persistence.ManyToOne;
// //import jakarta.persistence.OneToMany;

// @Entity
// public class Order {
//     @Id
//     // @GeneratedValue(strategy = GenerationType.IDENTITY)
//     // private Long id;

//     // private String customerName;
//     // private String customerAddress;
//     // private String customerEmail;
//     // private String customerCity;
//     // private String customerZipcode;
//     // private String customerPhoneNo;
//     // private Double total;

//     // @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
//     // private List<OrderItem> orderItems;

//     // public Long getId() {
//     //     return id;
//     // }

//     // public void setId(Long id) {
//     //     this.id = id;
//     // }

//     // public String getCustomerName() {
//     //     return customerName;
//     // }

//     // public void setCustomerName(String customerName) {
//     //     this.customerName = customerName;
//     // }

//     // public String getCustomerAddress() {
//     //     return customerAddress;
//     // }

//     // public void setCustomerAddress(String customerAddress) {
//     //     this.customerAddress = customerAddress;
//     // }

//     // public String getCustomerEmail() {
//     //     return customerEmail;
//     // }

//     // public void setCustomerEmail(String customerEmail) {
//     //     this.customerEmail = customerEmail;
//     // }

//     // public String getCustomerCity() {
//     //     return customerCity;
//     // }

//     // public void setCustomerCity(String customerCity) {
//     //     this.customerCity = customerCity;
//     // }

//     // public String getCustomerZipcode() {
//     //     return customerZipcode;
//     // }

//     // public void setCustomerZipcode(String customerZipcode) {
//     //     this.customerZipcode = customerZipcode;
//     // }

//     // public String getCustomerPhoneNo() {
//     //     return customerPhoneNo;
//     // }

//     // public void setCustomerPhoneNo(String customerPhoneNo) {
//     //     this.customerPhoneNo = customerPhoneNo;
//     // }

//     // public Double getTotal() {
//     //     return total;
//     // }

//     // public void setTotal(Double total) {
//     //     this.total = total;
//     // }

//     // public List<OrderItem> getOrderItems() {
//     //     return orderItems;
//     // }

//     // public void setOrderItems(List<OrderItem> orderItems) {
//     //     this.orderItems = orderItems;
//     // }
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     private String customerName;
//     private String customerAddress;
//     private String customerEmail;
//     private String customerCity;
//     private String customerZipcode;
//     private String customerPhoneNo;
//     private Double total;
//     private String product;
//     private int quantity;
//     private Date orderDate;

//     @ManyToOne(fetch = FetchType.LAZY)
//     @JoinColumn(name = "user_id", nullable = false)
//     private User user;

//     // Getters and Setters
//     public Long getId() {
//         return id;
//     }

//     public void setId(Long id) {
//         this.id = id;
//     }

//     public String getCustomerName() {
//         return customerName;
//     }

//     public void setCustomerName(String customerName) {
//         this.customerName = customerName;
//     }

//     public String getCustomerAddress() {
//         return customerAddress;
//     }

//     public void setCustomerAddress(String customerAddress) {
//         this.customerAddress = customerAddress;
//     }

//     public String getCustomerEmail() {
//         return customerEmail;
//     }

//     public void setCustomerEmail(String customerEmail) {
//         this.customerEmail = customerEmail;
//     }

//     public String getCustomerCity() {
//         return customerCity;
//     }

//     public void setCustomerCity(String customerCity) {
//         this.customerCity = customerCity;
//     }

//     public String getCustomerZipcode() {
//         return customerZipcode;
//     }

//     public void setCustomerZipcode(String customerZipcode) {
//         this.customerZipcode = customerZipcode;
//     }

//     public String getCustomerPhoneNo() {
//         return customerPhoneNo;
//     }

//     public void setCustomerPhoneNo(String customerPhoneNo) {
//         this.customerPhoneNo = customerPhoneNo;
//     }

//     public Double getTotal() {
//         return total;
//     }

//     public void setTotal(Double total) {
//         this.total = total;
//     }

//     public String getProduct() {
//         return product;
//     }

//     public void setProduct(String product) {
//         this.product = product;
//     }

//     public int getQuantity() {
//         return quantity;
//     }

//     public void setQuantity(int quantity) {
//         this.quantity = quantity;
//     }

//     public Date getOrderDate() {
//         return orderDate;
//     }

//     public void setOrderDate(Date orderDate) {
//         this.orderDate = orderDate;
//     }

//     public User getUser() {
//         return user;
//     }

//     public void setUser(User user) {
//         this.user = user;
//     }
    
// }
