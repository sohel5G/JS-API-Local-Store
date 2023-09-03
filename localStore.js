
const addProduct = () => {
    const proNameField = document.getElementById('pro-name');
    const proNameFieldValue = proNameField.value;

    const proQuantField = document.getElementById('pro-quant');
    const proQuantFieldValue = proQuantField.value;

    proNameField.value = '';
    proQuantField.value = '';

    setLocalStoreCard(proNameFieldValue, proQuantFieldValue);
}

const displayPro = (proNameFieldValue, proQuantFieldValue) => {
    const proContainer = document.getElementById('pro-container');
    const li = document.createElement('li');
    li.innerText = `${proNameFieldValue}  : ${proQuantFieldValue}`;
    proContainer.appendChild(li);
}

const getLocalStoreCard = () => {
    let cart = {};
    const storeCard = localStorage.getItem('cart');
    if (storeCard) {
        cart = JSON.parse(storeCard);
    }
    return cart;
}

const setLocalStoreCard = (proNameFieldValue, proQuantFieldValue) => {
    const cart = getLocalStoreCard();
    cart[proNameFieldValue] = proQuantFieldValue;
    const cardStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cardStringify);
}

const displayProFromLocalStore = () => {
    const savedCart = getLocalStoreCard();
    for (product in savedCart) {
        const productName = product;
        const productQuantity = savedCart[product];
        
        displayPro(productName, productQuantity);
    }
}

displayProFromLocalStore();



