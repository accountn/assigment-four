import React from 'react';
import  { useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import './Home.css';
import Blog from '../Blog/Blog';
import Salary from '../Salary/Salary';

const Home = () => {
    const first14 = fakeData.slice(0,14);
    const[informs, setInforms] = useState(first14);
    const [add, setAdd] = useState([]);

    const handleAddSalary = (blog) =>{
        const newAdd = [...add, blog];
        setAdd(newAdd);
    }
    return (
        <div className="home-container">
            <div className="product-container">
                    {
                        informs.map(info => <Blog 
                            handleAddSalary = {handleAddSalary}
                            blog={info}
                            ></Blog>)
                    }
            </div>
            <div className="cart-container">
                <Salary add={add}></Salary>
                
            </div>
            
            
            
        </div>
    );
};

export default Home;