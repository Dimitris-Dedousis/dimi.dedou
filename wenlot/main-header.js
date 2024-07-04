window.addEventListener('scroll', function() {
    var header = document.getElementById('main-header');
    if (window.scrollY > 0) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Σκούρο μοβ με διαφάνεια
        header.style.backdropFilter = 'blur(10px)'; // Προσθέτουμε θόλωμα 10px
        header.style.opacity = '1'; // Μειώνουμε την αδιαφάνεια για περισσότερη διαφάνεια
    } else {
        header.style.backgroundColor = 'rgba(82, 79, 79, 0.75);'; // Μαύρο με διαφάνεια
        header.style.backdropFilter = 'blur(0px)'; // Καμία θολότητα
        header.style.opacity = '1'; // Πλήρης αδιαφάνεια
        
    }
});
