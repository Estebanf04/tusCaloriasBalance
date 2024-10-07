import { useContext } from "react";
import { ActivityContext } from "../context/ActivityContext";

export const useActivity = () => {
    const context = useContext(ActivityContext)
    if(!context){
        throw new Error('The useActivity hook must be use in an ActivityProvider')
    }
    return context
}