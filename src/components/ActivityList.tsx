import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline"
import { useActivity } from "../hooks/useActivity"


export default function ActivityList() {

    const { state, dispatch, categoryName} = useActivity()
    
    return (
        <>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-600 text-center my-6"> 
                Comidas y Ejercicios
            </h2>

            {state.activities.length === 0 
            ? 
                <p className="text-center my-5 text-slate-700">Aun no has añadido nada</p> 
            : 
            state.activities.map((activity) => (
                <div key={activity.id} className="px-5 py-10 bg-white mt-5 flex justify-between rounded-md border-e-4 shadow-xl">
                    
                    <div className="space-y-2 relative">
                        <p 
                            className={ `absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold rounded-sm
                                        ${activity.category === 1 ? 'bg-lime-500' : 'bg-orange-500'}`
                                    }>
                            {categoryName(+activity.category)} 
                        </p>
                        <p className="text-2xl font-bold pt-5">
                            {activity.name}
                        </p>
                        <p 
                            className={`font-black text-4xl
                                        ${activity.category === 1 ? 'text-lime-500' : 'text-orange-500'}`
                                    }>
                            {activity.calories} {''}
                            <span className="font-black text-2xl">Calorias</span>
                        </p>
                    </div>

                    <div className="flex gap-5 items-center">
                    <a href="#add">              
                            <button
                                onClick={() => dispatch({type: 'set-activeId', payload: {id: activity.id}})}
                            >
                                <PencilSquareIcon
                                className="h-8 w-8 text-gray-800"
                                
                                />
                            </button>
                        </a>

                        <button
                            onClick={() => dispatch({type: 'delete-activity', payload: {id: activity.id}})}
                        >
                            <XCircleIcon
                            className="h-8 w-8 text-red-500"
                            />
                        </button>
                    </div>
                </div>
            ))}
        </>
    )
}
