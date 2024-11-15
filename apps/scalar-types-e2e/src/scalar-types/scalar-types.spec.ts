import axios from 'axios';

describe('POST /graphql', () => {
  it('should return a random ID', async () => {
    const query = `{ genRandomId }`;

    const res = await axios.post(
      '/graphql',
      { query },
      {
        headers: {
          'content-type': 'application/json',
        },
      },
    );

    expect(res.status).toBe(200);
    expect(typeof res.data.data.genRandomId).toBe('string');
  });

  it('should return a random mnemonic', async () => {
    const query = `{ genRandomMnemonic }`;

    const res = await axios.post(
      '/graphql',
      { query },
      {
        headers: {
          'content-type': 'application/json',
        },
      },
    );

    expect(res.status).toBe(200);
    expect(res.data.data.genRandomMnemonic.split(' ').length).toBe(
      12,
    );
    expect(typeof res.data.data.genRandomMnemonic).toBe('string');
  });

  it('should return a boolean', async () => {
    const query = `{ isItNightOnTheServer }`;

    const res = await axios.post(
      '/graphql',
      { query },
      {
        headers: {
          'content-type': 'application/json',
        },
      },
    );

    expect(res.status).toBe(200);
    expect(typeof res.data.data.isItNightOnTheServer).toBe('boolean');
  });

  it('should return the result of 3 rolled dice', async () => {
    const query = `{ rollThreeDice }`;

    const res = await axios.post(
      '/graphql',
      { query },
      {
        headers: {
          'content-type': 'application/json',
        },
      },
    );

    expect(res.status).toBe(200);
    expect(res.data.data.rollThreeDice.length).toBe(3);
    for (const die of res.data.data.rollThreeDice) {
      expect(Number.isInteger(die)).toBeTruthy();
    }
  });

  it('should return the result of rolling 5 dice', async () => {
    const query = /* GraphQL */ `
      query RollDice($dice: Int!, $sides: Int) {
        rollDice(howManyDice: $dice, howManySidesDoTheyHave: $sides)
      }
    `;

    const res = await axios.post(
      '/graphql',
      {
        query,
        variables: { sides: 7, dice: 5 },
      },
      {
        headers: {
          'content-type': 'application/json',
        },
      },
    );

    expect(res.status).toBe(200);
    expect(res.data.data.rollDice.length).toBe(5);
    for (const die of res.data.data.rollDice) {
      expect(Number.isInteger(die)).toBeTruthy();
    }
  });

  it('should return a random dice object type', async () => {
    const query = /* GraphQL */ `
      query GetDie($sides: Int) {
        getDie(numberOfSides: $sides) {
          rollOnce
          roll(count: 2)
        }
      }
    `;

    const res = await axios.post(
      '/graphql',
      {
        query,
        variables: { sides: 12 },
      },
      {
        headers: {
          'content-type': 'application/json',
        },
      },
    );

    expect(res.status).toBe(200);
    expect(typeof res.data.data.getRoll.roll.length).toBe(1);
    expect(typeof res.data.data.getRoll.rollOnce).toBe('number');
  });
});
