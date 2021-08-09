

function isDarkThemeEnabled(){
    return document.body.classList.contains('dark-theme');
}

function isLightThemeEnabled(){
    return document.body.classList.contains('light-theme');
}

function switchTheme(element){
    document.body.classList.toggle('light-theme');
    
    if(!isLightThemeEnabled()){
        element.innerHTML = "Light Mode 🌞";
        
    } else {
        element.innerHTML = "Night Mode 🌙";
    }
}