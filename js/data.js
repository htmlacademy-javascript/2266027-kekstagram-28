
const URL_MAX = 25;
const AVATAR_MAX_COUNT = 6;
const LIKES_MIN_COUNT = 15;
const LIKES_MAX_COUNT = 200;
const FOTOS_COUNT = 25;
const NAMES = [
  'Елена',
  'Кирилл',
  'Вероника',
  'Диана',
  'Алена',
  'Кекс',
  'Ахмед',
  'Ромзес',
  'Иван',
  'Антон',
  'Олег'
];
const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTION_LINES = [
  'восхождение на Чертов палец',
  'новогоднее застолье',
  'Понедельник-день тяжелый',
  'Виды Шанхая',
  'Самый большой аэропорт в мире',
  'Моя любимая книга',
  'Утро начинается не с кофе',
  'Прогулка по набережной',
  'Первый снег',
  'Любимое время года',
  'Чаепитие с друзьями',
  'На природе', 'С утра на пробежку',
  'Собака-улыбака',
  'Наряжаем елку'
]

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRandomIdGenerator = (min, max) => {
  const previousValues = [];
  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {

      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const generateId = createRandomIdGenerator(1, 25);
const generateUrl = createRandomIdGenerator(1, URL_MAX);
const generateIdComment = createRandomIdGenerator(1, 500);


// console.log(getRandomInteger(1,25));


const getRandomElementArray = (elements) => elements[getRandomInteger(0, elements.length - 1)];
// console.log(getRandomElementArray(COMMENT_LINES))

const createPostCard = () => {
  return {
    id: generateId(),
    url: `photos/${generateUrl()}.jpg`,
    description: getRandomElementArray(DESCRIPTION_LINES),
    likes: getRandomInteger(LIKES_MIN_COUNT,LIKES_MAX_COUNT),
    comments: {
      id: generateIdComment(),
      avatar: `img/avatar-${getRandomInteger(1, AVATAR_MAX_COUNT)}.svg`,
      message: getRandomElementArray(COMMENT_LINES),
      name: getRandomElementArray(NAMES)
    }
  };
};
const PostCard = Array.from({length: FOTOS_COUNT}, createPostCard);

export { PostCard };
