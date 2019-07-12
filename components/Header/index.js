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

    parent.classList.add(".header"); 
    
    parent.appendChild(date); 
    parent.appendChild(title); 
    parent.appendChild(temperature); 

    console.log(Header)

}
