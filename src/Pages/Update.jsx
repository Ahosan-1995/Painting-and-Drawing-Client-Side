

const Update = () => {
    return (
        <div className='p-4'>
            <div className='m-12 mb-6 text-center'>
                <h1 className='text-2xl font-black text-blue-950'>Please Fill This From Carefully and Submit Necessary Information</h1>
                <hr />
            </div>

            <div className='mb-3 space-x-5 text-center'>
                <input type="text" name='url' placeholder="Insert Image URL" className="p-1 w-5/12  border border-black rounded-md" />
                <input type="text" name='itemName' placeholder="Insert Item Name" className="p-1 w-5/12  border border-black rounded-md" />
            </div>
            <div className='mb-3 space-x-5 text-center'>
                <input type="text" name='subcategory' placeholder="Insert Subcategory-Name" className=" p-1 w-5/12  border border-black rounded-md" />
                <input type="text" name='Description' placeholder="Insert Short Description" className=" p-1 w-5/12  border border-black rounded-md" />
            </div>
            <div className='mb-3 space-x-5 text-center'>
                <input type="text" name='price' placeholder="Insert Price" className=" p-1 w-5/12  border border-black rounded-md" />
                <input type="text" name='rating' placeholder="Insert Rating" className=" p-1 w-5/12  border border-black rounded-md" />
            </div>
            <div className='mb-3 space-x-5 text-center'>
                <input type="text" name='customization' placeholder="Insert Customization-YES/NO" className=" p-1 w-5/12  border border-black rounded-md" />
                <input type="text" name='time' placeholder="Insert Processing Time" className=" p-1 w-5/12  border border-black rounded-md" />
            </div>
            <div className='mb-3 space-x-5 text-center'>
                <input type="text" name='stock' placeholder="Stock Status:ex: In stock" className=" p-1 w-5/12  border border-black rounded-md" />
                <input type="text" name='category' placeholder="Insert Category" className=" p-1 w-5/12  border border-black rounded-md" />
            </div>
            <div className='m-12 mb-3 space-x-5 text-center'>
                <button className='btn w-full bg-blue-950 text-white'>UPDATE</button>
            </div>
        
            
        </div>
    );
};

export default Update;