/*created a immideately invoked function 
  will not pollute the global scope */
(function () {
  //seleted the images of wheel and the button
  const wheel = document.querySelector(".wheel");
  const button = document.querySelector(".button");

  //initialize the rest position of the wheel
  let deg = 0; // 0 degree

  //created a listner that will perform after the button is pressed
  button.addEventListener("click", () => { 

    //button pointer event
    button.style.pointerEvents = "none";

    //custom degree value which generated randomely
    deg = Math.floor(3000 + Math.random() * 1000);

    //effects
    wheel.style.transition = "all 7s ease-out";
    wheel.style.transform = `rotate(${deg}deg)`;
    wheel.classList.add("blur"); //custom made blur effect
  });

  //created a listener that will perform after the wheel is stoped
  wheel.addEventListener("transitionend", () => {
    
    wheel.classList.remove("blur");  

    //finishing effects
    button.style.pointerEvents = "auto";
    wheel.style.transition = "none"; 

    //code for continue the rotation from where it has stoped
    //degree of wheel
    const actualDeg = deg % 360; 
    wheel.style.transform = `rotate(${actualDeg}deg)`;
  });
})();
