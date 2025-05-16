package com.ll.blog.domain.post.post.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PostDto {
    private Long id;

    private String string;

    private String content;

    private String author;
}
