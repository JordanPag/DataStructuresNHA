class LinkedList {
  constructor() {
    this.head = null;
    this._length = 0;
  }

  add(value) {
    this._length++;
    let node = new Node(value);
    let last = this.head;
    if(this.head == null) {
      this.head = node;
      return;
    }
    while(last.next != null){
      last = last.next;
    }
    last.next = node;
  }

  remove(value) {
    this._length--;
    let current = this.head;
    let prev = null;
    if(current != null && current.value == value) {
      this.head = current.next;
      return
    }

    while(current != null && current.value != value) {
        prev = current;
        current = current.next;
    }

    if (current == null) return;

    prev.next = current.next;
  }

  peek() {
    return "The first value is " + this.head.value;
  }

  get length() {
    return this._length;
  }

  contains(value) {
    let found = false;
    let last = this.head;
    while(!found && last.next != null) {
      if(last.value == value) {
        found = true;
      } else {
        last = last.next;
      }
    }
    if(found) {
      return value + " is in the list";
    } else {
      return value + " is not in the list";
    }
  }

  printList() {
    let last = this.head;
    let list = "";
    while(last.next != null) {
      list += last.value + ", ";
      last = last.next;
    }
    list += last.value;
    console.log(list);
  }
}
