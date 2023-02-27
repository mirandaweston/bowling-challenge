const Scorecard = require('../src/scorecard');
const Frame = require('../src/frame')

describe('Scorecard', () => {

  describe('constructor', () => {
    it('sets the frame number to zero', () => {
      const scorecard = new Scorecard();
      expect(scorecard.frameNumber).toBe(0);
    });
  
    it('sets number of frames to 10', () => {
      const scorecard = new Scorecard();
      expect(scorecard.numOfFrames).toBe(10);
    });
  });

  describe('roll', () => {
    it('adds pins to current frame', () => {
      const scorecard = new Scorecard();
      scorecard.roll(4);
      expect(scorecard.frames[0].rolls).toEqual([4]);
    });
  
    it('moves on to next frame after two rolls', () => {
      const scorecard = new Scorecard();
      scorecard.roll(5);
      scorecard.roll(3);
      expect(scorecard.frames[0].rolls).toEqual([5, 3]);
      expect(scorecard.frames[1].rolls).toEqual([]);
    });
  });
  
  describe('totalScore', () => {
    it('returns score for game with no strikes or spares', () => {
      const scorecard = new Scorecard();
      for (let i = 0; i < 20; i++) { // a game with 20 rolls ('for' loop simulates game, i++ being shorthand for i = 1+1)
        scorecard.roll(3); // each game knocks down 3 pins
      }
      expect(scorecard.totalScore()).toBe(60);
    });
  
    it('returns score for perfect game', () => {
      const scorecard = new Scorecard();
      for (let i = 0; i < 12; i++) { // a game with 12 rolls ('for' loop simulates game)
        scorecard.roll(10); // each game knocks down 10 pins
      }
      expect(scorecard.totalScore()).toBe(300);
    });
  });
});
