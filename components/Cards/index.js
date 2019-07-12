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
.then(config => {
    console.log("These are Articles", config.data.articles)
    const work = config.data.articles
    const play = Object.entries(work) 
    console.log("does it work?", play)
    play.forEach(element => {
        const great = document.querySelector(".cards-container")
        great.appendChild(articleCards(config))
        
    });
})
.catch(error => {
    console.log("These is an error", error)
})


function articleCards(apply) {
    const card = document.createElement("div"); 
    const handline = document.createElement("h1"); 
    const auther = document.createElement("p"); 
    const imgContainer = document.createElement("div");
    const img = document.createElement("img"); 
    const byAuther = document.createElement("span"); 

    card.classList.add("cars-container"); 
    handline.classList.add("headline"); 
    auther.classList.add("auther"); 
    imgContainer.classList.add("img-container"); 

    card.appendChild(headline); 
    card.appendChild(auther); 
    card.appendChild(imgContainer); 
    imgContainer.appendChild(img); 
    card.appendChild(byAuther); 

    const work = document.querySelector(".card-container")
    work.appendChild(card)
    headline.textContent = `${apply.javascript}`
    
    
    
}