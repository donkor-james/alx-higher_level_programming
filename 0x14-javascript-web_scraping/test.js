// fetch("https://pokeapi.co/api/v2/pokemon/spongebob")

async function fetchData() {
  try {
    const pokemanName = document
      .getElementById("pokemanName")
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemanName}`
    );
    if (!response.ok) {
      throw new Error("could not fetch resource");
    }

    const data = await response.json();
    const pokemanSprite = data.sprites..font_default;
    const imgElement = document.getElementById("")
  } catch (error) {
    console.error(error);
  }
}

fetchData();
