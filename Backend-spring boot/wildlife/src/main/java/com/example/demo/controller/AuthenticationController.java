package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.dto.request.AuthenticationRequest;
import com.example.demo.dto.request.RegisterRequest;
import com.example.demo.dto.response.AuthenticationResponse;

import com.example.demo.entity.Login;
import com.example.demo.entity.UserRegister;
import com.example.demo.service.AuthenticationService;


import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin("*")
@RequestMapping("/auth")	
@RequiredArgsConstructor
public class AuthenticationController {
	@Autowired
	private final AuthenticationService service;
	
	
	@PostMapping("/register")
	public ResponseEntity<String> register(@RequestBody RegisterRequest request) 
	{
		service.register(request);
		return ResponseEntity.ok("Registered Successfully");
    }
	@GetMapping("/getRegister")
    public List<UserRegister> getRegisterDetails()
    {
   	 return service.getRegister();
    }
	@PutMapping("/putRegister")
    public String updateRegisterDetails(@RequestBody UserRegister registerEntity,@RequestParam long userRegId)
    {
    	registerEntity.setUserRegId(userRegId);
   	    service.updateRegister(registerEntity);
   	    return ("Successfully Updated");
    }
    
    @DeleteMapping("/deleteRegister")
    public String deleteRegisterDetails(@RequestParam long userRegId)
    {
        service.deleteRegister(userRegId);
   	 return ("Successfully Deleted");
    }
	@PostMapping("/authenticate")
	public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) 
	{
		 return ResponseEntity.ok(service.authenticate(request));
	}
	 @GetMapping("/getUser")
	    public List<Login> getUserDetails()
	    {
	   	 return service.getUser();
	    }
	 @PutMapping("/putUser")
	    public String updateUserDetails(@RequestBody Login login,@RequestParam int userId)
	    {
	   	 login.setUserId(userId);
	   	 service.updateUser(login);
	   	 return ("Successfully Updated");
	    }
	    
	    @DeleteMapping("/deleteUser")
	    public String deleteUserDetails(@RequestParam int userId)
	    {
	   	 service.deleteUser(userId);
	   	 return ("Successfully Deleted");
	    }	
	   
}