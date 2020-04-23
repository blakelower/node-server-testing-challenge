const db = require('../data/dbConfig')
const Skate = require('./skatermodel')
const server = require('../api/server');
const request = require('supertest');

beforeEach(async () => {
    await db('skater').truncate()
  })
  

  describe('Skate post', () => {
      it('insert a skater', async () => {
        await request(server)
        .post('/skate')
        .send({
          name: 'Neen'
      })
      const skates = await db('skates')
      expect(skates).toHaveLength(1)
    })
  
      it('inserts the skates without breaking them', async () => {
        const skater = await Skate.insert({ name: 'tony hawk' })
        expect(skater).toMatchObject({ name: 'tony hawk' })
      })
  
      it('can find a skater in the db', async () => {
        await db('skaters').insert({ name: 'skater' })
        const skater = await Skate.findById(1)
        expect(skater).toMatchObject({ name: 'skater' })
      })
    })
  