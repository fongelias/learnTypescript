

abstract class Animal {
  constructor(public name: string) {
  }

  abstract makeSound(): string;
  
  callName(): void {
    console.log("You called " + this.name + ". In the distance, you hear a quiet '" + this.makeSound() + "'");
  }
}

class Pig extends Animal {
  constructor() {
    super('Wilbur');
  }

  makeSound(): string {
     return "OINKOINK";
  }
}


let animal: Animal;
animal = new Pig();
animal.callName();





