class Person {
  constructor(type, name, email) {
    this._type = type;
    this._name = name;
    this._email = email;
  }

  get name() {
    return this._name;
  }

  get email() {
    return this._email;
  }

  getNameAndEmail() {
    return "Name: " + this._name + ", Email: " + this._email;
  }
}
