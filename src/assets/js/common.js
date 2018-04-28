var base = 75;
var curWidth = document.body.clientWidth;
var curFontsize = curWidth / 750 * base;
document.querySelector('html').style.fontSize = curFontsize + 'px';
document.querySelector('body').style.fontSize = '24px';
var div=document.querySelectorAll('div')[0];
div.style.background="red";

