<!-- 26.07.06 -->
# 자바스크립트&제이쿼리
## 프로잭트 제작 시 항상 준비래야하는 파일, 폴더 순서
2. 프로잭트, 폴더명 영문으로 의미있게 작성하기
2. `index.html`, `README.md` 생성
3. `styles, script`, `images` 폴더 생성
4. `styles/reset.css` , `styles/index.css` 생성
5. `scripts/index.js` 생성
## 자바스크립트
### 객체, 속성, 이벤트, 함수
* 객체 : 웹앱에서 사용하는 실제대상 (버튼, 링크, 이미지 등), 보통변수로 데이터(객체)를 저장해서 사용
* 이벤트 : 웹앱을 이용하는 사용자의 행동 (클릭, 터치 , 드래그 등)
    * `<button onclick="클릭 시 실행되는 함수">`
* 함수 : 2번이상 반복되는 실행내용
    * 함수 생성과 호출을 각각 다르게 구분함.
    * 함수 생성 : `function 함수명(){험수 호출 시 반복실행할내용;}` 생성만으론 절대 결과가 실행되지 않음. 반드시 호출 별도로 진행해야함
    * 함수 호출 : 위 함수생성 바깥쪽에 `함수명();`작성, 이벤트와 함께 사용하지고 함 `onclick="함수명;"`
### 변수 (데이터(객체)를 저장하는 저장소)
* 변수 키워드 변수명 대입연산자 대입값
* `let user_name='홍길동';`
// user_name 이란 변수를 생성해서 '홍길동'이란 데이터를 대입한다.
1. `var` : 오랜된 선언방식, 이름중복가능
2. `let` : 이름 중복 불가능, 재사용(수정) 가능
3. `const` : 이름 중복 불가능, 재사용(수정) 불가
### 객체, 속성, 함수 작성 문법
* 태그 예) `<a href="./index.html"></a>`
* 태그 예) `<video src="./cat.mp4" autoplay`
* `객체.속성;`
    * 객체의 속성 읽기
    * `a.href;`
    *   `video.src;`, `video.autoplay;`
* `객체.속성 = '값';`
    * 객체의 속성 값을 대입한다
    * 대입 시 기존값이 있으면? 기존값 자동제거 되고 새로운 값 대입
* `객체.함수();`
* `a.href = './reset.css';`
    * `video.src = './dog.mp4';`, `video.autoplay=0;`
    * 객체를 실행한다
    * `객체.함구() = '값';` (X)
## DOM(document object model)
### JS에서 제어하고 싶은 HTML 요소가 있을 경우 순서
1. 제어하고 싶은 HTML 수와 클래스, id 등 확인
2. 용도에 맞게 변수명 생성 `const 변수명`
3. 2번 변수에 대입연산자로 객체 대입하기
    * `document.querySelector('HTML 대상');`
    * `const 변수명=document.querySelector('대상');`
4. 안전한 작업을 위해 콘솔로 변수 체크하기
    * `console.log(검사하고싶은변수명);`
    * 콘솔결과 화면에서 `null`또는 오류가 없는지 확인
    * `null`이 뜬다면 HTML script 작성위치로 가서 defer 속성추가
        * `<script src="경로" defer></script>`
## 실제 요소 크기와 관계없는 다양한 디자인 포인트 만드는 방법
### CSS의 가상선택자 (실제 태그 없이 가상의 요소를 만든다)
### after, before
* `선택자::after`
* `선택자::before`
* 가상선택자의 필수속성 : `content`, `display`, `width`, `height`, `position`
### 작성예시
`선택자::after { `
    `content:''; display:block;`
    `width:가로크기px; height:세로크기px;`
    `position:absolute; left right top bottom 등의 위치좌표 추가 작성`
`}`
* after, before가 적용된 부모 선택자에 `position:relative` 기준잡기