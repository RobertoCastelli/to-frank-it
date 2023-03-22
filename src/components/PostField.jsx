import React from "react"
import { postItArray } from "../database"
import { FaSkullCrossbones } from "react-icons/fa"

export const PostField = () => {
  return (
    <div>
      {postItArray.map((postIt) => {
        return (
          <li key={postIt.id}>
            <div className="post_it-container">
              <div className="post_it-content">
                <div className="post_it-date">{postIt.createdAt}</div>
                <FaSkullCrossbones size={25} />
              </div>
              <div className="post_it-text">{postIt.text}</div>
            </div>
          </li>
        )
      })}
    </div>
  )
}
