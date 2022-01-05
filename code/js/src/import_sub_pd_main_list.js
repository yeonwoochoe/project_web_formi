//import_sub_pd_main_list.js

// footer 영역 분리하여 불러오기 

{

  const subPdListData = './temp/content/sub_pd_main_list.html';


  const elSubPdWrap = document.querySelector('.sub_pd_wrapper');


  
  fetch(subPdListData)
    .then( response => response.text() )
    .then( (element) =>{elSubPdWrap.innerHTML = element;})
  };



