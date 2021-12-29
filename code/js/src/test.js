const mobileSize = `screen and (max-width:767px)`;
const tabSize = `screen and (max-width:767px) and (max-width:1199px)`;
const pcSize = `screen and (min-width:1200px)`;
let nowDevice;

const deviceCheck = [
  {type:'mobile', check:mobileSize , code: '../html', scripet:'../js'},
  {type:'tablet', check:tabSize },
  {type:'pc', check:pcSize },
];


const fnDeviec = (i) =>{
  fetch(deviceCheck[num].code)
  .then(response => response.text()) // html 불러오기
  .then(data  =>elHeadWrap.innerHTML = data) // 불러온 html삽입
  .then(() => fnMKScript(tScript)) // html형식에 맞는 script코드 삽입
  .then(() => ckClass = fnMKScript(setd)
}


// const fnDevice = (type) =>{
//   switch(type) {
//     case 'mobile' : 
//     //    기능수행
//     break;
//     case 'tablet' : 
//     //    기능수행
//     break;
//     case 'pc' : 
//     //    기능수행
//     break;

//   }
//   //fetch( ) .....
// }

deviceCheck.forEach (  (media,index)=>{
  const mediaQuery = window.matchMedia(media.check);
  mediaQuery.addEventListener('change',(e)=>{ // 
    if(e.matches){
      nowDevice =  deviceCheck[index].type;
    }
    fnDevice(nowDevice);
//  });

})