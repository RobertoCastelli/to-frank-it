import React, { useEffect, useState } from "react"
import clickSound from "./sounds/click.wav"
import deleteSound from "./sounds/delete.wav"
import { db } from "./firebaseConfig"
import {
  doc,
  collection,
  query,
  getDocs,
  addDoc,
  deleteDoc,
  orderBy,
} from "firebase/firestore"

// TODO: random post-it colour
// TODO: date order
// TODO: stroke line on text when done
// TODO: decision YES - NO

// --- CONTEXT
export const ContextData = React.createContext()

export const ContextProvider = (props) => {
  // --- SOUNDS
  const clickAudio = new Audio(clickSound)
  const deleteAudio = new Audio(deleteSound)

  // --- STATES
  const today = new Date().toISOString().substring(0, 10)
  const [text, setText] = useState("")
  const [day, setDay] = useState(today)
  const [radio, setRadio] = useState("Rob")
  const [posts, setPosts] = useState([])

  // --- HANDLES
  const handleChange = (e) => setText(e.target.value)
  const handleDate = (e) => setDay(e.target.value)
  const handleRadio = (e) => setRadio(e.target.value)

  // --- SHOW POSTS
  /*   useEffect(() => {
    setPosts(posts)
  }, [posts]) */

  // --- UPDATE POSTS
  useEffect(() => {
    const getPosts = async () => {
      const q = query(collection(db, "posts"), orderBy("day", "asc"))
      const querySnapshot = await getDocs(q)
      const postArr = []
      querySnapshot.forEach((doc) => {
        postArr.push({ ...doc.data(), id: doc.id })
      })
      setPosts(postArr)
    }
    getPosts()
  }, [])

  // --- ADD POSTS
  const addPost = async (e) => {
    e.preventDefault()
    if (text === "") {
      alert("Insert a valid text")
    } else {
      clickAudio.play()
      const postIt = {
        author: radio,
        day,
        text,
      }
      await addDoc(collection(db, "posts"), postIt)
      setText("")
    }
  }

  // --- DELETE POST
  const deletePost = async (e) => {
    deleteAudio.play()
    await deleteDoc(doc(db, "posts", e))
  }

  // --- RENDER
  return (
    <ContextData.Provider
      value={{
        day,
        text,
        radio,
        posts,
        handleChange,
        handleDate,
        handleRadio,
        addPost,
        deletePost,
      }}
    >
      {props.children}
    </ContextData.Provider>
  )
}
