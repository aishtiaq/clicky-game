(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,img:"assets/bugsbunny.png",clicked:!1},{id:2,img:"assets/char1.jpg",clicked:!1},{id:3,img:"assets/daffy.png",clicked:!1},{id:4,img:"assets/ElmerFudd.gif",clicked:!1},{id:5,img:"assets/lola.png",clicked:!1},{id:6,img:"assets/Petunia_Pig.png",clicked:!1},{id:7,img:"assets/Porky_Pig.png",clicked:!1},{id:8,img:"assets/Speedy_Gonzales.png",clicked:!1},{id:9,img:"assets/sam.png",clicked:!1},{id:10,img:"assets/sylvester.png",clicked:!1},{id:11,img:"assets/taz.png",clicked:!1},{id:12,img:"assets/tweety.jpg",clicked:!1}]},,,,,,,,,function(e,t,a){e.exports=a(24)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),i=a.n(r),l=a(8),s=a(4),o=a(5),d=a(7),m=a(6),u=a(9);var g=function(e){var t=e.children;return c.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center",backgroundImage:'url("assets/pow-star.png")'},className:"jumbotron"},t)};a(16);var p=function(e){return c.a.createElement("header",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("strong",null,"Clicky Game!")),c.a.createElement("li",null,c.a.createElement("p",null,e.children)),c.a.createElement("li",null,"Score: ",e.score," | Top Score: ",e.topScore)))},k=a(1);a(18);function f(e){return c.a.createElement("img",{"aria-label":"click item",className:"card ".concat(e.animate?"animated shake 0.5s":""),src:e.image,onClick:function(){return e.handleClick(e.id)},alt:"cartoon character"})}a(20);function h(){return c.a.createElement("footer",null,c.a.createElement("div",null,"Clicky Game!",c.a.createElement("img",{alt:"react",src:"assets/react-logo.png"})))}a(22);var E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={data:k,score:0,topScore:0,message:"Click an image to begin!"},a.randomizeData=function(e){return e.sort(function(e,t){return.5-Math.random()})},a.cardClicked=function(e){var t=!1,n=a.state.data.map(function(a){return a.id===e&&(a.clicked||(a.clicked=!0,t=!0)),a});if(!0===t){var c=a.state.score;c++,a.setState({score:c,topScore:Math.max(c,a.state.topScore),data:a.randomizeData(n),message:"You guessed correctly!"})}else{var r=k.map(function(e){return Object(l.a)({},e,{clicked:!1})});a.setState({data:a.randomizeData(r),score:0,message:"You guessed incorrectly!"})}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"animate fadein"},c.a.createElement(p,{score:this.state.score,topScore:this.state.topScore},this.state.message),c.a.createElement(g,null," ",c.a.createElement("strong",null,c.a.createElement("h1",null,"Clicky Game "),c.a.createElement("h3",null,"Click on an image to earn points, but don't click on any more than once!"))),c.a.createElement("div",{className:"container"},this.state.data.map(function(t){return c.a.createElement("div",{className:"animated"},c.a.createElement(f,{key:t.id,id:t.id,image:t.img,animate:!e.state.score&&e.state.topScore,clicked:t.clicked,handleClick:e.cardClicked}))})),c.a.createElement(h,null))}}]),t}(n.Component);var v=function(){return c.a.createElement(E,null)};i.a.render(c.a.createElement(v,null),document.getElementById("root"))}],[[10,2,1]]]);
//# sourceMappingURL=main.945131ae.chunk.js.map