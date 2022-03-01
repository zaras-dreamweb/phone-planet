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
        document.getElementById('single-phone').innerText = '';
        fetch(`https://openapi.programming-hero.com/api/phones?search=${inputBoxValue}`)
            .then(res => res.json())
            .then(data => displayPhones(data.data.slice(0, 20)))
        inputBox.value = '';
        cardContainer.innerText = '';
    }
}

const displayPhones = phones => {
    phones.forEach(phone => {
        // console.log(phone);

        const div = document.createElement('div');
        div.classList.add('col-lg-4');
        div.classList.add('col-md-6');
        div.innerHTML = `
        <div class="card mb-5" style="width: 18rem; border-radius:30px;">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text fw-bold"> ${phone.brand}</p>
                <button onclick="loadPhoneDetails('${phone.slug}')" type="button" class="btn btn-dark text-dark" style="background-color: rgb(202, 166, 231);">More Details</button>
            </div>
        </div>
        `;

        cardContainer.appendChild(div);
    });
}

const loadPhoneDetails = phoneId => {
    document.getElementById('single-phone').innerText = '';
    // console.log(phoneId);
    fetch(`https://openapi.programming-hero.com/api/phone/${phoneId}`)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data))
}

const displayPhoneDetails = phone => {
    console.log(phone);



    const singlePhone = document.getElementById('single-phone');
    const div = document.createElement('div');
    div.innerHTML = `
<div class="card mb-5 mx-auto" style="max-width: 500px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${phone.image}" class="img-fluid rounded-start w-200" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${phone.name}</h5>
        <p class="card-text fw-bold">${phone.brand}</p>
        <p class="card-text"><span class="fw-bold">Storage: </span>${phone.mainFeatures.storage}</p>
        <p class="card-text"><span class="fw-bold">DisplaySize: </span>:${phone.mainFeatures.displaySize}</p>
        <p class="card-text"><span class="fw-bold">ChipSet: </span>${phone.mainFeatures.chipSet}</p>
        <p class="card-text"><span class="fw-bold">Memory: </span>${phone.mainFeatures.memory}</p>
        <p><span class="fw-bold">ReleaseDate: </span>${phone.releaseDate ? phone.releaseDate : 'No release date found.'}</p>

        
      </div >
    </div >
  </div >
</div >
    `;

    singlePhone.appendChild(div);
}