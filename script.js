window.onload = oppstart;
            
var toContact;
var navStalk;
var rotatingImg;
var skillContainer;

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
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-50px";
      }
      prevScrollpos = currentScrollPos;
    }
}


function seeMore()
{
    var element = document.querySelector("#stalk-section");

    element.scrollIntoView({behavior: "smooth"});
}