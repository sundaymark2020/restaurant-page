const Home =() => {
    const div = document.createElement('div');
    const heading = document.createElement('h1');
    heading.textContent = 'Sunnys African Dish';
    div.appendChild(heading);
    div.classList.add('heading');

    const descDiv = document.createElement('div');
    const description = document.createElement('p');
    description.textContent = 'Sunnys  African Dish has the best African Dish! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.'
descDiv.appendChild(description);
descDiv.classList.add('descDiv');
}

Home();

export{Home}