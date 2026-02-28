let menuBtn = document.getElementById("icon");
const navMenu = document.getElementById("menu");


menuBtn.addEventListener("click", function () { menuBtn.style.opacity = 0;
  navMenu.classList.toggle("active");
  menuBtn.style.opacity = 1;
});

const words = [
  "Welcome To Sunrise School!",
"A Nurturing & Safe Environment",
  "Character & Leadership Development"];
let index = 0;
 function the() { 
   const test = document.getElementById
   ("text");
   test.style.opacity = 0;
   setTimeout(() => { 
     index = (index + 1) % words.length;
     test.innerHTML = words[index];
      test.style.opacity = 1;
   }, 500);
   }
   setInterval(the, 3000);
   
