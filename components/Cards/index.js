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

function cardCreator(headline, authorPhoto, authorName) {
    let div = document.createElement('div');
    div.classList.add('card');

    let divChild = document.createElement('div');
    divChild.classList.add('headline');
    divChild.textContent = headline;

    let divChild2 = document.createElement('div');
    divChild2.classList.add('author');

    let divGrandChild = document.createElement('div');
    divGrandChild.classList.add('img-container');

    let img = document.createElement('img');
    img.src = authorPhoto;

    let span = document.createElement('span');
    span.textContent = 'By ' + authorName;

    div.appendChild(divChild);
    div.appendChild(divChild2);
    divChild2.appendChild(divGrandChild);
    divGrandChild.appendChild(img);
    divChild2.appendChild(span);


    return div;
}


let cardsContainer = document.querySelector('.cards-container');


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then( response => {
        response.data.articles.javascript.forEach ( item => {
            let card = cardCreator(item.headline, item.authorPhoto, item.authorName);
            cardsContainer.appendChild(card);
        })
        response.data.articles.bootstrap.forEach ( item => {
            let card = cardCreator(item.headline, item.authorPhoto, item.authorName);
            cardsContainer.appendChild(card);
        })
        response.data.articles.technology.forEach ( item => {
            let card = cardCreator(item.headline, item.authorPhoto, item.authorName);
            cardsContainer.appendChild(card);
        })
        response.data.articles.jquery.forEach ( item => {
            let card = cardCreator(item.headline, item.authorPhoto, item.authorName);
            cardsContainer.appendChild(card);
        })
        response.data.articles.node.forEach ( item => {
            let card = cardCreator(item.headline, item.authorPhoto, item.authorName);
            cardsContainer.appendChild(card);
        })
    })

    .catch( error => {
        console.log("Error:", error);
    })