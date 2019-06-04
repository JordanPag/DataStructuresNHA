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
    if(this.root == null) {
      return "No tree";
    }
    let order = this.root.value + " ";
    let nodes = [this.root];
    let row = [this.root];
    let nextRow = [];
    for(let currentHeight = 1; currentHeight < this._height; currentHeight++) {
      for(let i=0; i<row.length; i++) {
        if(row[i].left != null) {
          order += row[i].left.value + " ";
          nodes.push(row[i].left);
          nextRow.push(row[i].left);
        }
        if(row[i].right != null) {
          if(currentHeight+1 == this._height && i+1 == row.length) {
            order += row[i].right.value;
          } else {
            order += row[i].right.value + " ";
          }
          nodes.push(row[i].right);
          nextRow.push(row[i].right);
        }
      }
      row = nextRow;
      nextRow = [];
    }

    return [order, nodes];
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
    let nodes = this.breadthFirstTraversal()[1];
    let orderedValues = this.inorderTraversal().split(" ");
    for(let i=0; i<orderedValues.length; i++) {
      if(Number(orderedValues[i]) < this.root.value) {
        lengthBefore += orderedValues[i].length;
      }
    }
    for(let j=0; j<lengthBefore; j++) {
      tree += " ";
    }
    tree += nodes[0].value + "\n";
    let numAppears = 0;
    let thisAppearance = 0;
    let prevAppearance = 0;
    for(let i=1; i<nodes.length; i++) {
      numAppears = 0;
      for(let j=0; j<nodes.length; j++) {
        if(nodes[j].value == nodes[i].value) {
          numAppears++;
          if(nodes[j] === nodes[i]) {
            thisAppearance = numAppears;
          }
        }
      }
      numAppears = 0;
      for(let j=0; j<nodes.length; j++) {
        if(nodes[j].value == nodes[i-1].value) {
          numAppears++;
          if(nodes[j] === nodes[i-1]) {
            prevAppearance = numAppears;
          }
        }
      }
      lengthBefore = this.getLengthBefore(nodes[i].value, nodes[i-1].value, thisAppearance, prevAppearance);
      for(let j=0; j<lengthBefore; j++) {
        tree += " ";
      }
      tree += nodes[i].value;
      if(i == (2 ** powerOfTwo) - 2) {
        //New line
        tree += "\n";
        powerOfTwo++;
      }
    }
    console.log(tree);
  }

  getLengthBefore(val, valPrev, thisAppearance, prevAppearance) {
    let length = 0;
    let tempAppears = 1;
    let tempPrevAppears = 0;
    let orderedValues = this.inorderTraversal().split(" ");
    for(let i=0; i<orderedValues.length; i++) {
      if(Number(orderedValues[i]) < val) {
        length += orderedValues[i].length;
      } else if(Number(orderedValues[i]) == val && tempAppears < thisAppearance) {
        tempAppears++;
        length += orderedValues[i].length;
      }
      if(Number(orderedValues[i]) == valPrev) {
        tempPrevAppears++;
      }
      if(Number(orderedValues[i]) == valPrev && valPrev < val && tempPrevAppears == prevAppearance) {
        length = 0;
      }
    }
    return length;
  }
}
