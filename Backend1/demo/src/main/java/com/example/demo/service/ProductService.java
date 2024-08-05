// package com.example.demo.service;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.example.demo.model.Product;
// import com.example.demo.repository.ProductRepository;

// @Service
// public class ProductService {
//     @Autowired
//     private ProductRepository productRepository;

//     public List<Product> getAllProducts() {
//         return productRepository.findAll();
//     }

//     public Product getProductById(Long id) {
//         return productRepository.findById(id).orElse(null);
//     }

//     public Product saveProduct(Product product) {
//         return productRepository.save(product);
//     }

//     public void deleteProduct(Long id) {
//         productRepository.deleteById(id);
//     }
// }
package com.example.demo.service;

import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long productId) {
        Optional<Product> product = productRepository.findById(productId);
        return product.orElse(null);
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public void deleteProduct(Long productId) {
        productRepository.deleteById(productId);
    }
}
