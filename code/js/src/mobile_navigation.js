
//mobile_navigation.js


// =============================================================
// 시나리오.
//  1. 네비게이션 버튼 동작 : .elMidNaviBtn 클릭하면 .on 삽입
//  2. 네비 안의 x버튼 동작 : .nav_close 클릭하면 .on 제거
// =============================================================

// 변수 --------------------------------------------------------
const elMidNaviBtnBox = document.querySelector('.mid_navi_btnBox');
const elMidNaviBtn = elMidNaviBtnBox.querySelector('.mid_navi_btn > button');
const elMoNavOpenBtn = document.querySelector('.mo_nav_container');
const elMoNavInner = document.querySelector('.mo_btn_wrap');
const elNavClose = elMoNavInner.querySelector('.nav_close');


// 이벤트 활성화 클래스
const ckBtnOn = 'on';


// 이벤트 --------------------------------------------------------

// elMidNaviBtn 클릭하면 네비 버튼 열기----------------------
elMidNaviBtn.addEventListener('click', function(e) {
  e.preventDefault();
  elMoNavOpenBtn.classList.add(ckBtnOn);
 
});

// elNavClose 클릭하면 네비 버튼 닫기----------------------
elNavClose.addEventListener('click', function(e){
  e.preventDefault();
  elMoNavOpenBtn.classList.remove(ckBtnOn);
});



