class Frame {
  constructor() {
    this.rolls = [];
    this.completed = false;
  }

  addRoll(numOfPins) {
    this.rolls.push(numOfPins);

    if (this.isStrike() || this.isSpare() || this.isComplete()) {
      this.completed = true;
    }
  }

  isStrike() {
    if (this.rolls.length === 1) {
      if (this.rolls[0] === 10) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  isSpare() {
    if (this.rolls.length === 2) {
      if (this.total() === 10 && !this.isStrike()) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  isComplete() {
    if (this.rolls.length === 2 || this.isStrike()) {
      return true;
    } else {
      return false;
    }
  }

  total() {
    return this.rolls.reduce((sum, current) => sum + current, 0);
  }
}

module.exports = Frame;