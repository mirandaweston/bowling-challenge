const Frame = require('./frame');

class Scorecard {
  constructor() {
    this.frames = [];
    for (let i = 0; i < 10; i++) { // push 10 new Frame objects to array
      this.frames.push(new Frame()); // new Frame object to frames array
    }
    this.frameNumber = 0;
    this.numOfFrames = 10;
  }

  roll(numOfPins) {
    const currentFrame = this.frames[this.frameNumber];
    currentFrame.addRoll(numOfPins); // addRoll is from the Frame class
  
    if (currentFrame.completed) {
      this.frameNumber++; // increments frameNumber to move on to next Frame
  
      if (this.frameNumber >= this.numOfFrames) {
        this.frameNumber = this.numOfFrames - 1; // sets frameNumber to index of the last frame if we're already on the last frame
      }
    }
  }

  totalScore() {
    let total = 0; // keep track of total score
  
    for (let i = 0; i < this.numOfFrames; i++) { // loop through frames
      const frame = this.frames[i];
      const nextFrame = this.frames[i + 1];
      const nextNextFrame = this.frames[i + 2];
  
      total += frame.total();
  
      if (frame.isStrike()) { // add roll 1 score to next frame
        total += nextFrame.rolls[0];
  
        if (nextFrame.isStrike()) {
          total += nextNextFrame.rolls[0]; // add score of first roll of frame 2 frames ahead
        } else {
          total += nextFrame.rolls[1]; // or add score of seond roll of next frame
        }
      } else if (frame.isSpare()) {
        total += nextFrame.rolls[0]; // add score of first roll of next frame
      }
    }
  
    return total;
  }
}

module.exports = Scorecard;

// // new scorecard object
// const scorecard = new Scorecard();

// // rolls 12 strikes (perfect game)
// for (let i = 0; i < 12; i++) {
//   scorecard.roll(10);
// }

// // getting total score
// const totalScore = scorecard.totalScore();

// // printing total score
// console.log(`Total score: ${totalScore}`);