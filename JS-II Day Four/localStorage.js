function saveToLocalStorage(theme, language, darkMode) {

    localStorage.setItem('language', language);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    localStorage.setItem('theme', theme);

    console.log("Dark Mode : " + JSON.parse(localStorage.getItem('darkMode')));
    console.log("Theme : " + localStorage.getItem('theme'));
    console.log("Language : " + localStorage.getItem('language'));

}

saveToLocalStorage("grey", "English", true)

function loadFromSessionStorage() {
    sessionStorage.setItem('viewMode', 'mobile');
    const viewMode = sessionStorage.getItem('viewMode');
    console.log('In session storage -' + ' ' + 'view mode: ', viewMode);
    sessionStorage.clear();
}

loadFromSessionStorage()