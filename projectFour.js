// alert("Namaste!"); I always use an alert to check if the (.html) file is connected to the (.js) file.

const button = document.querySelector(".btn");

const search = document.querySelector(".search-container");

const input = document.querySelector(".input");

button.addEventListener('mouseover', () => {
  search.classList.toggle("active");
  input.focus();
})
// My idea to add an event Listener
// let clicks = 0;

//   button.addEventListener("click", () =>{
//     if(clicks === 0){
//     search.classList.add("active");
//     clicks++;
//     }
//     else if(clicks === 1){
//       search.classList.remove("active");
//       clicks--;
//     } 
//     input.focus();
//   });

  // Traversy Uses this even Listener: 

  // console.log(clicks, 88);
  // console.log(` Hey! Thanks for your help ${clicks}`); 
  