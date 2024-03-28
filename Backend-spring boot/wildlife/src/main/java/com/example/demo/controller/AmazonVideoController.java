package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Video2;
import com.example.demo.entity.amazonVideoEntity;
import com.example.demo.repository.Video2Repository;
import com.example.demo.repository.amazonVideoRepository;
@RestController
@RequestMapping("/auth")

@CrossOrigin
public class AmazonVideoController {
	@Autowired 
    private amazonVideoRepository video2Repository;
 
    @GetMapping("/getVideo3")
    public List<amazonVideoEntity> getAllVideos()
    {
    	return video2Repository.findAll();
    }
    
    @PostMapping("/postVideo3")
    public amazonVideoEntity addVideo(@RequestBody amazonVideoEntity video2)
    {
    	return video2Repository.save(video2);
    }
    
    @PutMapping("/putVideo3")
    public String putVide(@RequestBody amazonVideoEntity video2,@RequestParam int id)
    {
    	video2.setId(id);
    	video2Repository.save(video2);
    	return "Successfully updated";
    }
    
    @DeleteMapping("/deleteVideo3")
    public String deleteVideo(@RequestParam int id)
    {
    	video2Repository.deleteById(id);
    	return "Successfully deleted";
    }
}
