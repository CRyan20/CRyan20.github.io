//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const page4btn=document.querySelector("#page4btn");
var allpages=document.querySelectorAll(".page");
//select all subtopic pages
console.log(allpages);
hideall();
function hideall(){ //function to hide all pages
for(let onepage of allpages){ //go through all subtopic pages
onepage.style.display="none"; //hide it
}
}
function show(pgno){ //function to show selected page no
hideall();
//select the page based on the parameter passed in
let onepage=document.querySelector("#page"+pgno);
//show the page
onepage.style.display="block";
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
show(1);
});
page2btn.addEventListener("click", function () {
show(2);
});
page3btn.addEventListener("click", function () {
show(3);
});
page4btn.addEventListener("click", function () {
    show(4);
});

// open and close the burger icon
const toggleButton = document.getElementsByClassName("toggle")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]

toggleButton.addEventListener("click", () => {navbarLinks.classList.toggle("active")})

//quiz function
function result()
{
  //increase score depending on total answers correct
    var score = 0;
    if(document.getElementById('correct1').checked)
    {
        score++;
    }
    if(document.getElementById('correct2').checked)
    {
        score++;
    }
    if(document.getElementById('correct3').checked)
    {
        score++;
    }
    alert("Your score is: " +score);
}

//toggle fullscreen

const fullscreenButton = document.getElementById('fullscreenButton');

fullscreenButton.addEventListener('click', toggleFullscreen);

function toggleFullscreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen().catch(err => {
      console.log(`Error attempting to enable full-screen mode: ${err.message}`);
    });
  }
}

document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    fullscreenButton.textContent = 'Exit Fullscreen';
  } else {
    fullscreenButton.textContent = 'Toggle Fullscreen';
  }
});
