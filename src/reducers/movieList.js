function movieList(state,action) {
    if(state === undefined){
        state = {data:[]}
    }
    switch (action.type){
        case "MOVIEDATA": 
            return {
                ...state,
                data: action.dataPayload
            }
        default:
            return state
    }
}

export default movieList