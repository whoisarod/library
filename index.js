async function getBooks() {
    let response = await fetch('books.json');
    let books = await response.json();
    let n = 1;
    return books.map(book => {
        book.id = n;
        n++;
        return book;
    });
}

function getBookHTML(book) {
    return `
        <div class="my-book">
            <div class="my-book-cover">${book.title}</div>
            <div class="my-book-spine"></div>
            <div class="my-book-footer"></div>
        </div>
`
}

function displayLibrary(books) {
    document.body.innerHTML = `
        <div class="my-library">
            ${books.map(getBookHTML).join('')}
        </div>
    `
}

getBooks().then(displayLibrary).catch(e => console.log(e));