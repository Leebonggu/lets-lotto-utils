const createRandomNumber = (max = 45) => {
  return Math.floor(Math.random() * max) + 1;
};

const createLottoNumber = (lotto) => {
  if (lotto.length === 6) {
    return lotto;
  }

  const randomNumber = createRandomNumber();
  if (!lotto.includes(randomNumber)) {
    lotto.push(randomNumber);
  }

  return createLottoNumber(lotto);
};

const createLottoNumbers = (count) => {
  return Array.from({ length: count }).map((_) => {
    return createLottoNumber();
  });
};

module.exports = {
  createRandomNumber,
  createLottoNumber,
  createLottoNumbers
}