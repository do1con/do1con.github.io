---
date: '2019-10-07'
title: 'Javascript - 호이스팅'
categories: ['Javascript']
summary: '자바스크립트에서 호이스팅은 어떻게 작동할까? 호이스팅의 개념과 그 우선순위까지 알아보자.'
thumbnail: 'javascript'
featuredImage: 'javascript.png'
slug: 'post/1'
---

과거 호이스팅에 대해 공부한 후 정리한 글입니다.

### 아래의 코드는 어떻게 작동할까?

```javascript
if (true) {
  var hey = 'hello';
}

console.log(hey);
```

일반적인 경우 hey는 if문의 {}영역에서 선언되었으므로 그 밖의 영역에 있는 console.log에서는 호출될 수 없어야 한다.

그러나 자바스크립트는 그렇지 않다. hey변수가 호이스팅 되었기 때문이다.

```javascript
var hey;

if (true) {
  hey = 'hello';
}

console.log(hey);
```

호이스팅은 선언과 할당이 분리되는 현상이다.

var로 선언된 변수는 function block의 최상단으로 선언이 옮겨진다.

## function block의 최상단?

var는 function scope라는 특성을 지니고 있다.
즉 var의 영역은 function이며 함수 최상단에 선언된다는 의미다.

```javascript
function hi() {
  if (true) {
    var say = 'hi';
  }
  console.log(say);
}
```

이 코드에서 var say는 function hi에 속해있다. 그러므로 런타임에서는

```javascript
function hi() {
  var say; //선언
  if (true) {
    say = 'hi'; // 할당
  }
  console.log(say);
}
```

이렇게 변경되어 실행된다.

이는 var 변수가 어떤 방식으로 선언되던 상관없이 적용된다.

```javascript
function bye() {
  for (var i = 0; i < 10; i++) {
    // blah blah
  }
}
```

이렇게 반복문에 선언된 변수도 마찬가지다.

```javascript
function bye() {
  var i; // 선언
  for (i = 0; i < 10; i++) {
    // 할당
    // blah blah
  }
}
```

## 함수표현식과 호이스팅

```javascript
hi();

var hi = function () {
  console.log('hi');
};
```

이렇게 함수 표현식으로 선언하더라도 호이스팅이 적용된다

```javascript
var hi;

hi(); // error! hi 함수에는 아직 함수표현식이 할당되지 않았음

hi = function () {
  console.log('hi');
};
```

## 대안은 없을까?

호이스팅은 javascript를 유연하게 실행되도록 돕지만, 동시에 기존에 다른 프로그래밍 언어를 공부한 개발자에겐 햇갈리는 요소가 될 수 있다.

때문에, 통상적인 블록스코프를 따르는 변수모델로 let, const가 제시되었다.

```javascript
function hi() {
  if (true) {
    const say = 'hi';
  }
  console.log(say); // error!
}
```

let과 const는 전형적인 block scope를 가졌기 때문에 if문 밖에서 호출될 경우 에러를 발생시킨다.

## 함수와 호이스팅

```javascript
hi();

function hi() {
  console.log('hi');
}
```

자바스크립트에서는 이런 코드도 실행된다. 분명 호출이 선언보다 앞섰는데도 말이다.

이런 일이 가능한 이유는 함수도 호이스팅에 적용되기 때문이다. 함수 선언문은 반드시 최상단으로 끌어올려진다.
위 코드는 런타임에선 다음과 같이 실행된다.

```javascript
function hi() {
  console.log('hi');
}

hi();
```

## 함수와 var변수의 호이스팅 우선순위는?

간단하게, 변수 호이스팅이 함수 호이스팅보다 먼저 일어난다.

```javascript
hi();

function hi() {
  var hiMessage = 'hi';
  console.log(message);
}

console.log(byeMessage);

var byeMessage = 'bye';
```

그러므로 이 코드는 런타임에서

```javascript
var byeMessage;
function hi() {
  var hiMessage;
  hiMessage = 'hi'; // 선언과 할당은 분리된다.
  console.log(message); // hi.
}

hi();

byeMessage = 'bye';
```

이렇게 해석된다.
