import { ADD_TECH,GET_TECHS,DELETE_TECH,SET_LOADING,TECHS_ERROR} from './types';

// Get Techs from Server
export const getTechs = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch(`${process.env.API_URL}/techs`);
        const data = await res.json();

        dispatch({
            type: GET_TECHS,
            payload : data
        });
    } catch (err) {
        dispatch({
            type:TECHS_ERROR,
            payload : err.response.statusText
        })
    }
}

// Add Tech 
export const addTech = (tech) => async dispatch => {
    try {
        setLoading();

        const res = await fetch(`${process.env.API_URL}/techs`,{
            method : 'POST',
            body : JSON.stringify(tech),
            headers : {
                'Content-Type' : 'application/json'
            }
        });

        const data = await res.json();
        
        dispatch({
            type: ADD_TECH,
            payload : data
        });

    } catch (err) {
        dispatch({
            type:TECHS_ERROR,
            payload : err.response.statusText
        })
    }
}


// Delete Tech 
export const deleteTech = id => async dispatch => {
    try {
        setLoading();

        await fetch(`${process.env.API_URL}/techs/${id}`,{
            method : 'DELETE'
        });

        dispatch({
            type: DELETE_TECH,
            payload : id
        });

    } catch (err) {
        dispatch({
            type:TECHS_ERROR,
            payload : err.response.statusText
        })
    }
}

// Set Loading to True
export const setLoading = () =>{
    return {
        type : SET_LOADING
    }
}


