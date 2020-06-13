import APP from "./api.js";

const api = new APP();

const $characterContainer = document.querySelector("#character-container");
// const characterTemplate = `
// <article class="character">
//       <div class="character-grid">
//         <h1>Rick Sanchez</h1>
//         <img src="" alt="" />
//       </div>
//     </article>
// `;

class Character {
  constructor({ name, img }) {
    this.name = name;
    this.img = img;
    this.render();
  }
  build() {
    return `
    <article class="character">
      <div class="character-grid">
        <h1>${this.name}</h1>
        <img src=${this.img} alt="" />
      </div>
    </article>
    `;
  }
  render() {
    $characterContainer.innerHTML = this.build();
  }
}

const rick = new Character({
  name: "ppp",
  img: "http://127.0.0.1:5500/rick_morty/static/images/logo.png",
});

console.log(api.getCharacter(2));
