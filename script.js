// const API_URL = "https://fairy-tale-h8ekmey95-siemhong.vercel.app/";

// GET /api/fairytales

let url = "https://fairy-tale-api-inky.vercel.app/api/fairytales";

// let urlpara = url+'?'+${data[i].id};
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const card3 = document.getElementById('card3');
    const card2 = document.getElementById('card2');
    const card = document.getElementById("card");
      for (let i = 0; i <data.length; i++) {
        if(data[i].age === '0-3'){
        card.innerHTML += `
               
        <div class="card border-0 border-end">
        <img src="${data[i].image}"alt="...">
        <div class="card-body">
          <a href="./page/detail-page/index.html?id=${data[i].id}" class="card-title fs-4">${data[i].title}</a>
          <p class="card-text">${data[i].summary}</p>
          <p>By: ${data[i].author}</p>
        </div>
      </div>`;
      }
    }
    for (let i = 0; i <=7; i++) {
      if(data[i].age === '4-6'){
      card2.innerHTML += `
             
      <div class="card border-0 border-end">
      <img src="${data[i].image}"alt="...">
      <div class="card-body">
        <a href="./page/detail-page/index.html?id=${data[i].id}" class="card-title fs-4">${data[i].title}</a>
        <p class="card-text">${data[i].summary}</p>
        <p>By: ${data[i].author}</p>
      </div>
    </div>`;
    }
  }

  for (let i = 0; i <=7; i++) {
    if(data[i].age === '7-12'){
    card3.innerHTML += `
           
    <div class="card border-0 border-end">
    <img src="${data[i].image}"alt="...">
    <div class="card-body">
      <a href="./page/detail-page/index.html?id=${data[i].id}" class="card-title fs-4">${data[i].title}</a>
      <p class="card-text">${data[i].summary}</p>
      <p>By: ${data[i].author}</p>
    </div>
  </div>`;
  }
}
   
    console.log(data);
  })
  .catch((error) => console.error("Error:", error));

