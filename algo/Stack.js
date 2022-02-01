class Stack {
  top = 0;
  dataStore = [];
  peek = () => this.dataStore[this.top - 1];
  pop = () => this.dataStore[--this.top];
  push = (element) => {
    this.dataStore[this.top++] = element;
  };
  clear = () => {
    this.top = 0;
  };
  len = () => this.top;
  get data() {
    return this.dataStore.toString();
  }
}
export { Stack };
