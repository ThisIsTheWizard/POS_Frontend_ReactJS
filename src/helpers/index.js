export const changeBodyAttribute = (attribute, value) => {
  if (document.body) document.body.setAttribute(attribute, value)
  return true
}

export const manageBodyClass = (className, actionType) => {
  if (document.body) {
    if (actionType === 'add') {
      document.body.classList.add(className)
    } else if (actionType === 'remove') {
      document.body.classList.remove(className)
    } else {
      document.body.classList.toggle(className)
    }
  }
  return true
}

export const updateBodyClassAndAttribute = (sidebarType, isMobile) => {
  if (sidebarType === 'default') {
    changeBodyAttribute('data-sidebar-size', 'default')
    manageBodyClass('sidebar-enable', 'remove')
    if (!isMobile) manageBodyClass('vertical-collpsed', 'remove')
  } else if (sidebarType === 'condensed') {
    manageBodyClass('sidebar-enable', 'add')
    if (!isMobile) manageBodyClass('vertical-collpsed', 'add')
  }
  return true
}
