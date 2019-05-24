class Node {
  constructor(data) {
    this._data = data;
    this._next = null;
  }

  get data() {
    return this._data;
  }

  get next() {
    return this._next;
  }

  set data(data) {
    this._data = data;
  }

  set next(pointer) {
    this._next = pointer; // Pointer is a Node
  }
}
