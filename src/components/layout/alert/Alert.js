import React, {useContext} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AlertContext from "../../../context/alert/AlertContext";

const Alert = () => {

    // use alert context to access state
    const alertContext = useContext(AlertContext);

    return (
        alertContext.alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <FontAwesomeIcon icon={["fas", "info-circle"]} /> {alertContext.alert.messageTxt}
            </div>
        )
    )
}
export default Alert