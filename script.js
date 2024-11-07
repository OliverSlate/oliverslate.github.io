 // Select the header element
 const header = document.getElementById('header');

 // Function to handle scroll
 function handleScroll() {
   if (window.scrollY > 0) {
     header.style.backgroundColor = '#2c262a';
   } else {
     header.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
   }
 }
 function Scroll() {
  window.scrollTo(0, 0);
}
function scrollToElement(elementId, offset = 0) {
  const targetElement = document.getElementById(elementId);

  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - offset,
      behavior: "smooth"
    });
  }
}
 // Add scroll event listener
 window.addEventListener('scroll', handleScroll);