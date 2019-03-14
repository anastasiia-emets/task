
window.onscroll = function() {myFunction()};

var header = document.getElementById("header");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



let formData = new FormData();
formData.append("email", "someone@gmail.com");

fetch("https://test-telega.piastrix24.com/api/get_data",{
    body:formData,
    method:"post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
})


