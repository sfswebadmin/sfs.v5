const films = [
  {
    title: "The Old Oak",
    attendance: "90",
    reactionsReturned: "90",
    fiveStars: "52",
    fourStars: "23",
    threeStars: "12",
    twoStars: "2",
    oneStars: "0",
    percentageTotal: "84",
  },
  {
    title: "Nostalgia",
    attendance: "75",
    reactionsReturned: "75",
    fiveStars: "10",
    fourStars: "40",
    threeStars: "22",
    twoStars: "2",
    oneStars: "1",
    percentageTotal: "69",
  },
  {
    title: "Fallen Leaves",
    attendance: "109",
    reactionsReturned: "112",
    fiveStars: "37",
    fourStars: "35",
    threeStars: "36",
    twoStars: "4",
    oneStars: "0",
    percentageTotal: "73",
  },
  {
    title: "Full Time",
    attendance: "89",
    reactionsReturned: "88",
    fiveStars: "18",
    fourStars: "32",
    threeStars: "32",
    twoStars: "5",
    oneStars: "1",
    percentageTotal: "67",
  },
  {
    title: "The Zone of Interest",
    attendance: "76",
    reactionsReturned: "73",
    fiveStars: "25",
    fourStars: "28",
    threeStars: "14",
    twoStars: "2",
    oneStars: "4",
    percentageTotal: "73",
  },
  {
    title: "Happy as Lazzaro",
    attendance: "75",
    reactionsReturned: "76",
    fiveStars: "18",
    fourStars: "30",
    threeStars: "20",
    twoStars: "4",
    oneStars: "4",
    percentageTotal: "68",
  },
  {
    title: "Hit the Road",
    attendance: "80",
    reactionsReturned: "76",
    fiveStars: "7",
    fourStars: "31",
    threeStars: "20",
    twoStars: "13",
    oneStars: "5",
    percentageTotal: "57",
  },
  {
    title: "Past Lives",
    attendance: "59",
    reactionsReturned: "55",
    fiveStars: "30",
    fourStars: "17",
    threeStars: "8",
    twoStars: "0",
    oneStars: "0",
    percentageTotal: "85",
  },
  {
    title: "Io Capitano",
    attendance: "60",
    reactionsReturned: "60",
    fiveStars: "31",
    fourStars: "24",
    threeStars: "5",
    twoStars: "0",
    oneStars: "0",
    percentageTotal: "86",
  },
  {
    title: "Fremont",
    attendance: "89",
    reactionsReturned: "87",
    fiveStars: "22",
    fourStars: "42",
    threeStars: "20",
    twoStars: "3",
    oneStars: "0",
    percentageTotal: "74",
  },
  {
    title: "1976",
    attendance: "79",
    reactionsReturned: "81",
    fiveStars: "15",
    fourStars: "48",
    threeStars: "15",
    twoStars: "3",
    oneStars: "0",
    percentageTotal: "73",
  },
  {
    title: "Typist Artist Pirate King",
    attendance: "82",
    reactionsReturned: "83",
    fiveStars: "32",
    fourStars: "26",
    threeStars: "16",
    twoStars: "6",
    oneStars: "3",
    percentageTotal: "73",
  },
  {
    title: "The Taste of Things",
    attendance: "82",
    reactionsReturned: "79",
    fiveStars: "21",
    fourStars: "29",
    threeStars: "19",
    twoStars: "7",
    oneStars: "3",
    percentageTotal: "68",
  },
  {
    title: "Radical",
    attendance: "91",
    reactionsReturned: "88",
    fiveStars: "68",
    fourStars: "18",
    threeStars: "1",
    twoStars: "1",
    oneStars: "0",
    percentageTotal: "93",
  },
];

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

console.table(calculateReactionsAverages(films));
