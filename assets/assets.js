export const IMAGES = {
  TRIPIFY_BANNER: require('./images/banner.png'),
  EMPTY_TRIPS: require('./images/tips-empty.png'),
  EMPTY_EXPENSES: require('./images/ecpenses-empty.png'),
  ADD_EXPENSES_BANNER: require('./images/add-expense.png'),
};

export const ICONS = {
  BACK: require('./icons/left-arrow.png'),
};

export const THUMBNAIL = {
  1: require('./images/trips-thumbnail/1.png'),
  2: require('./images/trips-thumbnail/2.png'),
  3: require('./images/trips-thumbnail/3.png'),
  4: require('./images/trips-thumbnail/4.png'),
  5: require('./images/trips-thumbnail/5.png'),
  6: require('./images/trips-thumbnail/6.png'),
  7: require('./images/trips-thumbnail/7.png'),
  8: require('./images/trips-thumbnail/2.png'),
  9: require('./images/trips-thumbnail/4.png'),
  10: require('./images/trips-thumbnail/3.png'),
};

export const RANDOM_THUMBNAIL = () => {
  const rand = Math.floor(Math.random() * 10);
  return THUMBNAIL[rand];
};
