import React, { useContext } from "react"
import { ContextData } from "../context"

export const InputField = () => {
  const { text, handleFocus, handleChange, day, handleDate } =
    useContext(ContextData)

  return (
    <div>
      <div className="main_container">
        <input
          placeholder="place a memory"
          onFocus={handleFocus}
          onChange={handleChange}
          value={text}
          maxLength={30}
          type="text"
        />
        <div className="main_content">
          <input type="date" value={day} onChange={handleDate} />
          <button>frank'it!</button>
        </div>
      </div>
    </div>
  )
}
