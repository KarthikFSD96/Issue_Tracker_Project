// Get the filter issue form element
const filterIssueForm = document.getElementById("filter-issue-form");

// Get the issue data in JSON format
const issueJson = document.getElementById('issue-data').getAttribute('data');

// Parse the JSON data
let issue = JSON.parse(issueJson);

// Get the element to display filtered results
let issueList = document.getElementById('issues-list');

// Listen for form submission
filterIssueForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    // Initialize an empty array to store filtered data
    let filteredIssue = [];

    // Get all checkbox input elements from the form
    let labelList = filterIssueForm.querySelectorAll("input[type=checkbox]");

    // Filter the selected checkbox elements
    let labelElements = [...labelList].filter((Element) => Element.checked);

    // Get the selected author value from the form
    let authorVal = filterIssueForm.querySelector("input[type=radio][name=author]:checked");

    // Extract values from the labelElements
    let [...labelArr] = labelElements.map((Element) => Element.value);

    // Filter the issue data based on author and labels
    issue.map((el) => {
        if (el.author === authorVal) {
            if (!filteredIssue.includes(el)) {
                filteredIssue.push(el);
            }
        }

        // Filter the issue data based on labels
        labelArr.map((label) => {
            if (el.labels.includes(label)) {
                if (!filteredIssue.includes(el)) {
                    filteredIssue.push(el);
                }
            }
        });
    });

    // Clear the previous results
    issueList.innerHTML = '';

    // Display the filtered issues
    filteredIssue.forEach((issue) => {
        let Div = document.createElement('div');
        Div.style = "none";
        Div.innerHTML = `
        <div class="card w-100 issue-card" >
      <div class="card-body" >
        <h4 class="card-title">Title : ${issue.name} </h4>
        <h5 class="card-title">Author : ${issue.author}</h5>
        <h6 class="card-subtitle mb-2">
          Description : ${issue.description}
        </h6>
      </div>
    </div>
    `;
    issueList.appendChild(Div);
    })
});
