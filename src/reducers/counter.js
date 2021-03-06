const initState = {
  count: 0,
};

export default function counterReducer(state = initState, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        count: state.count + (action.num ?? 1),
      };

    case "MINUS":
      return {
        ...state,
        count: state.count - (action.num ?? 1),
      };

    default:
      return state;
  }
}
