import React from "react"
import { Pen } from "lucide-react"
import Button from "./components/atoms/buttons/Button";
const App = () => {
  return (
    <div>
      <Button text="LinkedIn" icon={<Pen />} variant="outline" color="primary" size="md" />
    </div>
  )
}

export default App
