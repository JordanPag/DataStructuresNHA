const method = (object, key, value) => {
  key = key.split(".");
  //This only works for when key.length is one or two right now - hoping to fix that soon!
  if(key.length>1){
    if(object[key[0]]===undefined){
       object[key[0]] = {[key[1]]: value};
    } else {
      object[key[0]][key[1]] = value;
    }
  } else {
    object[key] = value;
  }
  return object;
}

console.log(method({}, "hamburger", 5)); // { hamburger: 5}
console.log(method({}, "food.hamburger", 5)); // { food: {hamburger: 5} }
console.log(method({ food: { hamburger: 1 } }, "food.hamburger", 5)); // { food: {hamburger: 5} }
console.log(method({ food: { pizza: "yummy", hamburger: 1 }}, "food.hamburger", 5)); // { food: { pizza: "yummy", hamburger: 5 } }
console.log(method({ food: { pizza: "yummy", hamburger: 1 }}, "food.hamburger", 5)); // { food: { pizza: "yummy", hamburger: 5 } }
