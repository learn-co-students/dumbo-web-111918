export const addWizard = (wizard) => {
  return {
    type: "ADD_WIZARD",
    payload: wizard
  }
}

export const removeWizard = (wizard) => {
  return {
    type: "REMOVE_WIZARD",
    payload: wizard
  }
}
