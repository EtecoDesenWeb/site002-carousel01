const divForm = document.getElementById('divForm');

function imgBlur() {
    divForm.style.backdropFilter = 'blur(0px)';
    divForm.style.backgroundColor = 'transparent';
}

function imgFocus() {
    divForm.style.backdropFilter = 'blur(15px)';
    divForm.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
}