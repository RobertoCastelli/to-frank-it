import React, { useContext } from "react"
import { ContextData } from "../context"

export const InputField = () => {
  const { text, handleChange, handleRadio, day, handleDate, addPost } =
    useContext(ContextData)

  return (
    <div>
      <div className="main_container">
        <div className="main_radio">
          <div>Author:</div>
          <input
            type="radio"
            value="rob"
            name="author"
            checked={true}
            onChange={handleRadio}
          />
          <label>Rob</label>
          <input
            type="radio"
            value="frankie"
            name="author"
            onChange={handleRadio}
          />
          <label>Frankie</label>
        </div>
        <input
          placeholder="place a memory"
          onChange={handleChange}
          value={text}
          maxLength={70}
          type="text"
        />
        <div className="main_content">
          <input type="date" value={day} onChange={handleDate} />
          <button onClick={addPost}>FRANK'IT!</button>
        </div>
      </div>
    </div>
  )
}
