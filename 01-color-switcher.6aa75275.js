!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=document.querySelector("body");e.classList.add("change-color-buttons-stop"),t.classList.add("change-color-buttons-start"),e.disabled=!0;var o=null;function d(){a.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(){o=setInterval(d,1e3),e.disabled=!1,t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(o),e.disabled=!0,t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.6aa75275.js.map