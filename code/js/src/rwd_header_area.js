// rwd_header_area.js
// header 영역 분리하여 불러오기 

{
  const path = './temp/';
  const headerData = 'rwd_header.html';

  const elBody = document.querySelector('body');
  const elHeadWrap = document.querySelector('.head_wrapper');

  const fnScript = ()=>{
    const mkScript = document.createElement('script');
    mkScript.setAttribute('src','/js./src/rwd_import_header.js');
    elBody.append(mkScript);
  };

  fetch(path+headerData)
    .then( response => response.text() )
    .then( (element) =>{
      elHeadWrap.innerHTML = element;
    })
    .then(()=>{
      fnScript();
    })
}