/* class Book {
  constructor(title, author, page) {
    this.title = title;
    this.author = author;
    this.page = page;
  }

  read() {
    return `Estou lendo ${this.title}`;
  }
} */

/* let book = new Book("Algoritmos para viver", "Brian", 500);
let otherBook = new Book("Um Exu em NY", "Cidinha", 100); */

/* console.log(book, otherBook);
console.log(book.read());
console.log(otherBook.read()); */

//heranca
/* class ITBook extends Book {
  constructor(title, author, pages, technology) {
    super(title, author, pages);
    this.technology = technology;
  }
}

let itBook = new ITBook("Algoritmos para viver", "Brian", 500, "Algoritmos");

console.log(itBook); */

//encapsulamento
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

let person = new Person("Rafael");

person.name = "Krii3ger";

console.log(person.name);
