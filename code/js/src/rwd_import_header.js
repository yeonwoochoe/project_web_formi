//rwd_import_header.js

{
  //선택자 변수
  const elBody = document.querySelector("body");
  const elHeadWrap = document.querySelector(".head_wrapper");

  // ======================================================
  // 3가지 디바이스 환경 반응형 변수  :size오타
  const mobileSize = `screen and (max-width:767px)`;
  const tabSize = `screen and (min-width:768px) and (max-width:1199px)`;
  const pcSize = `screen and (min-width:1200px)`;

  let nowDevice;

  //============================================================
  //3가지 디바이스 환경 html, js 객체화 변수

  const deviceCheck = [
    {
      type: "mobile",
      check: mobileSize,
      code: "../html/temp/mob_header.html",
      script: "../js/src/rwd/mobile_header.js",
    },
    {
      type: "tablet",
      check: tabSize,
      code: "../html/temp/tablet_header.html",
      script: "../js/src/rwd/tablet_header.js",
    },
    {
      type: "pc",
      check: pcSize,
      code: "../html/temp/pc_header.html",
      script: "../js/src/rwd/pc_header.js",
    },
  ];

  //기능 함수
  const fnMKScript = data => {
    // .navScript 요소가 존재한다면 선택 후 삭제 (기존 script문서 삭제)
    const ckScript = document.querySelector(".navScript");
    if (!!ckScript) {
      ckScript.remove();
    }
    // 새로운 기능을 가진 script를 생성 및 첨부
    const mkScript = document.createElement("script");
    mkScript.setAttribute("src", data);
    mkScript.setAttribute("class", "navScript");
    elBody.append(mkScript);
  };

  //여기까지는 이해감..그이후로 해석불가능,,
  //-----------------------------------------------------------

  const fnDevice = num => {
    const deviceN = deviceCheck[num];
    console.log(num);
    fetch(deviceN.code)
      .then(response => response.text()) // html 불러오기
      .then(data => (elHeadWrap.innerHTML = data)) // 불러온 html삽입
      .then(() => fnMKScript(deviceN.script)); // html형식에 맞는 script코드 삽입  // code오타
  };

  // 기본화면에서 체크 : 사이즈변화이전 기본형태에서 체크 미작성
  deviceCheck.forEach((media, index) => {
    // 배열형식으로된내용 각각 수행하여 체크
    const mediaQuery = window.matchMedia(media.check); // type-insert
    //MediaQueryList 속성이용하여 불린데이터 반환
    if (mediaQuery.matches) {
      nowDevice = deviceCheck[index].type;
      console.log(nowDevice);
      fnDevice(index);
    }
  });

  // 페이지 사이트 변화시 체크
  deviceCheck.forEach((media, index) => {
    // 배열형식으로된내용 각각 수행하여 체크
    //matchMedia 미디어 쿼리를 나타내는 문자열.
    const mediaQuery = window.matchMedia(media.check); // type-insert
    mediaQuery.addEventListener("change", e => {
      // mediaQuery 변화시 체크
      if (e.matches) {
        nowDevice = deviceCheck[index].type;
        console.log(nowDevice);
        fnDevice(index);
      }
    });
  });
}
