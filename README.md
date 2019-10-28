# Movie App React 2019
# react-practice

## 10/20
- install node.js, npx-g, CRA, yarn  
- 오 재밌군

## 10/21
- 야근하고 너무 피곤해서 1시간 정도 자다가 일어나서 해보기~
- 마크다운도 안쓴지 오래되서 기억이 잘 안난다 . 안쓰면 간단한거도 항상 기억 안난다 자주 써야지
- Component - html 반환 함수
- Jsx - javascript & html 혼용
```
const frs = [1,2,3];
frs.map(curr => {
	return curr;
})
===
frs.map(function(cur){
	return curr;
})
```

**  jsx에서 return 같은 레벨의 태그만( h2, span 만 추가했더니 에러 발생 => 시작과 끝 태그가 있는걸로 묶어줘야한다
```
<div>
	<h2>
	<span>
</div>
```
- Props/Prop-types

## 10/22
- retrun html 에서 <div>와 같은 태그로 묶는 대신 fragment 사용하기 / CRA로 생성시 <Fragment></Fragment>로 한번 묶어줘야함(업뎃 예정)
- es7 react~~ 플러그인 설치 rfc(react functional component), rcc(~class~) 로 자동 생성하네~
- es5 에서 그만 벗어나자 ~ es6 스타일로 펑션 생성하기
- react es6 https://velog.io/@kyusung/React를-위한-ES6

*  리액트 개발자 도구 다운받기 
https://reactjs.org/blog/2015/09/02/new-react-developer-tools.html#installation

- 매일 조금씩 !!


## 10/23(예정)
- State, class Component
- 예정이였으나 저녁에 텐동먹고 체해서 아까운 내 하루 안녕 ~

## 10/24
- Class Components and State
- setState()를 하면 state를 리프레쉬~ 하고 render function을 호출한다

## 10/25 ~ 10/26
- 라이프 사이클!
- data fetch -> axios로!
: https://hoorooroob.tistory.com/entry/React-React-Naive-TIPS-axios-%EC%99%80-fetch-%EC%96%B4%EB%96%A4-%EA%B2%83%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%A0%EA%B9%8C
- JSON VIEW 크롬 확장 프로그램 설치 - JSON이 예쁘게 보인다
- https://yts-proxy.now.sh/list_movies.json | yts api 사용하여 영화 앱 만들기
- async, await
: https://joshua1988.github.io/web-development/javascript/js-async-await/
: https://blueshw.github.io/2018/02/27/async-await/


## 10/27
- react에서 태그에 클래스 명 부여는 className을 써줘야한다 div class ='name' -> div className ='name'
- esLint /Prettier - Code formatter 설치

## 10/28
- gh-pages & done
- çss 긴딘하게 적용해보기
- https://eunji12.github.io/react-practice/