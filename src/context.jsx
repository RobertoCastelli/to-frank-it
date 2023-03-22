import React, { useEffect, useState } from "react"
import { db } from "./firebaseConfig"
import { collection, getDocs } from "firebase/firestore"

// --- CONTEXT
export const ContextData = React.createContext()

export const ContextProvider = (props) => {
  const today = new Date().toISOString().substring(0, 10)
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
