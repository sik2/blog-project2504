package com.ll.blog.domain.post.comment.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ApiV1PostController {
    @GetMapping
    public String hello() {
        return "Hello, World!";
    }

    @PostMapping
    public String createPost() {
        return "Post created!";
    }
}
