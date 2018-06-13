import * as assert from 'assert';

interface IThing {
  thingAction(num): number;
}

class Thing implements IThing {
  thingAction(num: number): number {
    return num;
  }
}

class DecoratedThing implements IThing {
  thing: IThing;
 
  constructor(thing: IThing) {
    this.thing = thing;
  }

  thingAction(num: number): number {
    return this.thing.thingAction(num) + 1;
  }
}

const thang = new Thing();
const decoratedThang = new DecoratedThing(thang);
assert(decoratedThang.thingAction(1) == 2);






