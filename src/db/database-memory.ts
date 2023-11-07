import {randomUUID} from 'node:crypto'

export class DatabaseMemory {
  #users = new Map()

  list(search: string) {
    return Array.from(this.#users.entries())
      .map((item) => {
        const id = item[0]
        const data = item[1]
        return {
          id,
          ...data
        }
      })
      .filter((item) => {
        console.log('search', search)
        console.log('item', item)
        if (search) {
          return item.name.includes(search)
        } else {
          return true
        }
      })
  }

  create(user: userType) {
    const id = randomUUID()

    this.#users.set(id, user)
  }

  update(id: string, user: userType) {
    this.#users.set(id, user)
  }

  delete(id: string) {
    this.#users.delete(id)
  }
}