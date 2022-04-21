import data from "../data/gifs";
const initialState = {
    gifs : data, 
    loading : false,   
    err : ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return(state);
    }
} 

export default reducer;