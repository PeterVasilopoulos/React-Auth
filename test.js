class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  /**
   * Follows a LIFO (Last In First Out) order where new items are stacked on
   * top and removed items are removed from the top .
   */
  class Stack {
    /**
     * The constructor is executed when instantiating a new Stack() to construct
     * a new instance.
     * @returns {Stack} This new Stack instance is returned without having to
     *    explicitly write 'return' (implicit return).
     */
    constructor() {
      this.top = null;
    }
  
    /**
     * Adds a new given item to the top.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to be added to the top.
     * @returns {number} The new length of this stack.
     */
    push(val) {
      let newNode = new Node(val);
      newNode.next = this.top;
      this.top = newNode;
      return this;
    }
  
    /**
     * Removes the top item (the top).
     * - Time: O(1) constant.
     * - Space: O(1).
     * @returns {any} The data of the top item of the stack.
     */
    pop() {
      let temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      return temp.data;
    }
  
    /**
     * Returns the top item of the stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1).
     * @returns {any} The top item.
     */
    peek() {
      return this.top;
    }
  
    /**
     * Determines if the stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1).
     * @returns {boolean}
     */
    isEmpty() {
      return this.top == null;
    }
  
    /**
     * Gets the count of items in the stack.
     * - Time: O(n) linear, n = list length.
     * - Space: O(1).
     * @returns {number} The total number of items.
     */
    size() {
      let tempStack = new Stack();
      while (!this.isEmpty()){
        tempStack.push(this.pop());
      }
      let size = 0;
      while (!tempStack.isEmpty()){
        size ++;
        this.push(tempStack.pop());
      }
      return size;
    }
  
    // Time: O(n) linear, n = list length
    // Space: O(n)
    print() {
      let runner = this.top;
      let vals = "";
  
      while (runner) {
        vals += `${runner.data}${runner.next ? ", " : ""}`;
        runner = runner.next;
      }
      console.log(`Top: ${this.top.data}`)
      console.log(vals);
      return vals;
    }
  
  }
  
  
  /**
   * Class to represent a queue using an array to store the queued items.
   * Follows a FIFO (First In First Out) order where new items are added to the
   * back and items are removed from the front.
   */
  class Queue {
  
    constructor() {
      this.head = null;
    }
  
    /**
     * Adds a new given item to the back of this queue.
     * - Time: O(n) constant.
     * - Space: O(n) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(item) {
      const addNode = new Node(item)
  
      if(this.isEmpty()) {
        this.head = addNode
        return 1
      }
  
      let runner = this.head
      
      while(runner.next) {
        runner = runner.next
      }
  
      runner.next = addNode
  
      return this.size()
    }
  
    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
      if(this.isEmpty()) {
        return null
      }
      
      const oldHead = this.head
      this.head = this.head.next
      return oldHead.data
    }
  
    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() {
      if(this.isEmpty()) {
        return this.head
      }
  
      return this.head.data
    }
  
    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
      if(this.head === null) {
        return true
      } else {
        return false
      }
    }
  
    /**
     * Retrieves the size of this queue.
     * - Time: O(n) constant.
     * - Space: O(n) constant.
     * @returns {number} The length.
     */
    size() {
      let runner = this.head
      let count = 1
      while (runner.next) {
        runner = runner.next
        count++
      }
      return count
    }
  
  
    // Print
    print() {
      let runner = this.head;
      let vals = "";
  
      while (runner) {
        vals += `${runner.data}${runner.next ? ", " : ""}`;
        runner = runner.next;
      }
      console.log(`Head: ${this.head.data}`)
      console.log(vals);
      return vals;
    }
  
    arrToQueue(arr){
      for(const item of arr){
        this.enqueue(item);
      }
    }
    
  }
  
  // uncomment after enqueue()
  const newQueue = new Queue();
  newQueue.arrToQueue(['a','b','c','d','e'])
  newQueue.print()
  
  newQueue.dequeue()
  newQueue.print()
  
  
  const newStack = new Stack();
  
  newStack.push('a');
  newStack.push('b');
  newStack.push('c');
  newStack.push('d');
  newStack.push('e');
  newStack.print();
  newStack.pop();
  newStack.print();
  
    /**
     * Compares 2 queues to see if they are equal.
     * Avoid indexing the queue items directly via bracket notation, use the
     * queue methods instead for practice.
     * Use no extra array or objects.
     * The queues should be returned to their original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Queue} q1 q2 The queues to be compared 
     * @returns {boolean} Whether all the items of the two queues are equal and
     *    in the same order.
     */
  function compareQueue(q1, q2){
    var q3 = new Queue();
    var q4 = new Queue();
    var isMatched = true;
    while(!q1.isEmpty() && !q2.isEmpty()){
      var item1 = q1.dequeue();
      var item2 = q2.dequeue();
      if(item1 !== item2){
        isMatched = false
      }
      q3.enqueue(item1);
      q4.enqueue(item2);
    }
  
    if(q1.isEmpty() && !q2.isEmpty()){ // q2 is longer
      isMatched = false;
      while(!q2.isEmpty()){
        q4.enqueue(q2.dequeue());
      }
    }
  
    if(!q1.isEmpty() && q2.isEmpty()){ // q1 is longer
      isMatched = false;
      while(!q1.isEmpty()){
        q3.enqueue(q1.dequeue());
      }
    }
    
  
    while(!q3.isEmpty()){
      q1.enqueue(q3.dequeue())
    }
  
    while(!q4.isEmpty()){
      q2.enqueue(q4.dequeue())
    }
    return isMatched;
    
    
  }
  
  
  const test1 = new Queue();
  test1.arrToQueue(['a','b','c','d','e'])
  const test2 = new Queue();
  test2.arrToQueue(['a','b','c','d','e'])
  const test3 = new Queue();
  test3.arrToQueue(['a','b','c','e','d'])
  const test4 = new Queue();
  test4.arrToQueue(['a','b','c'])
  
  console.log(compareQueue(test1, test2)) // expected : True
  console.log(compareQueue(test1, test3)) // expected : False
  console.log(compareQueue(test2, test4)) // expected : False

  test1.print();  // Expected: 'a,b,c,d,e'
  test2.print();  // Expected: 'a,b,c,d,e'
  test3.print();  // Expected: 'a,b,c,e,d'
  test4.print();  // Expected: 'a,b,c'

  function isPalindrome(q){ 
    var isPalindrome= true
    var tempQ = new Queue()
    var tempStack = new Stack()
  
    while(!q.isEmpty()){
      var item = q.dequeue()
      tempQ.enqueue(item)
      tempStack.push(item)
    }
  
    while(!tempQ.isEmpty()){
      var item1 = tempQ.dequeue()
      var item2 = tempStack.pop()
      if(item1 !== item2){
        isPalindrome = false
      }
      q.enqueue(item1)
    }
    return isPalindrome;
      }
  
      const ptest1 = new Queue();
    ptest1.arrToQueue(['a','b','c','d','e'])
  
    const ptest2 = new Queue();
    ptest2.arrToQueue(['a','b','c','b','a'])
  
    console.log(isPalindrome(ptest1)); // expected : false
    console.log(isPalindrome(ptest2)); // expected: true
  
    ptest1.print();
    ptest2.print();
  
  