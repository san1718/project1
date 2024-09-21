// const repoList = document.querySelector('ul');
// const fetchButton = document.getElementById('fetch-button');

//getApi function is called when the fetchButton is clicked

// function getApi() {
//   // Insert the API url to get a list of your repos
//   const requestUrl = 'https://api.github.com/fawazahmed0/exchange-api';

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       //looping over the fetch response and inserting the URL of your repos into a list
//       for (let i = 0; i < data.length; i++) {
//         //Create a list element
//         const listItem = document.createElement('li');

//         //Set the text of the list element to the JSON response's .html_url property
//         listItem.textContent = data[i].html_url;

//         //Append the li element to the id associated with the ul element.
//         repoList.appendChild(listItem);
//       }
//     });
// }

// fetchButton.addEventListener('click', getApi);

fetch("https://api.github.com/fawazahmed0/exchange-api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ key: "value" }) // Your data here
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
