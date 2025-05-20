const { isLoggedIn, isNotLoggedIn } = require('./')

describe('isLoggedIn', () => {
  test('로그인 되어 있으면 isLoggedIn이 next를 호출해야 함', () => {
    const res = {
      status: jest.fn(() => res),
      send: jest.fn(),
    }
    const req = {
      isAuthenticated: jest.fn(() => true),
    }
    const next = jest.fn()
    isLoggedIn(req, res, next)
    expect(next).toBeCalledTimes(1)
  })

  test('로그인 되어 있지 않으면 isLoggedIn이 에러를 응답해야 함', () => {
    const res = {
      status: jest.fn(() => res),
      send: jest.fn(),
    }
    const req = {
      isAuthenticated: jest.fn(() => false),
    }
    const next = jest.fn()
    isLoggedIn(req, res, next)
    expect(res.status).toBeCalledWith(403)
    expect(res.send).toBeCalledWith('로그인 필요')
  })
})

describe('isNotLoggedIn', () => {
  test('로그인 되어 있지 않으면 ', () => {
    const res = {
      status: jest.fn(() => res),
      send: jest.fn(),
    }
    const req = {
      isAuthenticated: jest.fn(() => false),
    }
    const next = jest.fn()
    isNotLoggedIn(req, res, next)
    expect(next).toBeCalledTimes(1)
  })

  test('로그인 되어 있으면 isLoggedIn이 next를 호출해야 함', () => {
    const res = {
      redirect: jest.fn(() => res),
    }
    const req = {
      isAuthenticated: jest.fn(() => true),
    }
    const next = jest.fn()
    const message = encodeURIComponent('로그인한 상태입니다.');
    isNotLoggedIn(req, res, next)
    expect(res.redirect).toBeCalledWith(`/?error=${message}`)
  })
})