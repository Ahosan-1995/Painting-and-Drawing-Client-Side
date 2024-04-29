import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";


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
        <div>
            <h1>This is my art and craft page</h1>
        </div>
    );
};

export default MyArtAndCraft;