package com.OOs.onlineOrdering.system.UseCase;

public interface UserUseCase {

    public String CreateUser(String username, String password,String email, String surname, boolean isVendor);
    public String loginUser(String username, String password);
}
