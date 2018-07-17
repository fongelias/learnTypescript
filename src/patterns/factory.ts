

function padZero(length: number, str: string):string {
  while(str.length < length) {
    str = "0".concat(str);
  }
  return str;
}

abstract class genericFactory<T> {
  constructor() {}
  
  abstract build(): T;
}

class Robot {
  constructor(public model: string, public name = "unamed") {
  }

  identify(): void {
    console.log("Hello. " + this.name + " model " + this.model + " reporting for service.")
  }
}

class RobotFactory extends genericFactory<Robot> {
  constructor(public seed = 0) {
    super();
  }

  incrementSeed():void {
    this.seed = this.seed == 999 ? 0 : this.seed + 1;
  }

  seedString(): string {
    let unpaddedSeedStr: string = "" + this.seed;
    return unpaddedSeedStr.length < 3 ? padZero(3,unpaddedSeedStr) : unpaddedSeedStr;
  }

  build() {
    let bot: Robot = new Robot(this.seedString());
    this.incrementSeed();
    return bot;
  }
}


let botFactory = new RobotFactory();

let bot = botFactory.build();
let bot2 = botFactory.build();
let bot3 = botFactory.build();

bot.identify();
bot2.identify();
bot3.identify();







