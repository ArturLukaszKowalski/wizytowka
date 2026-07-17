document.getElementById('year').textContent = new Date().getFullYear();

// Generowanie kodu QR wskazującego na tę stronę
(function () {
  var qrBox = document.getElementById('qrBox');
  if (!qrBox || typeof QRCode === 'undefined') return;

  var pageUrl = window.location.href.split('#')[0];

  new QRCode(qrBox, {
    text: pageUrl,
    width: 300,
    height: 300,
    colorDark: '#241f1a',
    colorLight: '#f5efe4',
    correctLevel: QRCode.CorrectLevel.H
  });

  // Logo na środku kodu QR
  var logo = document.createElement('img');
  logo.src = 'assets/logo.png';
  logo.alt = '';
  logo.className = 'qr-logo';
  qrBox.appendChild(logo);
})();
