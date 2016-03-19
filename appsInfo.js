var webApps={};
webApps.content=["Bullman Online","Word Charades"];
webApps.link=["http://sarthi92.github.io/Word-Games/bullman.html","http://sarthi92.github.io/Word-Charades"];
var mobileApps={};
mobileApps.content=[];
mobileApps.link=[];
var aptr="<ul>";
var i;
$(document).ready(function(){
    for(i=0;i<webApps.content.length;i++)
        {
            aptr+="<li>"+webApps.content[i]+" ";
            aptr+="<a href="+webApps.link[i]+">></a></li>";
        }
    aptr+="</ul>";
    $("#webApps").append(aptr);
    aptr="<ul>";
    for(i=0;i<mobileApps.content.length;i++)
        {
            aptr+="<li>"+mobileApps.content[i]+" ";
            aptr+="<a href="+mobileApps.link[i]+">></a></li>";
        }
    aptr+="</ul>";
    $("#mobileApps").append(aptr);
});
