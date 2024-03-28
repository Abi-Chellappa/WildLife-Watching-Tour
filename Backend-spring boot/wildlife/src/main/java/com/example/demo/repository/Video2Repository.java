package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Video2;
@Repository
public interface Video2Repository extends JpaRepository<Video2, Integer> {

}
