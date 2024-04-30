import toast from "react-hot-toast";
import Swal from 'sweetalert2'

const AddArtAndCraft = () => {

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
        const email = form.email.value;
        const user = form.user.value;
        const category = form.category.value;

        const allData={url,itemName,subcategory,description,price,rating,customization,time,stock,email,user,category}

        console.log(allData);
        // sent data to server
        fetch('https://assignment-10-server-side-pied.vercel.app/add',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(allData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                // toast('Data added successfully to the database');
                Swal.fire({
                    title: 'Success',
                    text: 'User Added Successfully',
                    icon: 'Success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
        
    }
    return (
        <div className='p-4'>
            <form onSubmit={handleSubmit}>
                
            <div className=' m-12 mb-6 text-center'>
                <h1 className='text-2xl font-black text-blue-950'>Please Fill This From Carefully and Submit Necessary Information</h1>
                <hr />
            </div>

            <div className=' mb-3 space-x-5 text-center'>
                <input type="text" name='url' placeholder="Insert Image URL" className="p-1 w-5/12  border border-black rounded-md" />
                <input type="text" name='itemName' placeholder="Insert Item Name" className="p-1 w-5/12  border border-black rounded-md" />
            </div>
            <div className=' mb-3 space-x-5 text-center'>
                <input type="text" name='subcategory' placeholder="Insert Subcategory-Name" className=" p-1 w-5/12  border border-black rounded-md" />
                <input type="text" name='description' placeholder="Insert Short Description" className=" p-1 w-5/12  border border-black rounded-md" />
            </div>
            <div className=' mb-3 space-x-5 text-center'>
                <input type="text" name='price' placeholder="Insert Price" className=" p-1 w-5/12  border border-black rounded-md" />
                <input type="text" name='rating' placeholder="Insert Rating" className=" p-1 w-5/12  border border-black rounded-md" />
            </div>
            <div className=' mb-3 space-x-5 text-center'>
                <input type="text" name='customization' placeholder="Insert Customization-YES/NO" className=" p-1 w-5/12  border border-black rounded-md" />
                <input type="text" name='time' placeholder="Insert Processing Time" className=" p-1 w-5/12  border border-black rounded-md" />
            </div>
            <div className=' mb-3 space-x-5 text-center'>
                <input type="text" name='stock' placeholder="Insert Stock Status ex: In stock" className=" p-1 w-5/12  border border-black rounded-md" />
                <input type="text" name='email' placeholder="Insert User Email" className=" p-1 w-5/12  border border-black rounded-md" />
            </div>
            <div className=' mb-3 space-x-5 text-center'>
                <input type="text" name='user' placeholder="Insert User Name" className=" p-1 w-5/12  border border-black rounded-md" />
                <input type="text" name='category' placeholder="Insert Category" className=" p-1 w-5/12  border border-black rounded-md" />
            </div>
            <div className='m-12 mb-3 space-x-5 text-center'>
                <button className='btn w-full bg-blue-950 text-white'>ADD ITEMS</button>
            </div>





            </form>
        
            
        </div>
    );
};

export default AddArtAndCraft;