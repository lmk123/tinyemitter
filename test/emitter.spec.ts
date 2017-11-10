import TinyEmitter from '../src/index'

const emitter = new TinyEmitter()

describe('', () => {
  it('注册的事件会被 emit 触发', () => {
    const spy = jasmine.createSpy('handle')
    emitter.on('a', spy)
    emitter.emit('a', 'x')
    expect(spy).toHaveBeenCalledWith('x')
  })

  it('事件取消后不会被触发', () => {
    const spy = jasmine.createSpy('handle')
    emitter.on('b', spy)
    emitter.off('b', spy)
    emitter.emit('b')
    expect(spy).not.toHaveBeenCalled()
  })

  it('取消事件时若只传了事件名称则取消所有此事件的回调函数', () => {
    const spy = jasmine.createSpy('handle')
    emitter.on('c', spy)
    emitter.off('c')
    emitter.emit('c')
    expect(spy).not.toHaveBeenCalled()
  })

  it('若被取消的回调函数是最后一个，则删除整个事件列表', () => {
    const spy1 = jasmine.createSpy('h1')
    const spy2 = jasmine.createSpy('h2')
    emitter.on('d', spy1)
    emitter.on('d', spy2)
    // @ts-ignore
    expect(emitter.e.d).toEqual([spy1, spy2])
    emitter.off('d', spy1)
    // @ts-ignore
    expect(emitter.e.d).toEqual([spy2])
    emitter.off('d', spy2)
    // @ts-ignore
    expect(emitter.e.d).toBeUndefined()
  })

  it('在回调函数内调用 off 方法时，其他事件仍然会正常触发', () => {
    const spy = jasmine.createSpy('h1')
    emitter.on('e', function my() {
      emitter.off('e', my)
    })
    emitter.on('e', spy)
    emitter.emit('e')
    expect(spy).toHaveBeenCalled()
  })
})
