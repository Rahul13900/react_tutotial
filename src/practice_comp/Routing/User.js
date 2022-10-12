import React, { BrowserRouter as Router, Route, Link,Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Page404 from "./PageNotFound"
import Links from "./Links"

function User() {
  return (
    <div>
      {/* <h2>This User Page to Connect Different Components</h2> */}
      <Links />
        <Routes>
          <Route path='/about'  element={<About />}/>
          <Route path='*' element={<Page404 />} />
          <Route path='/' exact= "true" element={<Home />}/>
        </Routes>
    </div>
  )
}
export default User