전송 계층에 대해서 알아보고,
<br>
면접 단골 질문인 TCP, UDP에 대해서 알아보자. 🧐

> TCP vs UDP를 비교해서 설명해주세요.

<details>
  <summary>답변</summary>
  <p>
    TCP는 연결성, 신뢰성 전송 프로토콜 입니다. 데이터 전송을 위해 3-way handshake를 통해서 세션 연결 과정을 거칩니다. 
    <br>
    그리고 신뢰성 있는 데이터 전송을 위해 오류 제어, 흐름 제어, 혼잡 제어 등을 실행합니다.
    <br>
    신뢰성을 보장하기 위해 header가 더 크고 속도가 비교적 느리다는 단점이 있습니다.
    <br>
    <br>
    UDP는 비연결성 프로토콜로 3-way handshake 등의 세션 연결 과정이 없습니다.
    <br>
    그리고 비신뢰성 프토콜로 오류 제어, 흐름 제어, 혼잡 제어도 마찬가지로 제공하지 않습니다.
    <br>
    덕분에 적은 양의 오버헤드를 가지고 수신 여부 또한 확인하지 않아서 속도가 빠릅니다.
    <br>
    <br>
    TCP는 신뢰성이 중요한 HTTP, File 전송 등에 쓰이고, UDP는 실시간성이 중요한 동영상 스트리밍과 같은 곳에 사용됩니다.
  </p>
</details>

## 전송 계층

네트워크 환경은 기본적으로 비 신뢰성 환경입니다.
데이터를 전송하면서 그 사이에 여러 문제 데이터 전송 과정에서 에러와 유실이 발생하기도 합니다.
이런 환경에서 사용자는 신뢰성 있는 서비스를 제공받고 싶어합니다.

### 전송 계층의 역할

- '목적지에 신뢰할수 있는 데이터를 전송할 수 있는가?' 담당
- 주요 프로토콜은 TCP, UDP
- 전송 계층의 주요 프로토콜인 TCP는 데이터를 신뢰성 있게 전송하는데 중요한 역할을 하는 프로토콜 입니다.

### ⭐️⭐️️ 전송 계층 통신 방식

- 연결형 통신 : 신뢰성과 정확성(연결 필요)
  - ex) TCP 프로토콜
- 비연결형 통신 : 효율성(빠르게, 일방적인 통신)
  - ex) UDP 프로토콜

## TCP

### TCP 세그먼트

- 응용 계층의 데이터에서 TCP 헤더를 붙여 캡슐화하면 TCP 세그먼트가 됩니다.
- 네트워크 계층에서 받은 패킷에서 IP 헤더를 떼어나는 역캡슐화를 거쳐도 TCP 세그먼트가 됩니다.

### TCP 헤더

