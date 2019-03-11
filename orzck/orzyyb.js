﻿
function orzyyb(){
document.getElementById("mainarea").innerHTML="\
<p align=\"center\">\
<span style=\"font-size: 128px; color:rgb(66,133,244)\">C</span>\
<span style=\"font-size: 128px; color:rgb(234,67,53)\">K</span>\
<span style=\"font-size: 128px; color:rgb(251,188,5)\"> O</span>\
<span style=\"font-size: 128px; color:rgb(66,133,244)\">R</span>\
<span style=\"font-size: 128px; color:rgb(52,168,83)\">Z</span>\
</p>\
<p align=\"center\">\
<div style=\"background:white;font: 10px/6px monospace;width:520px;\"></div>\
<span style=\"font-size: 48px;color: #FF0000\">CK是我们的红太阳，没有他我们会死！</span>\
</p>\
<div id=\"orz\" align=\"center\"><p align=\"center\">\
<button style=\"font-size: 30px; color: #FF0000\" onclick=\"orzorz()\">\
点击膜拜\
</button>\
</div>\
";
}
function orzorz(){
document.getElementById("orz").innerHTML="\
<p style=\"margin:10px\">\
<span style=\"font-size: 40px; color: #FF0000\">\
膜拜成功！\
<br>\
ck又变强了！\
</span>\
</p>\
<p style=\"margin:10px; font:10px/7px monospace;background:white;\">\
</p>\
<!--img border=\"0\" src=\"https://saya-javelin.github.io/orzyyb/yybakioi.gif\"-->\
<br>\
<button style=\"font-size: 24px\" onclick=\"ORZINF()\" id=\"ORZORZORZ\">继续膜拜1次</button>\
";
document.title="orz CK!";
}
var cnt=0,delta=1;
function ORZINF(){
cnt+=delta;
alert('OrzCK!*'+cnt);
if(cnt==1)alert('CK：诶又有一个来膜拜我的，来吧来吧继续膜');
if(cnt==2)alert('CK：你们还是naive，我又AK了');
if(cnt==10)alert('CK：虽然我是大佬，但是你这样一直膜我是会掉RP的');
if(cnt==20)alert('CK：MDZZ你怎么还在膜信不信我把你从5楼扔下去');
if(cnt==50)alert('CK：没错我就是这么强，让你好好膜');
if(cnt==50)delta=5,document.getElementById("ORZORZORZ").innerHTML="继续膜拜"+delta+"次";
if(cnt==1000)alert('CK：你真棒，我感受到了我又变强了，让你一次多膜一点');
if(cnt>=1000){
delta=Math.floor(Math.random()*100+5);
document.getElementById("ORZORZORZ").innerHTML="继续膜拜"+delta+"次";
}
if(cnt>=10000){
alert('CK：MMP你就要吸走我1%的RP了');
alert('CK：你再膜我就变弱了');
alert('你被CK秒了');
alert('保持你的决心！');
document.getElementById("mainarea").innerHTML="<h1>被秒乃蒟蒻常事<br>请蒟蒻重新来过！</h1>";
}
}

