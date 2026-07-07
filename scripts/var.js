/* var.js 26.07.07  */
// 변수와함수
// 변수키워드 변수명 대입연산자 대입값;
// 함수생성키워드 함수명() {실행결과;}
let user_name = '홍길동';
let user_pw = '1234'
function func1(){ // 생성과 준비
    console.log(user_name);
    console.log(user_pw);
}// 함수 준비 끝 위치
func1(); // 함수호출

// 목표) 원하는 영화명(토이스토리)을 검색하고 검색하기 버튼을 누르면 영화명, 개봉일이 콘솔에 출력
// 데이터 == 변수
const movie_name='토이스토리5';
const movie_date='26.07.07';
// 빈복실핼 == 함수
function mov(){
    console.log(movie_name);
    console.log(movie_date);
}
const nb_name='삼성노트북';
const nb_size='15인치';
// 빈복실핼 == 함수
function laptop(){
    console.log(nb_name);
    console.log(nb_size);
}

// 목표)노트북 검색하기 버튼을 클릭하면 삼성노트북, 15인치 정보가 콘솔에 출력하기
// 변수명 참고)노트북 모델명, 노트북 ㅋ기, 노트북 검색

// 목표) 여행검색하기 클릭 시 여행지/가격/특산물 정보 콘솔 출력 
// 예) 강릉 20만원 감자빵
const trip_location='강릉';
let trip_price = '20만원';
let trip_product = '감자빵';
function trip(){
    console.log(trip_location);
    console.log(trip_price);
    console.log(trip_product);
}