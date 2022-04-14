class SkylabArray {
  constructor(...index) {
    this.index = index;
  }
}
const variable = new SkylabArray(2, 4, 6);

const newArray = variable.index;
let count = 0;

const lenghtFunction = () => {
  newArray.forEach(() => {
    count += 1;
  });
  return count;
};

lenghtFunction();
