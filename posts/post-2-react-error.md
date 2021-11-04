---
date: '2019-10-29'
title: 'React - Error:Maximum update depth... 해결법'
categories: ['React']
summary: '리액트를 공부하다보면 한 번쯤은 마주하는 에러. Maximum update depth exceeded... 왜 발생하는 걸까?'
thumbnail: 'react'
featuredImage: 'react.png'
slug: 'post/2'
---

과거에 작성된 글입니다.

> Error: Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.

리액트를 처음 접했을 때 접한 에러입니다. 과거 블로그에도 이 에러에 대해 포스팅 했었는데, 압도적인 조회수를 보여주어서 (누적 조회수 약 5000 이상...)특히 기억에 남습니다.

이 포스트는 해당 에러의 해결법, 발생 원인을 정리한 글입니다.

이 에러는 onClick과 같은 이벤트에 함수를 잘못 지정할 경우 발생합니다.

```html
<button onClick="{handleOnClickButton()}">버튼</button>
```

이렇게 작성할 경우 에러가 발생합니다.
다시한번 에러 메시지를 봅시다.

> Maximum update depth exceeded. (최대 업데이트 깊이를 초과했습니다.)

즉, 컴포넌트가 계속해서 업데이트를 할 것이며, 그 깊이가 무한대에 가깝다는 의미입니다.

왜 이런일이 발생할까요?

다시 코드를 봅시다.

```html
<button onClick="{handleOnClickButton()}">버튼</button>
```

onClick 이벤트 발생시 handleOnclickButton 함수를 **_실행_**하도록 코드가 작성되어있습니다.

정말 그럴까요?

이 코드는 **onClick 이벤트 발생 시 해당 함수를 실행하는게 아닌, 렌더시 해당 함수를 실행시키는 코드**입니다.

즉, 컴포넌트를 렌더하며 함수를 실행 > 함수를 실행 했기때문에 다시 렌더 > 렌더 중 함수 실행문을 만나 다시 함수 실행 > on and on...

이렇게 무한 루프에 빠지게 됩니다.

이벤트에 함수를 지정하고 싶으실 땐 아래와 같이 작성해주셔야 합니다.

```html
<button onClick="{handleOnClickButton}">버튼</button>
```

매개변수를 지정해줘야 할경우는 아래와 같습니다.

```html
<button onClick={() => handleOnClickButton(...param)}>버튼</button>
```
