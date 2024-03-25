/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

function Home() {

    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState();
    const [posts, setPosts] = useState([]);

    async function fetchProducData() {
        setLoading(true);
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            console.log(data);
            setPosts(data);

        } catch (error) {
            console.log("Error: ", error);
            setPosts([]);

        }
        setLoading(false);
    }

    useEffect(() => {
        fetchProducData();
    }, []);

    return (
        <div>
            {
                loading
                    ? (<Spinner />)
                    : (posts.length === 0)
                        ? (
                            <div className='flex justify-center items-center'>
                                <p className='font-semibold mt-10 text-xl'>No Data Found</p>
                            </div>)
                        : (
                            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl space-y-10 space-x-5 min-h-[80vh] mb-10 sm:mr-5 md:mr-5 lg:mx-auto mr-5'>
                                {
                                    posts.map((post) => (
                                        <Product key={post.id} post={post} />
                                    ))
                                }
                            </div>
                        )

            }
        </div>
    )
}

export default Home
