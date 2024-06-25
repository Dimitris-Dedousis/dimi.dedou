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

`;

// Εύρεση του στόχου με το id 'add_headder'
const addHeadderDiv = document.getElementById('add_body');

// Προσθήκη του HTML περιεχομένου στο div με το id 'add_headder'
if (addHeadderDiv) {
    addHeadderDiv.innerHTML = htmlContent;
}
