
const getContact  = function() {
    const address = document.createElement('div');
    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us At';
    address.appendChild(heading);
    heading.classList.add('heading');

    //abuja branch
    const abuja = document.createElement('div');
    abuja.classList.add('abuja');
    const abjaddres = document.createElement('h1');
    abjaddres.textContent = 'Abuja';
    const cresent = document.createElement('p');
    cresent.textContent = 'Beside mayfresh close garki Abuja';
    const num = document.createElement('p');
    num.textContent = ' Tell: +234976544567'
    abuja.appendChild(abjaddres);
    abuja.appendChild(cresent);
    abuja.appendChild(num);
    address.appendChild(abuja);

    //lagos
    const lagosdiv = document.createElement('div');
    lagosdiv.classList.add('lago');
    const lagos= document.createElement('h1');
    lagos.textContent = 'Lagos';
    const lcresent = document.createElement('p');
    lcresent.textContent = 'Beside moshude ademola lagos';
    const lnum = document.createElement('p');
    lnum.textContent = ' Tell: +234976544567'
    lagosdiv.appendChild(lagos);
    lagosdiv.appendChild(lcresent);
    lagosdiv.appendChild(lnum);
    address.appendChild(lagosdiv);



    return address
}

export {getContact};