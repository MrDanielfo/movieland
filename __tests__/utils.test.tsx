import '@testing-library/jest-dom'
import { randomNameMovie } from '@/app/utils/randomName';


describe('Random number', () => {
  it('must return a value between 1 and 20', () => {
    let numbersArray = [];
    for (let i = 1; i <= 20; i++) {
      numbersArray.push(i);
    }
    const randomNumber = randomNameMovie(20)
    const hasNumber = numbersArray.includes(randomNumber);
    expect(hasNumber).toBeTruthy();
    expect(randomNumber).toBeLessThanOrEqual(20);
  })
})


