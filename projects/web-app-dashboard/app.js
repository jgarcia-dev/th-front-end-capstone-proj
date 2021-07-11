// USER NOTIFICATIONS
// ==========================================================================================================
const ntfBtn = document.getElementById('notifications-btn');
const ntfMarker = document.querySelector('.notifications-marker');
const userNotifications = [
    "You have a new message from Sonia Lupe.",
    "Mike Smith liked your post.",
    "You have a new message from Mark Sanchez"
];

function buildElement(elementName, property, value, cssClass) {
    const element = document.createElement(elementName);
    element[property] = value;
    element.classList.add(cssClass);
    return element;
}

function getNotifications(arr) {
    const notifications = [];
    while(arr.length > 0) {
        notifications.push(arr.pop());
    }
    return notifications;
}

function createNotificationsList(arr) {
    const div = document.createElement('DIV');
    div.classList.add('notifications-list');
    const tri = document.createElement('DIV');
    tri.classList.add('tri');
    div.appendChild(tri);
    if (arr.length > 0) {
        // notifications exist, build list of notifications
        for (let i = 0; i < arr.length; i++) {
            div.appendChild(buildElement('P', 'textContent', arr[i], 'notification'));
        }
    } else {
        // no notifications
        div.appendChild(buildElement('P', 'textContent', 'No Notifications', 'notification'));
    }
    return div;
}

function closeNotificationsList() {
    const ntfList = document.querySelector('.notifications-list');
    if(ntfList) {
        ntfList.parentElement.removeChild(ntfList);
    }
}

function setNotificationsMarker() {
    if (userNotifications.length > 0) {
        ntfMarker.classList.add('show');
    } else {
        ntfMarker.classList.remove('show');
    }
}


ntfBtn.addEventListener('click', ()=> {
    const ntfDiv = document.querySelector('.notifications-container');
    const ntfList = document.querySelector('.notifications-list');

    if(!ntfList) {
        const currNotifications = getNotifications(userNotifications);
        ntfDiv.appendChild(createNotificationsList(currNotifications));
        setNotificationsMarker();
    } else {
        closeNotificationsList();
    }
});

window.addEventListener('click', (e)=> {
    if (e.target.id !== 'notifications-btn') {
        closeNotificationsList();
    }
});



// ALERT BOX
// ==========================================================================================================
const alertBox = document.getElementById('alert');

alertBox.addEventListener('click', ()=> {
    alertBox.style.display = 'none';
});


// SETTINGS - local storage
// ==========================================================================================================
const emailNotifications = document.getElementById('emailNotifications');
const publicProfile = document.getElementById('publicProfile');
const timezone = document.getElementById('timezone');

function supportsLocalStorage() {
    try {
        return 'localStorage' in window && window.localStorage !== null;
    } catch(err) {
        return false;
    }
}

function updateUI() {
    // get setting values from local storage 
    const emailNotificationsValue = JSON.parse(localStorage.getItem(emailNotifications.id));
    const publicProfileValue = JSON.parse(localStorage.getItem(publicProfile.id));
    const timezoneValue = JSON.parse(localStorage.getItem(timezone.id));

    // if local storage setting values exist then set UI setting to value
    if (emailNotificationsValue !== null) {
        emailNotifications.checked = emailNotificationsValue;
    }
    if (publicProfileValue !== null) {
        publicProfile.checked = publicProfileValue;
    }
    if (timezoneValue !== null) {
        timezone.selectedIndex = timezoneValue;
    }
}

window.onload = function() {
    // for user notifications marker
    setNotificationsMarker();

    if (supportsLocalStorage()) {

        updateUI();

        // event handlers to setting values to local storage
        emailNotifications.addEventListener('change', ()=> {
            localStorage.emailNotifications = JSON.stringify(emailNotifications.checked);
        });
        publicProfile.addEventListener('change', ()=> {
            localStorage.publicProfile = JSON.stringify(publicProfile.checked);
        });
        timezone.addEventListener('change', ()=> {
            localStorage.timezone = JSON.stringify(timezone.selectedIndex);
        });
    }
}



// MESSAGE FORM
// ==========================================================================================================
const userForm = document.querySelector('form');
const userField = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');
const autoCompContainer = document.querySelector('.autocomplete-container');
users = ['Annie Chen', 'Abe Smith', 'Carla Willet', 'Dale Byrd', 'Dale Brad', 'Dan Oliver', 'John Garcia', 'Juan Garcia', 'Mike Smith', 'Victoria Chambers']
let currFocus = -1;

function getSearches(arr, queryStr) {
    const searches = []
    for (let i = 0; i < arr.length; i++) {
    if ( arr[i].toLowerCase().startsWith(queryStr.toLowerCase()) ) {
            searches.push(arr[i]);
        }
    }
    return searches;
}

function closeAutoCompList() {
    const currList = document.querySelector('.autocomplete-list');
    if (currList) {
        autoCompContainer.removeChild(currList);
    }
}

function addActive(collection) {
    removeActive(collection);
    if (currFocus >= collection.length) currFocus = 0
    if (currFocus < 0 ) currFocus = collection.length - 1
    collection[currFocus].classList.add('autocomplete-active')
}

function removeActive(collection) {
    for (let i = 0; i < collection.length; i++) {
        collection[i].classList.remove('autocomplete-active');
    }
}


userField.addEventListener('input', ()=> {
    const query = userField.value.trim();
    if (query) {
        const searches = getSearches(users, query)

        if (searches.length > 0) {
            closeAutoCompList();
            // build new list holding searches
            const autoCompList = document.createElement('UL');
            autoCompList.classList.add('autocomplete-list');
    
            for (let i = 0; i < searches.length; i++) {
                const li = document.createElement('LI');
                li.classList.add('autocomplete-item');
                li.textContent = searches[i];
                li.addEventListener('click', (e)=> {
                    userField.value = e.target.textContent;
                    closeAutoCompList();
                });
                autoCompList.appendChild(li);
            }
            autoCompContainer.appendChild(autoCompList);
        }
    } else {
        closeAutoCompList();
    } 
});

userField.addEventListener('keydown', (e)=> {
    const currList = document.getElementsByClassName('autocomplete-item');
    if (currList.length > 0) {
        if (e.key === 'ArrowUp') {
            currFocus--;
            addActive(currList);
        } else if (e.key === 'ArrowDown') {
            currFocus++;
            addActive(currList);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (currFocus > -1) {
                currList[currFocus].click();
            }
        }
    }
});

userForm.addEventListener('submit', (e)=> {
    const userValue = userField.value.trim();
    const messageValue = message.value.trim();

    if (e.target.id = send) {
        if (userValue === '' && messageValue === '') {
            e.preventDefault();
            alert('Please fill out both user and message fields before sending.');
        } else if (userValue === '') {
            e.preventDefault();
            alert('Please fill out user field before sending.');
        } else if (messageValue === '') {
            e.preventDefault();
            alert('Please fill out message field before sending.');
        } else {
            alert(`Message successfully sent to: ${userValue}`);
        }
    }
});

window.addEventListener('click', ()=> {
    closeAutoCompList();
});