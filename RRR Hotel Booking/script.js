const bars = document.querySelector('.fa-bars');
const navlist = document.querySelector('.navlist');

bars.addEventListener('click', ()=>{

   navlist.classList.toggle("open");
   bars.classList.toggle(".fa-xmark")
})

window.onscroll =()=>{
  navlist.classList.remove("open");
   bars.classList.remove(".fa-xmark")

}

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".myswiper", {
  effect: "flip",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let cart = []; 
let totalAmount = 0; 

function addToCart() {
    let select = document.getElementById("roomSelection");
    let roomType = select.options[select.selectedIndex].text;
    let price = parseInt(select.value);

    cart.push({ roomType, price });

    updateCart();
}

function updateCart() {
    let cartBody = document.getElementById("cartBody");
    let totalElement = document.getElementById("totalPrice");

    cartBody.innerHTML = "";
    totalAmount = 0; 

    
    cart.forEach((item, index) => {
        totalAmount += item.price;

        let row = `<tr>
            <td>${item.roomType}</td>
            <td>₱${item.price.toLocaleString()}</td>
            <td><button onclick="removeFromCart(${index})">Delete</button></td>
        </tr>`;

        cartBody.innerHTML += row;
    });

    totalElement.innerText = `₱${totalAmount.toLocaleString()}`;
}

function removeFromCart(index) {
    cart.splice(index, 1); 

    updateCart();
}
document.getElementById('darkModeToggle').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');

 
  if (document.body.classList.contains('dark-mode')) {
      this.textContent = '☀️';  
  } else {
      this.textContent = ' 🌙';
  }
});



