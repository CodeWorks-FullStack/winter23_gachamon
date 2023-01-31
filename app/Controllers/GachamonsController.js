import { appState } from "../AppState.js";
import { gachamonsService } from "../Services/GachamonsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

// SECTION private functions

function _drawGachamons() {
  let gachamons = appState.gachamons
  let template = ''
  gachamons.forEach(gachamon => template += gachamon.ListTemplate)
  // console.log('here is our template', template);
  // document.getElementById('gachamons').innerText = template
  // setText('gachamons', template)
  setHTML('gachamons', template)
}

function _drawMyGachamons() {
  console.log('Am I working?');
  let myGachamons = appState.myGachamons
  let template = ''
  myGachamons.forEach(mon => template += mon.ListTemplate)
  setHTML('my-gachamons', template)
}

function _drawGachamon() {
  let activeGachamon = appState.activeGachamon
  setHTML('active-gachamon', activeGachamon.ActiveTemplate)
}

function _drawCoins() {
  let coins = appState.coins
  let template = ''
  for (let i = 0; i < coins; i++) {
    template += `<div class="col-1 fs-1">
    🪙
  </div>`
  }
  setHTML('coins', template)
}

export class GachamonsController {
  constructor () {
    _drawGachamons()
    _drawMyGachamons()
    // NOTE      VVV What I'm watching in the appstate
    //                     VVV What I do when this changes
    appState.on('coins', _drawCoins)
    appState.on('activeGachamon', _drawGachamon)
    appState.on('myGachamons', _drawMyGachamons)
  }

  // SECTION public functions

  setActiveGachamon(name) {
    console.log('You clicked the gachamon and his name is ' + name);
    gachamonsService.setActiveGachamon(name)
    // NOTE no longer needed, since we have an event listener tied to active gachamon in the appstate
    // _drawGachamon()
  }

  increaseCoins() {
    gachamonsService.increaseCoins()
    // NOTE no longer needed, since we have an event listener tied to coins in the appstate
    // _drawCoins()
  }

  dispenseGachamon() {
    let coins = appState.coins
    if (coins <= 0) {
      Pop.toast("You're broke, kid", 'warning', 'top-end', 3000, true)
    }
    else {
      gachamonsService.dispenseGachamon()
    }
  }
}