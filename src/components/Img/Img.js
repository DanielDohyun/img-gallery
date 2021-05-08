import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Img.css';

function Img() {
    const [imgs, setImgs] = useState([]);

    useEffect(() => {
        const API = 'https://api.unsplash.com/';
        const key = process.env.REACT_APP_KEY;

        axios
            .get(`${API}/photos/random?client_id=${key}&count=10`)
            .then(res => setImgs([...imgs, ...res.data]))
            .catch()
    }, []);
    console.log(imgs[0]?.urls)

    return (
        <div className='gal'>
            {
                imgs.map(img => (
                    <img className='gal__img' src={img.urls?.thumb} key={img.id} alt="img" />
                    )
                )
            }
        </div>
    )
}

export default Img;
