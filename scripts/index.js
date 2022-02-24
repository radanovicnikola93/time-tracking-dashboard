// TODO
// - grab every single container
// - in that container grab every single elelemnt
// - for every element update content

// buttons
const timeTogglers = document.querySelectorAll(
  ".btn"
);

// data
const url = "./scripts/data.json";

// fetch
const fetchData = async() => {
  const response = await fetch(url);
  const data = await response.json();
  console.log( response)
  console.log(data);
  createContainers(data);
}

const createContainers = activities => {
  let cards = activities.map(activity => {
    return `
        <!-- Daily -->
        <div class="daily">
          <div>
          <h2>${activity.title}</h2>
          <a href="#"><img src="./images/icon-ellipsis.svg" alt="" /></a>
        </div>
        <div class="card--stats">
          <div>
            <p><span class="current-hrs">${activity.timeframes.daily.current}</span>hrs</p>
          </div>
          <div>
            <p>Last <span class="calendar">Yesterday</span> - <span class="previous-hrs">${activity.timeframes.daily.previous}</span>hrs</p>
          </div>
        </div>
        </div>

        <!-- Weekly -->
        <div class="weekly">
          <div>
            <h2>${activity.title}</h2>
            <a href="#"><img src="./images/icon-ellipsis.svg" alt="" /></a>
          </div>
          <div class="card--stats">
          <div>
            <p><span class="current-hrs">${activity.timeframes.weekly.current}</span>hrs</p>
          </div>
          <div>
            <p>Last <span class="calendar">Last month</span> - <span class="previous-hrs">${activity.timeframes.weekly.previous}</span>hrs</p>
          </div>
        </div>
        </div>

        <!-- Montlhy -->
        <div class="monthly">
          <div>
          <h2>${activity.title}</h2>
          <a href="#"><img src="./images/icon-ellipsis.svg" alt="" /></a>
        </div>
        <div class="card--stats">
          <div>
            <p><span class="current-hrs">${activity.timeframes.monthly.current}</span>hrs</p>
          </div>
          <div>
            <p>Last <span class="calendar">Last month</span> - <span class="previous-hrs">${activity.timeframes.monthly.previous}</span>hrs</p>
          </div>
        </div>
        </div>

        `;
  })
}
