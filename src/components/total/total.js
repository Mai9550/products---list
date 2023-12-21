import React from 'react';

const Total = (props) => {
    const { items } = props;
    let total = 0;

    for (let i = 0; i < items.length; i++) {
        // Ensure that the price is a valid number before adding it to the total
        const price = parseFloat(items[i].price);
        
        if (!isNaN(price)) {
            total += price;
        }
    }

    return (
        <div>
            <p className="text">Total Price: {total}</p>
        </div>
    );
}

export default Total;