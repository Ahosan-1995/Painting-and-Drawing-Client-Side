import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { MdCollections, MdOutlineAccessTime } from "react-icons/md";
import { IoPricetagSharp } from "react-icons/io5";
import { FaScrewdriverWrench } from "react-icons/fa6";


const ViewDetails = () => {

    const myUsers = useLoaderData();

    const {_id,url,itemName,subcategory,description,price,rating,customization,time,stock,email,user,category} = myUsers;


    return (
        <div>
            <h1>this is details page</h1>
            <div className="card card-side bg-base-100 shadow-xl m-10">
                <figure><img src={url} alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-extrabold">{itemName}</h2>
                    <h2 className="card-title">{subcategory}</h2>
                    <p>{description}</p>
                    <div className="flex flex-col">
                        <h4 className="flex"><span><FaStar /></span> Rating:{rating}</h4>
                        <h4 className="flex"><span><MdCollections /></span> Stock:{stock}</h4>
                        <h4 className="flex"><span><IoPricetagSharp /></span> Price:{price}</h4>
                        <h4 className="flex"><span><MdOutlineAccessTime /></span> Delivery Time:{time}</h4>
                        <h4 className="flex"><span><FaScrewdriverWrench /></span> Customization:{customization}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;