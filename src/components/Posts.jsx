import React, { useContext } from "react"
import { ContextData } from "../context"
import { FaSkull } from "react-icons/fa"

export const Posts = () => {
  const { posts, deletePost } = useContext(ContextData)
  return (
    <div className="post_it-container">
      <ul className="post_it-ul">
        {posts.map((post) => {
          return (
            <li key={post.id} className="post_it-li">
              <div className="post_it-content">
                <div className="post_it-header">
                  <div>{post.author}</div>
                  <div>{post.day}</div>
                  <div className="post_it-icon">
                    <FaSkull size={20} onClick={() => deletePost(post.id)} />
                  </div>
                </div>
              </div>
              <div className="post_it-text">{post.text}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