아래의 그림은 TCP 헤더의 구조 입니다.
<br>
![image](https://user-images.githubusercontent.com/93169519/196262133-f31073ef-b0cb-40c2-a6b5-fe9766280ce3.png)
<br>
[그림. [정보통신기술용어해설]](http://www.ktword.co.kr/test/view/view.php?m_temp1=1889)

- 출발지 포트 번호, 목적지 포트 번호
- 일련 번호, 확인 응답 번호
- TCP 플래그, 윈도우 크기
- 체크섬

### ⭐️⭐⭐ 3-way handshake

TCP 통신 과정에서 데이터를 전송하기 위해서는 먼저 연결 상태, 가상의 통신로를 확보해야 합니다.
<br>
이를 위해서 3-way handshake라는 과정을 거치게 됩니다.

여기서 TCP 헤더의 'TCP 플래그(코드 비트)'를 사용하게 됩니다.
<br>
TCP 플래그는 총 6개로 나뉘는 데요.
<br>
(각 1bit 이며 초기값은 0, 활성화 시 1로 변환 됩니다.)

| URG | ACK | PSH | RST | SYN | FIN |
| --- | --- | --- | --- | --- | --- |
| 0   | 0   | 0   | 0   | 0   | 0   |

- Urgent
- Acknowledgement
- Push
- Reset
- Synchronize
- Finish

3-way handshake의 동작 순서는 다음과 같습니다.
<br>
![image](https://user-images.githubusercontent.com/93169519/196280289-4f5110c7-842b-4c57-b1bc-acdeec65ed97.png)

1. SYN : 연결 요청!
2. SYN + ACK : 확인! + 나도 연결 요청!
3. ACK : Okay! 확인 완료!

### ⭐️ 4-way handshake

반대로 연결을 종료할 때는 4가지 과정을 거치게 되는데요.
<br>
4-way handshake의 동작 순서는 다음과 같습니다.
<br>
![image](https://user-images.githubusercontent.com/93169519/196280302-304c5626-3d8e-4c49-9350-2fb3705c8aec.png)

1. FIN : 연결 종료!
2. ACK : 확인!
3. FIN : 나도 연결 종료!
4. ACK : Okay! 확인 완료!

### TCP 에러 제어

세그먼트의 손실 및 훼손, 순서가 어긋나거나 중복된 경우에 이를 위한 처리 작업입니다.
<br>
에러 제어의 목적은 TCP의 **신뢰성 있는 데이터 전송**을 위함 입니다.

- 에러 검출(detection)
  - CRC(cyclic Redundancy Check)
  - Checksum(체크섬)
- 에러 정정(correction) : ARQ (Automatic Repeat Request)
  - Stop and Wait ARQ
    <br>
    → 패킷을 전송하고 ack을 받으며 순차적으로 진행하다가.. ack 손실이 발생 된다면!
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;멈추고 해당 패킷을 다시 전송하여 시작하는 방법입니다.
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;😓 **확인 응답이 올때까지 기다리는 방식이기 때문에 비효율적입니다.**
  - Go-Back-n ARQ
    <br>
    → 패킷을 전송을 하고 나서, 문제가 생기는 패킷이 있다면 그 해당 패킷으로 **되돌아가서 다시 전송을 하는 방식** 입니다.
  - Selective Repeat ARQ
    <br>
    → 오류가 발생한 패킷을 선택적으로 재전송하는 방식입니다.
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1번 패킷이 오류가 발생 됬으면, 그 이후의 전송 패킷들은 모두 버퍼에 저장되다가..
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1번 패킷이 타임아웃이 된 순간! 재전송되고 수신이 완료되면!
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1번과 함께, 버퍼에 있는 패킷을 모두 상위 계층으로 올립니다!

## 포트 번호

포트 번호는 데이터의 목적지가 어떤 애플리케이션인지 구분하는 기능 입니다.
<br>
TCP 헤더의 구조 중에서 '출발지 포트 번호', '목적지 포트 번호' 가 있는것을 위에서 확인할 수 있었습니다.
<br>
**즉슨 포트 번호는 TCP 헤더에 포함되어 있습니다.**
<br>
이 포트 번호가 있기 때문에 어떤 애플리케이션으로 세그먼트를 보낼지 구분할 수 있게 됩니다.

### ⭐️ Well-Known 포트(0 ~ 1023)

국제 인터넷 주소 관리 기구(IANA)에서 지정한 0 ~ 1023번까지의 포트입니다.
<br>
해당 포트들은 주로 서버용으로 사용됩니다.
<br>
기본적인 포트 번호들은 기억하는 것이 좋습니다. 👍
<br>
(근데 어차피 사용하게 되면서 기억나게 되는...)

| 애플리케이션 | 포트 번호 | 설명                 |
| ------------ | --------- | -------------------- |
| SSH          | 22        | 파일 전송            |
| TELNET       | 23        | 원격지 호스트 연결   |
| SMTP         | 25        | 메일 전송            |
| DNS          | 53        | 도메인 네임 서비스   |
| HTTP         | 80        | 웹 서비스            |
| POP3         | 110       | 메일 수신            |
| IMAP         | 143       | 메일 수신            |
| HTTPS        | 443       | 웹 서비스(보안 강화) |

### TCP 흐름제어

- 송수신지의 데이터 처리능력이 달라서 데이터가 유실되는 것을 방지
- 주로 슬라이딩 윈도우 기법을 사용
- 윈도우 광고 기법으로 서로의 윈도우 크기를 알려줍니다.
- Rwnd(Receiver Window) : 수신측 윈도우
- Cwnd(Congestion Window) : 송신측 윈도우

### TCP 혼잡제어

네트워크 내의 데이터를 조절하여 오버플로우 현상을 방지하는 기술 입니다.

혼잡 발생 전

- Slow Start
- Additive Increase

혼잡 발생 후

- Multiplicative Decrease : ssthresh 값을 cwnd 1/2로 축소

## UDP

UDP는 효율성에 초점을 두고 있습니다.
연결 확립 절차를 거치는 TCP와는 다르게 UDP 비연결형 통신이며 속도가 빠릅니다.
이러한 이유로 UDP는 동영상 스트리밍 방식이 적합합니다.

UDP 헤더가 데이터에 붙게 되 UDP 데이터그램 또는 UDP 세그먼트라고 불립니다.

### ⭐️ UDP 특징

- 효율성
- 비연결성 통신
- ❌ 연결 확리 절차 x
- 브로드 캐스팅 전송
  - LAN 안에 있는 모든 컴퓨터에 데이터를 일괄적으로 보낼 수 있습니다.
    <br>
    (UDP는 이런 브로드 캐스트 방식의 통신에 적합합니다. TCP 는 연결 확립 절차로 인한 번거로움으로 적합하지 않음)
    <br>
    ![image](https://user-images.githubusercontent.com/93169519/196245936-c9def7be-7fc4-4f4e-b497-d729e6baa497.png)
    <br>
    [그림. 위키백과 - 브로드캐스팅 (네트워킹)](<https://ko.wikipedia.org/wiki/%EB%B8%8C%EB%A1%9C%EB%93%9C%EC%BA%90%EC%8A%A4%ED%8C%85_(%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%82%B9)>)

> TCP 흐름제어, 혼잡제어 쪽을 한번 더 살펴봐야 될것 같다.
> <br>
> 에러 제어 방법도 다음에 한번 더 그림으로 그려보는 기회가 부디 있기를... 🤔

## 🔖 참고 사이트

- [네트워크, 그림으로 이해하자](https://www.inflearn.com/course/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-%EA%B7%B8%EB%A6%BC-%EC%9D%B4%ED%95%B4/dashboard)
- [기출로 대비하는 개발자 전공면접 [CS 완전정복]](https://www.inflearn.com/course/%EA%B0%9C%EB%B0%9C%EC%9E%90-%EC%A0%84%EA%B3%B5%EB%A9%B4%EC%A0%91-cs-%EC%99%84%EC%A0%84%EC%A0%95%EB%B3%B5)
