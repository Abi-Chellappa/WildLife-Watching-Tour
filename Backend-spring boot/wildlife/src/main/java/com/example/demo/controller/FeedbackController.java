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

import com.example.demo.entity.Feedback;
import com.example.demo.service.FeedbackService;

@RestController
@CrossOrigin
@RequestMapping("/auth")
public class FeedbackController 
{
	@Autowired
    private FeedbackService feedbackService;
    
    @GetMapping("/getFeedback")
    public List<Feedback> getFeedbackDetails()
    {
    	return feedbackService.getFeedback();
    }
    @PostMapping("/postFeedback")
    public String postFeedbackDetails(@RequestBody Feedback feedback)
    {
    	feedbackService.saveFeedback(feedback);
    	return("Sucessfully saved");
    }
    @PutMapping("/putFeedback")
    public String updateFeedbackDetails(@RequestBody Feedback feedback,@RequestParam int feedbackId)
    {
    	feedback.setFeedbackId(feedbackId);
   	    feedbackService.updateFeedback(feedback);
   	    return ("Successfully Updated");
    }
    
    @DeleteMapping("/deleteFeedback")
    public String deleteFeedbackDetails(@RequestParam int feedbackId)
    {
     feedbackService.deleteFeedback(feedbackId);
   	 return ("Successfully Deleted");
    }
}
