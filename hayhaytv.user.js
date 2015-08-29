// ==UserScript==
// @name         HayHayTV Anti-Adblock Checker
// @namespace    http://junookyo.blogspot.com/
// @version      1.0.0
// @description  Remove "Adblock warning" on HayHayTV website for better user experience
// @author       Juno_okyo
// @match        http://*.hayhaytv.vn/*
// @grant        none
// ==/UserScript==

(function(d){function e(){var a;a:{a=document.querySelectorAll("style");for(var b=0;b<a.length;b++)if(a[b].innerHTML.length){var c=a[b].innerHTML.replace(/[\n\r\t\s]+/g,""),c=/#([0-9a-z]{4,10})\{.*position:fixed\!important;.+document\.documentElement.scrollTop\?document\.documentElement\.scrollTop:document\.body\.scrollTop.+\}#/.exec(c);if(null!==c&&2===c.length){a=c[1];break a}}a=void 0}if(a=d.document.getElementById(a)){a.style.display="none";a.remove();if(a=d.document.getElementById("adsense"))a=
a.parentNode,a.style.display="none",a.remove();d.document.body.removeAttribute("style")}else setTimeout(e,10)}d.addEventListener("load",e,!1);var b=document;0===b.getElementsByClassName("ico-vip").length&&(b=b.getElementsByClassName("login_txt")[0],"undefined"!==typeof b&&(b.innerHTML='<img width="20" height="21" src="http://static.hayhaytv.com/layout/images/vip-ico.png" class="ico-vip"> '+b.innerHTML));if("undefined"==typeof ADS_TRACK||ADS_TRACK)ADS_TRACK=!1})(window);