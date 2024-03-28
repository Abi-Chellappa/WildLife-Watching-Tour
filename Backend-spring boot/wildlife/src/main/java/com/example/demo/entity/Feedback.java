package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name="feed")
public class Feedback 
{
	 @Id
	 @GeneratedValue(strategy = GenerationType.AUTO)
	private int feedbackId;
	private String username;
	private String email;
	private String about;
	private String improvement;
	private String rating;
	private String comment;
}
