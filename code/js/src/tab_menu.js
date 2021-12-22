//tab_menu.js


// 시나리오
// * 탭메뉴를 클릭하여, 해당하는 순번에 맞는 내용을 나타나게 만들기
// 1. .tab_title_inner내부에 있는 li(그 내부의 button)을 클릭하여, 순서를 파악한다.
// 2. .tab_content_inner내부에 있는 순서에 맞는 .tab_content_part를 나타나게 한다.
// 3. display처리를 해도 되지만, 해당하는 순번에(li와, .tab_content_part) 각각 .on을 첨부
// 4. 선택되지 않은 요소는 .on의 선택 해제
// -  button/a 기본으로 가지고 있는 요소에 기능은 클릭시 처리에 방해되므로 기능을 해제


//=================================================
// 기본 변수
//--------------title 영역

const elbrandAboutBox = document.querySelector('#brandAboutBox');
const elBrandWrap = elbrandAboutBox.querySelector('.brand_wrap');
const elTabTitleArea = elBrandWrap.querySelector('.tab_title_area');
const eltitleInnerPart = elTabTitleArea.querySelector('ul');

const eltitleList = eltitleInnerPart.children;
const eltitleArr = [].slice.call(eltitleList);



const elTabContentArea = elBrandWrap.querySelector('.tab_content_area');
const elcontentPart = elTabContentArea.querySelectorAll('.tab_con');
let indexCheck = 0;
const optionName = 'action';

// ===========================================
// 기본 추가기능 
eltitleArr[indexCheck].classList.add(optionName);
elcontentPart[indexCheck].classList.add(optionName); 


// ===========================================
// 함수
const arrContextFn = function(element){
  element.forEach(function(el, idx){
    (idx !== indexCheck) ? el.classList.remove(optionName) : el.classList.add(optionName);
  });
};



// ===========================================
// 이벤트처리
eltitleArr.forEach(function(element, index){
  // li 내부 버튼선택
  
  const titleBtn = element.querySelector('button');
  titleBtn.addEventListener('click', function(event){
    event.preventDefault();

    indexCheck = index;
    arrContextFn(eltitleArr);
    arrContextFn(elcontentPart);
    
  });
});