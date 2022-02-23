// TODO
// - grab every single container
// - in that container grab every single elelemnt
// - for every element update content



// card nodes
const cardStatsNodes = document.querySelectorAll('.card--stats');

// card array
const cardStatsArray = [...cardStatsNodes];

// mapping on card
cardStatsArray.map(card => {
    // first paragraph of current hours
    let currentHrs = card.firstElementChild.firstElementChild.innerHTML;

    // last paragraph of previous hours
    let previousHrs = card.lastElementChild.firstElementChild.innerHTML;
    console.log(currentHrs + " " + previousHrs)
})

// links
const timeTogglers = document.querySelectorAll('.card-user .user--toggle-time div a');

// data
const url = "./scripts/data.json";

fetch(url)
    .then((response) => {
        return response.json(); // return response in json
    })
    .then((data) => {
        let stats = data;
    })
    .catch((err) => {
        console.log(err);
    })