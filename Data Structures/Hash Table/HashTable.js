class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // Simple hash function - Consider O(1)
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // O(1)
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  // O(1)
  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  // O(n)
  keys() {
    if (!this.data.length) {
      return undefined;
    }
    let result = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] && this.data[i].length) {
        // loop through all the collisions
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            result.push(this.data[i][j][0]);
          }
        } else {
          result.push(this.data[i][0]);
        }
      }
    }
    return result;
  }
}

const hashTable = new HashTable(50);
hashTable.set("grapes", 10000);
hashTable.get("grapes");
hashTable.set("apples", 9);
hashTable.get("apples");
console.log("keys", hashTable.keys());
console.log(JSON.stringify(hashTable));