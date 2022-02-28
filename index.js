const cardContainer = document.getElementById('card-container');
const loadPhones = () => {
    const inputBox = document.getElementById('input-box');
    const inputBoxValue = inputBox.value;
    if (inputBoxValue == '') {
        alert("Please, enter a string");
        inputBox.value = '';
        cardContainer.innerText = '';
    }

    else {
        fetch(`https://openapi.programming-hero.com/api/phones?search=${inputBoxValue}`)
            .then(res => res.json())
            .then(data => displayPhones(data.data))
        inputBox.value = '';
        cardContainer.innerText = '';
    }
}

const displayPhones = phones => {
    // console.log(phones);
    phones.forEach(phone => {
        console.log(phone);

        const div = document.createElement('div');
        div.classList.add('col-lg-4');
        div.innerHTML = `
        <div class="card mb-5" style="width: 18rem; border-radius:30px;">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text fw-bold"> ${phone.brand}</p>
                <button onclick="loadPhoneDetails("${phone.slug}")" type="button" class="btn btn-dark text-dark" style="background-color: rgb(202, 166, 231);">More Details</button>
            </div>
        </div>
        `;

        cardContainer.appendChild(div);
    });
}

const loadPhoneDetails = phoneId => {
    console.log(phoneId);
    // fetch(`https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-${phoneId}`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
}