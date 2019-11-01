class DoublyLinkedList {
  constructor() {
    this.head = null;
    this._length = 0;
  }

  add(data) {
    this._length++;
    let node = new DoubleNode(data);
    let last = this.head;
    if(this.head == null) {
      this.head = node;
      return;
    }
    while(last.next != null){
      last = last.next;
    }
    last.next = node;
    node.prev = last;
  }

  remove(data) {
    this._length--;
    let current = this.head;
    let prev = null;
    if(current != null && current.data == data) {
      this.head = current.next;
      current.next.prev = null;
      return;
    }

    while(current != null && current.data != data) {
        prev = current;
        current = current.next;
    }

    if (current == null) return;

    prev.next = current.next;
    current.next.prev = prev;
  }

  peek() {
    return "The first data is " + this.head.data;
  }

  get length() {
    return this._length;
  }

  contains(data) {
    let found = false;
    let last = this.head;
    while(!found && last.next != null) {
      if(last.data == data) {
        found = true;
      } else {
        last = last.next;
      }
    }
    if(found) {
      return data + " is in the list";
    } else {
      return data + " is not in the list";
    }
  }

  printList() {
    let last = this.head;
    let list = "";
    while(last.next != null) {
      list += last.data + ", ";
      last = last.next;
    }
    list += last.data;
    console.log(list);
  }
}
