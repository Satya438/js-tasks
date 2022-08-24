
const api_url = "https://randomuser.me/api/";

async function getUser() {

    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data.results);

    const user = data.results[0];
    let { title, first, last } = user.name;
    let { gender, email, phone } = user;
    let age = user.dob.age;
    let { city, state, country } = user.location;

    let fullName = title + ". " + first + " " + last;
    document.title = fullName;

    document.querySelector("#head").textContent = fullName;
    document.querySelector("#email").href = email;
    document.querySelector("#email").textContent = email;
    document.querySelector("#age").textContent = age;
    document.querySelector("#gender").textContent = gender;
    document.querySelector("#country").textContent = country;
   
}

getUser();