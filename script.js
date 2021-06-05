const input = document.querySelector("input");
const btn = document.querySelector("button");
const para = document.querySelector("p");

btn.onclick = function(){
    const code = input.value;
    para.textContent = eva(code);
}

class Person {
    constructor(first, last, age, gender, interest) {
        this.name = {
            first,
            last
        };
        this.age = age;
        this.gender = gender;
        this. interest = interest;
    }

    greetinn() {
        console.log(`Hi I'm ${this.name.first}`)
    };

    farwell() {
        console.log(`${this.name.first} has left bulding. Bye for now`)
    };
}

let han = new Person("Han", "Solo", 26, "male" ["Smugging"]);
han.greetinn();

let lala = new Person("Lala", "Perez", 19, "female", ["Correr"]);
lala.farwell();

class Teacher extends Person {
    constructor(first, last, age, gender, interest, subject, grade) {
        super(first, last, age, gender, interest); //Ahora "this" es inicializado llamando al constructor padre
        this.subject = subject;
        this.grade = grade;
    }

    get subject() {
        return this._subject;
    }

    set subject(newSubject) {
        this._subject = newSubject;
    }
}

superHeroes = {
    "squarName": "Super hero squad",
    "houseTour": "Metro City",
    "forred": 2016,
    "secretBase": "Super Tower",
    "active": true,
    "members": [
        {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentify": "Dan Jukes",
        "powers": [
            "Encoger cosas",
            "Agrandar cosas",
            "hacerse grande o pequeño"
        ]
    },
    {
        "name": "Iroman",
        "age": 36,
        "secretIdentify": "Ironman",
        "powers": [
            "Diferentes trajes de hierro con tecnologia",
            "Inventos a su disposision"
        ]
    },
    {
        "name": "Wanda Maximoff",
        "age": 24,
        "secretIdentify": "Bruja escarlata",
        "powers": [
            "Magia",
            "Esta bien guapa 7u7"
        ]
    }
    ]
}