import * as assert from 'assert';


let externalBool = false;

interface Target {
  operation();
}

class Adapter implements Target {
  adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }

  operation() {
    this.adaptee.specificOperation();
  }
}

class Adaptee {
  specificOperation() {
    externalBool = !externalBool;
  }
}


const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
adapter.operation();
assert(externalBool);
