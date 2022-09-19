

let row=document.querySelector(".row");


  fetch('https://sheet2api.com/v1/JXlcY3JUQO5x/shop')
  .then(response => response.json())
  .then(data => {
    data.map(e=> {
      row.innerHTML += `

      <div class="product-box">
      <div class="product-img">
      <img src="${e.img}" alt="">
        </div>
      <div class="product-text">

        <h3>${e.title}</h3>
        <p class="description">${e.description.slice(0,110)}...</p>
        <span class="category">${e.category}</span>
        <div class="product-detail">

          <span class="date">${e.date}</span>
          <span class="price">${e.price} MAN</span>

          <span onclick="add('${e.title}')" class="add">Add to Cart </span>
        </div>
      </div>
    </div>
      `
    })
})


function add(a)

{

    let title;
    fetch('https://sheet2api.com/v1/JXlcY3JUQO5x/shop')
    .then(response => response.json())
  .then(data => {
    data = data.filter(e => e.title == a);

   title = data[0]['title'];
   img = data[0]['img'];
   description = data[0]['description'];
   category = data[0]['category'];
   price = data[0]['price'];
   date = data[0]['date'];

   var data = {
    'title': title,
    'img': img,
    'description': description,
    'category': category,
    'date': date,
    'price': price
};


var url = 'https://sheet2api.com/v1/JXlcY3JUQO5x/cart';

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});

  

})


      
    
   
}
