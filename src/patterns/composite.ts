import * as assert from 'assert';



interface IComponent {
	operation(): boolean;
}

class Leaf implements IComponent {
	operation() {
		return true;
	}
}

class Composite implements IComponent {
	private childLeaf: IComponent;

	constructor(leaf: IComponent) {
		this.childLeaf = leaf;
	}

	operation() {
		return this.childLeaf.operation() && false;
	}
}


const leaf = new Leaf();
assert(leaf.operation());
const composed = new Composite(leaf);
assert(!composed.operation());












