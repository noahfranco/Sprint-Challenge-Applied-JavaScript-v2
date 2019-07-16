// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component



function Header() {
    const parent = document.createElement("div"); 
    const date = document.createElement("span"); 
    const title = document.createElement("h1"); 
    const temperature = document.createElement("span"); 

    parent.classList.add("header"); 
    date.classList.add("date"); 
    temperature.classList.add("temp"); 
    
    parent.appendChild(date); 
    parent.appendChild(title); 
    parent.appendChild(temperature); 

    
    // this shows it on the HTML page 
   const displayHeader = document.querySelector(".header-container")
    displayHeader.appendChild(parent)
    date.textContent = "SMARCH 28, 2019"
    title.textContent = "Lambda Times"
    temperature.textContent = "98°"

}

Header()
