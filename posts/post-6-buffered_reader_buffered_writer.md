---
date: '2021-11-10'
title: 'Java - BufferedReader 사용법, Scanner와의 차이'
categories: ['Algorithm', 'Java']
summary: 'BufferedReader와 BufferedWriter를 어떻게 활용할 수 있는지 정리한 글입니다. BufferedReader와 BufferedWriter가 왜 빠른지에 대해서 언급을 하는게 순서상 옳지만, 관련 내용은 아주 간단하게만 짚고 넘어가겠습니다.'
thumbnail: 'postsImages/java.png'
featuredImage: 'postsImages/java.png'
slug: 'post/6'
---

**알고리즘 문제를 풀때** BufferedReader와 BufferedWriter를 어떻게 활용할 수 있는지 정리한 글입니다.

본론에 앞서, BufferedReader와 BufferedWriter가 왜 빠른지에 대해서 언급을 하는게 순서상 옳지만, 관련 내용은 **아주**간단하게만 짚고 넘어가겠습니다.

이것을 자세히 설명하려면 자바가 문자열을 어떻게 다루는지(문자열 인코딩을 어떻게 처리하는가)에 대한 내용이 필요한데, 글을 따로 써야할 정도로 내용이 길기도 하고 저도 그걸 설명할 만큼 자바에 대한 지식이 충분하지 않기 때문이기도 합니다. (즉 잘 모른다는 소리입니다 ^^;)

## Scanner와 BufferedReader의 차이

- Scanner: 사용자가 입력한 데이터를 토큰단위로 자른 후 특정 형태로 '**parse'**'합니다.
- BufferedReader: 사용자가 입력한 데이터를 String형태 그대로 (개행 전까지)덩어리째 사용합니다.

Scanner는 자바책에서 가장 먼저 알려주는 입력 객체인 만큼, 사용법이 간단합니다.
입력한 대로 토큰을 자르고, 원하는 형태로 parse시켜줍니다. (int, double 등등) 데이터를 그때 그때 읽어들이는데, space, enter를 경계로 인식합니다. 자체적인 예외처리과정이 있습니다.

그에 반해 BufferedReader는 토큰형태로 자르지 않고, 버퍼에 데이터가 가득 차거나 개행되기 전까지 입력을 계속 받습니다. 그리고 그 덩어리 째로(String) 데이터를 사용하게 됩니다. 예외처리를 직접 작성해야합니다. (IOException)

Scanner와 BufferedReader 둘 다 버퍼를 사용합니다. 심지어 버퍼의 크기는 BufferedReader가 훨씬 큽니다.

> Scanner: 1KB, BufferdReader: 8KB

하지만 Scanner는 '그때 그때' 계속해서 토큰단위로 잘라서 데이터를 처리하고, BufferdReader는 버퍼에 모아서 한번에 처리한다는 차이가 있습니다. '작은 일을 여러번 하기'냐 '모아서 한번에 처리하기'냐의 차이로 볼 수도 있을 것 같습니다.

Scanner는 데이터를 자르고, 특정 형태로 파싱하느라 바쁜데 BufferedReader는 모았다가 아무것도 하지 않고 그대로 전달해주니까요.

처리하는 데이터가 작은 경우엔 큰 차이가 없을 수 있다고 합니다. 하지만 보통은 BufferedReader가 빠르다는게 정론이라고 합니다.

## BufferedReader 사용법

BufferdReader에 대한 모든 것은 [이곳](https://docs.oracle.com/javase/8/docs/api/java/io/BufferedReader.html)에서 확인하실 수 있습니다.

이 글에선 자주 사용하는 메소드, 사용법만 살펴보겠습니다.

BufferedReader를 사용할 땐 보통 InputStreamReader를 사용합니다.
InputStreamReader는 byte stream을 character stream으로 변경해줍니다.
InputStreamReader를 통해 한 글자 한 글자 BufferedReader가 버퍼에 쌓아간다고 생각해도 될 것같습니다.

BufferedReader의 리더에는 꼭 InputStreamReader가 쓰일 필요는 없다곤 합니다만 보통은 InputStreamReader를 사용합니다.

## String을 쪼개기 위한 StringTokenizer 활용

BufferedReader는 **무조건 한 줄씩**읽는 다는 것을 기억해야합니다.
때문에 내용물을 어떻게 가공할지에 대해선 저희가 코드로 작성해주어야 합니다.
이에 자주 사용하는 방법인 StringTokenizer의 활용 예제를 적어보겠습니다. (사실 [저번 글](post/post-5)에 적은 코드와 거의 같습니다.)

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws IOException {
    // BufferedReader를 사용할땐 throws IOException를 해주거나 try/catch로 감싸줘야 함.

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		int a = Integer.parseInt(st.nextToken());

		System.out.println(a);

    br.close();

	}
}
```

이코드에서 중요한 요소는 세가지입니다.

1. 예외처리를 반드시 해주어야 한다.(throws IOException / try catch)
2. 형 변환은 직접 처리해준다.
3. 입력 작업이 끝난 후 close()를 통해 입력 스트림을 닫아준다.

이 세가지 중요한 점만 유념한다면, BufferedReader를 사용해보며 이것저것 실험해보기에도 문제는 없을 듯 합니다.

다음 Java에 대한 글은 BufferedWriter가 될 것 같습니다.

지적, 조언은 감사하게 받고 있습니다. 잘못된 점이 있다면 댓글로 남겨주세요.
