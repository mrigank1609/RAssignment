/*
 WebSpectator ad (165357.217)
*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(b,N){for(var n=N||0,F=this.length;n<F;n++)if(this[n]===b)return n;return-1});Array.isArray||(Array.isArray=function(b){return"[object Array]"===Object.prototype.toString.call(b)});
(new function(){var b,N=/rect\(((?:[0-9]*px\s?)*)\)/,n=!1,F=document.all&&!window.atob,H,l=[],B,C,h,d,m,T=!1,O,P,z,I,t,U=!1,w=0,J=!1,V,W,ia=function(a){return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,
4))||/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(a)?650:750}(navigator.userAgent||navigator.vendor||window.opera),x="",X=!0,K,q,u=function(a,b,c){document.addEventListener?a.addEventListener(b,
c):a.attachEvent("on"+b,c)},L=function(a,b,c,d){d=d||{};d.prefix="undefined"!=typeof d.prefix?d.prefix:!0;document.addEventListener?a.removeEventListener(b,c):a.detachEvent((d.prefix?"on":"")+b,c)},r=function(a){a=a.replace(/px/,"");return""==a||"auto"==a?0:parseInt(a)},Y=function(a){var f,c;if(U)w=0;else{var k=d.innerHeight||q.documentElement.clientHeight||q.body.clientHeight,e=d.innerWidth||q.documentElement.clientWidth||q.body.clientWidth,l=d.pageYOffset||q.body.scrollTop||q.documentElement.scrollTop||
0,g=0,h=0,p,D,A;a:{var v=a;if(v.style&&v.style.clip){var n=v.style.clip.replace(/,/g,"").match(N);if(n){n=n[1].split(" ");f=r(n[1])-r(n[3]);c=r(n[2])-r(n[0]);r(n[3]);r(v.style.left);break a}}f=v.offsetWidth||r(v.style.width)||0;c=v.offsetHeight||r(v.style.height)||0;r(v.style.left)}x="";if(!b.isTrackingUnit&&"inread"==!b.type&&(10>f||10>c))x="size";else{if(!m.top||d!=m&&m==m.parent){b.remove();return}do try{D?(p=D,D=D.parent,a=p.frameElement):D=m;p=a;for(A=p.currentStyle||d.getComputedStyle?q.defaultView&&
q.defaultView.getComputedStyle(p,null):null;"HTML"!=p.nodeName&&p.parentNode&&!x;){"slider"==b.type||"overlay"==b.type||!A||"none"!=A.display&&"hidden"!=A.visibility||(x="visibility");if(A&&"fixed"==A.position)break;p=p.parentNode;A=p.currentStyle||d.getComputedStyle?q.defaultView&&q.defaultView.getComputedStyle(p,null):null}var t=a.getBoundingClientRect(),g=g+t.top,h=h+t.left}catch(u){x="frames"}while(D!=d);0<=g&&g+c<=k&&0<=h&&h+f<=e?p=100:(0>g+c||g>k)&&(0>h+f||h>e)?p=0:(a=c,0>g&&(a+=g),g+c>k&&(a+=
k-g-c),k=f,0>h&&(k+=h),h+f>e&&(k+=e-h-f),p=Math.round(Math.max(0,a)*Math.max(k)/(c*f)*100)||0)}b.height=c;b.width=f;b.absTop=g+l;b.top=g;b.left=h;w=x?0:p}},Z=function(a,b,c){var k="";if(c){var e=new Date;e.setTime(e.getTime()+6E4*c);c="; expires="+e.toGMTString()}else c="";-1<d.location.href.indexOf("ig.com.br")&&(k="; domain=.ig.com.br");document.cookie=a+"="+b+c+k+"; path=/"},Q=function(){var a;a:{a=document.cookie.split(";");for(var f=0;f<a.length;f++){for(var c=a[f];" "==c.charAt(0);)c=c.substring(1,
c.length);if(0==c.indexOf("___ws_pl=")){a=c.substring(9,c.length);break a}}a=null}t={};if(a)if(a=d.JSON.parse(a),b.sizes)for(f=b.sizes.length-1;-1<f;f--){var c=b.sizes[f][0]+"*"+b.sizes[f][1],k=a[c];k&&(t[c]=k)}else t=a},ja=function(a,b){Q();t[a]=b;Z("___ws_pl",d.JSON.stringify(t),5)},R=function(a){a=a.replace(/\[RANDOM\]/g,Math.floor(1E8*Math.random()));var b=document.createElement("IMG");b.onload=function(){d.document.body.removeChild(b)};b.setAttribute("style","width:0;height:0;display:none;");
b.setAttribute("src",a);d.document.body.appendChild(b)},aa=function(a,b){for(var c in b)if(a[c]){for(var d=c,e=a[c],h=b[c],g=h.length-1;-1<g;g--)-1<e.indexOf(h[g])||e.push(h[g]);a[d]=e}else a[c]=b[c];return a},ba=function(){var a={},b=d.document.querySelector?d.document.querySelector("meta[name='WS-Custom-Targeting']"):null;if(b)for(var b=b.content.replace(/\'/g,"").split(";"),c=b.length-1;-1<c;c--){var k=b[c].split("=");k[1]&&(a[k[0].toLowerCase()]=k[1].split("&"))}return a},ca=function(a){a=a.childNodes;
for(var b=0;b<a.length;b++)if(a[b].getAttribute){var c=a[b].getAttribute("class");c&&-1!=c.split(" ").indexOf("wsOverlay")||(a[b].style.display="none")}},da=function(){var a=l[h];a&&(J=!0,V=d.setTimeout(function(){a.interacting=!0;b.ctx.announceChange()},500))},ea=function(){var a=l[h];a&&(J=!1,clearTimeout(V),a.interacting&&b.ctx.announceChange(),a.interacting=!1,n&&M())},S=function(a,f,c){if(!f.doNotLog&&f.iid){var k=b.clientData?b.clientData.section:d.__wsconf&&d.__wsconf.section;R((f.rp||b.ctx.wshost)+
"/"+a+"?appid="+f.aid+"&auid="+b.shortId+"&ci="+f.cid+"&olid="+f.ol+"&oid="+f.o+"&iid="+f.iid+"&is="+f.index+"&cw="+f.cw+"&ch="+f.ch+"&ts="+ +new Date+"&r="+f.r+(f.sgid?"&sgid="+f.sgid:"")+(f.ats?"&ats="+f.ats:"")+(k?"&s="+k:"")+(f.tpi?"&tpi="+f.tpi:"")+(b.clientData?"&sid="+b.clientData.session:"")+c)}},fa=function(){var a=l[h],f="flash"=="&btf="+(b.top>ia-b.height/2?1:0)+a.typ&&d.swfobject?"&f="+(0==d.swfobject.getFlashPlayerVersion().major):"";S("impression",a,f);!a.doNotLog&&a.iid&&a.externalUrl&&
"TraditionalImpressions"==a.ot&&R(a.externalUrl)},ka=function(){z||l[h].doNotLog||!l[h].iid||(z=d.setTimeout(function(){var a=l[h];b.ctx.inview()&&!a.iabPerformed&&a.iid&&(a.iabPerformed=!0,S("iab",a,""),a.externalUrl&&"ViewableImpressions"==a.ot&&R(a.externalUrl),z=null)},1E3))},ga=function(){Y(b.element);if("inread"!=b.type&&x&&!b.inm){var a=l[h];a.iabPerformed=!0;S("notmeasurable",a,"&rs="+x);a.ol="";a.o="";a.cid=""}},y=function(){if(!T){var a=b.ctx.inview();Y(b.element);G(a,b.userState)}},M=function(a,
f,c){var k,e,m,g=q.createElement("IFRAME"),r=function(a,c){e.interacting=!1;c||(e.start=+new Date,e.applicationId=a.aid,e.container.style.display="inline-block",e.cid=a.ci||(B&&0==a.is?-1:-2),e.cw=a.cw,e.ch=a.ch,e.iid=a.iid,e.aid=a.aid,e.o=a.oid,e.ol=a.li||(B&&0==a.is?-1:-2),e.os=a.os||"",e.op=a.op||"",e.ot=a.ot,e.ats=a.ats,e.externalUrl=a.eu,e.pursuit=a.pl,e.rp=a.rp,e.r=a.r,e.sgid=a.sgid,c=!1,e.iabPerformed=!1,d.clearTimeout(z));e.printOnView=a.iov;e.m=a.m;e.banner=a.cd;b.dnr=a.dnr;e.typ=a.typ;k.setAttribute("style",
"width:"+a.cw+"px !important;height:"+a.ch+"px !important;"+k.getAttribute("style"));g.style.width=a.cw+"px";g.style.height=a.ch+"px";b.fetching=!1;e.loader=function(){m=g.contentDocument?g.contentDocument:g.contentWindow?g.contentWindow.document:g.document;m.open("text/html","replace");g.contentWindow._ws=a;a.xp&&(a.xp.Horizontal&&"normal"!=a.xp.Horizontal||a.xp.Vertical&&"normal"!=a.xp.Vertical)&&(g.style.transition="width 1s,height 1s",g.style.position="absolute",g.style.webkitTransform="translateZ(0)",
"left"==a.xp.Horizontal&&(g.style.right="0px"),"top"==a.xp.Vertical&&(g.style.bottom="0px"),g.onmouseenter=function(){g.style.width=a.xp.Width+"px";g.style.height=a.xp.Height+"px"},g.onmouseleave=function(){g.style.width=a.cw+"px";g.style.height=a.ch+"px"});u(g.contentWindow,"message",function(b){try{"WS-SP"==b.data?M(null,null,!0):"initUtils"==b.data.action&&b.source.postMessage({action:"initUtilsResponse",data:{cu:a.cu}},"*")}catch(c){}});m.write("<html><head></head><body style='margin:0px;overflow:hidden;border:0px'><script>"+
e.banner+"\x3c/script></body></html>");F||m.close();e.pursuit&&ja(a.cw+"*"+a.ch,e.ol);e.loader=null};h=e.index;b.events&&b.events.emit(b.events.eventType.bannerChange,b);"viewable"!=b.type&&(b.ctx.inview()&&1==b.userState||!e.printOnView)&&e.loader();!c&&fa();y();setTimeout(ga,3E3)};g.setAttribute("style","border-width:0px");g.setAttribute("scrolling","no");g.setAttribute("frameborder","no");g.style.margin="0px auto";g.style.overflow="visible";g.style.width=(b.width||0)+"px";g.style.height=(b.height||
0)+"px";g.src="about:blank";c?(e=l[h],k=e.container,ca(k)):(k=q.createElement("DIV"),e={index:l.length,container:k},l.push(e),k.setAttribute("style","display:none;margin:0px auto;text-align:initial !important;clear:both;position:relative;"),b.element.appendChild(k));if(c&&++l[h].waterfallIndex!=l[h].creativeWaterfall.length)k.appendChild(g),r(e.creativeWaterfall[e.waterfallIndex],!0);else{k.appendChild(g);b.fetching=!0;a=W+b.ctx.wshost+"/ad?auid="+b.shortId+"&sz="+(K?K:"")+"&pl="+encodeURIComponent(d.JSON.stringify(t))+
"&dm="+(B&&0==e.index?1:2)+"&ci="+(a||0)+"&is="+e.index+"&piv="+Math.round(w)+"&ts="+(+new Date+"");b.clientData&&(a+="&cc="+b.clientData.country+"&rc="+b.clientData.region+"&sid="+b.clientData.session);b.ct=aa(ba(),H.ct);b.ct&&(a+="&ct="+encodeURIComponent(d.JSON.stringify(b.ct)));f&&(a+="&olid="+f);f=b.clientData?b.clientData.section:d.__wsconf&&d.__wsconf.section;c&&e.m&&(a+="&m="+e.m+"&molid="+e.ol);a=f?a+"&s="+f:a;l[h]&&l[h].sgid&&(a+="&sgid="+l[h].sgid);0==e.index&&(a+=O?"&oid="+O:"",a+=P?"&olid="+
P:"");m=g.contentDocument?g.contentDocument:g.contentWindow?g.contentWindow.document:g.document;m.open();g.contentWindow.loader=function(){Array.isArray(g.contentWindow._ws)?e.creativeWaterfall=g.contentWindow._ws:"undefined"!=typeof g.contentWindow._ws&&(e.creativeWaterfall=[],e.creativeWaterfall.push(g.contentWindow._ws));if("undefined"==typeof g.contentWindow._ws||0==e.creativeWaterfall.length)e.ol="",e.cid="",h=e.index,e.iabPerformed=!0,clearTimeout(z),b.events&&b.events.emit(b.events.eventType.bannerChange,
b),B&&1==l.length&&b.ctx.emptyFirst&&b.ctx.emptyFirst();else{var a=e.creativeWaterfall[0];e.waterfallIndex=0;if(a.is==l.length-1){if("undefined"!=typeof h&&l[h].container){var c=l[h].container;c.style.setProperty?c.style.setProperty("display","none","important"):c.style.setAttribute("display","none")}else ca(b.element);r(a)}}};try{m.write("<html><head></head><body style='margin:0px;overflow:hidden;border:0px'><script type='text/javascript' src ='"+a+"'>\x3c/script><script>var starter=setInterval(function(){if(window.loader){window.loader();clearInterval(starter);}},300);\x3c/script></body></html>")}catch(p){}F||
m.close();n=!1}};this.onStateChange=function(a){var d=b.userState;b.userState=a.index;G(b.ctx.inview(),d)};var G=function(a,d){b.ctx.inview()&&1==b.userState&&n&&!J&&M();a==b.ctx.inview()||0!=a&&0!=b.ctx.inview()||b.ctx.announceChange();var c;if(c=l[h])b.ctx.inview()&&1==b.userState?(!c.iabPerformed&&ka(),c.loader&&c.loader(),2!=b.ctx.inview()&&(clearTimeout(I),I=null)):(clearTimeout(z),z=null,clearTimeout(I),I=null)},E=function(){var a;return function(){d.clearTimeout(a);a=d.setTimeout(y,200)}}(),
ha=function(){var a;return function(){d.clearTimeout(a);a=d.setTimeout(y,200)}}();this.visibilityThreshold=50;this.inview=function(){return w<(b.ctx.visibilityThreshold||50)?0:100>w?1:2};this.goToPrevious=function(a){l[h].container.style.display="none";h=a;l[h].container.style.display="inline-block";y()};this.setViewState=function(a){var d=b.ctx.inview();w=a?50:0;G(d,b.userState)};this.currentEntry=function(){return l[h]};this.nextBanner=function(a,f,c){if(X){if(l[h]&&l[h].pursuit){var k=b.ctx.size.w+
"*"+b.ctx.size.h;Q();delete t[k];Z("___ws_pl",d.JSON.stringify(t),5)}b.isTrackingUnit||b.dnr||(a||1==b.userState&&b.ctx.inview()&&!J?M(f,c):n=!0)}};this.start=function(a,f){if(!f||b.ctx.wshost)if(!f||!F){y();if(!a)B=!0,this.nextBanner(!0);else if(H.tpcid){B=!0;var c=H;for(K=encodeURIComponent(d.JSON.stringify([[c.cw,c.ch]]));c.slot--;)l.push(null);c={index:l.length,start:+new Date,interacting:!1,cid:c.tpcid,iid:Math.floor(Math.random()*Math.pow(10,15)),o:c.tpoid,ol:c.tpolid,cw:c.cw,ch:c.ch,op:"3rd Party",
os:"3rd Party",r:"0",tpi:1,doNotLog:!0};l.push(c);h=c.index;b.events&&b.events.emit(b.events.eventType.bannerChange,b);fa();y();setTimeout(ga,3E3)}"onwheel"in document?u(d,"wheel",E):u(d,"mousewheel",E);u(d,"scroll",E);u(d,"keydown",E);d.document.querySelector&&d.document.querySelector("div[fbs-track]")&&d.document.querySelector("div[fbs-track]").addEventListener("wheel",E);u(d,"resize",ha);delete this.start}};this.attachScript=function(a){this.start&&this.start(a,!1);b.element.setAttribute("WS-Zone",
b.id)};this.forceCheckView=y;this.announceChange=function(){b.events&&b.events.emit(b.events.eventType.zoneView,b)};this.del=function(){X=!1;L(b.element,"mouseover",da);L(b.element,"mouseout",ea);L(d,"scroll",E);L(d,"resize",ha)};this.toggleForceOffView=function(a){U=a;y()};this.checkDetachment=function(){(!m.top||d!=m&&m==m.parent||m.document.querySelector&&!m.document.querySelector('*[ws-zone="'+b.id+'"]'))&&b.remove()};this.isInteracting=function(){return l&&l[h]&&l[h].interacting};this.init=function(){var a;
try{if(ws_unit.dynamic)a=window.frameElement.parentNode,C=window.frameElement,m=window.parent,q=m.document;else{m=window;q=document;for(var f=q.scripts,c=f.length-1;-1<c;c--)if(-1<f[c].src.indexOf("ws-ad.js")){C=f[c];break}if(null==C||C.getAttribute("loaded"))return;a=C.parentNode}b={id:ws_unit.id,shortId:ws_unit.id,element:a,ctx:this,userState:!0,tp:ws_unit.tpcid,dnr:ws_unit.dnr,sizes:ws_unit.sizes}}catch(k){return}for(a=d=m;a!=m.top;){try{a.frameElement&&(d=a.parent)}catch(k){}a=a.parent}K=b.sizes?
encodeURIComponent(d.JSON.stringify(b.sizes)):encodeURIComponent("[]");b.ct=aa(ba(),ws_unit.ct);m.__wsconf&&(b.ctx.wshost=m.__wsconf.instancePath);W="about:"!=window.location.protocol?window.location.protocol:d.location.protocol;d.ws_zones=d.ws_zones||[];d.__wsconf=d.__wsconf||{};d!=window.top&&d.top.postMessage&&(T=!0,d.__wsconf.uid="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)}),a=function(a){try{var c=d.JSON.parse(a.data);
switch(c.action){case "registerACK":d.__wsconf.uee=1;break;case "viewChange":var f=b.ctx.inview();w=c.inview;G(f,b.userState);b.removePixel&&(b.removePixel(),delete b.removePixel)}}catch(g){}},f=function(a){try{var c=d.JSON.parse(a.data);switch(c.action){case "lookup":if(d.__wsconf.uid==c.uid){var f=b.ctx.inview();w=c.inview;G(f,b.userState);b.ctx.announceChange();a.source.postMessage(d.JSON.stringify({action:"lookupACK",fid:c.fid}),"*")}}}catch(g){}},window.addEventListener?window.addEventListener("message",
a):window.attachEvent("onmessage",a),d.addEventListener?d.addEventListener("message",f):d.attachEvent("onmessage",f),window.top.postMessage(d.JSON.stringify({action:"register",uid:d.__wsconf.uid}),"*"));u(b.element,"mouseover",da);u(b.element,"mouseout",ea);Q();H=ws_unit;ws_unit.force_first&&b.ctx.start(!1,!0);d.ws_zones.push(b);O=ws_unit.order;P=ws_unit.orderLine;C.setAttribute("loaded","1");ws_unit=null;delete this.init}}).init();