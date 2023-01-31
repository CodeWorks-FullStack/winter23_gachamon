import { appState } from "../AppState.js"
import { saveState } from "../Utils/Store.js"

class GachamonsService {
  dispenseGachamon() {
    appState.coins--
    let gachamons = appState.gachamons
    let randomIndex = Math.floor(Math.random() * gachamons.length)
    let randomGachamon = gachamons[randomIndex]
    appState.activeGachamon = randomGachamon
    // NOTE does not trigger event listener
    appState.myGachamons.push(randomGachamon)


    // NOTE saving to local storage
    saveState('myGachamon', appState.myGachamons)


    // NOTE equal sign triggers event listener
    // NOTE                  VVV spread operator dumps out old array into new one
    //                                                  VVVV places our random gachamon at the end of the array
    // appState.myGachamons = [...appState.myGachamons, randomGachamon]

    // NOTE manually trigger event listener by setting the array to itself
    // appState.myGachamons = appState.myGachamons

    // NOTE manually trigger event listener
    appState.emit('myGachamons')
  }
  increaseCoins() {
    appState.coins++
    console.log(appState.coins);
  }
  setActiveGachamon(name) {
    let foundGachamon = appState.gachamons.find(g => g.name == name)
    console.log('You found a gachamon', foundGachamon)
    appState.activeGachamon = foundGachamon
    console.log('Active Gachamon: ', appState.activeGachamon);
  }

}

export const gachamonsService = new GachamonsService()