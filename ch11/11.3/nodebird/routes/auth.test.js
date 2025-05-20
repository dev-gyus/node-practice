const app = require('../app')
const request = require('supertest')
const { sequelize } = require('../models')

beforeAll(async () => {
  await sequelize.sync()
})

beforeEach(async () => {})

afterAll(async () => {})

afterEach(async () => {})

describe('POST /join', () => {
  beforeEach((done) => {
    request(app)
      .post('/auth/login')
      .send({
        email: 'gyus@gmail.com',
        password: 'nodejsbook',
      })
      .end(done)
  })

  test('로그인 안했으면 가입', (done) => {
    request(app).post('/auth/join')
      .send({
        email: 'gyus@gamil.com',
        nick: 'gyus',
        password: 'gyus'
      })
      .expect('Location', '/')
      .expect(302, done)
  })

  test('회원가입 이미 했는데 또 하는 경우', (done) => {
    request(app).post('/auth/join')
      .send({
        email: 'gyus@gamil.com',
        nick: 'gyus',
        password: 'gyus'
      })
      .expect('Location', '/join?error=exist')
      .expect(302, done)
  })
  const agent = request.agent(app)

  test('로그인 했으면 회원가입 진행이 안 되어야 함', (done) => {
    const message = encodeURIComponent('로그인한 상태입니다.')
    agent.post('/auth/join')
      .send({
        email: 'gyus@gamil.com',
        nick: 'gyus',
        password: 'gyus'
      })
      .expect('Location', `/join?error=exist`)
      .expect(302, done)
  })
})



describe('POST /login', () => {
  test('로그인 수행', (done) => {
    request(app).post('/auth/login')
      .send({
        email: 'gyus@gmail.com',
        password: 'nodejsbook',
      })
      .expect('Location', '/')
      .expect(302, done)
  })
})