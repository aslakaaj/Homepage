window.onload = oppstart;
            
var toContact;
var navStalk;
var rotatingImg;
var skillContainer;

var prevScrollpos;

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