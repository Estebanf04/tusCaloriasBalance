import Form from "./components/Form"
import {useEffect} from "react"
import ActivityList from "./components/ActivityList"
import CalorieTracker from "./components/CalorieTracker"
import Footer from "./components/Footer"
import { useActivity } from "./hooks/useActivity"

function App() {

  const { state } = useActivity()

  useEffect(()=>{
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])

  // const canRestartApp = () => useMemo(() => state.activities.length >= 1,[state.activities])

  return (
    <>
      <header id="add" className="bg-gray-900 py-6 px-5">
        <div className="max-w-3xl mx-auto text-center items-center">
            <a href="index.html">
                <img className="mx-auto max-w-64" src="/tusCalorias.png" alt="imagen logo" />
            </a>
        </div>
      </header>

      <section className="bg-gray-50 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form/>
        </div>
      </section>

      <section className="bg-gray-900 py-10">
        <div className="max-w-4xl mx-auto">
          <CalorieTracker/>
        </div>
      </section>

      <section className="p-10 mb-5 mx-auto max-w-4xl">
         <ActivityList/>
      </section>

      <footer id="activities" className="bg-gray-900 py-3 px-5">
          <Footer/>
      </footer>
    </>
  )
}

export default App
