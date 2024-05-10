///////////////
// Εισαγωγή CSS
///////////////

// Λίστα με τους συνδέσμους προς τα αρχεία CSS
const cssLinks = [
   "https://dimidedou.github.io/css/style.css",
   "https://dimidedou.github.io/css/mobile.css",
   "https://dimidedou.github.io/css/desktop.css",
   "https://dimidedou.github.io/css/layout.css",
   "https://dimidedou.github.io/css/menu.css",
   "https://dimidedou.github.io/css/social.css",
   "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
];

// Αρχικοποίηση head
const head = document.head;

// Προσθήκη των αρχείων CSS στο head
cssLinks.forEach(linkUrl => {
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = linkUrl;

    // Προσθήκη στο head
    head.appendChild(linkElement);
});


/////////////////
/// Εισαγωγή Logo
/////////////////

// Δημιουργία ενός πίνακα με τα μεγέθη που θέλετε να προσθέσετε
const sizes = [
  { width: 32, height: 32, url: 'https://dimidedou.github.io/files/logo/32x32.png' },
  { width: 48, height: 48, url: 'https://dimidedou.github.io/files/logo/48x48.png' },
  { width: 96, height: 96, url: 'https://dimidedou.github.io/files/logo/96x96.png' },
  { width: 144, height: 144, url: 'https://dimidedou.github.io/files/logo/144x144.png' }
];

// Προσθήκη των favicons για κάθε μέγεθος
sizes.forEach(({ width, height, url }) => {
  // Δημιουργία νέου στοιχείου <link>
  const faviconLink = document.createElement('link');
  faviconLink.rel = 'icon';
  faviconLink.type = 'image/png';
  faviconLink.href = url;
  faviconLink.sizes = `${width}x${height}`;

  // Προσθήκη του στοιχείου <link> στο <head> του εγγράφου
  document.head.appendChild(faviconLink);
});

// Δημιουργία στοιχείου <link> για το favicon .ico
const icoFaviconLink = document.createElement('link');
icoFaviconLink.rel = 'shortcut icon';
icoFaviconLink.type = 'image/x-png';
icoFaviconLink.href = 'https://dimidedou.github.io/files/logo/favicon.ico';

// Προσθήκη του στοιχείου <link> στο <head> του εγγράφου
document.head.appendChild(icoFaviconLink);


///////////////////////////////
// Θέτουμε το title της σελίδας
///////////////////////////////
document.title = 'DΔΕΔΟΥΣΗΣ ΔΗΜΗΤΡΙΟΣ';

// Δημιουργία ενός νέου στοιχείου <meta>
const metaElement = document.createElement('meta');


///////////
// ViewPort
///////////

// Ορίζουμε την ιδιότητα 'name' ως 'viewport'
metaElement.setAttribute('name', 'viewport');

// Ορίζουμε την ιδιότητα 'content' με την τιμή που θέλουμε
// Σε αυτήν την περίπτωση, ορίζουμε initial-scale=0.8
metaElement.setAttribute('content', 'width=device-width, initial-scale=0.8');

// Προσθέτουμε το στοιχείο <meta> στο <head> του HTML εγγράφου
document.head.appendChild(metaElement);
