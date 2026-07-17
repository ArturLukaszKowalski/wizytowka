document.getElementById('year').textContent = new Date().getFullYear();

// Generowanie kodu QR wskazującego na tę stronę (bez zewnętrznych bibliotek JS)
(function () {
  var qrBox = document.getElementById('qrBox');
  if (!qrBox) return;

  var pageUrl = window.location.href.split('#')[0].split('?')[0];

  var qrImg = document.createElement('img');
  qrImg.className = 'qr-img';
  qrImg.alt = 'Kod QR prowadzący do tej wizytówki';
  qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=8&color=241f1a&bgcolor=f5efe4&data=' + encodeURIComponent(pageUrl);
  qrBox.appendChild(qrImg);

  var logo = document.createElement('img');
  logo.src = 'logo.png';
  logo.alt = '';
  logo.className = 'qr-logo';
  qrBox.appendChild(logo);
})();
