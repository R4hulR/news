const btn = document.querySelector('#btn');
const sidebar = document.getElementById('sidebar');
let sidebarOpen = false; 

btn.addEventListener('click', () => {
    if (sidebarOpen) {
        sidebar.style.right = '-250px';
        btn.setAttribute('src', 'assets/images/icon-menu.svg');
        sidebarOpen = false;
    } else {
        sidebar.style.right = '0';
        btn.setAttribute('src', 'assets/images/icon-menu-close.svg');
        sidebarOpen = true;
    }
});
