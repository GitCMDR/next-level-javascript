// Promises
// promise will be stored in buyFlightTicket, three possible outcomes>
// promise is pending, promise is successful, promise is rejected

// promise takes a function, resolve and reject, if resolve, use resolve else use reject

const buyFlightTicket = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const error = true;

            if (error) {
                reject("Sorry, your payment was not successful");
            } else {
                resolve("Your payment was successful");
            }
        }, 3000)
    })
}

buyFlightTicket()
    .then((success) => console.log(success))
    .catch((error) => console.log(error));


/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 *
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 */

const returnUserInfo = () => {
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            const error = true;

            if (error) {
                reject("User Not found");
            } else {
                resolve("User Found");
            }
        }, 3000)
    })
}

returnUserInfo()
.then( (success) => console.log(success))
.catch( (error) => console.log(error));