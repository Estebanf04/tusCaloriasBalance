import { createContext, Dispatch, ReactNode, useReducer, useMemo } from "react";
import { ActivityActions, activityReducer, ActivityState, initialState } from "../reducers/activity-reducer";
import { categories } from "../data/categories";
import { Activity } from "../types";

type ActivityProviderProps = {
    children: ReactNode
}

type ActivityContextProps = {
    state: ActivityState,
    dispatch: Dispatch<ActivityActions>,
    caloriesConsumed: number,
    caloriesBurned: number,
    caloriesDiferencial: number,
    categoryName: (category: Activity["category"]) => string[]
}

export const ActivityContext = createContext<ActivityContextProps>(null!)

export const ActivityProvider = ({children} : ActivityProviderProps) => {

    const [state, dispatch] = useReducer(activityReducer, initialState)
    
    const caloriesConsumed = useMemo(()=> state.activities.reduce((total, activity) => 
        activity.category === 1 ? total + activity.calories : total, 0), [state.activities])

    const caloriesBurned = useMemo(()=> state.activities.reduce((total, activity) => 
        activity.category === 2 ? total + activity.calories : total, 0), [state.activities])

    const caloriesDiferencial = useMemo(() => caloriesConsumed - caloriesBurned, [state.activities])

    const categoryName = useMemo(() => 
        (category : Activity['category']) => categories.map((cat) => cat.id === category ? cat.name : ''), [state.activities])
    
    return (
        <ActivityContext.Provider value={{
            state,
            dispatch,
            caloriesConsumed,
            caloriesBurned,
            caloriesDiferencial,
            categoryName
        }}>
            {children}
        </ActivityContext.Provider>
    )
}