/**
 * This program creates an array and the definition of a DVD.
 */

let collection = [];

function createDVD(name, released, director) {
    return {
        "name": name,
        "released": released,
        "director": director
    };
}

collection.push(createDVD("The Avengers", 2012, "Joss Whedon"));
collection.push(createDVD("The Incredibles", 2004, "Brad Bird"));
collection.push(createDVD("Finding Dory", 2016, "Andrew Stanton"));
collection.push(createDVD("The Lion King", 2019, "Jon Favreau"));
collection.push(createDVD("Star Wars", 1977, "George Lucas"));

collection.forEach(dvd => console.log(dvd));
