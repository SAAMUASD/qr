function generateQRCode(event) {
    event.preventDefault();
    const firstName = document.getElementById('first-name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone-number').value;
    
    const qrUrl = `https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=BEGIN%3AVCARD%0AVERSION%3A3.0%0AN%3A${firstName}%0AEMAIL%3A${email}%0ATEL%3A${phoneNumber}%0AEND%3AVCARD`;

    document.getElementById("qrcode").innerHTML=`<img src="${qrUrl}" alt="QR code">`
}
