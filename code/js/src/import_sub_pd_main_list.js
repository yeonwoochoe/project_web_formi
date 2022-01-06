//import_sub_pd_main_list.js
// 서브페이지 메인상품리스트 영역 분리하여 불러오기 

// //data :
// let mainData = {

// mainViewlist : [

//   {mainTitle : '<h3><span>DAILY HEALTHY MEAL</span>더포르미</h3> <h4>맛있는 가벼움, 5가지 건강한 잡곡 데일리 간편도시락 더포르미</h4><p>압력밥솥으로 짓는 잡곡밥, 수제반찬으로 언제 어디서나 속 편한 한끼!<br/>다양한 12종 구성으로 남녀노소 일반식으로 적합한 도시락입니다.</p>',
//   mainImg: 'rolling_theforme_01.jpg,'},

//   {mainTitle : '<h3><span>DAILY HEALTHY MEAL</span>반칙도시락</h3> <h4>맛있는 가벼움, 5가지 건강한 잡곡 데일리 간편도시락 반칙도시락</h4><p>압력밥솥으로 짓는 잡곡밥, 수제반찬으로 언제 어디서나 속 편한 한끼!<br/>다양한 12종 구성으로 남녀노소 일반식으로 적합한 도시락입니다.</p>',
//   mainImg: 'rolling_theforme_02.jpg,'},


//   {mainTitle : '<h3><span>DAILY HEALTHY MEAL</span>인생도시락</h3> <h4>맛있는 가벼움, 5가지 건강한 잡곡 데일리 간편도시락 더포르미</h4><p>압력밥솥으로 짓는 잡곡밥, 수제반찬으로 언제 어디서나 속 편한 한끼!<br/>다양한 12종 구성으로 남녀노소 일반식으로 적합한 도시락입니다.</p>',
//   mainImg: 'rolling_theforme_03.jpg,'},

//   {mainTitle : '<h3><span>DAILY HEALTHY MEAL</span>신애한끼</h3> <h4>맛있는 가벼움, 5가지 건강한 잡곡 데일리 간편도시락 더포르미</h4><p>압력밥솥으로 짓는 잡곡밥, 수제반찬으로 언제 어디서나 속 편한 한끼!<br/>다양한 12종 구성으로 남녀노소 일반식으로 적합한 도시락입니다.</p>',
//   mainImg: 'rolling_theforme_04.jpg,'}

//   ],

// mainPdlist : [

//   {mainPdTitle : '더포르미 제품보기'},
//   {mainPdTitle : '반칙도시락 제품보기'},
//   {mainPdTitle : '인생도시락 제품보기'},
//   {mainPdTitle : '신애한끼 제품보기'}
// ],


// mainPdConlist : [

//   {mainPdTitle : '<h4 class="blind">main_product_name</h4><div class="thumbnail"><div class="shop_bag_icon"></div><img src="../../../img/thumbnail/main_pd_01.jpg" alt="main-product" /></div><div class="description"><div class="main_pd_name"><a href="#">[포르미] 더포르미</a><p class="sub_text">&#35;1주식단 &#35;인기세트 &#35;흑현미3종 &#35;귀리3종 </p></div><div class="main_pd_price"><span class="main_pd_p_dc"><span class="blind">할인가</span>24,500원</span><span class="main_pd_per_price"><span class="blind">정가</span>30,500원</span><span class="main_pd_sale_price"><span class="blind">할인률</span>20&#37;</span>'},

//   {mainPdTitle : '<h4 class="blind">main_product_name</h4><div class="thumbnail"><div class="shop_bag_icon"></div><img src="../../../img/thumbnail/main_pd_01.jpg" alt="main-product" /></div><div class="description"><div class="main_pd_name"><a href="#">[포르미] 반칙도시락</a><p class="sub_text">&#35;1주식단 &#35;인기세트 &#35;흑현미3종 &#35;귀리3종 </p></div><div class="main_pd_price"><span class="main_pd_p_dc"><span class="blind">할인가</span>24,500원</span><span class="main_pd_per_price"><span class="blind">정가</span>30,500원</span><span class="main_pd_sale_price"><span class="blind">할인률</span>20&#37;</span>'},


//   {mainPdTitle : '<h4 class="blind">main_product_name</h4><div class="thumbnail"><div class="shop_bag_icon"></div><img src="../../../img/thumbnail/main_pd_01.jpg" alt="main-product" /></div><div class="description"><div class="main_pd_name"><a href="#">[포르미] 인생도시락</a><p class="sub_text">&#35;1주식단 &#35;인기세트 &#35;흑현미3종 &#35;귀리3종 </p></div><div class="main_pd_price"><span class="main_pd_p_dc"><span class="blind">할인가</span>24,500원</span><span class="main_pd_per_price"><span class="blind">정가</span>30,500원</span><span class="main_pd_sale_price"><span class="blind">할인률</span>20&#37;</span>'},


//   {mainPdTitle : '<h4 class="blind">main_product_name</h4><div class="thumbnail"><div class="shop_bag_icon"></div><img src="../../../img/thumbnail/main_pd_01.jpg" alt="main-product" /></div><div class="description"><div class="main_pd_name"><a href="#">[포르미] 신애한끼</a><p class="sub_text">&#35;1주식단 &#35;인기세트 &#35;흑현미3종 &#35;귀리3종 </p></div><div class="main_pd_price"><span class="main_pd_p_dc"><span class="blind">할인가</span>24,500원</span><span class="main_pd_per_price"><span class="blind">정가</span>30,500원</span><span class="main_pd_sale_price"><span class="blind">할인률</span>20&#37;</span>'},

//   ],
// };


{
  //data 변수
  const subPdListData = './temp/content/sub_pd_main_list.html';
  //선택자 변수
  const elSubPdWrap = document.querySelector('.sub_pd_wrapper');
//   const elViewBox = document.querySelector('#viewBox');
//   const elViewArea = elViewBox.querySelector('.view_area');
//   const elViewTitle = elViewArea.querySelector('.view_title');
//   const elMainPdBox = document.querySelector('#mainPdBox');
//   const elMainPdTitle = elMainPdBox.querySelector('.main_pd_title');
//   const elMainPdWrap =  elMainPdBox.querySelector('.main_pd_wrap');
//   const elMainConbox = elMainPdWrap.querySelector ('.main_conbox');

  
//   const elMainPdDescrip =  elMainPdWrap.querySelector('.description');

  
// // const card = card[0];
// // (elMainConbox)=>{
// //   elMainConbox.innerHTML = mainData.mainPdConlist[0].mainPdTitle;
// // }


// //생성 후 삽입  =============================================

// elViewTitle.innerHTML =  mainData.mainViewlist[0].mainTitle;

// const mkH2 = document.createElement('h2'); //h2생성
// mkH2.innerHTML = mainData.mainPdlist[0].mainPdTitle
// elMainPdTitle.prepend(mkH2); //description 삽입

// elMainConbox.innerHTML = mainData.mainPdConlist[0].mainPdTitle;




// //기능함수 =======================================================


// // 


  fetch(subPdListData)
    .then( response => response.text() )
    .then( (element) =>{elSubPdWrap.innerHTML = element;})

    







    
  };



