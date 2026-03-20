package com.takeorder.service;

import com.takeorder.entity.User;
import com.takeorder.repository.UserRepository;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class UserService {

  private final UserRepository userRepository;

  public User createUser(User user) {
    return userRepository.save(user);
  }

  public Optional<User> getUserById(Long id) {
    return userRepository.findById(id);
  }

  public Optional<User> getUserByEmail(String email) {
    return userRepository.findByEmail(email);
  }

  public List<User> getAllUsers() {
    return userRepository.findAll();
  }

  public User updateUser(Long id, User user) {
    return userRepository.findById(id)
        .map(existingUser -> {
          existingUser.setName(user.getName());
          existingUser.setEmail(user.getEmail());
          existingUser.setActive(user.getActive());
          return userRepository.save(existingUser);
        })
        .orElseThrow(() -> new RuntimeException("User not found with id: " + id));
  }

  public void deleteUser(Long id) {
    userRepository.deleteById(id);
  }

  public Boolean existsByEmail(String email) {
    return userRepository.existsByEmail(email);
  }
}
