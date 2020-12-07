import { Message } from './api-interfaces'

describe('apiInterfaces', () => {
  it('should work', () => {
    const payload: Message = { message: 'Hello world' }
    expect(payload.message).toBe('Hello world')
  })
})
