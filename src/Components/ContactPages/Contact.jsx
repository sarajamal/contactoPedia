const Contact =(props)=>{
    return(
        <div className="row p-md-2 mb-2" 
        style={{borderRadius:"20px", border:"1px solid #555"}}>
            <div className="col-2 col-md-1 pt-2 ">
                <img src={`https://ui-avatars.com/api/?name=${props.obj.name}`}
               style={{width:"100%"}}  
                alt="">
                </img>
            </div>
            <div className="col-6 col-md-5 text-warning pt-0">
                <span className="h4">{props.obj.name}</span>
                <br/>
                <div className="text-white-50">
                {props.obj.email}
                <br/>
                {props.obj.phone}
                </div>
            </div>
            <div className="col-2 col-md-2 pt-md-3">
                <button className={`btn btn-sm m-1 ${
                    props.obj.isFavoriteList?"btn-warning" : "btn-outline-warning"
                }`}
                onClick= { ()=> props.favoriteClick(props.obj)}
                >
                     <i className="bi bi-star-fill" style={{fontSize:"1rem"}}></i>
                </button>
            </div>
            <div className="col-2 col-md-3 pt-md-3">
               <button className="btn btn-primary btn-sm m-1">
               <i className="bi bi-pencil-square" 
               onClick ={()=> props.updateClick(props.obj)} style={{fontSize:"1rem"}}></i>
             </button>
             <button className="btn btn-danger btn-sm m-1">
    <i className="bi bi-trash-fill" style={{fontSize:"1rem"}}
        onClick={() => props.deleteContact(props.obj.id)}>
    </i>
</button>
            </div>
           
        </div>
    )
}

export default Contact;