(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(33)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),o=a.n(s),c=(a(22),a(1)),i=a(2),l=a(4),m=a(3),u=a(5),g=(a(23),a(16));var p=function(e){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark d-flex justify-content-around"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Clicky Game"),r.a.createElement("span",{className:"navbar-text"},e.message),r.a.createElement("span",{className:"navbar-text"},"Score: ",e.score," | Top Score: ",e.topScore))};var d=function(){return r.a.createElement("footer",{className:"bg-dark text-light m-0 fixed-bottom"},r.a.createElement("p",{className:"text-center m-0",id:"copyright"},"Copyright \xa9",r.a.createElement("script",null,"var d = new Date() document.write(d.getFullYear())"),r.a.createElement("a",{className:"copyright-link",href:"https://github.com/Dylan-Thomson",target:"_blank",rel:"noopener noreferrer"}," Dylan Thomson")))};a(24);var f=function(e){return r.a.createElement("div",{role:"img",className:"game-card img-thumbnail m-2",style:{backgroundImage:"url(".concat(e.url,")")},alt:"Game Image",onClick:e.onClick})},h=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={score:0,message:"Click any image to begin!",topScore:0,clicked:[],images:["./assets/images/bowtie.jpeg","./assets/images/bwon.jpg","./assets/images/towelkitten.jpg","./assets/images/leo.jpg","./assets/images/white.jpg","./assets/images/aurora.jpg","./assets/images/fold.jpg","./assets/images/pounce.jpg","./assets/images/fluff.jpg","./assets/images/black.jpg"]},a.updateScore=function(e){a.state.clicked.includes(e)?a.setState({score:0,clicked:[],message:"Your Guess Was Wrong!",images:a.state.images.sort(function(){return.5-Math.random()})}):a.setState({score:a.state.score+1,clicked:[].concat(Object(g.a)(a.state.clicked),[e]),message:"Your Guess Was Correct!",topScore:a.state.score+1>a.state.topScore?a.state.score+1:a.state.topScore,images:a.state.images.sort(function(){return.5-Math.random()})}),console.log(a.state)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{message:this.state.message,score:this.state.score,topScore:this.state.topScore}),r.a.createElement("div",{className:"container d-flex flex-row flex-wrap mx-auto justify-content-center my-5"},this.state.images.map(function(t,a){return r.a.createElement(f,{key:a,url:t,onClick:function(){return e.updateScore(t)}})})),r.a.createElement(d,null))}}]),t}(n.Component),b=a(15),k=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(b.a,{basename:"/"}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.0f959922.chunk.js.map