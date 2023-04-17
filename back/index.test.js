const request = require('supertest');
const app = require('./index.js');
const jwt = require('jsonwebtoken');
const secretKeys = 'sudsuay';

test('Token', async () => {
  const res = await request(app).get('/gettoken/Bell').expect(200);
  const decoded = jwt.verify(res.text, secretKeys)
  expect(decoded.user).toBe('Bell');
});

// test("Database", async () => {
//   const res = await request(app).get("/EquationsTable_2").expect(200);
//   expect(res.text).toBe(
//     '[{\"ID\":1,\"FX\":\"x^4-13\",\"Xl\":6,\"Xr\":7},{\"ID\":2,\"FX\":\"x^3+(4*x^2)-10\",\"Xl\":5,\"Xr\":8},{\"ID\":3,\"FX\":\"x^2+3*x-9\",\"Xl\":4,\"Xr\":9},{\"ID\":4,\"FX\":\"x^3+4\",\"Xl\":1,\"Xr\":2},{\"ID\":5,\"FX\":\"2*x^3+8x-3\",\"Xl\":2,\"Xr\":3},{\"ID\":6,\"FX\":\"3*x^2+3*x-5\",\"Xl\":3,\"Xr\":4}]'
//   );
// });