const random = {
  fromTo(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
  withArray(arr) {
    const index = this.fromTo(0, arr.length - 1);
    return arr[index];
  },
  ramdomAllvalue(arr) {
    return arr.sort(() => Math.random() - 0.5);
  },
};

export default random;
