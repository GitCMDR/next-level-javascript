/**
 * Fetch - Challenge
 *
 * GET the first comments value 'https://jsonplaceholder.typicode.com/comments/1' and log its value.
 * POST a new comment using 'https://jsonplaceholder.typicode.com/comments' and log its value.
 *
 * RESTFul API Guide - https://jsonplaceholder.typicode.com/guide.html
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */

// GET (fetch uses GET by default)
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))


// POST
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "POST",
    body: JSON.stringify({
            title: "This is my comment",
            body: "Get ready!",
            userId: 1,
        }),
            headers: {'Content-type': 'application/json; charset=UTF-8',},
})
    .then(response => response.json())
    .then(data => console.log(data))
