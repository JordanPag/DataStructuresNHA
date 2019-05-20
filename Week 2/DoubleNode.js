class DoubleNode {
  constructor(value) {
    this._value = value;
    this._next = null;
    this._prev = null;
  }

  get value() {
    return this._value;
  }

  get next() {
    return this._next;
  }

  get prev() {
    return this._prev;
  }

  set value(value) {
    this._value = value;
  }

  set next(pointer) {
    this._next = pointer; // Pointer is a Node
  }

  set prev(pointer) {
    this._prev = pointer;
  }
}
