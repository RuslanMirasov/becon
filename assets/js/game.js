const poligon = document.querySelector('[data-poligon]');
const startButton = document.querySelector('[data-start-game]');
const restartButton = document.querySelector('[data-restart-game]');
const gameTitle = document.querySelector('[data-game-title]');
const gameDescription = document.querySelector('[data-game-description]');
const gameImagesEl = document.querySelector('[data-game-images]');

const gameData = [
  {
    id: '1',
    title: 'Ты - ветчина варёная сочная',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae reiciendis amet temporibus, quia minus architecto animi quibusdam hic blanditiis cupiditate eaque quaerat modi veritatis itaque vitae eos rem quo vel',
  },
  {
    id: '2',
    title: 'Ты - карбонад фирменный',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae reiciendis amet temporibus, quia minus architecto animi quibusdam hic blanditiis cupiditate eaque quaerat modi veritatis itaque vitae eos rem quo vel',
  },
  {
    id: '3',
    title: 'Ты - краковская полукопченая',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae reiciendis amet temporibus, quia minus architecto animi quibusdam hic blanditiis cupiditate eaque quaerat modi veritatis itaque vitae eos rem quo vel',
  },
];

const repeater = () => {
  const activeImage = gameImagesEl.querySelector('.active') || gameImagesEl.querySelector('img');
  const nextImage = activeImage.nextElementSibling || gameImagesEl.querySelector('img');
  activeImage.classList.remove('active');
  nextImage.classList.add('active');
};

const setResultMarkup = () => {
  const activeImage = gameImagesEl.querySelector('.active');
  const randomIndex = Math.floor(Math.random() * gameData.length);
  activeImage && activeImage.classList.remove('active');

  const { id, title, description } = gameData[randomIndex];

  gameTitle.innerHTML = title;
  gameDescription.innerHTML = description;
  gameImagesEl.querySelector('[data-game-image="' + id + '"]').classList.add('active');
};

const setElementsPositions = () => {
  let repeaterInterval;

  setTimeout(() => {
    poligon.classList.add('start');
    repeaterInterval = setInterval(repeater, 200);
  }, 700);

  setTimeout(() => {
    clearInterval(repeaterInterval);
    setResultMarkup();
  }, 4000);

  setTimeout(() => {
    poligon.classList.remove('start');
    poligon.classList.add('finish');
  }, 4500);
};

const startGame = () => {
  poligon.classList.remove('intro');
  setElementsPositions();
};

const restartGame = () => {
  poligon.classList.remove('finish');
  setElementsPositions();
};

if (startButton) {
  startButton.addEventListener('click', startGame);
}

if (restartButton) {
  restartButton.addEventListener('click', restartGame);
}
