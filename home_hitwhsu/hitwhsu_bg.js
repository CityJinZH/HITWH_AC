/**
 * Minified by jsDelivr using Terser v5.15.0.
 * Original file: /gh/HCLonely/home.github.io@gh-pages/assets/js/main.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
 const corsGridaApiKey="238c1d62-1558-42bf-b72d-ed7127ad107c";
 var iUp=function(){var n=0;return{clean:function(){n=0},up:function(e){setTimeout((function(){$(e).addClass("up")}),n),n+=150},
 down:function(n){$(n).removeClass("up")},toggle:function(e){setTimeout((function(){$(e).toggleClass("up")}),n),n+=150}}}();
 $(document).ready((function(){fetch("https://v1.hitokoto.cn").then((function(n){return n.json()})).then((function(n){$("#description").html(n.hitokoto+"<br/> -「<strong>"+n.from+"</strong>」")})).catch((function(n){console.error(n)})),
 $.ajaxSetup({headers:{"x-cors-grida-api-key":corsGridaApiKey}});
 var n="https://cors.bridged.cc/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=8",
 e=JSON.parse(sessionStorage.getItem("imgUrls")),o=sessionStorage.getItem("index"),t=$("#panel");
 if(null==e)e=new Array,o=0,$.get(n,(function(n){images=n.images;for(let n=0;n<images.length;n++){const o=images[n];e.push(o.url)}var i="https://www.bing.com"+e[o];
 t.css("background","url('"+i+"') center center no-repeat #666"),t.css("background-size","cover"),sessionStorage.setItem("imgUrls",
 JSON.stringify(e)),sessionStorage.setItem("index",o)})).fail((function(){$("#panel").css("background","url('https://api.oneneko.com/bing') center center no-repeat #666").css("background-size","cover")}));
 else{7==o?o=0:o++;n="https://www.bing.com"+e[o];t.css("background","url('"+n+"') center center no-repeat #666"),
 t.css("background-size","cover"),sessionStorage.setItem("index",o)}$(".iUp").each((function(n,e){iUp.up(e)})),
 $(".js-avatar")[0].onload=function(){$(".js-avatar").addClass("show")}})),$(".btn-mobile-menu__icon").click((function(){"block"==$(".navigation-wrapper").css("display")?($(".navigation-wrapper").on("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
 (function(){$(".navigation-wrapper").toggleClass("visible animated bounceOutUp"),$(".navigation-wrapper").off("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend")})),
 $(".navigation-wrapper").toggleClass("animated bounceInDown animated bounceOutUp")):$(".navigation-wrapper").toggleClass("visible animated bounceInDown"),
 $(".btn-mobile-menu__icon").toggleClass("social iconfont icon-list social iconfont icon-angleup animated fadeIn")}));
 //# sourceMappingURL=/sm/115edf5e371b43bdbf7d215293f19faead382b3c9cd1a4baabc58ba2e1568c91.map