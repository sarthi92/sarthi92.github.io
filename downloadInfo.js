var games={};
games.content=["Rocketman Adventures","Rocketman Wars","Rocketman Adventures Anniversary","Bullman","Hangman Plus","TicTacToe"];
games.link=["http://www.mediafire.com/download/3a3ppwou3bd7j2l/rocketman11.exe","http://www.mediafire.com/download/844dm9vdms5zyzv/Rocketman_II.rar","http://www.mediafire.com/download/9sjgly8kj2xz0gw/Rocketman_anniv.exe","http://www.mediafire.com/download/jap9noiddm7etu6/bullman_14b.exe","http://www.mediafire.com/download/0wwf8gxtauu4vj4/hangman_plus_14b.exe","https://www.mediafire.com/?713lo8d0ez24f9d"];
var software={};
software.content=["Image Processing Pack","X-80 Design","PTT Chat Utility","Simple Calculator","Trigonometric Calculator","Celestial Calculator","Rocket Launch Simulator","Gravity Simulator"];
software.link=["https://www.mediafire.com/?ibd7xcd8np56ytq","http://www.mediafire.com/download/aanhv3fq7nxe4eu/X80.rar","http://www.mediafire.com/download/1n1iqhcntxdlq92/ptt_utils.rar","http://www.mediafire.com/download/31xvprr58zzcxe3/GRIDZ.exe","http://www.mediafire.com/download/bl71z81c7rj6fjn/HYBRIDZ.exe","http://www.mediafire.com/download/0kb3f0adomr9qbm/celestial_app.exe","http://www.mediafire.com/download/c6z9opcrv306hg3/borbital.exe","https://www.mediafire.com/?6qx19x2yrgot6cr"];
var dptr="<ul>";
var i;
$(document).ready(function(){
    for(i=0;i<games.content.length;i++)
        {
            dptr+="<li>"+games.content[i]+" ";
            dptr+="<a href="+games.link[i]+">></a></li>";
        }
    dptr+="</ul>";
    $("#games").append(dptr);
    dptr="<ul>";
    for(i=0;i<software.content.length;i++)
        {
            dptr+="<li>"+software.content[i]+" ";
            dptr+="<a href="+software.link[i]+">></a></li>";
        }
    dptr+="</ul>";
    $("#software").append(dptr);
});
