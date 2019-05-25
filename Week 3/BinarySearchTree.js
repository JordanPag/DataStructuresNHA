class BinarySearchTree {
  constructor() {
    this.root = null;
    this._height = 0;
    this._count = 0;
  }

  add(value) {
    let node = new Node(value);
    let height = 0;
    this._count++;
    if(this.root == null) {
      this.root = node;
      this._height++;
    } else {
      let next;
      let prev = this.root;
      if(value < this.root.value) {
        next = this.root.left;
      } else {
        next = this.root.right;
      }
      height += 2;
      while(next != null) {
        height++;
        prev = next;
        if(value < next.value) {
          next = next.left;
        } else {
          next = next.right;
        }
      }
      if(height>this._height) {
        this._height = height;
      }
      if(value < prev.value) {
        prev.left = node;
      } else {
        prev.right = node;
      }
      node.parent = prev;
    }
  }

  get count() {
    return this._count;
  }

  get height() {
    return this._height;
  }

  get min() {
    let next = this.root;
    if(next == null) {
      return "No min";
    }
    while(next.left != null) {
      next = next.left;
    }
    return next;
  }

  get max() {
    let next = this.root;
    if(next == null) {
      return "No min";
    }
    while(next.right != null) {
      next = next.right;
    }
    return next;
  }

  includes(val) {
    let iteration = 0;
    let next = this.root;
    let found = false;
    while(iteration < this._height && next != null && found == false) {
      if(val < next.value) {
        next = next.left;
      } else if(val > next.value) {
        next = next.right;
      } else {
        found = true;
      }
    }
    return "Tree includes " + val + ": " + found;
  }

  breadthFirstTraversal() {
    let order = "";
    if(this.root == null) {
      return "No tree";
    }
    order += this.root.value + " ";
    let row = [this.root];
    let nextRow = [];
    for(let currentHeight = 1; currentHeight < this._height; currentHeight++) {
      for(let i=0; i<row.length; i++) {
        if(row[i].left != null) {
          order += row[i].left.value + " ";
          nextRow.push(row[i].left);
        }
        if(row[i].right != null) {
          if(currentHeight+1 == this._height && i+1 == row.length) {
            order += row[i].right.value;
          } else {
            order += row[i].right.value + " ";
          }
          nextRow.push(row[i].right);
        }
      }
      row = nextRow;
      nextRow = [];
    }

    return order;
  }

  preorderTraversal() {
    let order = "";
    let values = [];
    if(this.root == null) {
      return "No tree";
    }

    values = this.preorderHelper(this.root, values);
    for(let i=0; i<values.length; i++) {
      if(i==values.length-1) {
        order += values[i].value;
      } else {
        order += values[i].value + " ";
      }
    }
    return order;
  }

  preorderHelper(node, values) {
    values.push(node); // Push the node before any of its children, then the nodes to its left, then the nodes to its right
    if (node.left) {
        this.preorderHelper(node.left, values);
    }

    if (node.right) {
        this.preorderHelper(node.right, values);
    }
    return values;
  }

  inorderTraversal() {
    let order = "";
    let values = [];
    if(this.root == null) {
      return "No tree";
    }

    values = this.inorderHelper(this.root, values);
    for(let i=0; i<values.length; i++) {
      if(i==values.length-1) {
        order += values[i].value;
      } else {
        order += values[i].value + " ";
      }
    }
    return order;
  }

  inorderHelper(node, values) {
    if (node.left) {
        this.inorderHelper(node.left, values);
    }
    values.push(node); // Push the node once all of the nodes to its left have been pushed, then push the nodes to the right

    if (node.right) {
        this.inorderHelper(node.right, values);
    }
    return values;
  }

  postorderTraversal() {
    let order = "";
    let values = [];
    if(this.root == null) {
      return "No tree";
    }

    values = this.postorderHelper(this.root, values);
    for(let i=0; i<values.length; i++) {
      if(i==values.length-1) {
        order += values[i].value;
      } else {
        order += values[i].value + " ";
      }
    }
    return order;
  }

  postorderHelper(node, values) {
    if (node.left) {
        this.postorderHelper(node.left, values);
    }

    if (node.right) {
        this.postorderHelper(node.right, values);
    }
    values.push(node); // Only push the node once all of the nodes to its right and left have been pushed
    return values;
  }

  drawTree() {
    if(this.root == null) {
      return "No tree to draw";
    }
    let tree = "";
    let lengthBefore = 0;
    let powerOfTwo = 2;
    let values = this.breadthFirstTraversal().split(" ");
    let orderedValues = this.inorderTraversal().split(" ");
    for(let i=0; i<orderedValues.length; i++) {
      if(Number(orderedValues[i]) < this.root.value) {
        lengthBefore += orderedValues[i].length;
      }
    }
    for(let j=0; j<lengthBefore; j++) {
      tree += " ";
    }
    tree += values[0] + "\n";
    for(let i=1; i<values.length; i++) {
      lengthBefore = this.getLengthBefore(Number(values[i]), Number(values[i-1]));
      for(let j=0; j<lengthBefore; j++) {
        tree += " ";
      }
      tree += values[i];
      if(i == (2 ** powerOfTwo) - 2) {
        //New line
        tree += "\n";
        powerOfTwo++;
      }
    }
    console.log(tree);
  }

  getLengthBefore(val, valPrev) {
    let length = 0;
    let orderedValues = this.inorderTraversal().split(" ");
    for(let i=0; i<orderedValues.length; i++) {
      if(Number(orderedValues[i]) < val) {
        length += orderedValues[i].length;
      }
      if(Number(orderedValues[i]) == valPrev && valPrev < val) {
        length = 0;
      }
    }
    return length;
  }
}
