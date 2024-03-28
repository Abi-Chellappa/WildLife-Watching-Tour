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

import com.example.demo.entity.Video;
import com.example.demo.repository.VideoRepository;

@RestController
@RequestMapping("/auth")

@CrossOrigin

public class VideoController 
{
    @Autowired 
    private VideoRepository videoRepository;
 
    @GetMapping("/getVideo")
    public List<Video> getAllVideos()
    {
    	return videoRepository.findAll();
    }
    
    @PostMapping("/postVideo")
    public Video addVideo(@RequestBody Video video)
    {
    	return videoRepository.save(video);
    }
    
    @PutMapping("/putVideo")
    public String putVide(@RequestBody Video video,@RequestParam int id)
    {
    	video.setId(id);
    	videoRepository.save(video);
    	return "Successfully updated";
    }
    
    @DeleteMapping("/deleteVideo")
    public String deleteVideo(@RequestParam int id)
    {
    	videoRepository.deleteById(id);
    	return "Successfully deleted";
    }
}
