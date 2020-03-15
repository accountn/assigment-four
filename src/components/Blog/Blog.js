import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Blog.css';

const Blog = (props) => {
    //console.log(props);
    const {img, name, salary, email, phone} = props.blog;
    return (
        <div className="blog">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="blog-name">
                <h4>Name: {name}</h4>
                <p><small>Anual Slary : {salary}</small></p>
                <p>Email address : {email}</p>
                <p>Phone : {phone}</p>
                <button 
                    className="main-button" 
                    onClick={() => props.handleAddSalary(props.blog)}
                    >
                        <FontAwesomeIcon icon={faPlus} />add to salary
                    </button>
            </div>
            
            
        </div>
    );
};

export default Blog;