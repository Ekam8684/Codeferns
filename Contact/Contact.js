function openFunction() {
    document.getElementById("menu").style.width = "500px";
    document.getElementById("menu").style.backgroundColor = "rgba(131, 134, 131, 0.342);";
  
  }
  function closeSideMenuFunction() {
    document.getElementById("menu").style.width = "0px";
    document.getElementById("mainbox").style.marginRight = "18px";
  
  }

  const inputs = document.querySelectorAll(".input");
  const inputsOne = document.querySelectorAll(".input-one");

  function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }
  
  function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }
  
  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  }); 
  inputsOne.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });