import * as assert from 'assert';

let externalBool = false;

interface ISubject {
  request(): void;
}

class ConcreteSubject {
  request() {
    externalBool = !externalBool;
  }
}

interface IProxy extends ISubject {
  subject: ISubject;
}

class ConcreteProxy {
  subject: ISubject;
  
  constructor(subject: ISubject) {
    this.subject = subject;
  }

  request() {
    this.subject.request();
  }
}

const concretion = new ConcreteSubject();
const proxy = new ConcreteProxy (concretion);
proxy.request();
assert(externalBool);






