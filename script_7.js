
    let answer = prompt("C'est quoi que tu veux m'dire ? :");

    
    if (answer.indexOf('?') > -1) {
        console.log("Ouais Ouais...");
    } else if (answer == answer.toUpperCase() && answer !== "") {
        console.log("Pwa, calme-toi...");
    } else if (answer.indexOf('Fortnite') > -1) {
        console.log("On s' fait une partie soum-soum ?");
    }else if (answer == "" ) {
        console.log("T'es en PLS ?")
    }    else {
        console.log("Balek.")
    }


    