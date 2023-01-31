import { Gachamon } from "./Models/Gachamon.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./Models/Gachamon').Gachamon[]} */
  gachamons = [
    new Gachamon(
      {
        name: 'Gerald',
        emoji: '🦒',
        type: 'earth'
      }
    ),
    new Gachamon(
      {
        name: 'Larry',
        emoji: '🦞',
        rarity: 20,
        type: 'water'
      }
    ),
    new Gachamon(
      {
        name: 'Scary Larry',
        emoji: '🦞',
        rarity: 7,
        type: 'ghost'
      }
    ),
    new Gachamon(
      {
        name: 'Dougie',
        emoji: '🦁',
        rarity: 1,
        type: 'king'
      }
    ),
  ]

  /** @type {import('./Models/Gachamon').Gachamon[]} */
  myGachamons = loadState('myGachamon', [Gachamon])

  /** @type {import('./Models/Gachamon').Gachamon|null} */
  activeGachamon = null

  /** @type {Number} */
  coins = 0
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
