function init() {
    document.getElementById('toggle-button').addEventListener('click', toggle_style, false);
}
function toggle_style() {
    if(document.getElementById('dynamic-style').href == window.location.href.substring(0, window.location.href.lastIndexOf('/')) + '/stylesheet.css') {
        document.getElementById('dynamic-style').href = 'stylesheet2.css';
    } else {
        document.getElementById('dynamic-style').href = 'stylesheet.css';
    }
}
window.addEventListener('load', init, false);
