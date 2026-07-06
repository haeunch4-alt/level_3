<!-- 26.07.06 -->
# 자바스크립트&제이쿼리
## 프로잭트 제작 시 항상 준비래야하는 파일, 폴더 순서
2. 프로잭트, 폴더명 영문으로 의미있게 작성하기
2. `index.html`, `README.md` 생성
3. `styles, script`, `images` 폴더 생성
4. `styles/reset.css` , `styles/index.css` 생성
5. `scripts/index.js` 생성
## 자바스크립트
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