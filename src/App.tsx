import { MonthView } from "./month-view"
import { getDaysInMonth } from "./util/date-util"

function App() {

  return (
    <>
    <MonthView 
      month={getDaysInMonth(2023, 8)}
    />
    </>
  )
}

export default App
