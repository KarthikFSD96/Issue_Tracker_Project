// Get the search issue form element
let searchIssueForm = document.getElementById('search-issue-form');

// Get the issue data in JSON format
let searchJson = document.getElementById('issue-data').getAttribute('data');

// Parse the JSON data into a variable for searching
let searchParse = JSON.parse(searchJson);

// Get the element to display search results
let showIssueData = document.getElementById('issues-list');

// Listen for form submission
searchIssueForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    // Initialize an empty array for search results
    let searchIssueArray = [];

    // Get the input values for title and description from the form
    let titleValue = searchIssueForm.querySelector('input[name=tie]').value;
    let descriptionValue = searchIssueForm.querySelector('input[name=des]').value;

    // Iterate through issue data and filter based on title and description
    searchParse.map((el) => {
        if (el.title === titleValue || el.description === descriptionValue) {
            if (!searchIssueArray.includes(el)) {
                searchIssueArray.push(el);
            }
        }
    });

    // Clear the existing content
    showIssueData.innerHTML = '';

    // Iterate through search results and create card elements
    searchIssueArray.forEach((issue) => {
        let Div = document.createElement('div');
        
        // Set styles to improve appearance
        Div.style = "background-color: grey; border-radius: 5px;";

        // Populate the card with issue information
        Div.innerHTML = `
            <div class="card w-100">
                <div class="card-body">
                    <h4 class="card-title" style="font-weight: bold; color: #0052CC;">Title: ${issue.name}</h4>
                    <h5 class="card-title">Author: ${issue.author}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Description: ${issue.description}</h6>
                </div>
            </div>
        `;

        // Append the card to the container
        showIssueData.appendChild(Div);
    })
});
