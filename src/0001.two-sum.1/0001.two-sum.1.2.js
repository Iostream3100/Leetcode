/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

class HashTable {
  constructor () {
    this.table = []; //the value
    this.index = []; //original index of the value
    this.size = 1007;
    this.firstHashKey = 1000007;
    this.secondHashKey = 10007;
  }

  firstHash(key) {
    return key % this.firstHashKey;
  }

  secondHash(key) {
    return key % this.secondHashKey;
  }

  calculateHash(key, i) {
    let hash = (this.firstHash(key) + i * this.secondHash(key)) % this.size;
    return hash < 0 ? hash + this.size : hash;
  }

  insert(key, currentIndex) {
    for(let i = 0; ; i++) {
      let currentHash = this.calculateHash(key, i);

      if(this.table[currentHash] != key) {
        this.table[currentHash] = key;
        this.index[currentHash] = currentIndex;
        break;
      }
    }
  }

  search(key) {//returns the original index of the value if found, otherwise -1
    for(let i = 0; ; i++) {
      let currentHash = this.calculateHash(key,i);
      if(this.table[currentHash] == key) {
        return this.index[currentHash];
      }
      if(this.table[currentHash] === undefined) {
        return -1;
      }
    }
  }
}


var twoSum = function(nums, target) {
  let hashTable = new HashTable();

  for(let i = 0; i < nums.length; i++) {
    let targetIndex = hashTable.search(target - nums[i]);
    if(targetIndex >= 0) {
      return [targetIndex, i];
    }

    hashTable.insert(nums[i], i);
  }

};


// console.log(twoSum([3,2,4],6));
// console.log(twoSum([3,3],6));