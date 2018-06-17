import * as assert from 'assert';


//implementation of interface is done in such a way that it has references
//	to objects that it mediates between
interface Mediator {
	mediate(colleague: Colleague): void;
}

//Has a reference to the mediator that it calls on itself
interface Colleague {
	mediator: Mediator;
}

class Mediator1 {
	colleague1: Colleague;
	colleague2: Colleague;

	constructor(colleague1: Colleague, colleague2: Colleague) {
		this.colleague1 = colleague1;
		this.colleague2 = colleague2;
	}

	mediate(colleague: Colleague): void {
		let target = colleague.getId() == 1 ? this.colleague2 : this.colleague1;
		target.action(colleague.getState());
	}
}

class Colleague {
	mediator: Mediator;
	id: number;
	state: boolean;

	constructor(mediator: Mediator, id: number) {
		this.mediator = mediator;
		this.id = id;
		this.state = false;
	}

	setMediator(mediator: Mediator) {
		this.mediator = mediator;
	}

	getId(): number {
		return this.id;
	}

	getState(): boolean {
		return this.state;
	}

	action(colleagueState: boolean): void {
		this.state = !this.state && !colleagueState;
	}

	mediate(): void {
		this.mediator.mediate(this);
	}
}

const colleague1 = new Colleague(null, 1);
const colleague2 = new Colleague(null, 2);
const mediator1 = new Mediator1(colleague1, colleague2);
colleague1.setMediator(mediator1);
colleague2.setMediator(mediator1);
assert(!colleague1.getState() && !colleague2.getState());
colleague1.mediate();
assert(!colleague1.getState() && colleague2.getState());











