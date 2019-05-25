class Node {
  constructor(value) {
    this._value = value;
    this._parent = null;
    this._left = null;
    this._right = null;
  }

  get value() {
    return this._value;
  }

  get parent() {
    return this._parent;
  }

  get left() {
    return this._left;
  }

  get right() {
    return this._right;
  }

  set value(val) {
    this._value = val;
  }

  set parent(pointer) {
    this._parent = pointer;
  }

  set left(pointer) {
    this._left = pointer;
  }

  set right(pointer) {
    this._right = pointer;
  }
}
