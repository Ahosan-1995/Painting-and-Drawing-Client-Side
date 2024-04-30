import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";


const MyArtAndCraft = () => {

    const {user}=useContext(AuthContext);
    const email = user.email;

    console.log(email);



    // useEffect(()=>{
    //     fetch(`http://localhost:5000/assignment/${user?.email}`)
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //     })
    // },[user])


    return (
        <div className="p-10">
            <h1>This is my art and craft page</h1>
    
            <div className="lg:flex flex-row justify-center items-center gap-x-12 bg-base-300">
                <div>
                    <img className="w-60 rounded-lg" src="" alt="" />
                </div>
                <div>
                    <h1 className="">Item Name:</h1>
                    <p className="">Pice:</p>
                    <h1 className="">Rating:</h1>
                    <p className="">Customization:</p>
                    <p className="">Stock Status:</p>
                    <div className="flex flex-row gap-x-3">
                        <Link to='/update'><button className="btn btn-primary">Update</button></Link>
                        <Link><button className="btn btn-primary">Delete</button></Link>
                    </div>
                </div>
            </div>
        
        </div>
    );
};

export default MyArtAndCraft;