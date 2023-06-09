면접 단골 질문인 Cookie vs Session 정리해보기

## Connectionless, Stateless

쿠키와 세션을 사용하는 이유는 HTTP의 connectionless(비연결성), stateless(비상태성)의 특징 때문 입니다.
<br>
HTTP는 서버에 연결 후 요청에 응답을 받으면 연결을 끊어버리고 서버는 클라이언트에 대한 상태 정보를 유지하지 않습니다.

만약 쿠키와 세션을 사용하지 않는다면 페이지 이동 때마다 로그인을 반복해야 합니다.
<br>
쿠키나 세션을 사용하면 만사 OKay! (자동 로그인, 쇼핑몰의 장바구니, 팝업의 '오늘 더이상 보지 않기' 등등 사용 가능)

## Cookie

쿠키는 클라이언트(브라우저)에 key-value 쌍으로 로컬에 저장되는 데이터 파일입니다.

쿠키의 생성과 저장은 구현에 따라 다르지만 원리는 동일합니다.

1. [Client] -(request)→ [Server] : 서버는 클라이언트에 관한 정보를 토대로 쿠키를 구성
2. 서버는 response header에 쿠키를 담아 보냅니다.
3. 클라이언트가 응답을 받으면, 브라우저는 쿠키를 쿠키 디렉토리에 저장합니다.

## Session

세션은 기본적으로 쿠키를 이용해서 구현 됩니다.
<br>
클라이언트를 구분하기 위해 각 클라이언트에게 session id 부여하고 클라이언트는 쿠키에 session id를 저장합니다.
<br>
세션은 유효시간을 설정하여 일정 시간 응답이 없다면 끊을 수 있고, 브라우저가 종료 될때까지 인증 상태를 유지 가능합니다.
<br>
사용자 정보를 서버에 두기 때문에 쿠키보다 보안은 좋지만 서버 자원을 차지하기 때문에 서버에 과부하를 줄 수 있고, 성능 저하의 요인이 될 수 있습니다.

> 🚥 하지만 세션보다 쿠키를 사용하는 이유는??
> <br> > **세션은 서버 자원을 사용하기 때문에! 이러한 낭비를 방지하고 웹사이트 속도를 높이기 위해서 입니다.**

## Session & Cookie 이용한 로그인

쿠키에 회원 정보가 아닌 session id로 사용함으로써 보안성을 높이는 방법!

But!!! session id만 노출되서 악의를 가진 사용자가 이를 악용하여 서버에 요청을 하면 구별해낼 방법이 없습니다.
<br>
이를 Session hijacking 이라고 합니다. 해결 방법은 HTTPS 사용 또는 session 만료 시간을 짧게 설정하는 방법이 있습니다.
<br>
그리고 서버 자원을 사용하기 때문에 서버의 확장성에 문제가 있습니다.
<br>
서버가 2대 이상인 경우 로그인한 사용자는 해당 서버에만 요청을 해야 되는 것이죠.

위의 문제를 해결 하기위해서 사용하는 2가지 방법이 있습니다.

1. 스티키 세션 방식 : 처음 요청한 서버로만 요청을 보내도록 하는 방식
2. 세션 클러스터링 방식 : 모든 서버에 세션 정보를 중복으로 저장하는 방식

하지만 두 방식 모두 서버에 부담을 준다는 점은 변하지 않습니다.
<br>
스티키 세션 방식은 서버 부하가 한쪽으로 몰릴 수 있고, 세션 클러스링 방식은 서버 자원을 너무 비율적으로 사용되며 메모리 부하가 발생할 수 있습니다.

## 🔖 참고 사이트

- [기출로 대비하는 개발자 전공면접 [CS 완전정복]](https://www.inflearn.com/course/%EA%B0%9C%EB%B0%9C%EC%9E%90-%EC%A0%84%EA%B3%B5%EB%A9%B4%EC%A0%91-cs-%EC%99%84%EC%A0%84%EC%A0%95%EB%B3%B5/dashboard)
