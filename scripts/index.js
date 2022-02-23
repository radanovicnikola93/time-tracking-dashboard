// data
const url = "./scripts/data.json";

fetch(url)
    .then((response) => {
        return response.json(); // return response in json
    })
    .then((data) => {
        let stats = data;
        console.log(stats[0].timeframes.daily.current) // testing data.json
    })
    .catch((err) => {
        console.log(err);
    })