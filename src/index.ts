export interface IHandle {
  (...args: any[]): void
}

interface IEventList {
  [name: string]: IHandle[]
}

export default class TinyEmitter {
  private e: IEventList

  constructor() {
    this.e = {}
  }

  on(name: string, handle: IHandle) {
    const e = this.e
    ;(e[name] || (e[name] = [])).push(handle)
  }

  off(name: string, handle?: IHandle) {
    const e = this.e
    if (!handle) {
      delete e[name]
      return
    }
    const events = e[name]
    if (!events) return
    const i = events.indexOf(handle)
    if (i >= 0) {
      if (events.length === 1) {
        delete e[name]
      } else {
        events.splice(i, 1)
      }
    }
  }

  emit(name: string, ...args: any[]) {
    const events = this.e[name]
    if (!events) return
    events.forEach(handle => {
      handle.apply(null, args)
    })
  }
}
