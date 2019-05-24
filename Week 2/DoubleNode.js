class DoubleNode {
  constructor(data) {
    this._data = data;
    this._next = null;
    this._prev = null;
  }

  get data() {
    return this._data;
  }

  get next() {
    return this._next;
  }

  get prev() {
    return this._prev;
  }

  set data(data) {
    this._data = data;
  }

  set next(pointer) {
    this._next = pointer; // Pointer is a Node
  }

  set prev(pointer) {
    this._prev = pointer;
  }
}
