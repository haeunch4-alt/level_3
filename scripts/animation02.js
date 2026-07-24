// animation02.js

// 변수
const sub = document.querySelector('.gnb .snb');
const li = document.querySelector('.gnb > ul > li:nth-child(2)');
console.log (sub,li);

//1. 서브메뉴 초기 숨기기
sub.style.display = 'none';

//2. 메인메뉴 클릭(터치)하면 서브메뉴 보이기
li.addEventListener('click', subShow)

function subShow(){
    sub.style.display = 'flex';
}