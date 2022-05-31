const url2 = "./colors.json";

const takeData2 = () => {
  fetch(url2)
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
    
    let randomColor = colors[keys[randomNum]]; 
   document.querySelector("body").style.backgroundColor =  "rgba(" + randomColor.toString() + ")";;
    document.querySelector("#color_code").innerHTML = randomColor.toString();
}

document.querySelector("#change_color_rgba").addEventListener("click", takeData2);
