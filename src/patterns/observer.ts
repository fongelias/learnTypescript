import * as assert from 'assert';


interface Observer {
  state: boolean;
  update(): void;
}


interface Observable {
  observers: Array<Observer>;
  add(observer: Observer): void;
  remove(): void;
  notify(): void;
}

class Listener implements Observer {
  state: boolean = false;
  update() {
    this.state = !this.state;
  }
}

class Emitter implements Observable {
 observers: Array<Observer> = [];

 add(observer: Observer) {
   this.observers.push(observer);
 } 

 remove() {
   this.observers.pop();
 }

 notify() {
   this.observers.forEach(observer => observer.update());
 }
}

const listener = new Listener();
const emitter = new Emitter();
assert(!listener.state);
emitter.add(listener);
emitter.notify();
assert(listener.state);
emitter.remove();
emitter.notify();
assert(listener.state);


