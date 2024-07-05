window.addEventListener('scroll', function() {
    var header = document.getElementById('main-header');
    var logoImg = document.getElementById('logo-img');
    var sidebarMenu = document.getElementById('sidebarMenu');
    var logoImgΜobile = document.getElementById('logo-img-mobile'); // Αλλάξτε το ID εδώ

    if (window.scrollY > 10) 
        {
        header.style.backgroundColor = 'transparent'; // Σκούρο μοβ με διαφάνεια
        header.style.backdropFilter = 'blur(10px)'; // Προσθέτουμε θόλωμα 10px
        header.style.opacity = '1'; // Μειώνουμε την αδιαφάνεια για περισσότερη διαφάνεια
        sidebarMenu.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Σκούρο μοβ με διαφάνεια
        sidebarMenu.style.backdropFilter = 'blur(10px)'; // Προσθέτουμε θόλωμα 10px
        sidebarMenu.style.opacity = '1'; // Μειώνουμε την αδιαφάνεια για περισσότερη διαφάνεια
        logoImg.style.display = 'block'; // Καταργούμε την κλάση hide για να εμφανιστεί η εικόνα
        logoImgΜobile.style.display = 'block'; // Καταργούμε την κλάση hide για να εμφανιστεί η εικόνα
    } 
    else {
        header.style.backgroundColor = 'transparent'; // Μαύρο με διαφάνεια
        header.style.backdropFilter = 'blur(0px)'; // Καμία θολότητα
        header.style.opacity = '1'; // Πλήρης αδιαφάνεια
        sidebarMenu.style.backgroundColor = 'rgb(46, 4, 42)'; // Μαύρο με διαφάνεια
        sidebarMenu.style.backdropFilter = 'blur(0px)'; // Καμία θολότητα
        sidebarMenu.style.opacity = '1'; // Πλήρης αδιαφάνεια

        logoImg.style.display = 'none'; 
        logoImgΜobile.style.display = 'none'; // Καταργούμε την κλάση hide για να εμφανιστεί η εικόνα

    }
});



