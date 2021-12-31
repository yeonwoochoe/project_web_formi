// rwd_header_area.js
// header 영역 분리하여 불러오기 

{
  const path = './temp/';
  const footerData = 'footer_area.html';

  const elBody = document.querySelector('body');
  const elFootBox = document.querySelector('#footBox');

  const fnScript = ()=>{
    const mkScript = document.createElement('script');
    mkScript.setAttribute('src','/js/src/imoport_footer.js');
    elBody.append(mkScript);
  };
  
  fetch(path+footerData)
    .then( response => response.text() )
    .then( (element) =>{
      elFootBox.innerHTML = element;
    })
    .then(()=>{
      fnScript();
    })
}