const Frame = require('../src/frame');

describe('frame', () => {
  describe('constructor', () => {
    it('initialises with an empty array', () => {
      const frame = new Frame();
      expect(frame.rolls).toEqual([]);
    });
  });
  
  describe('addRoll', () => {
    it('adds a roll to the roll array', () => {
      const frame = new Frame();
      frame.addRoll(5);
      expect(frame.rolls).toEqual([5]);
    });

    it('adds multiple rolls to the rolls array', () => {
      const frame = new Frame();
      frame.addRoll(5);
      frame.addRoll(3);
      expect(frame.rolls).toEqual([5, 3]);
    });
  });

  describe('isStrike', () => {
    it('returns true if the first roll scores 10', () => {
      const frame = new Frame();
      frame.addRoll(10);
      expect(frame.isStrike()).toBe(true);
    });

    it('returns false if the first roll scores less than 10', () => {
      const frame = new Frame();
      frame.addRoll(3);
      expect(frame.isStrike()).toBe(false);
    });
  })

  describe('isSpare', () => {
    it('returns true if the total score of the rolls is 10', () => {
      const frame = new Frame();
      frame.addRoll(5);
      frame.addRoll(5);
      expect(frame.isSpare()).toBe(true);
    });

    it('returns false if the total score of the rolls is less than 10', () => {
      const frame = new Frame();
      frame.addRoll(1);
      frame.addRoll(3);
      expect(frame.isSpare()).toBe(false);
    })
  })

  describe('isComplete', () => {
    it('returns true if the frame is a strike', () => {
      const frame = new Frame();
      frame.addRoll(10);
      expect(frame.isComplete()).toBe(true);
    })

    it('returns true if the frame has two rolls', () => {
      frame = new Frame();
      frame.addRoll(5);
      frame.addRoll(7);
      expect(frame.isComplete()).toBe(true);
    })

    it('returns false if the frame has one roll', () => {
      const frame = new Frame();
      frame.addRoll(6);
      expect(frame.isComplete()).toBe(false);
    });
  })

  describe('total', () => {
    it('returns total score for the frame', () => {
      const frame = new Frame();
      frame.addRoll(4);
      frame.addRoll(5);
      expect(frame.total()).toBe(9);
    });
  
    it('returns 0 if no rolls have been added to the Frames array', () => {
      const frame = new Frame();
      expect(frame.total()).toBe(0);
    });
  })
});