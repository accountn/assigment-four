import React from 'react';

const Salary = (props) => {
    const add = props.add;
    console.log(add);
    const total = add.reduce((total, prd) => total + prd.salary, 0);
    return (
        <div>
            <h1>Order summary: </h1>
            <p>Item Order: {add.length}</p>
            <p>Total price : {total}</p>
        </div>
    );
};

export default Salary;