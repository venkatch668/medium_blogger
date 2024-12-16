
import { useEffect, useState } from "react";
import "./styles.css";

// var name="venkat";
// name="govind";
// // -------------
// let title="building blocks";
// title="reactjs";


// const place="hyderbad";
// place="mumbai";

export default function Product({imgpath, name}){
    const [addedToCart, setAddToCart ] = useState();

    useEffect(()=>{
        console.log("mounting");
        return (()=>{
            console.log("unmounting");
        })
    },[])

    useEffect(()=>{
        if(addedToCart){
            console.log(name + "update");
        }
    },[addedToCart]);

    // const [getter, setter] =useState();
    const appendToCart = () => {
        setAddToCart(name);
    }
    return(
        <div className="product">
            <img src={imgpath}/>
            <p> {name}</p>
            <p> updated state - {addedToCart} </p>
            <button className={"btn btn-primary"} onClick={appendToCart}> Add to cart </button>
        </div>
    )
}