window.onload = oppstart;
            
var toContact;
var navStalk;
var rotatingImg;
var skillContainer;

var prevScrollpos;

var workClicked = false;

function oppstart()
{

  document.getElementById("divAbout").style.animation = "fadeIn 1s alternate";
  document.getElementById("divAbout").style.opacity = "1";

  navStalk = document.getElementById("getInTouch");
  navStalk.onclick = seeMore;

  skillContainer = document.getElementById("skill-container");

  toContact = document.getElementById("skip-to-contact");
  toContact.onclick = seeMore;
  
  //When user scroll, hide navbar
  prevScrollpos = window.pageYOffset;
  window.onscroll = hideNavBar;
}

function hideNavBar ()
{
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) 
    {
      document.getElementById("navbar").style.top = "0";
    } 

    else 
    {
      document.getElementById("navbar").style.top = "-5rem";
    }
    
    prevScrollpos = currentScrollPos;
}

function seeMore()
{
  var element = document.querySelector("#stalk-section");

  element.scrollIntoView({behavior: "smooth"});
}

function focusOnWork(con_id, des_id) {
  var style = document.createElement('style');
  var ref = document.querySelector('script');

  // var work_container = document.q

  if (!workClicked)
  {
    style.innerHTML = 
      'body > *:not(.works-section) {' +
        'animation: body-fade 0.2s forwards' +
        '}' +
       '#' + des_id + ', #' + des_id + ' .works-description-content{' +
        'display: block;' + 
        'animation: fadeIn 0.5s forwards' +
       '}' +
       '#' + con_id + ' .works-container {' +
        'filter: grayscale(0%);'
       '}';
  
      ref.parentNode.insertBefore(style, ref)
    // ('.works-section > *:not(#' + id + ')').css('background-color', 'red');   
    workClicked = true;
  }

  else {
    style.innerHTML = null;
    ref.parentNode.firstElementChild.remove();
    workClicked = false;
  }
}