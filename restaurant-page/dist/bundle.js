(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(){const e="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas libero. Integer vulputate sem a nibh rutrum consequat. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";r(i);const t=[];let n=document.createElement("h1");n.textContent="Welcome to our Restaurant page!",t.push(n);let a=document.createElement("p");a.textContent=e,a.classList.add("text"),t.push(a);let l=document.createElement("h1");l.textContent="We opened a new restaurant!",t.push(l);let d=document.createElement("p");d.textContent=e,d.classList.add("text"),t.push(d),t.forEach((e=>{i.appendChild(e)}))}function n(e,t,n){let a=document.createElement("div");a.classList.add("menu-item");let l=document.createElement("img");l.setAttribute("src","../imgs/"+e),l.setAttribute("alt",e),l.classList.add("menu-img");let i=document.createElement("div");i.classList.add("text");let d=document.createElement("h3");d.textContent=t;let s=document.createElement("p");return s.textContent=n,i.appendChild(d),i.appendChild(s),a.appendChild(l),a.appendChild(i),a}function a(e,t,n,a,l){let i=document.createElement("div");i.classList.add("form-item");let d=document.createElement("label");if(d.setAttribute("for",n),d.textContent=l,"textarea"!==e){let e=document.createElement("input");e.setAttribute("type",t),e.setAttribute("name",n),e.setAttribute("id",a),i.appendChild(d),i.appendChild(e)}else{let e=document.createElement("textarea");e.setAttribute("name",n),e.setAttribute("id",a),e.setAttribute("cols","30"),e.setAttribute("rows","10"),i.appendChild(d),i.appendChild(e)}return i}function l(e,t,n,a){let l=document.createElement("h4");l.textContent=e+": ";let i=document.createElement("span");return i.textContent=a?"CLOSED":t+":00 - "+n+":00",l.appendChild(i),l}e.d({},{dD:()=>r,kQ:()=>i});const i=document.querySelector(".main"),d=document.getElementsByTagName("li"),s=document.querySelector("#home"),u=document.querySelector("#menu"),o=document.querySelector("#contact");function c(e){for(let e=0;e<d.length;e++)d[e].classList.remove("selected");e.classList[0]?e.classList.remove("selected"):e.classList.add("selected")}function r(e){for(;e.firstChild;)e.removeChild(e.lastChild)}t(),s.addEventListener("click",(function(){c(this),t()})),u.addEventListener("click",(function(){c(this),function(){r(i);const e=[];let t=document.createElement("h1");t.textContent="Menu-list",e.push(t);let a=document.createElement("div");a.classList.add("menu"),e.push(a),a.appendChild(n("lasagne.jpg","Lasagne","Best in the whole world!")),a.appendChild(n("pizza.jpg","Pizza","Better than from yo mamma!")),e.forEach((e=>{i.appendChild(e)}))}()})),o.addEventListener("click",(function(){c(this),function(){r(i);const e=[];let t=document.createElement("h1");t.textContent="Contact us!",e.push(t);let n=document.createElement("div");n.classList.add("contact");let d=document.createElement("div");d.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laboriosam repellendus dolores qui illo ipsam dolorum molestias distinctio. Similique odit tenetur nesciunt quaerat unde repellat nulla ab, recusandae adipisci laudantium?",d.classList.add("text"),n.appendChild(d);let s=document.createElement("div");s.classList.add("form");let u=function(){let e=document.createElement("form");e.setAttribute("action",""),e.appendChild(a("input","email","email","email","Your E-mail")),e.appendChild(a("input","text","name","name","Your Name")),e.appendChild(a("textarea","-","msg","msg","Your Message"));let t=document.createElement("button");return t.classList.add("btn"),t.textContent="Send Message",e.appendChild(t),e}();s.appendChild(u),n.appendChild(s);let o=document.createElement("div");o.classList.add("hours");let c=document.createElement("h2");c.textContent="Opening Hours",o.appendChild(c),o.appendChild(l("Monday",8,21,!1)),o.appendChild(l("Tuesday",8,21,!1)),o.appendChild(l("Wednesday",9,21,!1)),o.appendChild(l("Thrusday",8,21,!1)),o.appendChild(l("Friday",8,22,!1)),o.appendChild(l("Sunday",10,20,!1)),o.appendChild(l("Saturday","","",!0)),n.appendChild(o),e.push(n),e.forEach((e=>{i.appendChild(e)}))}()}))})();