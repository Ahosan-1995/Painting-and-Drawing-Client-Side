import { Link } from "react-router-dom";


const CraftItem = ({myUser}) => {
    const {_id,url,itemName,subcategory,description,price,rating,customization,time,stock,email,user,category} = myUser;
    return (
        <div>
            <div className="lg:flex flex-row justify-center items-center gap-x-12 bg-base-300">
                <div>
                    <img className="w-60 rounded-lg" src={url} alt="" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">{itemName}</h1>
                    <h1 className="text-xl font-bold">{subcategory}</h1>
                    <p className="py-6">{description}</p>
                    <Link to={`/details/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CraftItem;