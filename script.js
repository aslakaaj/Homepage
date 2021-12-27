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

    // rotatingImg = document.getElementById("rotating-img");
    // window.onscroll = rotateImg;

    toContact = document.getElementById("skip-to-contact");
    toContact.onmouseenter = changeContactText;
    toContact.onmouseleave = changeBackContactText;
    toContact.onclick = seeMore;
    // HoverOver();
}

function rotateImg()
{
    rotatingImg.style.transform = "rotate(90deg)";
}

function seeMore()
{
    var element = document.querySelector("#stalk-section");

    element.scrollIntoView({behavior: "smooth"});
}

function changeContactText()
{
    toContact.innerHTML = "📭 Get in touch";
    toContact.style.cursor = "pointer";
    toContact.style.color = "white";
}

function changeBackContactText()
{
    toContact.innerHTML = "📫 Get in touch";
    toContact.style.color = "rgb(255, 86, 142)";
}
