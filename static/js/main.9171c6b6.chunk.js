(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(31)},22:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(13),c=a.n(r),o=a(1),m=a(2),i=a(4),l=a(3),u=a(5),g=a(6);var d=function(e){return n.a.createElement("nav",{className:"navbar navbar-dark bg-dark d-flex justify-content-around"},n.a.createElement("a",{className:"navbar-brand",href:"/"},"Cat Clicker"),n.a.createElement("span",{className:"navbar-text",id:"message"},e.message),n.a.createElement("span",{className:"navbar-text"},"Score: ",e.score," | Top Score: ",e.topScore))};var p=function(){return n.a.createElement("footer",{className:"bg-dark text-light m-0 fixed-bottom"},n.a.createElement("p",{className:"text-center m-0",id:"copyright"},"Copyright \xa9",n.a.createElement("script",null,"var d = new Date() document.write(d.getFullYear())"),n.a.createElement("a",{className:"copyright-link",href:"https://github.com/Dylan-Thomson",target:"_blank",rel:"noopener noreferrer"}," Dylan Thomson")))};a(22);var f=function(e){return n.a.createElement("div",{role:"img",className:"game-card img-thumbnail m-2",style:{backgroundImage:"url(".concat(e.url,")")},alt:"Game Image",onClick:e.onClick})},h=function(e){function t(){var e,a;Object(o.a)(this,t);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(n)))).state={score:0,message:"Click any image to begin!",topScore:0,clicked:[],images:["./assets/images/bowtie.jpeg","./assets/images/bwon.jpg","./assets/images/towelkitten.jpg","./assets/images/leo.jpg","./assets/images/white.jpg","./assets/images/aurora.jpg","./assets/images/fold.jpg","./assets/images/pounce.jpg","./assets/images/fluff.jpg","./assets/images/black.jpg"]},a.updateScore=function(e){a.state.clicked.includes(e)?(a.setState({score:0,clicked:[],message:"Your Guess Was Wrong!",images:a.state.images.sort(function(){return.5-Math.random()})}),document.getElementById("message").classList.add("text-danger"),Object(g.a)(document.getElementsByClassName("game-card")).map(function(e){return e.classList.add("shake")}),setTimeout(function(){document.getElementById("message").classList.remove("text-danger"),Object(g.a)(document.getElementsByClassName("game-card")).map(function(e){return e.classList.remove("shake")})},500)):(a.setState({score:a.state.score+1,clicked:[].concat(Object(g.a)(a.state.clicked),[e]),message:"Your Guess Was Correct!",topScore:a.state.score+1>a.state.topScore?a.state.score+1:a.state.topScore,images:a.state.images.sort(function(){return.5-Math.random()})}),document.getElementById("message").classList.add("text-success"),setTimeout(function(){document.getElementById("message").classList.remove("text-success")},500))},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,{message:this.state.message,score:this.state.score,topScore:this.state.topScore}),n.a.createElement("div",{className:"container d-flex flex-row flex-wrap mx-auto justify-content-center my-5"},this.state.images.map(function(t,a){return n.a.createElement(f,{key:a,url:t,onClick:function(){return e.updateScore(t)}})})),n.a.createElement(p,null))}}]),t}(s.Component),b=a(16),k=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(h,null),n.a.createElement(b.a,{basename:"/"}))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.9171c6b6.chunk.js.map