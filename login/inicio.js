const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

function toggleSidebar() {
  sidebar.classList.toggle('close');
  toggleButton.classList.toggle('rotate');

  // Fecha todos os submenus ao colapsar
  closeAllSubMenus();
}

function toggleSubMenu(button) {
  const submenu = button.nextElementSibling;

  if (!submenu.classList.contains('show')) {
    closeAllSubMenus();
  }

  submenu.classList.toggle('show');
  button.classList.toggle('rotate');

  // Se estiver fechado, reabre a sidebar
  if (sidebar.classList.contains('close')) {
    sidebar.classList.remove('close');
    toggleButton.classList.remove('rotate');
  }
}

function closeAllSubMenus() {
  const openSubmenus = sidebar.querySelectorAll('.sub-menu.show');
  openSubmenus.forEach(sub => {
    sub.classList.remove('show');
    if (sub.previousElementSibling?.classList.contains('rotate')) {
      sub.previousElementSibling.classList.remove('rotate');
    }
  });
}
