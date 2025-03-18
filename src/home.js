const Home = () => {
    const div = document.createElement('div');
    div.classList.add('heading');

    const heading = document.createElement('h1');
    heading.textContent = 'Sunnys African Dish';
    div.appendChild(heading);

    const descDiv = document.createElement('div');
    descDiv.classList.add('descDiv');

    const description = document.createElement('p');
    description.textContent = 'Sunnys African Dish has the best African Dish! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.';
    
    descDiv.appendChild(description);
    div.appendChild(descDiv);
    

    // Create the <h1> header
const header = document.createElement('h1');
header.textContent = "Hours and Days"; // Set the header text

// Create the <ul> element
const ul = document.createElement('ul');

// Append the header inside the unordered list
ul.appendChild(header);

// List of items
const items = ["Sunday: 8am - 8pm", "Monday: 6am - 6pm", "Tuesday: 6am - 6pm", "Wednesday: 6am - 6pm", "Thursday: 6am - 10pm", "Friday: 6am - 10pm", "Saturday: 8am - 10pm"];

// Loop through the array and create <li> for each item
items.forEach(itemText => {
    const li = document.createElement('li');
    li.textContent = itemText;
    ul.appendChild(li);
});

// Append the <div>
div.appendChild(ul);
const locationDiv = document.createElement('div');
const location = document.createElement('h2');
location.textContent = 'Location';
const locationDesc = document.createElement('p');
locationDesc.textContent = 'plot 123,garki 2,Abuja.'
locationDiv.appendChild(location)
locationDiv.appendChild(locationDesc);
div.appendChild(locationDiv);

    return div; // 
};

export { Home };
