import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Img.css';
import Infinite from 'react-infinite-scroll-component';

function Img() {
    const [imgs, setImgs] = useState([]);

    useEffect(() => {
        fetchImgs();
    }, []);

    const fetchImgs = () => {
        const API = 'https://api.unsplash.com/';
        const key = process.env.REACT_APP_KEY;

        axios
            .get(`${API}/photos/random?client_id=${key}&count=10`)
            .then(res => setImgs([...imgs, ...res.data]))
            .catch(e => console.log(e))
    }

    return (
        <Infinite
            dataLength={imgs.length}
            next={fetchImgs}
            hasMore={true}
        >
            <div className='gal'>
                {
                    imgs.map(img => (
                        <div key={img.id} className='gal__container'>
                            <img className='gal__img' src={img.urls?.thumb} key={img.id} alt="img" />
                            <div className='gal__desc'>
                                <p>{img.alt_description ? img.alt_description : img.description}</p>
                            </div>
                        </div>
                        )
                    )
                }
            </div>
        </Infinite>    
    )
}

export default Img;
