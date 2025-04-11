package com.ll.blog.domain.chat.chatMessage.entity;

import com.ll.blog.domain.chat.chatRoom.entity.ChatRoom;
import com.ll.blog.global.jpa.BaseEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

@Entity
@Setter
@Getter
@SuperBuilder
@ToString(callSuper = true)
public class ChatMessage extends BaseEntity {
    public ChatMessage() {

    }
    private String writerName;
    private String content;
    @ManyToOne
    private ChatRoom chatRoom;
}
