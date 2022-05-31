const url = "./colors.json";

const takeData = () => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      changeBg(data);
    });
};

function changeBg(colors) {
  let keys = Object.keys(colors);
  const randomNum = Math.floor(Math.random() * keys.length) + 1;
  document.querySelector("body").style.backgroundColor = keys[randomNum];
  document.querySelector("#color_code").innerText = keys[randomNum];
}

document.querySelector("#change_color").addEventListener("click", takeData);
