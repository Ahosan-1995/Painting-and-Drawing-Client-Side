import { Link, useLoaderData } from "react-router-dom";


const AllArtAndCraft = () => {
    const myUsers = useLoaderData();

    const {_id,url,itemName,subcategory,description,price,rating,customization,time,stock,email,user,category} = myUsers;
    
    return (
        <div className="p-10">
            <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                        <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Stock</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        {
                            myUsers.map(user=><tr key={user._id}>
                                <td>{user.itemName}</td>
                                <td>{user.price}</td>
                                <td>{user.rating}</td>
                                <td>{user.stock}</td>
                                <Link to={`/details/${user._id}`}><td><button>View Details</button></td></Link>
                            </tr>)
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllArtAndCraft;