import React, { useContext } from "react"
import { ContextData } from "../context"

export const PostIt = () => {
  const { text } = useContext(ContextData)

  return <div>{text}</div>
}
