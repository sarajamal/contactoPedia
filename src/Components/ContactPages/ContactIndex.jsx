import React from "react";
import Footer from "../Layout/Footer";
import AddRandomContact from "./AddRandomContact";
import DeleteAllContact from "./DeleteAllContact";
import AddContact from "./AddContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import Header from "../Layout/Header";

class ContactIndex extends React.Component{

    constructor(props){
        super(props);
        this.state={
            contactList:[
                {
               id:1,
               name:"Ben Parker",
               email:"ben@gmail.com",
               phone:"666-666-7770" ,
               isFavoriteList:false
            },
            {
                id:2,
                name:"Kathy Patrick",
                email:"Kath@gmail.com",
                phone:"111-222-0000" ,
                isFavoriteList:true
             },
             {
                id:3,
                name:"Paul show",
                email:"Paul@gmail.com",
                phone:"999-666-11111" ,
                isFavoriteList:true
             },
        ],
        selectedContact:undefined,
        isUpdating:false,
      };
    }

    handleAddContact = (newContact) => {
        if (!newContact.name) {
            return { status: "failure", msg: "Please enter a valid name" };
        } else if (!newContact.email) {
            return { status: "failure", msg: "Please enter a valid email" };
        }
    
        // استخدم this.state.contactList للوصول إلى القائمة الحالية
        const duplicateRecords = this.state.contactList.filter((s) => {
            return s.name === newContact.name || s.phone === newContact.phone;
        });
    
        if (duplicateRecords.length > 0) {
            return { status: "failure", msg: "Duplicate record" };
        } else {
            const newId = this.state.contactList.length > 0
                ? this.state.contactList[this.state.contactList.length - 1].id + 1
                : 1;
    
            const newFinalContact = {
                ...newContact,
                id: newId,
                isFavoriteList: false,
            };
    
            this.setState((prevState) => ({
                contactList: [...prevState.contactList, newFinalContact],
            }));
    
            return { status: "success", msg: "Contact was added successfully" };
        }
    };
    handleUpdateContact = (updatedContact) => {
        console.log(updatedContact);
        if (!updatedContact.name) {
            return { status: "failure", msg: "Please enter a valid name" };
        } else if (!updatedContact.email) {
            return { status: "failure", msg: "Please enter a valid email" };
        }
           
            this.setState((prevState) => ({
                contactList:prevState.contactList.map((obj)=>{
                    if(obj.id===updatedContact.id){
                        return{
                          ...obj,
                          name:updatedContact.name,
                          email:updatedContact.email,
                          phone:updatedContact.phone,
                        };
                    }
                    return obj;
                }),
                selectedContact:undefined,
                isUpdating:false,
            }));
    
            return { status: "success", msg: "Contact was updated successfully" };
    };

handleToggleFavorite = (contact)=>{
this.setState((prevState) =>{
    return {
        contactList : prevState.contactList.map((obj) =>{
            if(obj.id === contact.id){
                return { ...obj , isFavoriteList: !obj.isFavoriteList}
               
                }
                return obj;
        })
    }
}) 
}

handleToggleDelete = (contactId)=>{
    this.setState((prevState) =>{
        return {
            contactList : prevState.contactList.filter((obj) =>{
               return obj.id !== contactId;
            })
        }
    }) 
    }

    handleAddRandomContact = (newContact)=>{
const newFinalContact ={
    ...newContact ,
    id:this.state.contactList[this.state.contactList.length - 1].id + 1,
    isFavoriteList:false,
}
this.setState((prevState) => ({
    contactList: [...prevState.contactList, newFinalContact],
}));
}
handleRemoveAllContact= ()=>{
    
    this.setState((prevState) => ({
        contactList: [],
    }));
    }

handleUpdateClick=(contact) =>{
    console.log(contact);

this.setState((prevState)=>{
    return {
        selectedContact:contact,
        isUpdating:true,
    }
})
}
handleCancleUpdateClick=(contact) =>{
    console.log(contact);

this.setState((prevState)=>{
    return {
        selectedContact:undefined,
        isUpdating:false,
    }
})
}
    render(){
        return(
            <div>
               <Header></Header>
                <div className="container" style={{maxHeight:"85vh"}}>
                    <div className="row py-3">
                        <div className="col-4 offset-2 row">
                            <AddRandomContact
                             handleAddRandomContact={this.handleAddRandomContact}/>
                        </div>
                        <div className="col-4 row">
                            <DeleteAllContact handleRemoveAllContact={this.handleRemoveAllContact}/>
                        </div>
                        <div className="row py-2"> 
                            <div className="col-8 offset-2 row">
                           <AddContact 
                           handleAddContact={this.handleAddContact}
                           isUpdating={this.state.isUpdating}
                           selectedContact={this.state.selectedContact}
                           cancelUpdateContact={this.handleCancleUpdateClick}
                           handleUpdateContact={this.handleUpdateContact}/>
                           </div>
                        </div>
                        <div className="row py-2"> 
                        <div className="col-8 offset-2 row">
                        <FavoriteContacts 
                      contacts={this.state.contactList.filter((u) => u.isFavoriteList === true)}
                      favoriteClick={this.handleToggleFavorite}
                      deleteContact={this.handleToggleDelete} // التأكد من تمريره هنا
                      updateClick={this.handleUpdateClick}
                        />
                        </div>
                        </div>
                        <div className="row py-2"> 
                        <div className="col-8 offset-2 row">
                        <GeneralContacts 
                    contacts={this.state.contactList.filter((u) => u.isFavoriteList === false)}
                    favoriteClick={this.handleToggleFavorite}
                    deleteContact={this.handleToggleDelete} // التأكد من تمريره هنا
                    updateClick={this.handleUpdateClick}
                       />

                        </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default ContactIndex;