/*package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Login;

import com.example.demo.repository.LoginRepository;


@Service
public class LoginService 
{
	   @Autowired
	   private LoginRepository  loginRepository;
	   
	   public List<Login> getUser()
	   {
		   return loginRepository.findAll();
	   }
	  
	   public void updateUser(Login login) 
	   {
		   loginRepository.save(login);
	   }
	   
	   public void deleteUser(int userId)
	   {
		   loginRepository.deleteById(userId);
	   }

}*/
