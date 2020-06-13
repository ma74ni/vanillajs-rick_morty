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
  constructor({ name, image }) {
    this.name = name;
    this.image = image;
    this.render();
  }
  build() {
    return `
    <article class="character">
      <div class="character-grid">
        <h1>${this.name}</h1>
        <img src=${this.image} alt="" />
      </div>
    </article>
    `;
  }
  render() {
    $characterContainer.innerHTML = this.build();
  }
}

async function initApp(initCharacterId) {
  const characterData = await api.getCharacter(initCharacterId);
  console.log(characterData);
  const rick = new Character(characterData);
  // const rick = new Character({
  //   name: "ppp",
  //   img: "http://127.0.0.1:5500/rick_morty/static/images/logo.png",
  // });
}
initApp(1);
console.log(api.getCharacter(2));
