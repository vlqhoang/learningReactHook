import React, {useReducer} from "react";
import alertReducer from "./alertReducer";
import AlertContext from "./AlertContext";

const AlertStateContextProvider = (props) => {

    const initialState = null

    /**
     * On searching for empty value -> set alert state
     * @param messageTxt - error message to be displayed
     * @param type - css style of  the error message
     */
    const setAlert = (messageTxt, type) => {
        dispatch({
            type: "SET_ALERT",
            payload: {messageTxt, type}
        })

        // Alert will be automatically dismissed after 5s
        setTimeout(() => {
            dispatch({
                type: "REMOVE_ALERT"
            })
        }, 3000)
    }

    const [state, dispatch] = useReducer(alertReducer, initialState)

    return <AlertContext.Provider
        value={{
            alert: state,
            setAlert
        }}>
        {props.children}
    </AlertContext.Provider>
}
export default AlertStateContextProvider