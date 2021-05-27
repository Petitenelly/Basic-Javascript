const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];


console.log('Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70')
  entrepreneurs.forEach(entrepreneur => {
    if(entrepreneur.year >= 1970 && entrepreneur.year < 1980) {
        console.log(`${entrepreneur.first} ${entrepreneur.last} ${entrepreneur.year}`);
    }
});

console.log('Sors une array qui contient le prénom et le nom des entrepreneurs')
let nameArray = [];
entrepreneurs.forEach(entrepreneur => {
    nameArray.push(`${entrepreneur.first} ${entrepreneur.last}`);
});
console.log(nameArray);


console.log("Quel âge aurait chaque inventeur aujourd'hui ?")
entrepreneurs.forEach(entrepreneur => {
    console.log(`Aujourd'hui, ${entrepreneur.first} ${entrepreneur.last} aurait ${2021 - entrepreneur.year} ans.`)
});


console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille.")
entrepreneurs.sort(function comparaison(a, b) {
    if (a.last < b.last) {
        return -1;
    }
    if (a.last > b.last) {
        return 1;
    }
    return 0;
});

console.log("Voici la liste triée par ordre alphabétique du nom de famille")
console.log(entrepreneurs)


//Si fonctionComparaison(a, b) est inférieur à 0, on trie a avec un indice inférieur à b (a sera classé avant b)
//Si fonctionComparaison(a, b) renvoie 0, on laisse a et b inchangés l'un par rapport à l'autre, mais triés par rapport à tous les autres éléments. Note : la norme ECMAScript ne garantit pas ce comportement, par conséquent tous les navigateurs (par exemple les versions de Mozilla antérieures à 2003) ne respectent pas ceci.
//Si fonctionComparaison(a, b) est supérieur à 0, on trie b avec un indice inférieur à a.-->
