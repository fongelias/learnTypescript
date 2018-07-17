

interface HasLengthProperty {
  length: number;
}

function genericUsingLength<T extends HasLengthProperty>(objToBeMeasured: T): void {
  console.log(objToBeMeasured.length);
}

genericUsingLength("SomeString");












