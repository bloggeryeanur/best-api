
/* const loadQude = ()=>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQutz(data))
} 

const displayQutz = hi =>{
    const blockQuate = document.getElementById('blockquote');
    blockQuate.innerText = hi.quote
} */



/* const loadUser = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayUser(data.results))
}

const displayUser = userPara => {
    const userContainer = document.getElementById('user-container');
    for (getuser of userPara) {
        console.log(getuser)
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `
        <h3>User ${getuser.name.first}</h3>
        <h3>Email ${getuser.email}</h3>
        <p>User Location ${getuser.location.state} </p>
        `
        userContainer.appendChild(userDiv)

    }
}
loadUser()
 */

/////////////Get Cuntries////////////

const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountrie(data))
}

const displayCountrie = contry => {
    // for(const getCountries of contry){
    //     console.log(getCountries)
    // }
    const containerContries = document.getElementById('user-container');
    contry.forEach(getContry => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        
        <h3>Name : ${getContry.name.common}</h3>
        <p>Capital ${getContry.capital ? getContry.capital[0] : 'Noooooooooo'}</p>
        <button onclick="loadCountryDetails('${getContry.cca2}')">Display Details</button>
        `;
        containerContries.appendChild(countryDiv);


    })
}

const loadCountryDetails = (code) => {
    const url = `https://restcountries.com/v3.1/name/${code}`
    //console.log('Get country dekis', code)
    //console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => diplayContryDetails(data[0]))
}

const diplayContryDetails = contry => {
    console.log(contry)
    const contryDetails = document.getElementById('hi');
    contryDetails.innerHTML = `
<h2>Details : ${contry.name.common}</h2>
<img src="${contry.flags.png}" alt="" />
`
}

loadCountries()
