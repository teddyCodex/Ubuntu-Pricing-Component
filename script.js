let pricing = [
  {
    "plan-name": "Basic",
    "plan-price": 19.99,
    "annual-price": 199.99,
    "storage-cap": 500,
    "allowed-users": 2,
    "send-limit": 3,
  },
  {
    "plan-name": "Professional",
    "plan-price": 24.99,
    "annual-price": 249.99,
    "storage-cap": 1,
    "allowed-users": 5,
    "send-limit": 10,
  },
  {
    "plan-name": "Master",
    "plan-price": 39.99,
    "annual-price": 399.99,
    "storage-cap": 2,
    "allowed-users": 10,
    "send-limit": 20,
  },
];
const section1 = document.getElementById("section-1");

let card1 = `
  <div class="card card1">
  <h3 class="plan-name">${pricing[0]["plan-name"]}</h3>
  <p  class="plan-price">$${pricing[0]["plan-price"]}</p><p class="plan-price hidden">$${pricing[0]["annual-price"]}</p>
  <p  class="storage-cap">${pricing[0]["storage-cap"]} GB Storage</p>
  <p  class="allowed-users">${pricing[0]["allowed-users"]} Users Allowed</p>
  <p  class="send-limit">Send up to ${pricing[0]["send-limit"]} GB</p>
  <button>LEARN MORE</button>
  </div>
  `;
let card2 = `
  <div class="card card2">
  <h3 class="plan-name">${pricing[1]["plan-name"]}</h3>
  <p class="plan-price">$${pricing[1]["plan-price"]}</p><p class="plan-price hidden">$${pricing[1]["annual-price"]}</p>
  <p class="storage-cap">${pricing[1]["storage-cap"]} TB Storage</p>
  <p class="allowed-users">${pricing[1]["allowed-users"]} Users Allowed</p>
  <p class="send-limit">Send up to ${pricing[1]["send-limit"]} GB</p>
  <button>LEARN MORE</button>
  </div>
  `;
let card3 = `
  <div class="card card3">
  <h3 class="plan-name">${pricing[2]["plan-name"]}</h3>
  <p class="plan-price">$${pricing[2]["plan-price"]}</p><p class="plan-price hidden">$${pricing[2]["annual-price"]}</p>
  <p class="storage-cap">${pricing[2]["storage-cap"]} TB Storage</p>
  <p class="allowed-users">${pricing[2]["allowed-users"]} Users Allowed</p>
  <p class="send-limit">Send up to ${pricing[2]["send-limit"]} GB</p>
  <button>LEARN MORE</button>
  </div>
  `;
section1.innerHTML = card1 + card2 + card3;

const toggleBtn = document.querySelector("input");
let allPrices = document.querySelectorAll(".plan-price");
let prices = "";

toggleBtn.addEventListener("click", function () {
  for (let i = 0; i < allPrices.length; i++) {
    prices = allPrices[i];
    prices.classList.toggle("hidden");
  }
});
