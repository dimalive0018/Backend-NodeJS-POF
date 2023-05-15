const request = require('supertest');
const app = require('./app');

describe('App', () => {
  it('restituire errore 404', async () => {
    const res = await request(app).get('/percorso-sconosciuto');
    expect(res.status).toEqual(404);
    expect(res.body.error.message).toEqual('Non trovato');
  });
});