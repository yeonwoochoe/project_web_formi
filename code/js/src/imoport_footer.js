// imoport_footer.js
// footer 영역 분리하여 불러오기 

{
  const path = './temp/';
  const footerData = 'footer_area.html';

  const elBody = document.querySelector('body');
  const elFootBox = document.querySelector('#footBox');


//기능 함수



  const fnScript = ()=>{
    const mkScript = document.createElement('script');
    mkScript.setAttribute('src','/js/src/footer.js');
    elBody.append(mkScript);
  };
  
  fetch(path+footerData)
    .then( response => response.text() )
    .then( (element) =>{
      elFootBox.innerHTML = element;
    })
    .then(()=>{
      fnScript()
    })






  };




