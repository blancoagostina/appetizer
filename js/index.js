var cursor=0;
var limit=0;

window.onload = function() {
  (function(d){
    var
    ce=function(e,n){var a=document.createEvent("CustomEvent");a.initCustomEvent(n,true,true,e.target);e.target.dispatchEvent(a);a=null;return false},
    nm=true,sp={x:0,y:0},ep={x:0,y:0},
    touch={
      touchstart:function(e){sp={x:e.touches[0].pageX,y:e.touches[0].pageY}},
      touchmove:function(e){nm=false;ep={x:e.touches[0].pageX,y:e.touches[0].pageY}},
      touchend:function(e){if(nm){ce(e,'fc')}else{var x=ep.x-sp.x,xr=Math.abs(x),y=ep.y-sp.y,yr=Math.abs(y);if(Math.max(xr,yr)>20){ce(e,(xr>yr?(x<0?'swl':'swr'):(y<0?'swu':'swd')))}};nm=true},
      touchcancel:function(e){nm=false}
    };
    for(var a in touch){d.addEventListener(a,touch[a],false);}
  })(document);
  $("html").addClass('cl-preload');
  window.cursor=0;
  setTimeout(function() {
    ajusteStory();
    ajusteFooter();
    ajusteConfian();
    setsDesk();
    initmob();
    ajusteMob();
    ajusteDesk();
    headerColorsMob();
    $("html").removeClass('cl-preload');
  },1500);
}
console.log(window.innerHeight)
  
  window.addEventListener('resize', function(){
    ajusteStory();
    ajusteFooter();
    ajusteConfian();
    setsDesk();
    headerColorsMob();
    ajusteMob();
    ajusteDesk();
  });
  
  document.body.addEventListener('swu', function(){
    if (window.limit==0) {
      window.limit = 1;
      avanzar()
      setTimeout(function(){window.limit = 0;},1500);
    }
  });
  document.body.addEventListener('swd', function(){
    if (window.limit==0) {
      window.limit = 1;
      retroceder()
      setTimeout(function(){window.limit = 0;},1500);
    }
  });
  window.addEventListener('wheel', function(){
    if (window.limit==0) {
      window.limit = 1;
      if (event.deltaY < 0){
        retroceder()
      }
      if (event.deltaY > 0){
        avanzar()
      }
      setTimeout(function(){window.limit = 0;},1500);
    }
  });
  function ajusteFooter(){
    let body = document.getElementsByTagName("body");
    let form = document.getElementById("form");
    let coCrea = document.getElementById("co-crea");
    let  mensaje = document.getElementById("mensaje");
    if (window.innerHeight < window.innerWidth && window.innerWidth < 768) {
      body[0].classList.add("landscape");
      form.classList.remove("col-12");
      form.classList.add("col-6");
      coCrea.classList.remove("col-12");
      coCrea.classList.add("col-6");
      mensaje.rows= "2";

    }else{
      body[0].classList.remove("landscape");
      form.classList.remove("col-6");
      form.classList.add("col-12");
      coCrea.classList.remove("col-6");
      coCrea.classList.add("col-12");
      mensaje.rows = "3";
    }
  }
  function ajusteConfian(){
    let confian = document.getElementById("confian");
    let slide11 = document.getElementById("slide11");
    let slide12 = document.getElementById("slide12");
    let slide13 = document.getElementById("slide13");
    let slide14 = document.getElementById("slide14");
    let slide21 = document.getElementById("slide21");
    let slide22 = document.getElementById("slide22");
    let slide23 = document.getElementById("slide23");
    let slide24 = document.getElementById("slide24");
    let slide31 = document.getElementById("slide31");
    let slide32 = document.getElementById("slide32");
    let slide33 = document.getElementById("slide33");
    let slide34 = document.getElementById("slide34");
    if (window.innerHeight < window.innerWidth && window.innerWidth < 768) {
      slide11.classList.remove("col-12");
      slide11.classList.add("col-8");
      slide12.classList.remove("col-12");
      slide12.classList.add("col-4");
      slide13.classList.remove("col-6");
      slide13.classList.add("col-12");
      slide14.classList.remove("col-6");
      slide14.classList.add("col-12");
      slide21.classList.remove("col-12");
      slide21.classList.add("col-8");
      slide22.classList.remove("col-12");
      slide22.classList.add("col-4");
      slide23.classList.remove("col-6");
      slide23.classList.add("col-12");
      slide24.classList.remove("col-6");
      slide24.classList.add("col-12");
      slide31.classList.remove("col-12");
      slide31.classList.add("col-8");
      slide32.classList.remove("col-12");
      slide32.classList.add("col-4");
      slide33.classList.remove("col-6");
      slide33.classList.add("col-12");
      slide34.classList.remove("col-6");
      slide34.classList.add("col-12");
    }else{
      slide11.classList.remove("col-8");
      slide11.classList.add("col-12");
      slide12.classList.remove("col-4");
      slide12.classList.add("col-12");
      slide13.classList.remove("col-12");
      slide13.classList.add("col-6");
      slide14.classList.remove("col-12");
      slide14.classList.add("col-6");
      slide21.classList.remove("col-8");
      slide21.classList.add("col-12");
      slide22.classList.remove("col-4");
      slide22.classList.add("col-12");
      slide23.classList.remove("col-12");
      slide23.classList.add("col-6");
      slide24.classList.remove("col-12");
      slide24.classList.add("col-6");
      slide31.classList.remove("col-8");
      slide31.classList.add("col-12");
      slide32.classList.remove("col-4");
      slide32.classList.add("col-12");
      slide33.classList.remove("col-12");
      slide33.classList.add("col-6");
      slide34.classList.remove("col-12");
      slide34.classList.add("col-6");
    }
  }
  function enviar(){
    let form = document.getElementById("formHide");
    let thanks = document.getElementById("thanksShow");
    form.classList.add("d-none");
    thanks.classList.remove("d-none");
  }
  function ajusteStory(){
    let iS1 = document.getElementById("story1")
    let iSP1 = document.getElementById("storyP1")
    let iS2 = document.getElementById("story2")
    let iSP2 = document.getElementById("storyP2")
    let iS3 = document.getElementById("story3")
    let iSP3 = document.getElementById("storyP3")
    let iS4 = document.getElementById("story4")
    let iSP4 = document.getElementById("storyP4")
    let iS5 = document.getElementById("story5")
    let iSP5 = document.getElementById("storyP5")
    if (window.innerHeight < window.innerWidth) {
      iS1.classList.remove("d-block");
      iS1.classList.add("d-none");
      iSP1.classList.remove("d-none");
      iSP1.classList.add("d-block");
      
      iS2.classList.remove("d-block");
      iS2.classList.add("d-none");
      iSP2.classList.remove("d-none");
      iSP2.classList.add("d-block");
      
      iS3.classList.remove("d-block");
      iS3.classList.add("d-none");
      iSP3.classList.remove("d-none");
      iSP3.classList.add("d-block");
      
      iS4.classList.remove("d-block");
      iS4.classList.add("d-none");
      iSP4.classList.remove("d-none");
      iSP4.classList.add("d-block");
      
      iS5.classList.remove("d-block");
      iS5.classList.add("d-none");
      iSP5.classList.remove("d-none");
      iSP5.classList.add("d-block");
    }if (window.innerHeight > window.innerWidth && window.innerWidth < 768){
      iSP1.classList.remove("d-block");
      iSP1.classList.add("d-none");
      iS1.classList.remove("d-none");
      iS1.classList.add("d-block");
      
      iSP2.classList.remove("d-block");
      iSP2.classList.add("d-none");
      iS2.classList.remove("d-none");
      iS2.classList.add("d-block");
      
      iSP3.classList.remove("d-block");
      iSP3.classList.add("d-none");
      iS3.classList.remove("d-none");
      iS3.classList.add("d-block");
      
      iSP4.classList.remove("d-block");
      iSP4.classList.add("d-none");
      iS4.classList.remove("d-none");
      iS4.classList.add("d-block");
      
      iSP5.classList.remove("d-block");
      iSP5.classList.add("d-none");
      iS5.classList.remove("d-none");
      iS5.classList.add("d-block");
    }
  }
  $(function () {
    $('#contactForm').parsley().on('field:validated', function() {
      var ok = $('.parsley-error').length === 0;
      $('.bs-callout-info').toggleClass('hidden', !ok);
      $('.bs-callout-warning').toggleClass('hidden', ok);
    })
    .on('form:submit', function() {
      return false; // Don't submit form for this demo
    });
  });
  

  //mobile
  
  function setsMob(){
    let element = document.getElementById("cuadro")
    let text = document.getElementById("texto")
    let logo = document.getElementById("logo-principal")
    let logoH = document.getElementById("logo-header")
    if (window.innerWidth >= 992) {
      element.style.left ="35%"
      text.style.top ="50vh"
    }
    if (window.innerWidth < 992 && window.innerWidth >= 768) {
      element.style.left ="calc(55vw - calc("+element.clientWidth+"px/2))"
      element.style.top ="0"
      text.style.top ="50vh"
    }
    if (window.innerWidth <= 768 && window.innerWidth > 576) {
      element.style.left ="calc(70vw - calc("+element.clientWidth+"px/2))"
      element.style.top ="0"
      text.style.top ="24vh"
      logo.style.top ="calc(50vh - 100px)"
    }
    if (window.innerWidth <= 576 && window.innerWidth >= 0) {
      element.style.left ="calc(79vw - calc("+element.clientWidth+"px/2))"
      element.style.top ="0"
      text.style.top ="24vh"
      logo.style.top ="calc(50vh - 100px)"
    }
    if (window.innerHeight <= 768 && window.innerWidth >= 0 && window.innerHeight < window.innerWidth) {
      text.getElementsByTagName('h1')[0].style.fontSize ="4rem"
      text.getElementsByTagName('h2')[0].style.fontSize ="4rem"
      text.getElementsByTagName('h2')[0].style.lineHeight ="4rem"
      text.getElementsByTagName('h2')[0].style.paddingTop ="100px"
      text.getElementsByTagName('p')[0].style.fontSize ="18px"
    }else{
      if (window.innerWidth >= 992) {
      text.getElementsByTagName('h1')[0].style.fontSize ="4rem"
      text.getElementsByTagName('h2')[0].style.fontSize ="4rem"
      text.getElementsByTagName('h2')[0].style.lineHeight ="4rem"
      text.getElementsByTagName('h2')[0].style.paddingTop ="0"
      text.getElementsByTagName('p')[0].style.fontSize ="1.6vw"
      }
      if (window.innerWidth < 992 && window.innerWidth >= 768) {
      text.getElementsByTagName('h1')[0].style.fontSize ="4rem"
      text.getElementsByTagName('h2')[0].style.fontSize ="4rem"
      text.getElementsByTagName('h2')[0].style.lineHeight ="4rem"
      text.getElementsByTagName('h2')[0].style.paddingTop ="0"
      text.getElementsByTagName('p')[0].style.fontSize ="1.6vw"
      }
      if (window.innerWidth <= 768 && window.innerWidth > 576) {
      text.getElementsByTagName('h1')[0].style.fontSize ="4rem"
      text.getElementsByTagName('h2')[0].style.fontSize ="3rem"
      text.getElementsByTagName('h2')[0].style.lineHeight ="3rem"
      text.getElementsByTagName('h2')[0].style.paddingTop ="0"
      text.getElementsByTagName('p')[0].style.fontSize ="25px"
      }
      if (window.innerWidth <= 576 && window.innerWidth >= 0) {
      text.getElementsByTagName('h1')[0].style.fontSize ="4rem"
      text.getElementsByTagName('h2')[0].style.fontSize ="3rem"
      text.getElementsByTagName('h2')[0].style.lineHeight ="3rem"
      text.getElementsByTagName('h2')[0].style.paddingTop ="0"
      text.getElementsByTagName('p')[0].style.fontSize ="22px"
      }
      if (window.innerWidth <= 767) {
        if (window.innerHeight < 574) {
          text.style.top ="50vh"
          logo.style.top ="calc(35vh - 100px)"
          if (window.innerWidth < 574) {
            text.getElementsByTagName('h2')[0].style.fontSize ="38px"
            text.getElementsByTagName('h2')[0].style.lineHeight ="36px"
          }
        }if (window.innerHeight < 768 && window.innerHeight > 574) {
          text.style.top ="60vh"
        }
      }
    }
    logoViewMob()
  }
  function initmob(){
    document.getElementById("box2text1").classList.add("active-y");
    document.getElementById("box2text2").classList.add("bottom");
    document.getElementById("box3text1").classList.add("active-x");
    document.getElementById("box3text2").classList.add("left");
    document.getElementById("box6text1").classList.add("active-x");
    document.getElementById("box6text2").classList.add("left");
    let sections=[];
    for (let i = 1; i < 9; i++) {
      let a ={section:document.getElementById("seccion"+i)}
      sections.push(a);
    }
    for(let sect of sections){
      if (sect.section.id=="seccion1") {
        sect.section.classList.add("active-y");
        sect.section.classList.add("active-x");
      }else{
        sect.section.classList.add("bottom");
      }
    }
  }
  function avanzar(){
    switch (window.cursor) {
      case 0:
        positivoY("seccion1","seccion2");
        window.cursor++
        break;
      case 1:
        positivoY("box2text1","box2text2");
        window.cursor++
        break;
      case 2:
        positivoY("seccion2","seccion3");
        window.cursor++
        break;
      case 3:
        positivoX("box3text1","box3text2");
        window.cursor++
        break;
      case 4:
        positivoY("seccion3","seccion4");
        window.cursor++
        break;
      case 5:
        positivoY("seccion4","seccion5");
        window.cursor++
        break;
      case 6:
        positivoY("seccion5","seccion6");
        window.cursor++
        break;
      case 7:
        positivoX("box6text1","box6text2");
        window.cursor++
        break;
      case 8:
        positivoY("seccion6","seccion7");
        window.cursor++
        break;
      case 9:
        positivoY("seccion7","seccion8");
        window.cursor++
        break;
      case 10:
        break;
      default:
        break;
    }
    headerColorsMob();
  };

  
  function navigateToForm(){
    for (let index = window.cursor; index <= 10 ; index++) {
      avanzar()
    }
  };

  function retroceder(){
    switch (window.cursor) {
      case 0:
        break;
      case 1:
        negativoY("seccion2","seccion1");
        window.cursor--
        break;
      case 2:
        negativoY("box2text2","box2text1");
        window.cursor--
        break;
      case 3:
        negativoY("seccion3","seccion2");
        window.cursor--
        break;
      case 4:
        negativoX("box3text2","box3text1");
        window.cursor--
        break;
      case 5:
        negativoY("seccion4","seccion3");
        window.cursor--
        break;
      case 6:
        negativoY("seccion5","seccion4");
        window.cursor--
        break;
      case 7:
        negativoY("seccion6","seccion5");
        window.cursor--
        break;
      case 8:
        negativoX("box6text2","box6text1");
        window.cursor--
        break;
      case 9:
        negativoY("seccion7","seccion6");
        window.cursor--
        break;
      case 10:
        negativoY("seccion8","seccion7");
        window.cursor--
        break;
      default:
        break;
    }
    headerColorsMob();
  }
  function positivoY(valor1, valor2){
    let elementoA = document.getElementById(valor1);
    let elementoB = document.getElementById(valor2);
    elementoA.classList.remove("active-y");
    elementoA.classList.add("top");
    elementoB.classList.remove("bottom");
    elementoB.classList.add("active-y");
  }
  function positivoX(valor1, valor2){
    let elementoA = document.getElementById(valor1);
    let elementoB = document.getElementById(valor2);
    elementoA.classList.remove("active-x");
    elementoA.classList.add("right");
    elementoB.classList.remove("left");
    elementoB.classList.add("active-x");
  }
  function negativoY(valor1, valor2){
    let elementoA = document.getElementById(valor1);
    let elementoB = document.getElementById(valor2);
    elementoA.classList.remove("active-y");
    elementoA.classList.add("bottom");
    elementoB.classList.remove("top");
    elementoB.classList.add("active-y");
  }
  function negativoX(valor1, valor2){
    let elementoA = document.getElementById(valor1);
    let elementoB = document.getElementById(valor2);
    elementoA.classList.remove("active-x");
    elementoA.classList.add("left");
    elementoB.classList.remove("right");
    elementoB.classList.add("active-x");
  }
  function logoViewMob(){
    let logoH = document.getElementById("logo-header")
    let logo = document.getElementById("logo-principal")
    if (window.innerWidth <= 768 && window.innerWidth >= 0) {
      if (window.cursor >= 1) {
        logoH.style.opacity ="1"
        logo.style.opacity ="0"
      }
      if (window.cursor == 0) {
        logoH.style.opacity ="0"
        logo.style.opacity ="1"
      }
      if (window.innerHeight <= 768 && window.innerWidth >= 0 && window.innerHeight < window.innerWidth) {
        logoH.style.opacity ="1"
        logo.style.opacity ="0"
      }
    }
    if (window.innerWidth > 768) {
      logoH.style.opacity ="1"
      logo.style.opacity ="0"
    }
  }
  function headerColorsMob(){
    let logoH = document.getElementById("Capa_1-2").getElementsByTagName('path')
    let mail = document.getElementById("mail")
    let facebook = document.getElementById("facebook")
    let instagram = document.getElementById("instagram")
    let nav = document.getElementById("nav")
    let mailto = document.getElementById("mailto")
    let facebookSub = document.getElementById("facebook-sub")
    let instagramSub = document.getElementById("instagram-sub")
    let header = document.getElementById("headerP")
    if (window.innerWidth < 768) {
      if (window.cursor == 0) {
        for(let i of logoH){
          i.style.fill ="#fff"
        }
        mail.style.color ="#fff"
        facebook.style.color ="#fff"
        instagram.style.color ="#fff"
        header.style.backgroundColor = "transparent"
      }
      if (window.cursor >= 1 && window.cursor <= 5) {
        for(let i of logoH){
          i.style.fill ="#000"
        }
        mail.style.color ="#000"
        facebook.style.color ="#000"
        instagram.style.color ="#000"
        header.style.backgroundColor = "transparent"
      }
      if (window.cursor >= 6 && window.cursor <= 8) {
        for(let i of logoH){
          i.style.fill ="#fff"
        }
        mail.style.color ="#fff"
        facebook.style.color ="#fff"
        instagram.style.color ="#fff"
        header.style.backgroundColor = "transparent"
      }
      if (window.cursor == 9) {
        for(let i of logoH){
          i.style.fill ="#000"
        }
        mail.style.color ="#000"
        facebook.style.color ="#000"
        instagram.style.color ="#000"
        nav.style.display ="flex"
        mailto.classList.add("d-none")
        facebookSub.classList.add("d-none")
        instagramSub.classList.add("d-none")
        header.style.backgroundColor = "transparent"
      }
      if (window.cursor == 10) {
        for(let i of logoH){
          i.style.fill ="#fff"
        }
        nav.style.display ="none"
        mailto.classList.remove("d-none")
        facebookSub.classList.remove("d-none")
        instagramSub.classList.remove("d-none")
        header.style.backgroundColor = "transparent"
      }
    }else{
      if (window.cursor == 0) {
        for(let i of logoH){
          i.style.fill ="#fff"
        }
        mail.style.color ="#fff"
        facebook.style.color ="#fff"
        instagram.style.color ="#fff"
        header.style.backgroundColor = "transparent"
      }
      if (window.cursor >= 1 && window.cursor <= 5) {
        for(let i of logoH){
          i.style.fill ="#000"
        }
        mail.style.color ="#000"
        facebook.style.color ="#000"
        instagram.style.color ="#000"
        header.style.backgroundColor = "transparent"
        nav.style.display ="flex"
        mailto.classList.add("d-none")
        facebookSub.classList.add("d-none")
        instagramSub.classList.add("d-none")
      }
      if(window.cursor >= 6 && window.cursor <= 8){
        for(let i of logoH){
          i.style.fill ="#fff"
        }
        mail.style.color ="#fff"
        facebook.style.color ="#fff"
        instagram.style.color ="#fff"
      }
      if (window.cursor == 9) {
        for(let i of logoH){
          i.style.fill ="#000"
        }
        mail.style.color ="#000"
        facebook.style.color ="#000"
        instagram.style.color ="#000"
        nav.style.display ="flex"
        mailto.classList.add("d-none")
        facebookSub.classList.add("d-none")
        instagramSub.classList.add("d-none")
        header.style.backgroundColor = "transparent"
      }
      if (window.cursor == 10) {
        for(let i of logoH){
          i.style.fill ="#fff"
        }
        nav.style.display ="none"
        mailto.classList.remove("d-none")
        facebookSub.classList.remove("d-none")
        instagramSub.classList.remove("d-none")
        header.style.backgroundColor = "transparent"
      }
    }
    logoViewMob()
  }
  function ajusteMob(){
    var texto1 = document.getElementById("box2text");
    var texto2 = document.getElementById("box3text");
    if (window.innerHeight <= 439) {
      texto1.style.marginTop ="40vh"
      texto1.style.height ="60vh"
      texto2.style.paddingTop ="40vh"
    }
    if (window.innerHeight <= 557 && window.innerHeight > 439) {
      texto1.style.marginTop ="50vh"
      texto1.style.height ="45vh"
      texto2.style.paddingTop ="50vh"
    }if (window.innerHeight > 557) {
      texto1.style.marginTop ="62vh"
      texto1.style.height ="40vh"
      texto2.style.paddingTop ="62vh"
    }
  }


  // desktop
  function setsDesk(){
    let element = document.getElementById("cuadro")
    let text = document.getElementById("texto")
    let logo = document.getElementById("logo-principal")
    let logoH = document.getElementById("logo-header")
    if (window.innerWidth >= 1025) {
      element.style.opacity ="1"
      text.style.top ="50vh"
      text.style.opacity ="1"
      logoH.style.opacity ="1"
    }
    if (window.innerWidth <= 1024 && window.innerWidth > 768) {
      element.style.opacity ="1"
      element.style.top ="0"
      text.style.opacity ="1"
      text.style.top ="50vh"
      logoH.style.opacity ="1"
    }
    if (window.innerWidth <= 768 && window.innerWidth > 576) {
      element.style.opacity ="1"
      element.style.top ="-13vh"
      text.style.opacity ="1"
      text.style.top ="58vh"
      logo.style.top ="calc(60vh - 100px)"
    }
    if (window.innerWidth <= 576 && window.innerWidth >= 0) {
      element.style.opacity ="1"
      element.style.top ="-13vh"
      text.style.opacity ="1"
      text.style.top ="60vh"
      logo.style.top ="calc(60vh - 100px)"
    }
    if (window.innerHeight <= 768 && window.innerWidth >= 0 && window.innerHeight < window.innerWidth) {
      text.getElementsByTagName('h1')[0].style.fontSize ="4rem"
      text.getElementsByTagName('h1')[0].style.lineHeight ="4rem"
      text.getElementsByTagName('h1')[0].style.paddingTop ="0"
      //text.getElementsByTagName('p')[0].style.fontSize ="18px"
      element.style.top ="0"
    }else{
      if (window.innerWidth >= 992) {
      text.getElementsByTagName('h1')[0].style.fontSize ="4.5rem"
      text.getElementsByTagName('h1')[0].style.lineHeight ="5rem"
      text.getElementsByTagName('h1')[0].style.paddingTop ="0"
      //text.getElementsByTagName('p')[0].style.fontSize ="1.6vw"
      }
      if (window.innerWidth < 992 && window.innerWidth >= 768) {
      text.getElementsByTagName('h1')[0].style.fontSize ="4rem"
      text.getElementsByTagName('h1')[0].style.lineHeight ="4rem"
      text.getElementsByTagName('h1')[0].style.paddingTop ="0"
      }
    }
    logoViewDesk()
  }
  function logoViewDesk(){
    let logoH = document.getElementById("logo-header")
    let logo = document.getElementById("logo-principal")
    if (window.innerWidth <= 768 && window.innerWidth >= 0) {
      if (window.scrollY >= (window.innerWidth)) {
        logoH.style.opacity ="1"
        logo.style.opacity ="0"
      }
      if (window.scrollY <= (window.innerWidth)) {
        logoH.style.opacity ="0"
        logo.style.opacity ="1"
      }
      if (window.innerHeight <= 768 && window.innerWidth >= 0 && window.innerHeight < window.innerWidth) {
        logoH.style.opacity ="1"
        logo.style.opacity ="0"
      }
    }
    if (window.innerWidth > 768) {
      logoH.style.opacity ="1"
      logo.style.opacity ="0"
    }
  }
  function headerColorsDesk(){
    let logoH = document.getElementById("Capa_1-2").getElementsByTagName('path')
    let mail = document.getElementById("mail")
    let facebook = document.getElementById("facebook")
    let instagram = document.getElementById("instagram")
    let nav = document.getElementById("nav")
    let facebookSub = document.getElementById("facebook-sub")
    let instagramSub = document.getElementById("instagram-sub")
    let header = document.getElementById("headerP")
    if (window.innerWidth < 768) {
      if (window.scrollY <(window.innerHeight*2.4)) {
        for(let i of logoH){
          i.style.fill ="#fff"
        }
        mail.style.color ="#fff"
        facebook.style.color ="#fff"
        instagram.style.color ="#fff"
        header.style.backgroundColor = "transparent"
      }
      if (window.scrollY >= (window.innerHeight*2.4) && window.scrollY < (window.innerHeight*15.4)) {
        for(let i of logoH){
          i.style.fill ="#000"
        }
        mail.style.color ="#000"
        facebook.style.color ="#000"
        instagram.style.color ="#000"
        header.style.backgroundColor = "transparent"
      }
      if (window.scrollY >= (window.innerHeight*15.4) && window.scrollY < (window.innerHeight*18.4)) {
        for(let i of logoH){
          i.style.fill ="#fff"
        }
        mail.style.color ="#fff"
        facebook.style.color ="#fff"
        instagram.style.color ="#fff"
        header.style.backgroundColor = "transparent"
      }
      if (window.scrollY >= (window.innerHeight*18.4) && window.scrollY < (window.innerHeight*19.9)) {
        for(let i of logoH){
          i.style.fill ="#000"
        }
        mail.style.color ="#000"
        facebook.style.color ="#000"
        instagram.style.color ="#000"
        nav.style.display ="flex"
        facebookSub.classList.add("d-none")
        instagramSub.classList.add("d-none")
        header.style.backgroundColor = "transparent"
      }
      if (window.scrollY >= (window.innerHeight*19.85)) {
        for(let i of logoH){
          i.style.fill ="#fff"
        }
        nav.style.display ="none"
        facebookSub.classList.remove("d-none")
        instagramSub.classList.remove("d-none")
        header.style.backgroundColor = "transparent"
      }
    }else{
      if (window.scrollY <(window.innerHeight*2)) {
        for(let i of logoH){
          i.style.fill ="#fff"
        }
        mail.style.color ="#fff"
        facebook.style.color ="#fff"
        instagram.style.color ="#fff"
        header.style.backgroundColor = "transparent"
      }
      if(window.scrollY >= (window.innerHeight*2.01) && window.scrollY < (window.innerHeight*19.8)){
        for(let i of logoH){
          i.style.fill ="#fff"
        }
        mail.style.color ="#fff"
        facebook.style.color ="#fff"
        instagram.style.color ="#fff"
        header.style.backgroundColor = "rgba(0, 0, 0, .7)"
        nav.style.display ="flex"
        facebookSub.classList.add("d-none")
        instagramSub.classList.add("d-none")
      }
      if (window.scrollY >= (window.innerHeight*19.9)) {
        for(let i of logoH){
          i.style.fill ="#fff"
        }
        nav.style.display ="none"
        facebookSub.classList.remove("d-none")
        instagramSub.classList.remove("d-none")
        header.style.backgroundColor = "transparent"
      }
    }
    logoViewDesk()
  }
  function ajusteDesk(){
    let header = document.getElementById("header")
    let box2 = document.getElementById("cuadro2")
    let box3 = document.getElementById("cuadro3")
    let box2text = document.getElementById("box2text")
    let box3text = document.getElementById("box3text")
    let element = document.getElementById("cuadro")
    let text = document.getElementById("texto")
    let estilo1;
    let estilo2;
    let estiloTexto;
    let estilobox1;
    let calculoBox2 = (window.innerWidth/2)-(box2.clientWidth/4);
    let calculoBox3 = (window.innerWidth)-(box3.clientWidth);
    if (window.innerWidth >= 1025) {
      estilobox1=".active-y .box1{left:calc(45% - calc("+element.clientWidth+"px*0.5));}"
      estiloTexto=".active-y .fs-text{left:auto; right:calc(60% - calc("+text.clientWidth+"px*1.8));}"
    }
	if (window.innerWidth < window.innerHeight  && window.innerWidth <= 1024  && window.innerHeight <= 600) {
      estiloTexto=".active-y .fs-text{left:auto; right:calc(70vw - "+text.clientWidth+"px*1.8);}"
      estilobox1=".active-y .box1{left:calc(40vw - calc("+element.clientWidth+"px/2));}"
	  console.log("hola");
    }
    if (window.innerWidth <= 1024 && window.innerWidth > 768) {
      estiloTexto=".active-y .fs-text{left:auto; right:calc(50vw - "+text.clientWidth+"px*1.8);}"
      estilobox1=".active-y .box1{left:calc(40vw - calc("+element.clientWidth+"px/2));}"
    }
    if (window.innerWidth <= 768  && window.innerWidth >= 0) {
      estiloTexto=".active-y .fs-text{left:7vw; right:auto;}"
      estilobox1=".active-y .box1{left:calc(79vw - calc("+element.clientWidth+"px/2));}"
    }
    if (calculoBox2 >= 0) {
      estilo1 =".active-y .box2{ left:"+ calculoBox2 +";} ";
    }
    else{
      estilo1 =".active-y .box2{ left:0;} ";
    }
    if (box3.clientWidth >= window.innerWidth) {
      estilo2 =" .active-y .box3{ left:0;}";
    }
    else{
      estilo2 =" .active-y .box3{ left:"+ calculoBox3 +";}";
    }
    let node = document.createTextNode(estiloTexto + " " + estilobox1 +" "+ estilo1 + " " +estilo2);
    let head = document.getElementById("head");
    let etiqueta = document.createElement("style");
    etiqueta.appendChild(node);
    head.appendChild(etiqueta);
  }
  function mostrar(){
    document.getElementById("formHide").classList.add("d-none");
    document.getElementById("thanksShow").classList.remove("d-none");
  }