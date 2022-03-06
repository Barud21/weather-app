import axios, { AxiosRequestConfig } from "axios";
import { IPrimaryApi } from "./IPrimaryApi";
import { IAlternativeApi } from "./IAlternativeApi";

export default class Api {
  public async fetchAxios(
    latitude: string,
    longitude: string,
    alternativeSource: boolean
  ) {
    const primaryApiConfig: AxiosRequestConfig = {
      method: "GET",
      url: "/current",
      baseURL: "https://weatherbit-v1-mashape.p.rapidapi.com",
      params: { lon: `${longitude}`, lat: `${latitude}` },
      headers: {
        "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
        "x-rapidapi-key": `${process.env.REACT_APP_RAPIDAPI_KEY}`,
      },
    };

    const alternativeApiConfig: AxiosRequestConfig = {
      method: "GET",
      url: `/${latitude},${longitude}`,
      baseURL: "https://dark-sky.p.rapidapi.com",
      params: {
        exclude: "minutely, hourly, daily, alerts, flags",
        units: "si",
        lang: "en",
      },
      headers: {
        "x-rapidapi-host": "dark-sky.p.rapidapi.com",
        "x-rapidapi-key": `${process.env.REACT_APP_RAPIDAPI_KEY}`,
      },
    };

    if (alternativeSource) {
      const fetchResult: IAlternativeApi = (
        await axios.request(alternativeApiConfig)
      ).data;

      return fetchResult;
    } else {
      const fetchResult: IPrimaryApi = (await axios.request(primaryApiConfig))
        .data;

      return fetchResult;
    }
  }
}
