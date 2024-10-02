import Node from "./Node";

class LinkedList {
  head: Node | null;
  constructor() {
    this.head = null;
  }

  addToHead(data: string) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    if (removedHead.next) {
      this.head = removedHead.next;
    }
    return removedHead.data;
  }
}

export default LinkedList;
