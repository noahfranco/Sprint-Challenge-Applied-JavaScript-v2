// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


    axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
    const great = response.data.topics
    great.forEach(tab => {
        if(tab === "node.js"){
            tab = "node" 
        }
        const cool = document.querySelector(".topics") // pulls the information from .topics
        const returnNum = newTab(tab) // creatd var and set it queal to function 
        cool.appendChild(returnNum) //displaying it out 
        returnNum.addEventListener("click", haha => { // click event listener 
            const cards = document.querySelectorAll(".card")
            cards.forEach((element) => {
                element.style.display = "none" //
                const helpMe = document.querySelectorAll(`.card[data-subject="${returnNum.dataset.subject}"]`)
                helpMe.forEach((tab) => tab.style.display = "flex")
            })
        })
    })
})
.catch(error => {
console.log("error", error)
    }); 
    
function newTab(info) {
    const tab1 = document.createElement("div")

    tab1.classList.add("tab")
    tab1.setAttribute("data-subject", info)
    tab1.textContent = info 
    return tab1
}

   
