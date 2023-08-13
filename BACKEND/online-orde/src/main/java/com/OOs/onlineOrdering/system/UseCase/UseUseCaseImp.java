package com.OOs.onlineOrdering.system.UseCase;
import com.OOs.onlineOrdering.system.Exceptions.DuplicateKeyException;
import com.OOs.onlineOrdering.system.Exceptions.IncorrectPasswordException;
import com.OOs.onlineOrdering.system.Exceptions.UserNotFoundException;
import com.OOs.onlineOrdering.system.Model.User;
import com.OOs.onlineOrdering.system.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.List;

@Service
public class UseUseCaseImp implements UserUseCase{

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10, new SecureRandom());
    @Autowired
    private UserRepository userRepository;

    private String hashPassword(String password) {
        return passwordEncoder.encode(password);
    }

    private boolean verifyPassword(String rawPassword, String hashedPassword) {
        return passwordEncoder.matches(rawPassword, hashedPassword);
    }
    public String CreateUser(String username, String password,String email, String surname, boolean isVendor) {
        try {
            User user = userRepository.save(new User(null,username, hashPassword(password), email, surname, isVendor));
            return user.getId();
        } catch (Exception ex) {
            throw new DuplicateKeyException("Username or email already exists.");
        }
    }
    public String loginUser(String username, String password) {
        User user = userRepository.findByUsername(username);

        if (user == null) {
            throw new UserNotFoundException("User with username '" + username + "' not found");
        } else if (!verifyPassword(password, user.getPassword())) {
            throw new IncorrectPasswordException("The provided password is incorrect.");
        }
        return  user.getId();
    }
}
