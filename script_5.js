const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];


  console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");

// On crée une variable vide
let borrowed_books;

books.forEach(book => {
    if (book.rented === 0) {
        borrowed_books = false;
    } else {
        borrowed_books = true
    }
});

if ( borrowed_books === true) {
    console.log("Oui");
} else {
    console.log("Non");
};



console.log("Quel est le livre le plus emprunté ?");
let most_rented = books[0];
books.forEach(book => {
    if (book.rented > most_rented.rented) {
        most_rented = book;
    };
});

console.log(`Le livre le plus emprunté est ${most_rented.title}`);



console.log("Quel est le livre le moins emprunté ?");
let least_rented = books[0];
books.forEach(book => {
    if (book.rented < least_rented.rented) {
        least_rented = book;
    };
});

console.log(`Le livre le moins emprunté est ${least_rented.title}`);



console.log("Trouve le livre avec l'id 873495");

let book_with_id = books.find(book => book.id === 873495)
console.log(`Le livre avec l'id 873495 est ${book_with_id.title}`);



console.log("Supprime le livre avec l'ID: 133712") ;

let book_to_delete = books.find(book => book.id === 133712)

books.splice(book_to_delete, 1);
//ou simplement books.shift() car c'est le 1er de la liste
console.log(books)

console.log(`Le livre avec l'id 133712 a bien été supprimé de la liste`);



console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)")
books.sort(function compare(a, b){
    if (a.title < b.title) {
        return -1;
    };
    if (a.title > b.title) {
        return 1;
    };
    return 0;
});
console.log("Voici le classement des livres par odre alphabétique")
console.log(books);

//Si fonctionComparaison(a, b) est inférieur à 0, on trie a avec un indice inférieur à b (a sera classé avant b)
//Si fonctionComparaison(a, b) renvoie 0, on laisse a et b inchangés l'un par rapport à l'autre, mais triés par rapport à tous les autres éléments. Note : la norme ECMAScript ne garantit pas ce comportement, par conséquent tous les navigateurs (par exemple les versions de Mozilla antérieures à 2003) ne respectent pas ceci.
//Si fonctionComparaison(a, b) est supérieur à 0, on trie b avec un indice inférieur à a.-->
