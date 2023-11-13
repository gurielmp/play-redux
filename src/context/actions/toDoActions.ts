export const ADD_TO_LIST = (item: any) => {
  return {
    type: "ADD_TO_LIST",
    payload: { item }
  }
}

export const REMOVE_TO_LIST = (id: any) => {
  return {
    type: "REMOVE_TO_LIST",
    payload: { id }
  }
}