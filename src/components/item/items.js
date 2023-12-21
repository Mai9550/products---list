import React from 'react';

const Items = (props) => {
    const {items, del,add} = props;
    let length = items.length
    const ListItem = length ? (
        items.map(item => {
            return(
                <div key={item.id} className="item">

                    <p  ><button onClick={()=>add(item.id)}>+</button><button onClick={()=>del(item.id)}>-</button></p>
                    
                    <p>{item.product}</p>
                    <p>{item.price}</p>
                    <p className="delete" onClick={() => del(item.id)}>&times;</p>
                    
                </div>
            )
        })
    ) : (
        <div className="text">There are no items, Try to add some.</div>
    )
    return (
        <div>
            <div className="header item">
                <p>quantity</p>
                
                <p>Product</p>
                <p>Price</p>
                
                <p>Edit</p>
                
            </div>
           
            {ListItem}
        </div>
    )
}

export default Items