// Single Linked List points in only one direction
// - head: first node in the list
//tail: last node in the list
//node: two keys (value, next)

class Node {
   constructor(value){
      this.val = value
      this.next = null
   }
}

class LinkedList {
   constructor(head = null){
      this.head = head
      this.tail = null
   }

   addToFront(nodeToAdd){
      if(this.head === null){
         this.head = nodeToAdd;
         this.tail = nodeToAdd;
      } else {
         nodeToAdd.next = this.head;
         this.head = nodeToAdd;
      }
   }

   addToEnd(nodeToAdd){
      if(this.head === null){
         this.head = nodeToAdd;
         this.tail = nodeToAdd;
      } else {
         this.tail.next = nodeToAdd;
         this.tail = nodeToAdd;
      }
   }

   addAtIndex(index, nodeToAdd){

   }

   size() {
      let count = 0;
      let node = this.head;
      while (node != null){
         count++;
         node = node.next;
      }
      return count
   }

   getFirst() {
      return this.head;
   }
   getLast(){
      return this.tail;
   }

   isEmpty() {
      return this.size === 0;   
   }

}

let mySLL = new LinkedList();

// let node1 = new Node("Joy");
// let node2 = new Node("Noe");
// let node3 = new Node("Vanitas");
// let node4 = new Node("Roland");
// let node5 = new Node("Dante");

mySLL.addToEnd(new Node("Joy"));
mySLL.addToEnd(new Node("Noe"));
mySLL.addToEnd(new Node("Vanitas"));
mySLL.addToEnd(new Node("Roland"));
mySLL.addToEnd(new Node("Dante"));
mySLL.addToEnd(new Node("Olivier"));
mySLL.addToFront(new Node("Vanitas No Carte));
mySLL.addAtIndex(5, new Node("Johann"));

// node1.next = node2
// // node2.next = node3
// node1.next.next = node3
// // node3.next = node4
// node1.next.next.next = node4
// node1.next.next.next.next = node5

// mySLL.tail = node5
// console.log(mySLL);


console.log(mySLL);