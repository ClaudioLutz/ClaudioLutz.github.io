!function(){"use strict";var t=document.querySelector("#mb8d4rebul_table");if(!t)return;var e=0,o=0,r=0,n=0,p=0;window.addEventListener("scroll",function(){e=t.offsetHeight,r=window.pageYOffset,p=n-r,o=parseInt(window.getComputedStyle(t).getPropertyValue("top"))+p,r<=0?t.style.top="0px":0<p?t.style.top=(0<o?0:o)+"px":p<0&&(t.style.top=(Math.abs(o)>e?-e:o)+"px"),n=r})}();