// --------------- OOP ---------------
// Constructing a class : constructor & methods
// classname: PascalCase
class Developer{
    constructor(name = "Anonymous coder", age = 100){
        this.name = name;
        this.age = age;
        this.languages = ["JavaScript", "Python", "CSS", "HTML"];
        this.braincell = 10;
    }

    learnLanguage(newLanguage){
        this.languages.push(newLanguage);
        this.braincell++;
        console.log(`${this.name} is learning ${newLanguage}`);
        console.log(`${this.constructor.name}`)
        return this;
    }

    debug(){
        this.braincell--;
        console.log(`${this.name} is debugging.............. neverending....`)
        return this;
    }
}

class SeniorDeveloper extends Developer{
    constructor(name, age){
        super(name, age)
        this.caffeinated = false;
    }

    debug(){
        console.log(`Asking a junior developer to help him..`)
        this.caffeinated = true;
        super.debug();
        return this;
    }
}

const dev1 = new Developer("Pepper", 14);
console.log(dev1)

const dev2 = new Developer("Pokemon", 25)
console.log(dev2)

const dev3 = new Developer()
console.log(dev3)

dev1.learnLanguage("cat language").debug().debug().debug().debug();
console.log(dev1)

const dev4 = new SeniorDeveloper("Senior dev", 50);
dev4.debug().debug()
console.log(dev4);

dev2.learnLanguage("test")
