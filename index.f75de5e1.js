"use strict";
const list = document.querySelector(".gallery__list");
const largeImg = document.querySelector(".gallery__large-img");
list.addEventListener("click", (e)=>{
    e.preventDefault();
    const link = e.target.closest("a");
    largeImg.src = link.href;
});

//# sourceMappingURL=index.f75de5e1.js.map
