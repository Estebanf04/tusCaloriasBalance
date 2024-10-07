type CaloriesDisplayProps = {
    calories: number,
    text: string
}

export default function CalorieDisplay({calories, text}: CaloriesDisplayProps) {
  return (
    <>
        <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
                <span 
                className=
                      {`font-black text-6xl 
                        ${text === 'Consumidas' ? 'text-lime-500' 
                          :
                          text === 'Quemadas' ? 'text-orange-500' 
                          : 
                          'text-white'
                          }`}>
                  {calories}
                </span>
                {text}
        </p>
    </>
  )
}
