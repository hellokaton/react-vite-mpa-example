import { useState } from 'react'
import { Link } from "react-router-dom";

import logo from '/src/logo.svg'
import '/src/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React By Admin!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>

        <div>
          <h1>Bookkeeper</h1>
          <nav
              style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
              }}
          >
            <Link to="/admin/invoices">Admin Invoices</Link> |{" "}
            <Link to="/admin/expenses">Admin Expenses</Link>
          </nav>
        </div>

      </header>
    </div>
  )
}

export default App
