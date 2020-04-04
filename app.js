// https://pomber.github.io/covid19/timeseries.json
countryName = document.getElementById('c-id');
active = document.getElementById('active');
perDeath = document.getElementById('perDeath');


function pushData() {
let country = document.getElementById("country").value;

fetch(`https://coronavirus-19-api.herokuapp.com/countries/${country}`,{headers: {'Access-Control-Allow-Origin': '*'}})
.then(response => {
  return response.json();
})
.catch(err => alert(err))
.then(countries => {
  console.log(countries);
  // console.log(perDeath.toFixed(2));
  let percentage = (countries.deaths * 100) / countries.cases;
  if (countries.todayCases < 1 ){
      casesToday.innerHTML = "Today's Cases: " + 0;
  } else {
    casesToday.innerHTML = "Today's Cases: " + countries.todayCases;
  }
  countryName.innerHTML = countries.country;
  active.innerHTML = "Active cases: " + countries.active;
  cases.innerHTML = "All Cases: " + countries.cases;
  deaths.innerHTML = "Deaths: " + countries.deaths;
  todayDeaths.innerHTML = "Today's Deaths " + countries.todayDeaths;
  recovered.innerHTML = "Recovered: "  + countries.recovered;
  perDeath.innerHTML = " Percent of deaths: " + percentage.toFixed(2) + '%';
});

}
