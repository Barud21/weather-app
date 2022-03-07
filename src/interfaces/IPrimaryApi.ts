export interface IPrimaryApi {
  count: string;
  data: Datum[];
}

export interface Datum {
  city_name: string;
  state_code: string;
  country_code: string;
  timezone: string;
  lat: number;
  lon: number;
  station: string;
  vis: number;
  rh: number;
  dewpt: number;
  wind_dir: number;
  wind_cdir: string;
  wind_cdir_full: string;
  wind_speed: number;
  temp: number;
  app_temp: number;
  clouds: number;
  weather: Weather;
  datetime: string;
  ob_time: string;
  ts: number;
  sunrise: string;
  sunset: string;
  slp: number;
  pres: number;
  aqi: number;
  uv: number;
  solar_rad: number;
  ghi: number;
  dni: number;
  dhi: number;
  elev_angle: number;
  hour_angle: number;
  pod: string;
  precip: number;
  snow: number;
}

export interface Weather {
  icon: string;
  code: string;
  description: string;
}
