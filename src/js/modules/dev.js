export default function addWindowStatsElement() {
  const style = {
    "background-color": "rgba(0,0,0,0.6)",
    "color": "#ffffff",
    "position": "fixed",
    "top": "0",
    "left": "0",
    "font-size": "12px",
    "font-family": "monospace",
    "padding": "0 8px",
    "z-index": "1000000",
    "line-height": "1",
  };
  const windowStatsElement = document.createElement("div");
  for (let key in style) {windowStatsElement.style[key] = style[key];}
  document.body.insertBefore(windowStatsElement, document.body.firstChild);
  
  let browserName = null;
  const userAgent = navigator.userAgent.toLowerCase();
  if (/opera/.test(userAgent) || /opr/.test(userAgent)) {
    browserName = 'Opera';
  } else if (/edg/.test(userAgent)) {
    browserName ='Edge';
  } else if (/firefox/.test(userAgent)) {
    browserName ='Firefox';
  } else if (/trident/.test(userAgent)) {
    browserName ='MsIE';
  } else if (/chrome/.test(userAgent)) {
    browserName ='Chrome';
  } else if (/safari/.test(userAgent)) {
    browserName ='Safari';
  } else {
    browserName ='Unknown';
  }

  window.addEventListener("resize", refreshWindowStats);

  refreshWindowStats();
  
  function refreshWindowStats(){
    const viewPortWidth = document.documentElement.clientWidth;
    const viewPortHeight = document.documentElement.clientHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const template = `<div>V: ${viewPortWidth}x${viewPortHeight} | W: ${windowWidth}x${windowHeight} | S: ${screenWidth}x${screenHeight} | B: ${browserName}</div>`;
    windowStatsElement.innerHTML = template;
  };
}


//13.12.2020
//"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:81.0) Gecko/20100101 Firefox/81.0" //firefox

//"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36" //chrome
//"Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Mobile Safari/537.36" //chrome mobile

//"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134" //edge

//"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36 OPR/72.0.3815.400" //opera
//"Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Mobile Safari/537.36" //opera mobile

//"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Safari/605.1.15" - safari
//"Mozilla/5.0 (iPhone; CPU iPhone OS 12_4 like Mac OS X) AppleWebkit/605.1.15 (KHTML, like Gecko) Version/12.1.2 Mobile/15E148 Safari/604.1 - safari mobile