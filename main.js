const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const modalOverlay = document.getElementById('modalOverlay');
openBtn.addEventListener('click', () =>{
    modalOverlay.style.display = 'flex';
} );
closeBtn.addEventListener('click', () =>{
    modalOverlay.style.display = 'none';
} );
