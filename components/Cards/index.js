// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.




axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    const starter = response.data.articles //turning data into in Array 
    for(topic of Object.entries(starter)) { // entries is return an Array of values 
    console.log("These are diffrent articles", topic)
    topic[1].map(data => { 
        const makeCard = createCards(data)
        makeCard.setAttribute("data-subject", topic[0]) 
     })
   }
})
    .catch(error => {
        console.log("error pop up", error)
    }); 


function createCards(data) {
    const card = document.createElement("div"); 
    const headline = document.createElement("div"); 
    const author = document.createElement("div"); 
    const imgContainer = document.createElement("div"); 
    const img = document.createElement("img"); 
    const authorName = document.createElement("div"); 

    card.classList.add("card"); 
    headline.classList.add("headline"); 
    headline.textContent = data.headline; 
    author.classList.add("author");
    imgContainer.classList.add("img-container");
    img.src = data.authorPhoto
    authorName.textContent = data.authorName

    card.appendChild(headline);
    card.appendChild(author); 
    author.appendChild(imgContainer)
    imgContainer.appendChild(img);  
    author.appendChild(authorName); 

    const estate = document.querySelector(".cards-container")
    estate.appendChild(card); 
    return card; 
}



