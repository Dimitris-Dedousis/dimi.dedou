const htmlContent = `
<div class="Header"> <!--Αρχή Επικεφαλίδας σε κινητά-->
            <div><h1 class="header_text">ΔΕΔΟΥΣΗΣ ΔΗΜΗΤΡΙΟΣ</h1></div>
        </div> <!--Τέλος Επικεφαλίδας σε κινητά -->
    <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
    <label for="openSidebarMenu" class="sidebarIconToggle">
        <div class="spinner diagonal part-1"></div>
        <div class="spinner horizontal"></div>
        <div class="spinner diagonal part-2"></div>
    </label>
    <div id="sidebarMenu" style="overflow: auto;">
        <ul class="sidebarMenuInner"></ul>
    </div>

        <ul class="social">
        <li class="social-item"> <a class="facebook" href="https://www.facebook.com/dimidedou" target="_blank"><span></span> <span></span> <span></span> <span></span><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
        <li class="social-item"> <a class="instagram" href="https://www.instagram.com/dimi.dedou" target="_blank"><span></span> <span></span> <span></span> <span></span><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
        <li class="social-item"> <a class="github" href="https://github.com/dimidedou" target="_blank"><span></span> <span></span> <span></span> <span></span><i class="fa fa-github" aria-hidden="true"></i></a></li>
        <li class="social-item"> <a class="linkedin" href="https://www.linkedin.com/in/dimidedou/" target="_blank"><span></span> <span></span> <span></span> <span></span><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
      </ul>

`;

// Εύρεση του στόχου με το id 'add_headder'
const addHeadderDiv = document.getElementById('add_body');

// Προσθήκη του HTML περιεχομένου στο div με το id 'add_headder'
if (addHeadderDiv) {
    addHeadderDiv.innerHTML = htmlContent;
}
