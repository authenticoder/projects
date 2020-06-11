const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(e) {
  // hide all tab panels
  tabPanels.forEach(panel => panel.hidden = true);
  // unselect all tabs
  tabButtons.forEach(tab => {
    tab.setAttribute('aria-selected', false);
  })
  // mark the clicked tab as selected
  e.currentTarget.setAttribute('aria-selected', true);
  // show the associated tabpanel
  const {id} = e.currentTarget;
  const tabPanel = tabs.querySelector(`[aria-labelledby = '${id}']`);
  tabPanel.hidden = false;
}

tabButtons.forEach(tab => tab.addEventListener('click', handleTabClick));