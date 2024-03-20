class Array {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  // O(1)
  get(index) {
    return this.data[index];
  }

  // O(1)
  push(element) {
    this.data[this.length] = element;
    this.length++;
  }

  // O(1)
  pop() {
    delete this.data[this.length - 1];
    this.length--;
  }

  // O(n)
  delete(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[index] = this.data[index + 1];
    }
    delete this.data[this.length - 1];
  }
}

const array = new Array();
array.push(1);
array.push(2);
array.push(3);
array.delete(1);
array.pop();
console.log(array);
