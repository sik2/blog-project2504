package com.ll.blog.global.security;

import com.ll.blog.domain.member.member.entity.Member;
import com.ll.blog.domain.member.member.service.MemberService;
import com.ll.blog.global.rq.Rq;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class CustomOAuth2AuthenticationSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler {
    private final MemberService memberService;
    private final Rq rq;

    @SneakyThrows
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
        // rq.getActor() 시큐리티에서 로그인된 회원정보 가지고 오기
        Member actor = memberService.findById(rq.getActor().getId()).get();

        // 토큰 발급
        rq.makeAuthCookies(actor);

        String redirectUrl = request.getParameter("state");

        // 프론트 주소로 redirect
        response.sendRedirect(redirectUrl);
    }

}
