let bagItems;
onLoad();


function onLoad(){
  let bagItemsStr = localStorage.getItem("bagItem");
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayHomePage();
  displayBagIcon();  
}


function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem("bagItem", JSON.stringify(bagItems));
  displayBagIcon();
}


function displayBagIcon(){
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if(bagItems.length<1){
    bagItemCountElement.style.visibility = "hidden";
  }else{
    bagItemCountElement.style.visibility = "visible";
    bagItemCountElement.innerText= bagItems.length;
  }
}

function displayHomePage(){
  
let itemsContainerElement = document.querySelector(".items_container");
if (!itemsContainerElement) {
  return;
}
let innerHTML = ``;
items.forEach(item =>{

  innerHTML += `
  
  <div class="item_container">
    <img src="${item.image}" alt="Item1" class="item-img">
    <div class="rating">${item.rating.stars}⭐ | ${item.rating.count}</div>
    <div class="company_name">${item.company}</div>
    <div class="item_name">${item.item_name}</div>

    <div class="price">
      <span class="curr-price">Rs ${item.current_price}</span>
      <span class="original-price">Rs ${item.original_price}</span>
      <span class="discount">(${item.discount_percentage}% OFF)</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>

  </div>
  
  `

});

itemsContainerElement.innerHTML = innerHTML;
}

