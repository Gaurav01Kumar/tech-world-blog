var lists = document.querySelectorAll(".list");
var hovertext = document.querySelectorAll(".hover_text");

function hoverEffect(index) {
  hovertext[index].style.display = "block";
  setTimeout(function () {
    hovertext[index].style.display = "none";
  }, 800);
}
// lists[0].addEventListener('mouseover',()=>{

//     setTimeout(()=>{
//         hovertext[0].style.display="none"
//     },1000)
// })
// lists.addEventListener('click',function(){
// console.log(lists)
// })
// console.log(Array.prototype.indexOf.call(lists))

// form validation
const form = document.getElementById('signup');
const nameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPassword=document.getElementById('confirmpassword')
const message=document.getElementById("message");
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevents the form from submitting automatically
  
  // Check if name is valid
  if (nameInput.value === '') {
    alert('Please enter your name.');
    return;
  }
  
  // Check if email is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    alert('Please enter a valid email address.');
    return;
  }
  
  // Check if password is valid
  if (passwordInput.value.length < 8) {
    alert('Password must be at least 8 characters long.');
    return;
  }
  if(passwordInput.value == confirmPassword.value){
    message.innerHTML="Password  matched"
    message.style.color="green"

    return;
  }else{
    message.innerHTML="Password not matched"
    message.style.color="red";
    
  }
  // If all validatios pass, submit the form

  form.submit();
 
});

// const editor = document.getElementById("editor");
// const boldBtn = document.getElementById("bold-btn");
// const italicBtn = document.getElementById("italic-btn");

// boldBtn.addEventListener("click", () => {
//   document.execCommand("bold", false, null);
//   toggleBtnStyle(boldBtn);
// });

// italicBtn.addEventListener("click", () => {
//   document.execCommand("italic", false, null);
//   toggleBtnStyle(italicBtn);
// });

// function toggleBtnStyle(btn) {
//   if (btn.classList.contains("bold") || btn.classList.contains("italic")) {
//     btn.classList.toggle("bold");
//     btn.classList.toggle("italic");
//   } else {
//     btn.classList.toggle("bold");
//   }
// }
