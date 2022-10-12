import React from "react";
import {Link} from 'react-router-dom'
function Links(){
  return(
    <div>
      <Link>
      <Link to="/">Home Page</Link><br />
        <Link to="/about">About Page</Link>
      </Link>
    </div>
  )
}
export default Links