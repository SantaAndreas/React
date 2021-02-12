const listState = {
    cash: 0
};

export const fetchList = (state = listState, action) => {
    switch (action.type) {
        case "ADD":
            return {...state, cash: state.cash + action.payload}
        case "GET":
            return {...state, cash: state.cash - action.payload}
        default:
            return state;
    }
}