import {data} from "./data.js"

export const filterPopulation = (data, number) => {
 let population =  data.filter(city => city.population > number )
 return population;
}
export const filterPopulation2 = (data, number) => {
 let population =  data.filter(city => city.population < number )
 return population;
}

