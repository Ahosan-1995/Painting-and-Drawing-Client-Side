import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const MyArtAndCraft = () => {

    const loaderData = useLoaderData();

    // console.log(loaderData);

    const [emailCrad, setemailCard] = useState([]);

    const {user}=useContext(AuthContext);
    const email = user?.email;

    // console.log(email);

    // For delete operation
    const [users, setUsers]= useState(loaderData);

    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              
              





            }

            fetch(`http://localhost:5000/assignment/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    console.log('deleted Successfully');
                    // remove user from ui
                    const remainingUsers = emailCrad.filter(emailcard2=emailcard2._id !== id);
                    setemailCard(remainingUsers);
                }
            })


          });




        // Confirmation sweet alert
        // fetch(`http://localhost:5000/assignment/${id}`,{
        //     method:'DELETE'
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     if(data.deletedCount>0){
        //         console.log('deleted Successfully');
        //         // remove user from ui
        //         const remainingUsers = emailCrad.filter(emailcard2=emailcard2._id !== id);
        //         setemailCard(remainingUsers);
        //     }
        // })

    }



    // 



    useEffect(()=>{
        fetch(`http://localhost:5000/assignmentemail/${email}`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setemailCard(data);
            
        })
    },[loaderData, user])

    console.log(emailCrad);




    return (
        <div className="p-10 space-y-5">
            
            {
                emailCrad.map(emailCard1=>

                    <div key={emailCard1._id} className="">
                        <div className="lg:flex flex-row justify-center items-center gap-x-12">
                            <div>
                                <img className="w-60 rounded-lg" src={emailCard1.url} alt="" />
                            </div>
                            <div>
                                <h1 className="">Item Name:{emailCard1.itemName}</h1>
                                <p className="">Pice:{emailCard1.price}</p>
                                <h1 className="">Rating:{emailCard1.rating}</h1>
                                <p className="">Customization:{emailCard1.customization}</p>
                                <p className="">Stock Status:{emailCard1.stock}</p>
                                <div className="flex flex-row gap-x-3">
                                    <Link to={`/update/${emailCard1._id}`}><button className="btn btn-primary">Update</button></Link>
                                    <Link><button onClick={()=>handleDelete(emailCard1._id)} className="btn btn-primary">Delete</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
    
                )
            }
        
        </div>
    );
};

export default MyArtAndCraft;