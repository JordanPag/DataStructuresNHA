let tree = new BinarySearchTree();
tree.add(100);
tree.add(70);
tree.add(200);
tree.add(30);
tree.add(190);
tree.add(72);
tree.add(204);
console.log("Height: " + tree.height);
console.log("Count: " + tree.count);
console.log("Min: " + tree.min.value);
console.log("Max: " + tree.max.value);
console.log(tree.includes(100));
console.log(tree.includes(30));
console.log(tree.includes(40));
console.log(tree.includes(71));
console.log(tree.includes(70));
console.log(tree.includes(190));
console.log("Breadth First Traversal: " + tree.breadthFirstTraversal()[0]);
console.log("Preorder Traversal: " + tree.preorderTraversal());
console.log("Inorder Traversal: " + tree.inorderTraversal()[0]);
console.log("Postorder Traversal: " + tree.postorderTraversal());
tree.drawTree();
tree.add(72);
tree.drawTree();
tree.add(60);
tree.drawTree();
tree.add(71);
tree.drawTree();
tree.add(20);
tree.drawTree();
tree.add(180);
tree.drawTree();
tree.add(195);
tree.drawTree();
tree.add(202);
tree.drawTree();
tree.add(220);
tree.drawTree();


let tree2 = new BinarySearchTree();
tree2.add(100);
tree2.add(50);
tree2.add(150);
tree2.add(48);
tree2.add(47);
tree2.add(49);
tree2.add(46);
console.log("Height: " + tree2.height);
console.log("Count: " + tree2.count);
console.log("Min: " + tree2.min.value);
console.log("Max: " + tree2.max.value);
console.log("Breadth First Traversal: " + tree2.breadthFirstTraversal()[0]);
tree2.drawTree();
