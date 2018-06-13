import * as assert from 'assert';


let externalBool = true;


interface IAbstraction {
	implementor: IImplementor;
	abstractCall(): void;
}

interface IImplementor {
	concreteFunction(): void;
}

class ConcreteAbstraction implements IAbstraction {
	//Should be implemented to delegate to an Implementor class
	implementor: IImplementor;

	constructor(impl: IImplementor) {
		this.implementor = impl;
	}

	abstractCall() {
		this.implementor.concreteFunction();
	}
}

class ConcreteImplementor implements IImplementor {
	concreteFunction() {
		externalBool = !externalBool;
	}
}


const concretion = new ConcreteImplementor();
const abstraction = new ConcreteAbstraction(concretion);
abstraction.abstractCall();
assert(!externalBool);





