
const DeleteAllContact = (props)=>{
    return(
        <div  >
        <button className="btn btn-danger form-control" 
        onClick={()=> props.handleRemoveAllContact()}>Remove All</button>
        </div>
    )
}

export default DeleteAllContact;