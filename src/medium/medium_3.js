import mpg_data from "./data/mpg_data.js";

/*
mpg_data is imported for you but that is for testing purposes only. All of the functions should use
a car_data param that is supplied as the first parameter.

As you write these functions notice how they could possibly be chained together to solve more complicated
queries.
 */

/**
 * @param {array} car_data - an instance of mpg_data that should be used for filtering.
 * @param minHorsepower {number}
 * @param minTorque {number}
 *
 * @return {array} An array of car objects with horsepower >= minHorsePower and torque >= minTorque
 * sorted by horsepower in descending order.
 *
 */

function compare_horsepower (a, b){
    return b.horsepower - a.horsepower;
}

function compare_mpg (a, b){
    return b.highway_mpg - a.highway_mpg;
}

export function searchHighPower(car_data, minHorsepower, minTorque) { // We will Filter, and then Sort !!!
        
        let hp_array = car_data.filter(car => car.horsepower >= minHorsepower && car.torque >= minTorque)

        hp_array.sort(compare_horsepower)

        return hp_array;

}


/**
 * @param {array} car_data
 * @param minCity
 * @param minHighway
 *
 *
 * @return {array} An array of car objects with highway_mpg >= minHighway and city_mpg >= minCity
 * sorted by highway_mpg in descending order
 *
 */
export function searchMpg(car_data, minCity, minHighway) { // This definetly works!!! 

    let hp_array = car_data.filter(car => car.city_mpg >= minCity && car.highway_mpg >= minHighway)

        hp_array.sort(compare_mpg)

        return hp_array;

}




/**
 * Find all cars where 'id' contains the search term below.
 * Sort the results so that if the term appears earlier in the string
 * it will appear earlier in the list. Make sure searching and sorting ignores case.
 * @param car_data
 * @param searchTerm A string to that is used for searching
 * @returns {[]} array of cars
 */
export function searchName(car_data, searchTerm) {

    function compare_substring (a, b){
        return a.id.toLowerCase().indexOf(searchTerm.toLowerCase()) - b.id.indexOf(searchTerm.toLowerCase());
    }
    

    let array = car_data.filter(car => car.id.toLowerCase().includes(searchTerm.toLowerCase()))

    array.sort(compare_substring)

    return array;
}

function compare_year (a, b){
    return b.year - a.year;
}


/**
 * Find all cars made in the years asked for.
 * Sort the results by year in descending order.
 *
 * @param car_data
 * @param {number[]} years - array of years to be included in the results e.g. [2010, 2012]
 * @returns {[]} an array of car objects
 * 
 */


export function searchByYear(car_data, years) {

    function yearcheck(car){
        if(years.includes(car.year)){
            return true;
        }

        else{
            return false;
        }
    }

    let array = car_data.filter(yearcheck)

    array.sort(compare_year)

    return array;

}
