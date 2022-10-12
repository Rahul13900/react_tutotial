// fragments are used to handle multilple components and elements
// in one way it is aleternative of div tag

function User(){
  return (
    // <> {/*this is known as fragmenet*/}
    // </>
    <React.Fragment>
      
    </React.Fragment>

    // this is important when we use this componenet in some other table and let's suppose we use this component inside a table <tr>
    // then there will be div tag under <tr> tag which gives error so there we need to use fragment
  )

}