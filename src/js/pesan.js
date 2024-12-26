function updateQty(change) {
    const input = document.getElementById('qtyInput');
    let value = parseInt(input.value) + change;
    if (value < 1) value = 1;
    input.value = value;
    updateSummary();
}

function selectPayment(element) {
    document.querySelectorAll('.payment-option').forEach(option => {
        option.classList.remove('selected');
    });
    element.classList.add('selected');
    element.querySelector('input').checked = true;
}

function updateSummary() {
    const qty = parseInt(document.getElementById('qtyInput').value);
    const pricePerKg = 15000;
    const shipping = 10000;
    
    const productTotal = qty * pricePerKg;
    const total = productTotal + shipping;

    document.getElementById('productPrice').textContent = `Rp ${productTotal.toLocaleString('id-ID')}`;
    document.getElementById('quantity').textContent = `${qty} kg`;
    document.getElementById('totalPrice').textContent = `Rp ${total.toLocaleString('id-ID')}`;
}

function processOrder() {
    const qty = document.getElementById('qtyInput').value;
    const selectedPayment = document.querySelector('.payment-option.selected');
    const paymentMethod = selectedPayment.querySelector('span').textContent;

    alert(`Pesanan berhasil dibuat!\nJumlah: ${qty} kg\nPembayaran: ${paymentMethod}`);
}