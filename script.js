// Show QR popup
function showPopup() {
  const popup = document.getElementById('qrPopup');
  const overlay = document.getElementById('overlay');
  popup.style.display = 'block';
  overlay.style.display = 'block';
}

// Close QR popup
function closePopup() {
  const popup = document.getElementById('qrPopup');
  const overlay = document.getElementById('overlay');
  popup.style.display = 'none';
  overlay.style.display = 'none';
}

// Show contact info popup
function showContactPopup() {
  const popup = document.getElementById('contactPopup');
  const overlay = document.getElementById('overlay');
  popup.style.display = 'block';
  overlay.style.display = 'block';
}

// Close contact info popup
function closeContactPopup() {
  const popup = document.getElementById('contactPopup');
  const overlay = document.getElementById('overlay');
  popup.style.display = 'none';
  overlay.style.display = 'none';
}

// Download the card as image using html2canvas
function downloadCard() {
  const card = document.getElementById("card");
  html2canvas(card).then(canvas => {
    const link = document.createElement('a');
    link.href = canvas.toDataURL("image/png");
    link.download = 'vcard.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}


// Share this page using Web Share API if supported
function shareThisPage() {
  if (navigator.share) {
    navigator.share({
      title: document.title,
      url: window.location.href
    }).then(() => {
      console.log('Thanks for sharing!');
    }).catch(console.error);
  } else {
    alert('Your browser does not support the Web Share API.');
  }
}
