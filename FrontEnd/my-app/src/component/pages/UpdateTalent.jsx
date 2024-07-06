import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


const UpdateTalent = ({talent,update}) => {
    { console.log(talent) }
    const navigate = useNavigate();

    const [title, setTitle] = useState(talent.title)
    const [description, setDescription] = useState(talent.description)
    const [imageUrl, setImageUrl] = useState(talent.imageUrl)
    const [price, setPrice] = useState(talent.price)
    const [category, setCategory] = useState(talent.category)
    const [rating, setRating] = useState(talent.rating)
    const [delivery,setDelivery]=useState(talent.delivery)
    const [file, setFile] = useState('')
    const [loading, setLoading] = useState(false)
    const [res, setRes] = useState({})
    

    console.log(imageUrl)

    const uploadImage = async () => {
        const form = new FormData()
        form.append('file', file)
        form.append("upload_preset", "lobnasm");
        try {
            await axios.post("https://api.cloudinary.com/v1_1/dzhteldwd/upload", form).then((result) => {
                console.log(result.data.secure_url)
                setImageUrl(result.data.secure_url)
            })
        } catch (error) {
            console.log(error)
        }

    }
    const handleUpload = async () => {
        try {
            setLoading(true)
            const data = new FormData()
            data.append("my_file", file)
            const res = await axios.post("http://127.0.0.1:5000/api/talents/upload", data)
            setRes(res.data);
            setImageUrl(res.data.secure_url)
            console.log(res.data.secure_url)
        } catch (error) {
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='flex flex-col'>
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg ">
                <div class="mb-4">
                    <label for="image" className="block text-gray-700 text-sm font-bold mb-2">Upload Image:</label>
                    <img src={imageUrl} className='w-14 mt-6'/>
                    <input type="file"  className="outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setFile(e.target.files[0])} />
                    <br />
                    <button class=" ml-28 mt-8 bg-[#108a00] hover:bg-[#3d9731] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => { handleUpload() }}>upload!</button>
                </div>
                <div class="mb-4">
                    <div class="relative">
                        <label for="name" className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
                        <input type="text" className=" outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder=" Your Title" value={title}
                            onChange={(e) => { setTitle(e.target.value) }} />
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <i class="fas fa-user text-gray-400"></i>
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="relative">
                        <label for="name" className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
                        <textarea type="text" className=" outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder=" Your Description" value={description}
                            onChange={(e) => { setDescription(e.target.value) }} />
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <i class="fas fa-user text-gray-400"></i>
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="relative">
                        <label for="name" className="block text-gray-700 text-sm font-bold mb-2">Price:</label>
                        <input type="text" className=" outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder=" Your Price" value={price} onChange={(e) => {
                            setPrice(e.target.value)
                        }} />
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <i class="fas fa-user text-gray-400"></i>
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="relative">
                        <label for="name" className="block text-gray-700 text-sm font-bold mb-2">Category:</label>
                        <input type="text" className=" outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder=" Your Category" value={category} onChange={(e) => {
                            setCategory(e.target.value)
                        }} />
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <i class="fas fa-user text-gray-400"></i>
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="relative">
                        <label for="name" className="block text-gray-700 text-sm font-bold mb-2">Rating:</label>
                        <input type="text" className=" outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Rating" value={rating}
                            onChange={(e) => { setRating(e.target.value) }}
                        />
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <i class="fas fa-user text-gray-400"></i>
                        </div>
                    </div>
                </div>

                <div class="mb-4">
                    <div class="relative">
                        <label for="name" className="block text-gray-700 text-sm font-bold mb-2">Delivery:</label>
                        <input type="text" className=" outline-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        placeholder="Your Delivery" value={delivery}
                            onChange={(e) => { setDelivery(e.target.value) }}
                        />
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <i class="fas fa-user text-gray-400"></i>
                        </div>
                    </div>
                </div>

                <button class=" ml-28 mt-8 bg-[#108a00] hover:bg-[#3d9731] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value="submit" onClick={() => {
                    update(talent.id,{
                        title: title,
                        description: description,
                        imageUrl: imageUrl,
                        price: price,
                        category: category,
                        rating: rating,
                        delivery:delivery,
                        freelancer_id: "1"
                    },navigate('/alltalent'))
                }}>Update</button>
            </div>


        </div>
    )
}

export default UpdateTalent