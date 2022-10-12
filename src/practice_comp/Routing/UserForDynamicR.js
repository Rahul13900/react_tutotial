import {withRouter} from 'react-router-dom'
function User(){
  return(
    <div>
      <h1>User Component</h1>
    </div>
  )
}
export default withRouter(User) // withRouter has been removed from the latest version of the react;