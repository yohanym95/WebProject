console.log("This is working");

document.getElementById("menu1").addEventListener("click", openmenu);

function openmenu(){
      document.getElementById("dropdown").classList.toggle("active");
}

