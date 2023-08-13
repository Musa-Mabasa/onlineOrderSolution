package com.OOs.onlineOrdering.system.Controller;

import com.OOs.onlineOrdering.system.Exceptions.*;
import com.OOs.onlineOrdering.system.UseCase.UserUseCase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserUseCase userUseCase;
    //create User
    @PostMapping("/create")
    public ResponseEntity<?> createuser(@RequestBody Map<String, Object> userMap){
            String id = userUseCase.CreateUser((String) userMap.get("username"), (String) userMap.get("password"), (String) userMap.get("email"), (String) userMap.get("surname"), (boolean) userMap.get("isVendor"));
            Map<String, String> response = new HashMap<>();
            response.put("message", "User created successfully");
            response.put("id", id);
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
//    Login
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, Object> userMap){
            String id = userUseCase.loginUser((String) userMap.get("username"), (String) userMap.get("password"));
            Map<String, String> response = new HashMap<>();
            response.put("message", "Login successfully");
            response.put("id", id);
            return ResponseEntity.status(HttpStatus.OK).body(response);
    }


    //Update








//  Exceptions
    @ExceptionHandler(IncorrectPasswordException.class)
    public ResponseEntity<String> handleIncorrectPasswordException(IncorrectPasswordException ex) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(ex.getMessage());
    }

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<String> handleUserNotFoundException(UserNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(ex.getMessage());
    }

    @ExceptionHandler(DuplicateKeyException.class)
    public ResponseEntity<String> handleDuplicateUsernameException(DuplicateKeyException ex) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(ex.getMessage());
    }


}
//have try n catch