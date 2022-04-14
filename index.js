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

getBooks().then(books => {
    let sampleBook = books[0];
    console.log(sampleBook);

    document.body.innerHTML = `
        <div class="my-book">
            <div class="my-book-cover">${sampleBook.title}</div>
            <div class="my-book-spine"></div>
            <div class="my-book-footer"></div>
        </div>
    `
});