package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Feedback;
import com.example.demo.repository.FeedbackRepository;

@Service
public class FeedbackService 
{
	@Autowired
	private FeedbackRepository feedbackRepo;

	public List<Feedback> getFeedback() 
	{
		return feedbackRepo.findAll();
	}

	public void saveFeedback(Feedback feedback) 
	{
		feedbackRepo.save(feedback);
	}

	public void updateFeedback(Feedback feedback) 
	{
		feedbackRepo.save(feedback);
	}

	public void deleteFeedback(int feedbackId) 
	{
	     feedbackRepo.deleteById(feedbackId);
	}
   
}
