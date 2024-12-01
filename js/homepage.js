const img = document.getElementById("img");
const imageSources = ["Images/smartbottle.png", "Images/thermalflask.png", "Images/collapsiblebottle.png"];
let index = 0;
let travel;

const startTravel = () => {
  travel = setInterval(() => {
    ++index;

    console.log(index);
    if (index < 0 || index === imageSources.length) index = 0;
    img.src = imageSources[index];
  }, 6000);
};

const imgleft = () => {
  if (index === 0) index = imageSources.length;

  clearInterval(travel);
  img.src = imageSources[--index];
  startTravel();
}

const imgright = () => {
  if (index === imageSources.length - 1) index = -1;

  clearInterval(travel);
  img.src = imageSources[++index];
  startTravel();
}

startTravel();