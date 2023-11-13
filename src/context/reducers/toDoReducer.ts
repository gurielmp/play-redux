const initialState = {
  todos: [],
}

const toDoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TO_LIST":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            item: action.payload.item,
          },
        ],
      }

    case "REMOVE_TO_LIST":
      return {
        ...state,
        todos: state.todos.filter((todo: any) => todo.id !== action.payload.id)
      }
    default:
      return state
  }
}


export default toDoReducer