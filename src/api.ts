export default class Api {
  public async fetchPrimaryApi() {
    const fetchResult = await fetch(
      "https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=38.5&lat=-78.5",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
          "x-rapidapi-key": `${process.env.REACT_APP_RAPIDAPI_KEY}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    return fetchResult;
  }

  public async fetchAlternativeApi() {
    const fetchResult = await fetch(
      "https://dark-sky.p.rapidapi.com/35.5,-78.5?exclude=minutely%2C%20hourly%2C%20daily%2C%20alerts%2C%20flags&units=si&lang=en",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "dark-sky.p.rapidapi.com",
          "x-rapidapi-key": `${process.env.REACT_APP_RAPIDAPI_KEY}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

    return fetchResult;
  }
}
