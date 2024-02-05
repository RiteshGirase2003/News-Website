import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card';
import style from './Fetch.module.css';
function Fetch({url}) {

        const [data,setData]=useState([]);

        const fetchingData = async() =>{
            try {
                const response = await axios.get(url);
                console.log(url)
                console.log(response.data.sources);
                // console.log(response.data[0].name)
                setData(response.data.sources);
            } catch (error) {
                console.log("Error fetching data from API: ", error.message);
            }
        }
        const fetchData = async() =>{
            await fetchingData();
        }

        useEffect(()=>{
            setData([]);
            fetchData();

        },[url])
    return (
        <div>
            {
                !data || !data.length ? <h1 className={style.loading}>Loading...</h1> :
                data.map((post) => (
                    // <h1 key={post.id}>{post.name}</h1>
                    <Card postData={post}/>
                ))
            }
        </div>
    )
    }

    export default Fetch