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
      this.root.depth = this._height - 1;
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
      node.depth = height - 1;
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
    return [order, values];
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
    let currentHeight = 0;
    let nodes = this.breadthFirstTraversal()[1];
    let orderedNodes = this.inorderTraversal()[1];
    let orderedValues = this.inorderTraversal()[0].split(" ");

    for(let i=0; i<orderedNodes.length; i++) {
      if(orderedNodes[i].value < this.root.value) {
        lengthBefore += orderedValues[i].length;
      }
    }
    for(let j=0; j<lengthBefore; j++) {
      tree += " ";
    }
    tree += nodes[0].value;

    for(let i=1; i<nodes.length; i++) {
      lengthBefore = this.getLengthBefore(nodes[i], nodes[i-1]);
      if(nodes[i].depth > currentHeight) {
        currentHeight++;
        tree += "\n";
      }
      for(let i=0; i<lengthBefore; i++) {
        tree += " ";
      }
      tree += nodes[i].value
    }

    console.log(tree);
  }

  getLengthBefore(node, nodePrev) {
    let length = 0;
    let orderedNodes = this.inorderTraversal()[1];
    let orderedValues = this.inorderTraversal()[0].split(" ");
    for(let i=0; i<orderedNodes.length; i++) {
      if(orderedNodes[i].value < node.value) {
        length += orderedValues[i].length;
      } else if(orderedNodes[i].value == node.value && orderedNodes[i].depth < node.depth) {
        length += orderedValues[i].length;
      }
      if(orderedNodes[i] === nodePrev && nodePrev.depth == node.depth) {
        length = 0;
      }
    }
    return length;
  }

  rebalanceTree() {
    let orderedNodes = this.inorderTraversal()[1];
    let values = [];
    for(let i=0; i<orderedNodes.length; i++) {
      values.push(orderedNodes[i].value);
    }

    this.root = this.buildTreeWith(values, 0, this._count - 1, null, 0);
    this.drawTree();
  }

  buildTreeWith(values, start, end, parent, depth) {
    if (start > end || values.length == 0) {
      return null;
    }

    let center = Math.floor((start + end)/2);
    let root = new Node();
    root.value = values[center];
    root.depth = depth;
    depth++;
    root.parent = parent;

    root.left  = this.buildTreeWith(values, start, center-1, root, depth);
    root.right = this.buildTreeWith(values, center+1, end, root, depth);

    return root;
  }
}
