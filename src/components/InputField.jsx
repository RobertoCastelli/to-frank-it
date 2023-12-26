import React, { useContext } from "react"
import { ContextData } from "../context"

export const InputField = () => {
  const {
    text,
    handleChange,
    handleRadio,
    day,
    handleDate,
    addPost,
    recallPost,
  } = useContext(ContextData)

  return (
    <div>
      <div className="main_container">
        <div className="main_radio">
          <div>Author:</div>
          <input
            type="radio"
            value="rob"
            name="author"
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

        <input type="date" value={day} onChange={handleDate} />
        <div className="main_buttons">
          <button onClick={addPost}>FRANK'IT!</button>
          <button onClick={recallPost}>R'CALL</button>
        </div>
      </div>
    </div>
  )
}
