// package com.example.demo.controller;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.demo.model.Product;
// import com.example.demo.service.ProductService;

// @RestController
// @RequestMapping("/products")
// public class ProductController {
//     @Autowired
//     private ProductService productService;

//     @GetMapping
//     public List<Product> getAllProducts() {
//         return productService.getAllProducts();
//     }

//     @GetMapping("/{id}")
//     public Product getProductById(@PathVariable Long id) {
//         return productService.getProductById(id);
//     }

//     @PostMapping
//     public Product createProduct(@RequestBody Product product) {
//         return productService.saveProduct(product);
//     }

//     @PutMapping("/{id}")
//     public Product updateProduct(@PathVariable Long id, @RequestBody Product product) {
//         product.setId(id);
//         return productService.saveProduct(product);
//     }

//     @DeleteMapping("/{id}")
//     public void deleteProduct(@PathVariable Long id) {
//         productService.deleteProduct(id);
//     }
// }
package com.example.demo.controller;

import com.example.demo.model.Product;
import com.example.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/{productId}")
    public Product getProductById(@PathVariable Long productId) {
        return productService.getProductById(productId);
    }

    @PostMapping
    public Product saveProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }

    @DeleteMapping("/{productId}")
    public void deleteProduct(@PathVariable Long productId) {
        productService.deleteProduct(productId);
    }
}
