export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined;
    }
    console.log('successfully loaded state')
    return JSON.parse(serializedState)
  }
  catch (e) {
    // console.log(`error loading state`,e)
    return null
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state',serializedState)
  }
  catch (e) {
    // console.log(`error saving state`,e)
  }
}