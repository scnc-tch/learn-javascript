let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/
let subHead = "The 5 largest countries in the world:";
console.log(subHead)
for ( c = 0; c < largeCountries.length; c++){
    let consoleMess = "- " + largeCountries[c];
        console.log(consoleMess)
}

