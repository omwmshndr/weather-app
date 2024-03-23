// types for WeatherSlice

interface CurrentWeatherDataInterface {
  coord: {
    lon: number
    lat: number
  }
  weather: {
    id: number
    main: string
    description: string
    icon: string
  }[]
  base: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  visibility: number
  wind: {
    speed: number
    deg: number
    gust: number
  }
  clouds: {
    all: number
  }
  dt: number
  sys: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: number
}
interface HourlyWeatherDataInterface {
  cod: string
  message: number
  cnt: number
  list: {
    dt: number
    main: {
      temp: number
      feels_like: number
      temp_min: number
      temp_max: number
      pressure: number
      sea_level?: number
      grnd_level?: number
      humidity: number
      temp_kf?: number
    }
    weather: {
      id: number
      main: string
      description: string
      icon: string
    }[]
    clouds: {
      all: number
    }
    wind: {
      speed: number
      deg: number
      gust: number
    }
    visibility: number
    pop: number
    sys: {
      pod: string
    }
    dt_txt: string
  }[]
  city: {
    id: number
    name: string
    coord: {
      lat: number
      lon: number
    }
    country: string
    population: number
    timezone: number
    sunrise: number
    sunset: number
  }
}

export interface WeatherStateInterface {
  weatherLoading: boolean
  weatherData: {
    currentWeather: null | CurrentWeatherDataInterface
    hourlyWeather: null | HourlyWeatherDataInterface
  }
  weatherError: null | string | undefined
}

// types for Config Slice

export interface ConfigStateInterface {
  currentCity: null | string
  translatedCurrentCity: null | string
  lang: 'en' | 'ua'
  tempUnits: 'celsius' | 'fahrenheit'
}

// types for HourlyWeatherCard

export interface HourlyWeatherPropsInterface {
  temp: number
  weatherIcon: string
  time: number
}

// types for citiesSlice

export interface CityInterface {
  cityName: string
  countryName: string
  coordinates: {
    lat: number
    lon: number
  }
  population: number
}

export interface CitiesStateInterface {
  citiesLoadind: boolean
  sourceCitiesList: null | CityInterface[]
  filteredCitiesList: null | CityInterface[]
  citiesError: null | string | undefined
}
