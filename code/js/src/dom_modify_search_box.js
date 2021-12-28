// dom_modify_search_box.js

// 시나리오 : 
// html 레이아웃 변형
// 1. 모바일(mobile,tablet)환경일 때 .search_form_box 삭제
// 2. pc(labtop,pc) 환경일 때 .mo_search_form_box 삭제

(() => {

  // 변수
  const elMidheaderWrap = document.querySelector('.midheader_wrap');
  const elMidheader = elMidheaderWrap.querySelector('#mid_header');
  const elMoNavContainer = elMidheaderWrap.querySelector('.mo_nav_container');
 
  const elNavBg = elMoNavContainer.querySelector('.nav_bg')
  const elSearchPc = elMidheader.querySelector('.search_form_box');
  const elSearchMob = elMoNavContainer.querySelector('.mo_search_form_box');  
  


  
  // 함수
  // 처음 실행된 브라우저 너비가 1200보다 작으면 .elSearchPc 제거, 크면 .elSearchMob 제거
  const fnCkWidth = () => {
    const browserW = window.matchMedia("all and (max-width: 1199px)").matches;

    if (browserW) {
      elSearchPc.remove();
      elMoNavContainer.append(elSearchMob);
      elSearchMob.after(elNavBg);
    } else {
      elSearchMob.remove();
      elMidheader.append(elSearchPc);
    }
  }
  fnCkWidth();
  
  // 이벤트
  // resize 되면 실행
  window.addEventListener('resize', () => {
    fnCkWidth();
  });



})();