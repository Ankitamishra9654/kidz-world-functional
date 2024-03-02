var cartValue = document.getElementById("cart-value");
var cartButton = document.getElementById("cart");

var addButtons = document.getElementsByClassName("button");

var items = [
  {
    name: "This was our pact",
    quantity: 0,
    dollars: 7,
    cents: 49,
  },
  // Rest of the items array...
];

function updateCart() {
  let cart = 0;
  for (index = 0; index < items.length; index++) {
    cart = cart + items[index].quantity;
  }
  cartValue.innerHTML = cart;
}

for (let i = 0; i < addButtons.length; i++) {
  addButtons[i].onclick = (e) => {
    items[i].quantity++;
    updateCart();
  };
}

var finalDollars = 0;
var finalCents = 0;

function updatePrice() {
  let totalPriceInCents = 0;

  for (index = 0; index < items.length; index++) {
    totalPriceInCents =
      totalPriceInCents +
      items[index].quantity * (items[index].dollars * 100 + items[index].cents);
  }
  finalDollars = Math.floor(totalPriceInCents / 100);
  finalCents = totalPriceInCents % 100;
}

cartButton.onclick = () => {
  updatePrice();

  // Code to paste order details and total amount in a WhatsApp message
  let message = "Order Details:\n";
  for (let index = 0; index < items.length; index++) {
    if (items[index].quantity != 0) {
      message +=
        "Item name: " +
        items[index].name +
        " - Quantity: " +
        items[index].quantity +
        "\n";
    }
  }
  message += "Total Amount: $" + finalDollars + "." + finalCents;
  // Here you can write the code to open WhatsApp with the message
  console.log("WhatsApp message:", message);
};

// Button to send WhatsApp message
document.getElementById("send-message").addEventListener("click", () => {
  // Here you can write the code to open WhatsApp with the message
  updatePrice();
  let message = "Order Details:\n";
  for (let index = 0; index < items.length; index++) {
    if (items[index].quantity != 0) {
      message +=
        "Item name: " +
        items[index].name +
        " - Quantity: " +
        items[index].quantity +
        "\n";
    }
  }
  message += "Total Amount: $" + finalDollars + "." + finalCents;
  console.log("WhatsApp message:", message);
});
