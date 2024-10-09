// Συνάρτηση για την φόρτωση των δεδομένων από το JSON αρχείο
function loadProfileData() {
    fetch('https://dimitridedou.github.io/js/data.json')  // Εξασφάλισε ότι η διαδρομή είναι σωστή
        .then(response => {return response.json();})
        .then(data => {
            const profile = data.profile[0];  // Αποθήκευση του πρώτου προφίλ από το JSON
            
            // Ενημέρωση των στοιχείων στη σελίδα
            document.getElementById("myusername").innerText = profile.username;
            document.getElementById("telephone").innerText = profile.telephone;
            document.getElementById("mygender").innerText = profile.gender;

            document.getElementById("myage").innerText = profile.age;
            document.getElementById("myemail").innerHTML = `<a href="mailto:${profile.email}">${profile.email}</a>`;
            document.getElementById("profileImage").src = profile.profileImage;


            const social = data.social[0];  // Αποθήκευση του πρώτου προφίλ από το JSON
            document.getElementById("facebookLink").innerHTML = `<a href="mailto:${social.facebook}">Facebook</a>`;
            document.getElementById("instagramLink").innerHTML = `<a href="mailto:${social.instagram}">Instagram</a>`;

    // Προσθήκη γλωσσών προγραμματισμού

            const programmingLanguagesList = document.getElementById("programmingLanguages");
            programmingLanguagesList.innerHTML = '';
            profile.skills.programmingLanguages.forEach(lang => {
                const li = document.createElement('li');
                li.className = 'list-group-item';
                li.textContent = lang;
                programmingLanguagesList.appendChild(li);
            });

            const platformsAndTechnologiesList = document.getElementById("platformsAndTechnologies");
            platformsAndTechnologiesList.innerHTML = '';
            profile.skills.platformsAndTechnologies.forEach(lang => {
                const li = document.createElement('li');
                li.className = 'list-group-item';
                li.textContent = lang;
                platformsAndTechnologiesList.appendChild(li);
            });


            const educationContainer = document.getElementById('educationContainer');
            educationContainer.innerHTML = ''; // Καθαρίστε το περιεχόμενο πριν προσθέσετε νέα στοιχεία

            // Επανάληψη για κάθε εκπαιδευτική εγγραφή
            data.education.forEach(education => {
                // Δημιουργία HTML για την εμφάνιση των εκπαιδευτικών πληροφοριών
                const educationHtml = `
                   <div class="timeline-item left">
                        <div class="timeline-content">
                            <div class="timeline-icon bg-dark ">
                             <i class="fas fa-graduation-cap "></i>
                            </div>
                        <span class="badge bg-dark" style="margin-left:6%;">${education.duration}</span><br><br>
                        <div class="input-group  style="width: 100%;">
                            <span class="input-group-text" style="width: 17%; font-weight: bold;">Πανεπιστήμιο</span>
                            <span class="input-group-text" style="width: 83%;">${education.institution}</span>
                        </div>
                        <div class="input-group">
                            <span class="input-group-text" style="width: 17%; font-weight: bold;">Τμήμα</span>
                            <span class="input-group-text" style="width: 83%;">${education.part}</span>
                        </div>
                        <div class="input-group">
                            <span class="input-group-text" style="width: 17%; font-weight: bold;">Κατάσταση</span>
                            <span class="input-group-text" style="width: 83%;">${education.status}</span>
                        </div> 
             
                        <div class="input-group">
                            <span class="input-group-text"  style="width: 17%; font-weight: bold;">Bαθμός</span>
                            <span class="input-group-text"  style="width: 83%;">${education.degree}</span>
                        </div>    
            </div>
        </div>
                `;
                // Εισαγωγή του HTML στο κατάλληλο div
                educationContainer.innerHTML += educationHtml;
            });



        })
        .catch(error => {
            console.error('Error loading the profile data:', error);
        });
}

// Κλήση της συνάρτησης όταν φορτωθεί η σελίδα
loadProfileData();
