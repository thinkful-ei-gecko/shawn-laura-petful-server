class _Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Q {
  constructor(){
    this.first = null;
    this.last = null;
  }
  enqueue(data){
    const node = new _Node(data);

    if(this.first === null){
      this.first = node;
    }

    if(this.last){
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue(){
    if(this.first === null){
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if(node === this.last){
      this.last = null;
    }
    return node.value;
  }

  toArr() {
    let arr = [];
    let node = this.first;
    while (node !== null) {
      arr.push(node.value);
      node = node.next;
    }
    return arr;
  }
}

module.exports = Q;