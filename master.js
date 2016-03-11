//Declare Master Content
var header_init={};
var nav_init={};
var footer_init={};
header_init.name="Cosmik Corporation";
nav_init.content=["Home","Code<>","Apps","Downloads","Blog","Contact Us","Old Site"];
nav_init.link=["index.html","code.html","apps.html","downloads.html","blog.html","contact.html","http://sites.google.com/site/capsulecorporation92"];
footer_init.content="&copy; Cosmik Corp | 2016";
var imArr=["cryobytes.png","orbital.png","charades.png","wars_img.png","tangent.png","cosmik.png"];
var imIndex=0;

//Initialize Print String
var ptr="<header><h2>";
//Use Master Content
$(document).ready(function(){
    
    //Add Header
    ptr+=header_init.name;
    ptr+="</h2></header>";
    
    //Add Navbar
    ptr+="<nav><ul>";
    for(var item in nav_init.content)
        {
            ptr+="<li><a href="+nav_init.link[item]+">"
            ptr+=nav_init.content[item];
            ptr+="</a></li>";
        }
    ptr+="</ul></nav>";
    
    $("body").prepend(ptr);
    ptr="";
    
    //Add Footer
    ptr+="<footer>";
    ptr+=footer_init.content;
    ptr+="</footer><br/><br/>";
    $("body").append(ptr);
    setInterval(panelDisplay,4000);
});

function panelDisplay(){
    document.getElementById("panel").src=imArr[imIndex];
    imIndex++;
    imIndex%=6;
}