/* animation.js */
// item1에 마우스를 올리면 img태그의 경로가 다른 이미지로 변수

//변수
const item1 = document.querySelector('.step1 .item');
const item1img = document.querySelector('.step1 .item .photo img');
const sale = document.querySelector('.sale')
const saleImg = document.querySelector('.sale .photo img')

//변수테스트
console.log(item1, item1img);
console.log(sale, saleImg);

//이벤트
item1.addEventListener('mouseover',item1ImgSrc );
item1.addEventListener('mouseout', item1ImgSrc2);
sale.addEventListener('mouseover',saleImgSrc)
sale.addEventListener('mouseout', saleImgSrc2)


//함수
function item1ImgSrc(){
    item1img.src='https://image.uniqlo.com/UQ/ST3/kr/imagesgoods/482983/item/krgoods_41_482983_3x4.jpg?width=300 ';
}
function item1ImgSrc2(){
    item1img.src='https://image.uniqlo.com/UQ/ST3/kr/imagesgoods/482983/item/krgoods_09_482983_3x4.jpg?width=300';
}
function saleImgSrc(){
    saleImg.src='https://image.uniqlo.com/UQ/ST3/kr/imagesgoods/483986/item/krgoods_38_483986_3x4.jpg?width=300';
}
function saleImgSrc2(){
    saleImg.src='https://image.uniqlo.com/UQ/ST3/kr/imagesgoods/483986/item/krgoods_09_483986_3x4.jpg?width=300';
}