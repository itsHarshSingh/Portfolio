const projectData = {
    prescription: {
        tag: "Artificial Intelligence",
        title: "AI Prescription Reader",
        desc: "Conceived an AI-powered web application that takes a prescription image input, processing it through machine learning models and managing data storage via backend and DBMS integration to accurately extract and retrieve medicine information.",
        tech: ["Python", "AI/ML", "Backend", "DBMS", "Web App"],
        impact: "Automated medical record handling with structured database support"
    },
    student: {
        tag: "Machine Learning",
        title: "Student Performance Predictor",
        desc: "Developed a machine learning model to predict student final scores based on input parameters such as attendance, study hours, and past marks. Integrated the predictive model with an application and deployed the backend API on Render for real-time access.",
        tech: ["Python", "Machine Learning", "Render API"],
        impact: "Real-time predictions with 85% accuracy"
    },
    astromate: {
        tag: "Mobile Development",
        title: "AstroMate App",
        desc: "An intuitive astrology-based Android application built to deliver personalized horoscope insights, astrological readings, and seamless user experiences on mobile devices.",
        tech: ["Java", "Android Studio", "XML", "JSON"],
        impact: "Delivers smooth performance and interactive mobile UX"
    },
    musicsathi: {
        tag: "Mobile Development",
        title: "MusicSathi App",
        desc: "A feature-rich music player application designed for Android offering clean interface playback controls and localized media management.",
        tech: ["Java", "Android Studio", "MediaPlayer API"],
        impact: "Seamless background music streaming and playback support"
    }
};

const modalOverlay = document.getElementById('projectModal');
const closeModalBtn = document.getElementById('closeModal');
const modalTag = document.getElementById('modalTag');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalTechList = document.getElementById('modalTechList');
const modalImpactText = document.getElementById('modalImpactText');

const projectCards = document.querySelectorAll('.project-card');
const keys = ['prescription', 'student', 'astromate', 'musicsathi'];

projectCards.forEach((card, index) => {
    const btn = card.querySelector('.project-btn');
    const key = keys[index];
    
    btn.addEventListener('click', () => {
        const data = projectData[key];
        modalTag.textContent = data.tag;
        modalTitle.textContent = data.title;
        modalDesc.textContent = data.desc;
        modalImpactText.textContent = data.impact;
        
        modalTechList.innerHTML = '';
        data.tech.forEach(t => {
            const badge = document.createElement('span');
            badge.className = 'badge';
            badge.textContent = t;
            modalTechList.appendChild(badge);
        });

        modalOverlay.classList.add('active');
    });
});

closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});