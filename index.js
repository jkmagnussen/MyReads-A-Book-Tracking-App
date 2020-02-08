// Using .map()

const musicData = [
  { artist: "Adele", name: "25", sales: 1731000 },
  { artist: "Drake", name: "Views", sales: 1608000 },
  { artist: "Beyonce", name: "Lemonade", sales: 1554000 }
];

const albumSalesStrings = musicData.map(
  album => `${album.name} by ${album.artist} sold ${album.sales} copies`
);

console.log(albumSalesStrings);

[
  "25 by Adele sold 1731000 copies",
  "Views by Drake sold 1608000 copies",
  "Lemonade by Beyonce sold 1554000 copies"
];

// Using .filter()

const musicData = [
  { artist: "Adele", name: "25", sales: 1731000 },
  { artist: "Drake", name: "Views", sales: 1608000 },
  { artist: "Beyonce", name: "Lemonade", sales: 1554000 }
];

const results = musicData.filter(
  album => album.name.length <= 25 && album.name.length >= 10
);

console.log(results);

// Combining .filter() and .map()

const musicData = [
  { artist: "Adele", name: "25", sales: 1731000 },
  { artist: "Drake", name: "Views", sales: 1608000 },
  { artist: "Beyonce", name: "Lemonade", sales: 1554000 }
];

const popular = musicData
  .filter(album => album.sales > 1000000)
  .map(album => `${album.artist} is a great performer`);

console.log(popular);
