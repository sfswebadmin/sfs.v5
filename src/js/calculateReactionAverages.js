const calculateReactionsAverages = (films) => {
  if (!Array.isArray(films) || films.length === 0) {
    console.error("Invalid films data");
    return;
  }

  const totals = films.reduce(
    (acc, film) => {
      acc.attendance += parseInt(film.attendance, 10);
      acc.reactionsReturned += parseInt(film.reactionsReturned, 10);
      acc.fiveStars += parseInt(film.fiveStars, 10);
      acc.fourStars += parseInt(film.fourStars, 10);
      acc.threeStars += parseInt(film.threeStars, 10);
      acc.twoStars += parseInt(film.twoStars, 10);
      acc.oneStars += parseInt(film.oneStars, 10);
      acc.percentageTotal += parseInt(film.percentageTotal, 10);
      return acc;
    },
    {
      attendance: 0,
      reactionsReturned: 0,
      fiveStars: 0,
      fourStars: 0,
      threeStars: 0,
      twoStars: 0,
      oneStars: 0,
      percentageTotal: 0,
    }
  );

  const numberOfFilms = films.length;

  totals.attendance = Math.round(totals.attendance / numberOfFilms);
  totals.reactionsReturned = Math.round(
    totals.reactionsReturned / numberOfFilms
  );
  totals.fiveStars = Math.round(totals.fiveStars / numberOfFilms);
  totals.fourStars = Math.round(totals.fourStars / numberOfFilms);
  totals.threeStars = Math.round(totals.threeStars / numberOfFilms);
  totals.twoStars = Math.round(totals.twoStars / numberOfFilms);
  totals.oneStars = Math.round(totals.oneStars / numberOfFilms);
  totals.percentageTotal = Math.round(totals.percentageTotal / numberOfFilms);

  return totals;
};

const calculateWeightedAverage = (fiveStars = 0, fourStars = 0, threeStars = 0, twoStars = 0, oneStar = 0) => {
    const weightedSum = (fiveStars * 5) + (fourStars * 4) + (threeStars * 3) + (twoStars * 2) + (oneStar * 1);
    const weightedAverageScore = weightedSum / (fiveStars + fourStars + threeStars + twoStars + oneStar);
    const overallPercentage = (weightedAverageScore / 5) * 100;

    return Math.round(overallPercentage);
}

export { calculateReactionsAverages, calculateWeightedAverage };