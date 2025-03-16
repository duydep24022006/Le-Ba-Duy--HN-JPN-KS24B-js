const books = {
    title: "JavaScript Basics",
    author: "John Smith",
    page: 200
};
delete books.page;
for (let keys in books) {
    console.log(`${keys}:${books[keys]}`)
}