import Ember from 'ember';

export default Ember.Controller.extend({
  numTs: 0,
  numEs: 0,
  numTEs: 0,

  usePreamble() {
    const preamble = "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.";
    this.parse(preamble);
  },

  parse(str) {
    const nopunc = this.removePunc(str);
    this.numberOfT(nopunc);
    this.numberOfE(nopunc);
    this.both(nopunc);
  },

  removePunc(str) {
    const nocommas = str.replace(/,/g, '');
    const nodots = nocommas.replace(/\./g, '');
    return nodots;
  },

  numberOfT(str) {
    const arr = str.split(" ");
    var numT = 0;

    arr.forEach((word) => {
      if(word.substring(0, 1) == "t") {
        return numT++;
      } else if(word.substring(0, 1) == "T") {
        return numT++;
      } else return 0;
    });
    this.set(`numTs`, numT);
  },

  numberOfE(str) {
    const arr = str.split(" ");
    var numE = 0;

    arr.forEach((word) => {
      if(word.endsWith("e")) {
        return numE++;
      } else if(word.endsWith("E")) {
        return numE++;
      } else return 0;
    });
    this.set(`numEs`, numE);
  },

  both(str) {
    const arr = str.split(" ");
    var count = 0;

    arr.forEach((word) => {
      if(word.startsWith("t") && word.endsWith("e")) {
        return count++;
      }else if(word.startsWith("T") && word.endsWith("e")) {
        return count++;
      } else return 0;
    });
    this.set(`numTEs`, count);
  },
});
