import React, { useState } from "react"

// --- CONTEXT
export const ContextData = React.createContext()

export const ContextProvider = (props) => {
  const today = new Date().toLocaleDateString("en-CA")
  const [text, setText] = useState("")
  const [day, setDay] = useState(today)

  const handleFocus = (e) => (e.target.value = "")
  const handleChange = (e) => setText(e.target.value)
  const handleDate = (e) => setDay(e.target.value)

  return (
    <ContextData.Provider
      value={{ text, setText, handleFocus, handleChange, day, handleDate }}
    >
      {props.children}
    </ContextData.Provider>
  )
}
