(()=>{var e={174:(e,t,n)=>{e.exports=n.p+"imgs/ramen.58fef11d.webp"}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var c=t[a]={exports:{}};return e[a](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../assets/"})(),(()=>{"use strict";var e=n(174),t=n.n(e);const a=()=>{const e=new Image;return e.src=t(),e.alt="Ramen",e},r=(e,t,n)=>{const a=document.createElement("button");a.classList.add("btn"),a.classList.add("btn--primary"),a.setAttribute("type",t);const r=document.createElement("div");r.className="box",r.textContent=e;const c=document.createElement("div");return c.className="border",null!=n&&a.addEventListener("click",n),a.appendChild(r),a.appendChild(c),a},c=(()=>{const e=document.createElement("div");e.className="home";const t=document.createElement("div");t.className="home__text";const n=document.createElement("h1");n.innerHTML='Taste of <span class="heading-box">Japan</span>';const c=document.createElement("p");c.className="subheading",c.textContent="Your Favorite Ramen For Delivery and Take-Out with Just A Click!",t.appendChild(n),t.appendChild(c),t.appendChild(r("Order Now","button",(()=>l.generateContent("menu"))));const s=document.createElement("div");return s.className="home__img",s.appendChild(a()),e.appendChild(t),e.appendChild(s),{element:e}})(),s=(()=>{const e=document.createElement("div");e.className="menu";const t=({size:e,price:t})=>{const n=document.createElement("div");n.className="menu__card__price-wrapper";const a=document.createElement("p");a.className="menu__card__size",a.textContent=e;const r=document.createElement("p");return r.className="menu__card__price",r.textContent=t,n.appendChild(a),n.appendChild(r),n},n=(e,n,r,c)=>{const s=document.createElement("div");s.className="menu__card",c&&s.classList.add("menu__card--primary");const o=document.createElement("div");o.classList="menu__card__img",o.appendChild(a());const l=document.createElement("h3");l.className="menu__card__title",l.textContent=e;const d=document.createElement("p");d.className="menu__card__desc",d.textContent=n,s.appendChild(o),s.appendChild(l),s.appendChild(d);for(let e of r)s.appendChild(t(e));return s};return e.appendChild(n("Shoyu Ramen","Creamy pork broth with soy sauce flavor",[{size:"Small",price:"$8"},{size:"Large",price:"$12"}],!1)),e.appendChild(n("Miso Ramen","Miso flavored pork soup served with vegetables",[{size:"Small",price:"$10"},{size:"Large",price:"$15"}],!0)),e.appendChild(n("Shio Ramen","Creamy pork broth with salt flavor",[{size:"Small",price:"$12"},{size:"Large",price:"$16"}],!1)),{element:e}})(),o=(()=>{const e=document.createElement("div");return e.className="contact",e.appendChild((()=>{const e=e=>{const t=document.createElement("p");return t.classList.add("subheading"),t.classList.add("contact__info"),t.innerHTML=e,t},t=document.createElement("div");t.className="contact__text";const n=document.createElement("h1");return n.innerHTML='Get in <span class="heading-box">touch!</span>',t.appendChild(n),t.appendChild(e('<span class="bold">Call us:</span> 917-548-7551')),t.appendChild(e('<span class="bold">Address:</span><br />1220 Duncan Avenue<br />New York NY 10011')),t})()),e.appendChild((()=>{const e=(e,t)=>{const n=document.createElement("label");return n.className="contact__label",n.textContent=t,n.setAttribute("for",e),n},t=(t,n,a)=>{const r=e(t,a),c=document.createElement("input");return c.type=n,c.id=t,c.name=t,c.className="contact__input",c.required=!0,{label:r,input:c}},n=document.createElement("form");n.action="mailto:test@ramencompany.com",n.className="contact__form";const a=t("name","text","Your Name:");n.appendChild(a.label),n.appendChild(a.input);const c=t("email","email","Email:");n.appendChild(c.label),n.appendChild(c.input);const s=e("message","Message:"),o=document.createElement("textarea");return o.name="message",o.id="message",o.className="contact__message",o.placeholder="Message",o.required=!0,n.appendChild(s),n.appendChild(o),n.appendChild(r("Send message","submit",null)),n})()),{element:e}})(),l=(()=>{const e=document.querySelector("#content"),t=Array.from(document.querySelectorAll(".nav__item__link")),n={home:c.element,menu:s.element,"contact-us":o.element};return{generateContent:a=>{t.forEach((e=>{e.classList.remove("nav__item__link--active")})),e.innerHTML="",(e=>t.find((t=>t.getAttribute("data-link")==e)))(a).classList.add("nav__item__link--active"),e.appendChild(n[a])}}})();l.generateContent("home")})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUMsS0FBS3RFLFNBQVN1RSxpQkFBaUIscUJBRWhEQyxFQUFRLENBQ1pDLEtBQU0sVUFDTkMsS0FBTSxVQUNOLGFBQWMsV0FvQmhCLE1BQU8sQ0FBRUMsZ0JBUGdCQyxJQU52QlIsRUFBU1MsU0FBU0MsSUFDaEJBLEVBQVEzRCxVQUFVNEQsT0FBTyw4QkFFM0JiLEVBQWVwQyxVQUFZLEdBUFQsQ0FBQzhDLEdBQ25CUixFQUFTWSxNQUFNRixHQUFZQSxFQUFRRyxhQUFhLGNBQWdCTCxJQVdoRU0sQ0FBWU4sR0FBTXpELFVBQVVDLElBQUksMkJBRWhDOEMsRUFBZXZDLFlBQVk2QyxFQUFNSSxPQXhCWixHQ0R6QixrQkFBaUMsUyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvcmFtZW4ucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL3JhbWVuSW1nLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9jb21wb25lbnRzL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvY29udGVudHMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvY29udGVudHMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvY29udGVudHMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWdzL3JhbWVuLjU4ZmVmMTFkLndlYnBcIjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsICsgXCIuLi9hc3NldHMvXCI7IiwiaW1wb3J0IFJhbWVuSW1nIGZyb20gJy4uL2Fzc2V0cy9yYW1lbi5wbmcnXG5cbmV4cG9ydCBjb25zdCBnZXRJbWFnZSA9ICgpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IG5ldyBJbWFnZSgpXG5cbiAgZWxlbWVudC5zcmMgPSBSYW1lbkltZ1xuICBlbGVtZW50LmFsdCA9ICdSYW1lbidcblxuICByZXR1cm4gZWxlbWVudFxufVxuIiwiZXhwb3J0IGNvbnN0IGdldFByaW1hcnlCdXR0b24gPSAodGV4dCwgdHlwZSwgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nKVxuICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuLS1wcmltYXJ5JylcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsIHR5cGUpXG5cbiAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYm94LmNsYXNzTmFtZSA9ICdib3gnXG4gIGJveC50ZXh0Q29udGVudCA9IHRleHRcblxuICBjb25zdCBib3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBib3JkZXIuY2xhc3NOYW1lID0gJ2JvcmRlcidcblxuICBpZiAoYWN0aW9uICE9IG51bGwpIHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhY3Rpb24pXG4gIH1cblxuICBidXR0b24uYXBwZW5kQ2hpbGQoYm94KVxuICBidXR0b24uYXBwZW5kQ2hpbGQoYm9yZGVyKVxuXG4gIHJldHVybiBidXR0b25cbn1cbiIsImltcG9ydCB7IGdldEltYWdlIH0gZnJvbSAnLi4vcmFtZW5JbWcnXG5pbXBvcnQgeyBnZXRQcmltYXJ5QnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b24nXG5pbXBvcnQgQ29udGVudEdlbmVyYXRvciBmcm9tICcuLi9nZW5lcmF0b3InXG5cbmNvbnN0IGNvbnRlbnQgPSAoKCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSAnaG9tZSdcblxuICBjb25zdCBob21lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGhvbWVUZXh0LmNsYXNzTmFtZSA9ICdob21lX190ZXh0J1xuXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICBoMS5pbm5lckhUTUwgPSAnVGFzdGUgb2YgPHNwYW4gY2xhc3M9XCJoZWFkaW5nLWJveFwiPkphcGFuPC9zcGFuPidcblxuICBjb25zdCBzdWJoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIHN1YmhlYWRpbmcuY2xhc3NOYW1lID0gJ3N1YmhlYWRpbmcnXG4gIHN1YmhlYWRpbmcudGV4dENvbnRlbnQgPVxuICAgICdZb3VyIEZhdm9yaXRlIFJhbWVuIEZvciBEZWxpdmVyeSBhbmQgVGFrZS1PdXQgd2l0aCBKdXN0IEEgQ2xpY2shJ1xuXG4gIGhvbWVUZXh0LmFwcGVuZENoaWxkKGgxKVxuICBob21lVGV4dC5hcHBlbmRDaGlsZChzdWJoZWFkaW5nKVxuICBob21lVGV4dC5hcHBlbmRDaGlsZChcbiAgICBnZXRQcmltYXJ5QnV0dG9uKCdPcmRlciBOb3cnLCAnYnV0dG9uJywgKCkgPT5cbiAgICAgIENvbnRlbnRHZW5lcmF0b3IuZ2VuZXJhdGVDb250ZW50KCdtZW51JylcbiAgICApXG4gIClcblxuICBjb25zdCBob21lSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgaG9tZUltZy5jbGFzc05hbWUgPSAnaG9tZV9faW1nJ1xuICBob21lSW1nLmFwcGVuZENoaWxkKGdldEltYWdlKCkpXG5cbiAgZWxlbWVudC5hcHBlbmRDaGlsZChob21lVGV4dClcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChob21lSW1nKVxuXG4gIHJldHVybiB7IGVsZW1lbnQgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50XG4iLCJpbXBvcnQgeyBnZXRJbWFnZSB9IGZyb20gJy4uL3JhbWVuSW1nJ1xuXG5jb25zdCBjb250ZW50ID0gKCgpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnUnXG5cbiAgY29uc3QgX2NyZWF0ZVByaWNlV3JhcHBlciA9ICh7IHNpemUsIHByaWNlIH0pID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB3cmFwcGVyLmNsYXNzTmFtZSA9ICdtZW51X19jYXJkX19wcmljZS13cmFwcGVyJ1xuXG4gICAgY29uc3Qgc2l6ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBzaXplRWxlbWVudC5jbGFzc05hbWUgPSAnbWVudV9fY2FyZF9fc2l6ZSdcbiAgICBzaXplRWxlbWVudC50ZXh0Q29udGVudCA9IHNpemVcblxuICAgIGNvbnN0IHByaWNlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHByaWNlRWxlbWVudC5jbGFzc05hbWUgPSAnbWVudV9fY2FyZF9fcHJpY2UnXG4gICAgcHJpY2VFbGVtZW50LnRleHRDb250ZW50ID0gcHJpY2VcblxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoc2l6ZUVsZW1lbnQpXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChwcmljZUVsZW1lbnQpXG5cbiAgICByZXR1cm4gd3JhcHBlclxuICB9XG5cbiAgY29uc3QgX2NyZWF0ZUNhcmQgPSAobmFtZSwgZGVzYywgcHJpY2VzLCBwcmltYXJ5KSA9PiB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjYXJkLmNsYXNzTmFtZSA9ICdtZW51X19jYXJkJ1xuICAgIGlmIChwcmltYXJ5KSBjYXJkLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2NhcmQtLXByaW1hcnknKVxuXG4gICAgY29uc3QgY2FyZEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2FyZEltZy5jbGFzc0xpc3QgPSAnbWVudV9fY2FyZF9faW1nJ1xuICAgIGNhcmRJbWcuYXBwZW5kQ2hpbGQoZ2V0SW1hZ2UoKSlcblxuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIGgzLmNsYXNzTmFtZSA9ICdtZW51X19jYXJkX190aXRsZSdcbiAgICBoMy50ZXh0Q29udGVudCA9IG5hbWVcblxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwLmNsYXNzTmFtZSA9ICdtZW51X19jYXJkX19kZXNjJ1xuICAgIHAudGV4dENvbnRlbnQgPSBkZXNjXG5cbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRJbWcpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChoMylcbiAgICBjYXJkLmFwcGVuZENoaWxkKHApXG5cbiAgICBmb3IgKGxldCBwcmljZU9iaiBvZiBwcmljZXMpIHtcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoX2NyZWF0ZVByaWNlV3JhcHBlcihwcmljZU9iaikpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNhcmRcbiAgfVxuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgX2NyZWF0ZUNhcmQoXG4gICAgICAnU2hveXUgUmFtZW4nLFxuICAgICAgJ0NyZWFteSBwb3JrIGJyb3RoIHdpdGggc295IHNhdWNlIGZsYXZvcicsXG4gICAgICBbXG4gICAgICAgIHsgc2l6ZTogJ1NtYWxsJywgcHJpY2U6ICckOCcgfSxcbiAgICAgICAgeyBzaXplOiAnTGFyZ2UnLCBwcmljZTogJyQxMicgfSxcbiAgICAgIF0sXG4gICAgICBmYWxzZVxuICAgIClcbiAgKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKFxuICAgIF9jcmVhdGVDYXJkKFxuICAgICAgJ01pc28gUmFtZW4nLFxuICAgICAgJ01pc28gZmxhdm9yZWQgcG9yayBzb3VwIHNlcnZlZCB3aXRoIHZlZ2V0YWJsZXMnLFxuICAgICAgW1xuICAgICAgICB7IHNpemU6ICdTbWFsbCcsIHByaWNlOiAnJDEwJyB9LFxuICAgICAgICB7IHNpemU6ICdMYXJnZScsIHByaWNlOiAnJDE1JyB9LFxuICAgICAgXSxcbiAgICAgIHRydWVcbiAgICApXG4gIClcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChcbiAgICBfY3JlYXRlQ2FyZChcbiAgICAgICdTaGlvIFJhbWVuJyxcbiAgICAgICdDcmVhbXkgcG9yayBicm90aCB3aXRoIHNhbHQgZmxhdm9yJyxcbiAgICAgIFtcbiAgICAgICAgeyBzaXplOiAnU21hbGwnLCBwcmljZTogJyQxMicgfSxcbiAgICAgICAgeyBzaXplOiAnTGFyZ2UnLCBwcmljZTogJyQxNicgfSxcbiAgICAgIF0sXG4gICAgICBmYWxzZVxuICAgIClcbiAgKVxuXG4gIHJldHVybiB7IGVsZW1lbnQgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50XG4iLCJpbXBvcnQgeyBnZXRQcmltYXJ5QnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b24nXG5cbmNvbnN0IGNvbnRlbnQgPSAoKCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSAnY29udGFjdCdcblxuICBjb25zdCBfZ2V0Q29udGFjdFRleHQgPSAoKSA9PiB7XG4gICAgY29uc3QgX2NyZWF0ZUNvbnRhY3RJbmZvID0gKGh0bWwpID0+IHtcbiAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgIHAuY2xhc3NMaXN0LmFkZCgnc3ViaGVhZGluZycpXG4gICAgICBwLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RfX2luZm8nKVxuICAgICAgcC5pbm5lckhUTUwgPSBodG1sXG5cbiAgICAgIHJldHVybiBwXG4gICAgfVxuXG4gICAgY29uc3QgY29udGFjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhY3RUZXh0LmNsYXNzTmFtZSA9ICdjb250YWN0X190ZXh0J1xuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgaDEuaW5uZXJIVE1MID0gJ0dldCBpbiA8c3BhbiBjbGFzcz1cImhlYWRpbmctYm94XCI+dG91Y2ghPC9zcGFuPidcblxuICAgIGNvbnRhY3RUZXh0LmFwcGVuZENoaWxkKGgxKVxuICAgIGNvbnRhY3RUZXh0LmFwcGVuZENoaWxkKFxuICAgICAgX2NyZWF0ZUNvbnRhY3RJbmZvKCc8c3BhbiBjbGFzcz1cImJvbGRcIj5DYWxsIHVzOjwvc3Bhbj4gOTE3LTU0OC03NTUxJylcbiAgICApXG4gICAgY29udGFjdFRleHQuYXBwZW5kQ2hpbGQoXG4gICAgICBfY3JlYXRlQ29udGFjdEluZm8oXG4gICAgICAgICc8c3BhbiBjbGFzcz1cImJvbGRcIj5BZGRyZXNzOjwvc3Bhbj48YnIgLz4xMjIwIER1bmNhbiBBdmVudWU8YnIgLz5OZXcgWW9yayBOWSAxMDAxMSdcbiAgICAgIClcbiAgICApXG4gICAgcmV0dXJuIGNvbnRhY3RUZXh0XG4gIH1cblxuICBjb25zdCBfZ2V0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBfY3JlYXRlTGFiZWwgPSAoaWQsIGxhYmVsVGV4dCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICBsYWJlbC5jbGFzc05hbWUgPSAnY29udGFjdF9fbGFiZWwnXG4gICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dFxuICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpZClcblxuICAgICAgcmV0dXJuIGxhYmVsXG4gICAgfVxuXG4gICAgY29uc3QgX2NyZWF0ZUlucHV0ID0gKGlkLCB0eXBlLCBsYWJlbFRleHQpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsID0gX2NyZWF0ZUxhYmVsKGlkLCBsYWJlbFRleHQpXG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIGlucHV0LnR5cGUgPSB0eXBlXG4gICAgICBpbnB1dC5pZCA9IGlkXG4gICAgICBpbnB1dC5uYW1lID0gaWRcbiAgICAgIGlucHV0LmNsYXNzTmFtZSA9ICdjb250YWN0X19pbnB1dCdcbiAgICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZVxuXG4gICAgICByZXR1cm4geyBsYWJlbCwgaW5wdXQgfVxuICAgIH1cblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLmFjdGlvbiA9ICdtYWlsdG86dGVzdEByYW1lbmNvbXBhbnkuY29tJ1xuICAgIGZvcm0uY2xhc3NOYW1lID0gJ2NvbnRhY3RfX2Zvcm0nXG5cbiAgICBjb25zdCBuYW1lSW5wdXQgPSBfY3JlYXRlSW5wdXQoJ25hbWUnLCAndGV4dCcsICdZb3VyIE5hbWU6JylcbiAgICBmb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dC5sYWJlbClcbiAgICBmb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dC5pbnB1dClcblxuICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBfY3JlYXRlSW5wdXQoJ2VtYWlsJywgJ2VtYWlsJywgJ0VtYWlsOicpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChlbWFpbElucHV0LmxhYmVsKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZW1haWxJbnB1dC5pbnB1dClcblxuICAgIGNvbnN0IG1lc3NhZ2VMYWJlbCA9IF9jcmVhdGVMYWJlbCgnbWVzc2FnZScsICdNZXNzYWdlOicpXG4gICAgY29uc3QgbWVzc2FnZUFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgbWVzc2FnZUFyZWEubmFtZSA9ICdtZXNzYWdlJ1xuICAgIG1lc3NhZ2VBcmVhLmlkID0gJ21lc3NhZ2UnXG4gICAgbWVzc2FnZUFyZWEuY2xhc3NOYW1lID0gJ2NvbnRhY3RfX21lc3NhZ2UnXG4gICAgbWVzc2FnZUFyZWEucGxhY2Vob2xkZXIgPSAnTWVzc2FnZSdcbiAgICBtZXNzYWdlQXJlYS5yZXF1aXJlZCA9IHRydWVcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZUxhYmVsKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZUFyZWEpXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGdldFByaW1hcnlCdXR0b24oJ1NlbmQgbWVzc2FnZScsICdzdWJtaXQnLCBudWxsKSlcblxuICAgIHJldHVybiBmb3JtXG4gIH1cblxuICBlbGVtZW50LmFwcGVuZENoaWxkKF9nZXRDb250YWN0VGV4dCgpKVxuICBlbGVtZW50LmFwcGVuZENoaWxkKF9nZXRGb3JtKCkpXG5cbiAgcmV0dXJuIHsgZWxlbWVudCB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnRcbiIsImltcG9ydCBIb21lIGZyb20gJy4vY29udGVudHMvaG9tZSdcbmltcG9ydCBNZW51IGZyb20gJy4vY29udGVudHMvbWVudSdcbmltcG9ydCBDb250YWN0IGZyb20gJy4vY29udGVudHMvY29udGFjdCdcblxuY29uc3QgY29udGVudEdlbmVyYXRvciA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICBjb25zdCBuYXZMaW5rcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdl9faXRlbV9fbGluaycpKVxuXG4gIGNvbnN0IHBhZ2VzID0ge1xuICAgIGhvbWU6IEhvbWUuZWxlbWVudCxcbiAgICBtZW51OiBNZW51LmVsZW1lbnQsXG4gICAgJ2NvbnRhY3QtdXMnOiBDb250YWN0LmVsZW1lbnQsXG4gIH1cblxuICBjb25zdCBfZ2V0TmF2TGluayA9IChwYWdlKSA9PlxuICAgIG5hdkxpbmtzLmZpbmQoKG5hdkxpbmspID0+IG5hdkxpbmsuZ2V0QXR0cmlidXRlKCdkYXRhLWxpbmsnKSA9PSBwYWdlKVxuXG4gIGNvbnN0IF9jbGVhciA9ICgpID0+IHtcbiAgICBuYXZMaW5rcy5mb3JFYWNoKChuYXZMaW5rKSA9PiB7XG4gICAgICBuYXZMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ25hdl9faXRlbV9fbGluay0tYWN0aXZlJylcbiAgICB9KVxuICAgIGNvbnRlbnRFbGVtZW50LmlubmVySFRNTCA9ICcnXG4gIH1cblxuICBjb25zdCBnZW5lcmF0ZUNvbnRlbnQgPSAocGFnZSkgPT4ge1xuICAgIF9jbGVhcigpXG4gICAgX2dldE5hdkxpbmsocGFnZSkuY2xhc3NMaXN0LmFkZCgnbmF2X19pdGVtX19saW5rLS1hY3RpdmUnKVxuXG4gICAgY29udGVudEVsZW1lbnQuYXBwZW5kQ2hpbGQocGFnZXNbcGFnZV0pXG4gIH1cblxuICByZXR1cm4geyBnZW5lcmF0ZUNvbnRlbnQgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50R2VuZXJhdG9yXG4iLCJpbXBvcnQgJy4uL3Njc3MvaW5kZXguc2NzcydcbmltcG9ydCBDb250ZW50R2VuZXJhdG9yIGZyb20gJy4vZ2VuZXJhdG9yJ1xuXG5Db250ZW50R2VuZXJhdG9yLmdlbmVyYXRlQ29udGVudCgnaG9tZScpXG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsIl9fd2VicGFja19tb2R1bGVzX18iLCJuIiwiZ2V0dGVyIiwiX19lc01vZHVsZSIsImQiLCJhIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJnIiwiZ2xvYmFsVGhpcyIsInRoaXMiLCJGdW5jdGlvbiIsImUiLCJ3aW5kb3ciLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwic2NyaXB0VXJsIiwiaW1wb3J0U2NyaXB0cyIsImxvY2F0aW9uIiwiZG9jdW1lbnQiLCJjdXJyZW50U2NyaXB0Iiwic3JjIiwic2NyaXB0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibGVuZ3RoIiwiRXJyb3IiLCJyZXBsYWNlIiwicCIsImdldEltYWdlIiwiZWxlbWVudCIsIkltYWdlIiwiYWx0IiwiZ2V0UHJpbWFyeUJ1dHRvbiIsInRleHQiLCJ0eXBlIiwiYWN0aW9uIiwiYnV0dG9uIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInNldEF0dHJpYnV0ZSIsImJveCIsImNsYXNzTmFtZSIsInRleHRDb250ZW50IiwiYm9yZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcGVuZENoaWxkIiwiaG9tZVRleHQiLCJoMSIsImlubmVySFRNTCIsInN1YmhlYWRpbmciLCJob21lSW1nIiwiX2NyZWF0ZVByaWNlV3JhcHBlciIsInNpemUiLCJwcmljZSIsIndyYXBwZXIiLCJzaXplRWxlbWVudCIsInByaWNlRWxlbWVudCIsIl9jcmVhdGVDYXJkIiwibmFtZSIsImRlc2MiLCJwcmljZXMiLCJwcmltYXJ5IiwiY2FyZCIsImNhcmRJbWciLCJoMyIsInByaWNlT2JqIiwiX2NyZWF0ZUNvbnRhY3RJbmZvIiwiaHRtbCIsImNvbnRhY3RUZXh0IiwiX2dldENvbnRhY3RUZXh0IiwiX2NyZWF0ZUxhYmVsIiwiaWQiLCJsYWJlbFRleHQiLCJsYWJlbCIsIl9jcmVhdGVJbnB1dCIsImlucHV0IiwicmVxdWlyZWQiLCJmb3JtIiwibmFtZUlucHV0IiwiZW1haWxJbnB1dCIsIm1lc3NhZ2VMYWJlbCIsIm1lc3NhZ2VBcmVhIiwicGxhY2Vob2xkZXIiLCJfZ2V0Rm9ybSIsImNvbnRlbnRFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsIm5hdkxpbmtzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsInBhZ2VzIiwiaG9tZSIsIm1lbnUiLCJnZW5lcmF0ZUNvbnRlbnQiLCJwYWdlIiwiZm9yRWFjaCIsIm5hdkxpbmsiLCJyZW1vdmUiLCJmaW5kIiwiZ2V0QXR0cmlidXRlIiwiX2dldE5hdkxpbmsiXSwic291cmNlUm9vdCI6IiJ9