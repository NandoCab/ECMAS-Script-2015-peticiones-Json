const header = document.querySelector("header");
const section = document.querySelector("section");

let requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

let request = new XMLHttpRequest();

request.open("GET", requestURL);

request.responseType = "json";
request.send();

request.onload = function() {
    const superHeroes = request.response;
    console.log(superHeroes);
    populateheader(superHeroes);
    showHeroes(superHeroes);
}

function populateheader(jsonObj) {
    const myh1 = document.createElement("h1");
    myh1.textContent = jsonObj["squadName"];
    header.appendChild(myh1);

    const myPara= document.createElement("p");
    myPara.textContent = "Hometown: " + jsonObj["homeTown"] + "//Formed: " + jsonObj["formed"];
    header.appendChild(myPara);
}

function showHeroes(jsonObj) {
    console.log("Buscamos",jsonObj);
    const heroes = jsonObj["members"];

    for (let i = 0; i < heroes.length; i++) {
        console.log("Gorda", heroes[i])
        const myArticle =  document.createElement("article");
        const myh2 = document.createElement("h2");
        const myPara1 = document.createElement("p");
        const myPara2 = document.createElement("p");
        const myPara3 = document.createElement("p");
        const myList = document.createElement("ul");

        myh2.textContent = heroes[i].name;
        myPara1.textContent = "Secret identity: " + heroes [i].secretIdentity;
        myPara2.textContent = "Age: " + heroes[i].age;
        myPara3.textContent = "Superpowers: ";

        const superPowers = heroes[i].powers;
        for (let i = 0; i < superPowers.length; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = superPowers[i];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myh2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}