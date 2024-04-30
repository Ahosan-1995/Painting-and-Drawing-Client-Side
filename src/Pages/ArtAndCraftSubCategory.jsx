import { FaHouseUser } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { Tooltip } from 'react-tooltip'
import { Fade, Slide } from "react-awesome-reveal";




const ArtAndCraftSubCategory = () => {

    const myData = useLoaderData();

    return (
        
        <div >
            <div className="flex flex-row items-center justify-center  bg-yellow-300 p-10 text-white">
                
            <Link to='/'><span><a className="my-anchor-element text-3xl "><FaHouseUser /></a></span></Link>

            <h1 className="text-center font-extrabold text-3xl">Art and Craft SubCategory</h1>
            </div>
            <div className="md:grid md:grid-cols-3 flex flex-col p-10">
                            
            {
                myData.map(data=>

            <div key={data._id} className="md: flex md: flex-col">
                <img className="w-60 h-40" src={data.imgURL} alt="" />
                <div>
                    <p>Category: {data.category}</p>
                    <Slide triggerOnce><p>Subcategory: {data.subcategory}</p></Slide>
                </div>
            </div>
            )
            }
            </div>

            <div>
            <a className="my-anchor-element"></a>
            <Tooltip anchorSelect=".my-anchor-element" place="top">
                    You are Now Inside Art and craft sub-category Page!
                    Want to go home page Click here.
            </Tooltip>

            </div>

            
            
        </div>
    );
};

export default ArtAndCraftSubCategory;