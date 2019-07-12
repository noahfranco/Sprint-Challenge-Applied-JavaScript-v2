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
    .then(data => {
    newTab(data)
    console.log("New Topics", data) 
})
.catch(error => {
    console.log("error", error);
});
    

function newTab() {
    const tab = document.createElement("div"); 
    const topicName = document.createElement("title"); 

    tab.classList.add(".tabs"); 

    tab.appendChild(topicName); 

    const final = document.querySelector(".tab"); 
    // final.appendChild(tab) 
    topicName.textContent = newTab.data

    console.log(tab)
    return tab 
}
   
