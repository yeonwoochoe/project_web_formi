// tablet_search_box_open.js

// ==============================================
// search_area 버튼 클릭하면 mo_search_form_box 출력
// 1. 클릭시 .mo_search_form_box 클래스 .open 추가
// 2. 영역 바깥 클릭시 .open 제거 
// ==============================================

// 변수


const elNavBtnWrap = document.querySelector('.mid_mo_navi_btn');
const elSearchIcon = elNavBtnWrap.querySelector('.search_area > button');

const elMoNavContainer = document.querySelector('.mo_nav_container');
const elSearchBox = elMoNavContainer.querySelector('.mo_search_form_box');
const elViewBox = document.querySelector('#viewBox');

//반응형

//   const setDevice = [
//     {type:'mobile', size:320},
//     {type:'tablet', size:768},
 
//   ];

// const deviceSize = `screen and (max-width:768px)`;
// const mediaQuery = window.matchMedia(deviceSize);


//기본 추가 기능
const opActive = 'open';


// 외부 영역(#viewBox) 클릭시 .mo_search_form_box에 .open 제거
elViewBox.addEventListener('click', function(e){
  e.preventDefault();
  elSearchBox.classList.remove(opActive);
});


//함수& 이벤트처리
// 처음 실행된 브라우저 너비가 768보다 작으면 opActive 제거, 크면 .opActive 추가
const fnCkWidth = () => {
  const fnDevice = window.matchMedia ("all and (min-width: 768px)").matches;

  if (fnDevice) {
    // 서치버튼 클릭시 .mo_search_form_box .open 추가
    elSearchIcon.addEventListener('click',function(e){
      e.preventDefault();
      elSearchBox.classList.add(opActive);
    });
  } else {
    elSearchBox.classList.remove(opActive);
  }
}

fnCkWidth();

// 이벤트
// resize 되면 실행
window.addEventListener('resize', () => {
  fnCkWidth();
});















// }

// const fnNoneck = ()=>{
//   elSearchBox.classList.remove(opActive);
//   fnNoneck();
// }


// mediaQuery.addEventListener('click', fnOpenCk);


// // const fnDevice = ()=> {
// //   (mediaQuery.matches)? fnOpenCk(elSearchIcon): fnNoneck(elSearchIcon);
  
// // }


// // fnOpenCk();



