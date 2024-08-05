// package com.example.demo.service;

// import java.util.List;
// import java.util.Optional;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.example.demo.model.User;
// import com.example.demo.repository.UserRepository;
// //import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// //import org.springframework.security.crypto.password.PasswordEncoder;
// @Service
// public class UserService {
//     // @Autowired
//     // private UserRepository userRepository;

//     // public User saveUser(User user) {
//     //     return userRepository.save(user);
//     // }

//     // public Optional<User> getUserByEmail(String email) {
//     //     return userRepository.findByEmail(email);
//     // }

//     // public User updateUser(User user) {
//     //     return userRepository.save(user);
//     // }

//     // public void deleteUser(Long id) {
//     //     userRepository.deleteById(id);
//     // }
//     @Autowired
//     private UserRepository userRepository;

//     public User getUserByIdWithCartItems(Long userId) {
//         return userRepository.findByIdWithCartItems(userId);
//     }
//     // Save a new user or update an existing one
//     public User saveUser(User user) {
//         return userRepository.save(user);
//     }

//     // Retrieve a user by email
//     public Optional<User> getUserByEmail(String email) {
//         return userRepository.findByEmail(email);
//     }

//     // Update an existing user
//     public User updateUser(User user) {
//         if (userRepository.existsById(user.getId())) {
//             return userRepository.save(user);
//         } else {
//             throw new IllegalArgumentException("User not found");
//         }
//     }

//     // Delete a user by ID
//     public void deleteUser(Long id) {
//         userRepository.deleteById(id);
//     }
//     public List<User> getAllUsers() {
//         return userRepository.findAll();
//     }
// }
package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public User getUserByIdWithCartItems(Long userId) {
        Optional<User> user = userRepository.findById(userId);
        return user.orElse(null);
    }
    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }
}
