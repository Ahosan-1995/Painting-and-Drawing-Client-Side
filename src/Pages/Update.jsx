import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const myUsers = useLoaderData();

    const {_id,url,itemName,subcategory,description,price,rating,customization,time,stock,category} = myUsers;

    const handleSubmit =(e)=>{
        e.preventDefault();
        const form = e.target;
        const url = form.url.value;
        const itemName = form.itemName.value;
        const subcategory =form.subcategory.value;
        const description =form.description.value;
        const price =form.price.value;
        const rating =form.rating.value;
        const customization =form.customization.value;
        const time = form.time.value;
        const stock = form.stock.value;
        const category = form.category.value;

        const allData={url,itemName,subcategory,description,price,rating,customization,time,stock,category}

        // console.log(allData);
        // sent data to server
        fetch(`https://assignment-10-server-side-pied.vercel.app/assignment/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(allData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount){
                // toast('Data added successfully to the database');
                Swal.fire({
                    title: 'Success',
                    text: 'Data Information Updated Successfully',
                    icon: 'Success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
        
    }

    return (
        <div className='p-4'>
            <form onSubmit={handleSubmit} className="">
                <div className='m-12 mb-6 text-center'>
                    <h1 className='text-2xl font-black text-blue-950'>Please Fill This From Carefully and Submit Necessary Information</h1>
                    <hr />
                </div>

                <div className="mx-auto ml-10">
                <div className=''>
                    <span className="flex flex-col items-start">URL: <input type="text" name='url' defaultValue={url} placeholder="Insert Image URL" className="p-1 w-5/12  border border-black rounded-md"/></span>
                    
                    <span className="flex flex-col items-start">Item Name: <input type="text" name='itemName' defaultValue={itemName} placeholder="Insert Item Name" className="p-1 w-5/12  border border-black rounded-md" /></span>
                </div>
                <div className=''>
                    <span className="flex flex-col items-start">Subcategory:<input type="text" name='subcategory' defaultValue={subcategory} placeholder="Insert Subcategory-Name" className=" p-1 w-5/12  border border-black rounded-md" /></span>
                    <span className="flex flex-col items-start">Description:<input type="text" name='description' defaultValue={description} placeholder="Insert Short Description" className=" p-1 w-5/12  border border-black rounded-md" /></span>
                </div>
                <div className=''>
                    <span className="flex flex-col items-start">Price:<input type="text" name='price' defaultValue={price} placeholder="Insert Price" className=" p-1 w-5/12  border border-black rounded-md" /></span>
                    <span className="flex flex-col items-start">Rating:<input type="text" name='rating' defaultValue={price} placeholder="Insert Rating" className=" p-1 w-5/12  border border-black rounded-md" /></span>
                </div>
                <div className=''>
                    <span className="flex flex-col items-start">Customization:<input type="text" name='customization' defaultValue={customization} placeholder="Insert Customization-YES/NO" className=" p-1 w-5/12  border border-black rounded-md" /></span>
                    <span className="flex flex-col items-start">Processing time:<input type="text" name='time' defaultValue={time} placeholder="Insert Processing Time" className=" p-1 w-5/12  border border-black rounded-md" /></span>
                </div>
                <div className=''>
                    <span className="flex flex-col items-start">Stock:<input type="text" name='stock' defaultValue={stock} placeholder="Stock Status:ex: In stock" className=" p-1 w-5/12  border border-black rounded-md" /></span>
                    <span className="flex flex-col items-start">Category:<input type="text" name='category' defaultValue={category} placeholder="Insert Category" className=" p-1 w-5/12  border border-black rounded-md" /></span>
                </div>
                </div>

                <div className='m-12 mb-3 space-x-5 text-center'>
                    <button className='btn w-full bg-blue-950 text-white'>UPDATE</button>
                </div>
            </form>
            
        
            
        </div>
    );
};

export default Update;