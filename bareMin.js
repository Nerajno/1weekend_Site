// Original js 

let color = '#DF9FA2'
const sections = Array.from(document.querySelectorAll("section:not(:first-of-type)"));
const fancyElement = document.querySelector(".heading-inside-text");
const headerLink = document.querySelector("header > a");

// sets color based on scroll position
function setColor(scrollEvent) {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 14) {
        if (!fancyElement.classList.contains("will-shrink"))
            fancyElement.classList.add("will-shrink")
        headerLink.classList.add("will-show")
    } else {
        fancyElement.classList.remove("will-shrink")
        headerLink.classList.remove("will-show")
    }
    color = `hsla(${(Math.floor(scrollPosition / 3 % 360)).toString().substr(0, 3)},30%,76%, 1)`
    sections.forEach(heading => {
        heading.style.borderLeftColor = color;
    });

    // sets the underline and bg of the links bare CSS styles nicely. Kind of brittle
    document.styleSheets[0].rules[12].style.background = color;
}
window.addEventListener('scroll', setColor);

// Js for dark mode ~> https://codepen.io/FlorinPop17/pen/XWWZYYG || Florin Pop

const chk =  document.getElementById('chk');
chk.addEventListener('change', ()=>{
    document.body.classList.toggle('dark');
});

