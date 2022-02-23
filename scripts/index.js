// TODO
// - grab every single container
// - in that container grab every single elelemnt
// - for every element update content

// card nodes
const cardStatsNodes = document.querySelectorAll(".card--stats");
// card array
const cardStatsArray = [...cardStatsNodes];

// links
const timeTogglers = document.querySelectorAll(
  ".card-user .user--toggle-time div a"
);

// data
const url = "./scripts/data.json";

fetch(url)
  .then((response) => {
    return response.json(); // return response in json
  })
  .then((data) => {
    let stats = data;

    // loop through stats
    stats.map(stat => {})
    // loop through cards
    cardStatsArray.map((card) => {
      let currentHrs = card.querySelector(".current-hrs");
      let previousHrs = card.querySelector(".previous-hrs");
      let calendar = card.querySelector(".calendar");
    });
    // add individial stat to individual card
    
  })
  .catch((err) => {
    console.log(err);
  });
