document.getElementById('year').textContent = new Date().getFullYear();

// Generowanie kodu QR wskazującego na tę stronę (bez zewnętrznych bibliotek JS)
(function () {
  var qrBox = document.getElementById('qrBox');
  if (!qrBox) return;

  var pageUrl = window.location.href.split('#')[0].split('?')[0];

  var qrLink = document.createElement('a');
  qrLink.href = pageUrl;
  qrLink.target = '_blank';
  qrLink.rel = 'noopener';
  qrLink.setAttribute('aria-label', 'Otwórz tę wizytówkę');

  var qrImg = document.createElement('img');
  qrImg.className = 'qr-img';
  qrImg.alt = 'Kod QR prowadzący do tej wizytówki';
  qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=320x320&margin=10&ecc=H&color=241f1a&bgcolor=f5efe4&data=' + encodeURIComponent(pageUrl);
  qrLink.appendChild(qrImg);
  qrBox.appendChild(qrLink);

  var logo = document.createElement('img');
  logo.src = 'logo.png';
  logo.alt = '';
  logo.className = 'qr-logo';
  qrBox.appendChild(logo);
})();
