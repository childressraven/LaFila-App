
const searchInput = document.querySelector('.search-book');
const searchBtn = document.querySelector('.search-btn');
const container = document.querySelector('.book-container');
let book;

function getData() {
  fetch('https://openlibrary.org/search.json?q='+searchInput.value+'') 
  .then(response => response.json())
  .then(data => {
     
     book = data;
     const bookTitles = book.docs;
     console.log(bookTitles);
    
     Object.keys(bookTitles).forEach( key => {
       console.log(bookTitles[key].title);
       const bookEl = document.createElement('div');
       bookEl.innerHTML = `
         <div class="book">
          <h2 class="book-title">${bookTitles[key].title}</h2>
          <p>${bookTitles[key].author_name}</p>
          <p>${bookTitles[key].first_publish_year}</p>
         </div> 
       `
       container.appendChild(bookEl);
     })
  })
  
}

searchBtn.addEventListener('click', getData);