// project cards data
const treeHouseProjectsData = [
    {
        id: "th-fewd-tg-08",
        name: "Employee Directory",
        description: "An employee directory that uses fetch to request employee data from an API and parses it to display specific employee data on the web page.",
        imgSml: "employee-directory-sg-v01.jpg",
        imgAlt: "Employee directory thumbnail",
        path: "employee-directory/index.html",
        gitHub: "https://github.com/jgarcia-dev/Employees-Directory-from-API"
    },
    {
        id: "th-fewd-tg-07",
        name: "App Dashboard",
        description: "A responsive web app dashboard that displays widgets for user traffic statistics, social media, and user information. Uses Chart.js for data visualization and local storage to store user settings.",
        imgSml: "app-dashboard-sg-v01.jpg",
        imgAlt: "App dashboard thumbnail",
        path: "web-app-dashboard/index.html",
        gitHub: "https://github.com/jgarcia-dev/Web-App-Dashboard"
    },
    {
        id: "th-fewd-tg-06",
        name: "Game Show App",
        description: "A word guessing game where players click on letters trying to guess a random phrase.",
        imgSml: "word-guess-game-sg-01.jpg",
        imgAlt: "Word game thumbnail",
        path: "word-game/index.html",
        gitHub: "https://github.com/jgarcia-dev/FEWD-td-proj-6-Game-Show-App"
    },
    {
        id: "th-fewd-tg-05",
        name: "Interactive Gallery",
        description: "An interactive photo gallery layout out with CSS Grid. Allows users to search for photos based on their captions.",
        imgSml: "interactive-gallery-sg-01.jpg",
        imgAlt: "Interactive gallery thumbnail",
        path: "interactive-gallery/index.html",
        gitHub: "https://github.com/jgarcia-dev/Interactive-Photo-Gallery-FEWD-proj-5"
    },
    {
        id: "th-fewd-tg-04",
        name: "Web Style Guide",
        description: "Style guide created by converting existing CSS into Sass partials.",
        imgSml: "style-guide-sg-01.jpg",
        imgAlt: "Style guide thumbnail",
        path: "web-style-guide/index.html",
        gitHub: "https://github.com/jgarcia-dev/Web-Style-Guide-FEWD-proj-4"
    },
    {
        id: "th-fewd-tg-03",
        name: "Web Form",
        description: "A responsive and mobile-friendly registration form that contains various HTML input types. Built to match provided mockups.",
        imgSml: "form-sg-01.jpg",
        imgAlt: "Web form thumbnail",
        path: "web-form/index.html",
        gitHub: "https://github.com/jgarcia-dev/FEWD-td-project-03"
    }
];


// Project cards generation

const projectsContainer = document.querySelector('.projects-container'); 
var projectsHTML = '';

treeHouseProjectsData.forEach( (proj) => {
    projectsHTML += 
    `<div class="proj-card">
            <a href="https://www.johngarcia.io/projects/${proj.path}" class="proj-card__img-link" target="_blank" >
                <img src="img/${proj.imgSml}" alt="${proj.imgAlt}" class="proj-card__img">
            </a>
        <div class="proj-card__text-container">
            <h3 class="proj-card__title">${proj.name}</h3>
            <p>${proj.description}</p>
            <div class="proj-card__btns-container">
                <a href="https://www.johngarcia.io/projects/${proj.path}" class="proj-card__btn" target="_blank" >View Project</a>
                <a href="${proj.gitHub}" target="_blank" rel="noopener noreferrer" class="proj-card__btn">View Code</a>
            </div>
        </div>
    </div>
    `;
});

projectsContainer.innerHTML = projectsHTML;