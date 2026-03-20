package com.takeorder.controller;

import com.takeorder.dto.UserDTO;
import com.takeorder.entity.User;
import com.takeorder.service.UserService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

  private final UserService userService;

  @PostMapping
  public ResponseEntity<UserDTO> createUser(@RequestBody User user) {
    User createdUser = userService.createUser(user);
    return ResponseEntity.status(HttpStatus.CREATED).body(convertToDTO(createdUser));
  }

  @GetMapping("/{id}")
  public ResponseEntity<UserDTO> getUserById(@PathVariable Long id) {
    return userService
        .getUserById(id)
        .map(user -> ResponseEntity.ok(convertToDTO(user)))
        .orElseThrow(() -> new RuntimeException("User not found with id: " + id));
  }

  @GetMapping
  public ResponseEntity<List<UserDTO>> getAllUsers() {
    List<UserDTO> users =
        userService.getAllUsers().stream().map(this::convertToDTO).toList();
    return ResponseEntity.ok(users);
  }

  @PutMapping("/{id}")
  public ResponseEntity<UserDTO> updateUser(@PathVariable Long id, @RequestBody User user) {
    User updatedUser = userService.updateUser(id, user);
    return ResponseEntity.ok(convertToDTO(updatedUser));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
    userService.deleteUser(id);
    return ResponseEntity.noContent().build();
  }

  private UserDTO convertToDTO(User user) {
    return UserDTO.builder()
        .id(user.getId())
        .email(user.getEmail())
        .name(user.getName())
        .role(user.getRole().toString())
        .active(user.getActive())
        .build();
  }
}
