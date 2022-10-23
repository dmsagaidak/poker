import Card from "./Card";

class PokerHand {
  constructor(public array: Card[] = []) {
  }

  getOutcome() {
    let pairCount = 0;
    for (let i = 0; i < this.array.length; i++) {
      for (let j = 0; j < i; j++){
        if (this.array[i].rank === this.array[j].rank){
          pairCount++;
        }
      }
    }

  if (pairCount === 1){
    console.log('One pair')
  } else if (pairCount === 2){
    console.log('Two pairs');
  }

  let threeCount = 0;
  for (let i = 0; i < this.array.length; i++){
    for (let j = 0; j < i; j++){
      for (let k = 0; k < j; k ++){
        if (this.array[i].rank === this.array[j].rank && this.array[j].rank === this.array[k].rank){
          threeCount++;
        }
      }
    }
  }

  if (threeCount === 1){
    console.log('Three of a kind');
  }

  let flush: boolean = false;
  for (let i = 0; i < this.array.length; i++){
    for (let j = 0; j < i; j++){
      for (let k = 0; k < j; k++){
        for (let l = 0; l < k; l++){
          for (let m = 0; m < l; m++){
            if(this.array[i].suit === this.array[j].suit && this.array[j].suit === this.array[k].suit && this.array[k].suit === this.array[l].suit && this.array[l].suit === this.array[m].suit){
                flush = true;
            }
          }
        }
      }
    }
    if (flush) {
      console.log('Flush');
    }
  }
  }
}

export default PokerHand;