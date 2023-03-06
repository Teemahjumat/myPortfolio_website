// loader


 function myFunction() {
   setTimeout(viewPage(), 2000);
 }

 function viewPage() {
   document.getElementsById("loader").style.opacity = "0";
   document.getElementsById("show").style.opacity = "1";
 }

// Wait for the page to load
 window.addEventListener("load", function() {
  // Set a timeout of 2 seconds
   setTimeout(function() {
     // Add the "loaded" class to the body
     document.body.classList.add("loaded");
  }, 2000);
 });



// for hamburger menu.  Clicking on the hamburger button will call toggleMenu().
// It checks if the menu contains the class showMenu.If the menu contains the showMenu class, 
// we remove it to hide the menu. We also toggle the display to hide the close icon and show the menu icon.
// If the menu doesn't have the showMenu class, we add it, show the close icon and hide the menu icon.

      const menu = document.querySelector(".drop-down-list");
const menuItems = document.querySelectorAll(".header-link");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".close");
const menuIcon = document.querySelector(".bars");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "inline-block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "inline-block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

// for closing the menu when clicked
// With forEach, we can iterate through each link and add a call to toggleMenu().

menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )

// for active class on clicked
// a click event listener is added to each list item in the unordered list. 
// When a list item is clicked, the code first removes the "active" class from all list items using a loop,
//  then uses the toggle method to add or remove the "active" class from the clicked list item. 
// The "active" class changes the background color of the selected list item to teal green. 
// If the class is already present, it will be removed. If it's not, it will be added.


  const listItems = document.querySelectorAll("li");

listItems.forEach(function(listItem) {
  listItem.addEventListener("click", function() {
    listItems.forEach(function(item) {
      item.classList.remove("active");
    });
    this.classList.toggle("active");
  });
});


// for changing the active class on scroll
// a scroll event listener is added to the window object. When the user scrolls, 
// the code calculates the current position of the viewport by adding half of the viewport height 
// to the current scrollY value. Then, it loops through each section and checks if the current position 
// is within the top and bottom of the section. If it is, the code loops through each list item,
//  removes the "active" class, and adds the "active" class to the corresponding list item 
// that matches the id of the section.





const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function() {
  const currentPosition = window.scrollY + window.innerHeight / 2;
  sections.forEach(function(section) {
    const sectionTop = section.offsetTop;
    const sectionBottom = section.offsetTop + section.offsetHeight;
    if (currentPosition >= sectionTop && currentPosition <= sectionBottom) {
      listItems.forEach(function(listItem) {
        listItem.classList.remove("active");
        if (section.id === listItem.querySelector(".header-link").hash.slice(1)) {
          listItem.classList.add("active");
        }
      });
    }
  });
});


// for changing the sentences
// This code iterate through an array of sentences, adding each character of the current sentence to the
// paragraph element one at a time with a delay of 100 milliseconds between each character.
// Once all characters of the current sentence have been added, it clears the previous sentence 
// before displaying the next one. A function called "deleteText()" is called after the text has been typed out. 
// The function uses a setTimeout function to repeatedly remove the last character of the text in the
// paragraph element until it's empty, then it calls the type function again after a delay of 2 secs to 
// show the next sentence. Also, I set the delay for removing the last character of the text to be 150ms 
// so it will be clear and smooth. a setTimeout function to the end of the typeWriter() function that will 
// wait for 2 seconds before calling the deleteText() function.This will pause the animation for 2 seconds
// while the sentence is still shown on the screen before starting to delete it. Once the sentence is deleted, 
// the next sentence will start to be typed out immediately.Also, I added a check inside the function that
// once all sentences have been shown, it resets the index to 0 so that the sentences will be shown again in a loop.





var sentences = ["I'm Fatimah Jumat.", "I'm a Frontend Developer.", "I'm a Tech mom."];
var index = 0;
var el = document.getElementById("sentences");

