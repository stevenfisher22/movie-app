const initialState = {
    data: []
};

function movieList(state, action) {
    if(state === undefined){
        state = initialState;
    }
    switch (action.type){
        case "MOVIEDATA": 
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}

export default movieList