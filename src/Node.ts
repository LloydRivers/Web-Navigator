class Node {
  data: string;
  next: Node | null;

  constructor(data: string) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node: Node) {
    this.next = node;
  }
}

/*
If you are here from Codecademy, you might notice that the Node.js file (the Codecademy equivalent to this file) contains significantly more code than what I have provided. I believe this extra code is redundant and unnecessary for our project since we are focusing on stacks rather than linked lists.
*/

export default Node;