function type() {
  if (index < sentences.length) {
    var text = sentences[index];
    var i = 0;
    el.innerHTML = "";

    function typeWriter() {
      if (i < text.length) {
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      } else {
        setTimeout(deleteText, 2000);
      }
    }

    function deleteText() {
      if (el.innerHTML.length > 0) {
        el.innerHTML = el.innerHTML.substring(0, el.innerHTML.length - 1);
        setTimeout(deleteText, 150);
      } else {
        index++;
        if (index === sentences.length) {
          index = 0;
        }
        type();
      }
    }

    typeWriter();
  }
}

type();



 // Get the modal
 var modal = document.getElementById("myModal");

 // Get the button that opens the modal
 var btn = document.getElementById("myBtn");
 
 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("end")[0];
 
 // When the user clicks on the button, open the modal
 btn.onclick = function() {
   modal.style.display = "block";
 }
 
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
   modal.style.display = "none";
 }
 
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }


//  scroll to top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("scroll-to-top").classList.add("show");
  } else {
    document.getElementById("scroll-to-top").classList.remove("show");
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// color switcher and color display nav
function openGear() {
    document.getElementById("color-display").style.width = "200px";
    document.getElementById("color-display").style.height = "220px";
    document.getElementById("color-switcher").style.right = "200px";
    document.getElementById("btn-fixed").style.right = "200px";
  }
  
  function closeGear() {
    document.getElementById("color-display").style.width = "0";
    document.getElementById("color-display").style.height = "0";
    document.getElementById("color-switcher").style.right = "0";
    document.getElementById("btn-fixed").style.right = "0";

  }

 function small(obj){
    obj.style.transform = "scale(0.5, 0.5)";
    // the big function is no more needed, when i write the color change after reload in here 
 }

 function big(obj){
    obj.style.transform = "scale(1, 1)";
 }



//  const blue_Theme = document.querySelector('.blue');
//  blue_Theme.addEventListener('click', () =>{
//      let element = document.body;
//      element.classList.toggle('blue')
 
//  })
 
 

//  const reset_Theme = document.querySelector('reset');
//  reset_Theme.addEventListener('click', () =>{
//      let element = document.body;
//      element.classList.toggle('restart')
 
//  })









// var r = document.querySelector(':root');

// Create a function for setting a variable value
// function setMe() {
  // Set the value of variable --teal to another value (in this case "purple")
//   r.style.setProperty('--teal', '#660FF2');
// }
// function pick() {
//     r.style.setProperty('--teal', 'red');
// }

// var restart = document.getElementsByClassName('re-set');

// function reset() {
//     r.style.setProperty('--teal', '#20C996');
// };

// restart.addEventListener('click', reset());



const brownBtn = document.getElementById('brown');
const lightblueBtn = document.getElementById('lightBlue');
const purpleBtn = document.getElementById('purple');
const orangeBtn = document.getElementById('orange');
const pinkBtn = document.getElementById('pink');
const resetBtn = document.getElementById('reset');
const goldBtn = document.getElementById('gold');
const redBtn = document.getElementById('red');
const blueBtn = document.getElementById('blue');
const body = document.getElementsByTagName('body')[0];

brownBtn.addEventListener('click', () => {
  localStorage.setItem('textColor', 'brown');
  location.reload();
});

blueBtn.addEventListener('click', () => {
  localStorage.setItem('textColor', 'blue');
  location.reload();
});

lightblueBtn.addEventListener('click', () => {
  localStorage.setItem('textColor', 'lightBlue');
  location.reload();
});

purpleBtn.addEventListener('click', () => {
  localStorage.setItem('textColor', 'purple');
  location.reload();
});

orangeBtn.addEventListener('click', () => {
  localStorage.setItem('textColor', 'orange');
  location.reload();
});

goldBtn.addEventListener('click', () => {
  localStorage.setItem('textColor', 'gold');
  location.reload();
});

redBtn.addEventListener('click', () => {
  localStorage.setItem('textColor', 'red');
  location.reload();
});

pinkBtn.addEventListener('click', () => {
  localStorage.setItem('textColor', 'pink');
  location.reload();
});

resetBtn.addEventListener('click', () => {
  localStorage.setItem('textColor', 'reboot');
  location.reload();
});


const textColor = localStorage.getItem('textColor');

if (textColor) {
  body.classList.add(textColor);
}


