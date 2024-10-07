import CalorieDisplay from "./CalorieDisplay"
import { useActivity } from "../hooks/useActivity"


export default function CalorieTracker() {

    const { caloriesConsumed, caloriesBurned, caloriesDiferencial } = useActivity()

    return (
    <>
        <h2 className="text-3xl sm:text-4xl font-black text-white text-center">Resumen de Calorias</h2>

        <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
            <CalorieDisplay
            calories={caloriesConsumed}
            text="Consumidas"
            />

            <CalorieDisplay
            calories={caloriesBurned}
            text="Quemadas"
            />

            <CalorieDisplay
            calories={caloriesDiferencial}
            text="Diferencial"
            />
        </div>
    </>
  )
}
