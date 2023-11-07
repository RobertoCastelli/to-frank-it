import { ContextProvider } from "./context"
import { Title } from "./components/Title"
import { InputField } from "./components/InputField"
import { Footer } from "./components/Footer"
import { Posts } from "./components/Posts"

function App() {
  return (
    <ContextProvider>
      <div className="container">
        <div className="content">
          <Title />
          <InputField />
          <Posts />
        </div>
        <Footer />
      </div>
    </ContextProvider>
  )
}

export default App
