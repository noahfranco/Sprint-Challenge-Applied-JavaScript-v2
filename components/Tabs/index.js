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
        const cool = document.querySelector(".topics")
        cool.appendChild(newTab(tab))
    })
})
    .catch(error => {
        console.log("error", error)
    }); 
    
function newTab(info) {
    const tab1 = document.createElement("div")

    tab1.classList.add("tab")

    tab1.textContent = info 
    return tab1
}

   
