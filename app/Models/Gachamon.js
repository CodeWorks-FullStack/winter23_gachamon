
export class Gachamon {

  // NOTE this old people write constructors
  // constructor (name, emoji, rarity, type) {
  //   this.name = name
  //   this.emoji = emoji
  //   this.rarity = rarity
  //   this.type = type
  // }

  constructor (data) {
    this.name = data.name
    this.emoji = data.emoji
    this.rarity = data.rarity || 40
    this.type = data.type
  }

  get ListTemplate() {
    return `
    <div class="col-1 p-1 fs-1 list-gachamon selectable text-center" title="${this.name}" onclick="app.gachamonsController.setActiveGachamon('${this.name}')">
        ${this.emoji}
    </div>
    `
  }

  get ActiveTemplate() {
    return `
    <div class="col-6 bg-light shadow text-center py-3">
      <h1>${this.emoji}</h1>
      <h2>${this.name}</h2>
      <h3>Type: ${this.type} | Rarity: ${this.rarity}%</h3>
    </div>
    `
  }

}