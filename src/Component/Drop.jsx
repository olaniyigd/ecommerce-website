import styled from 'styled-components';
import { FiMenu } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BsFillHeartFill } from "react-icons/bs";
import React, { useState } from 'react';
export default function Drop (){
    const [now, setNow] = useState (false)
    const Drops = ['Men Wears ', 'Women Wears', 'Laptop', 'Iphone']
    return(
        <Wrapper>
            <div className='drop'>
                <div onClick={()=> setNow (!now)} className='category'>
                    <div className='menu'><FiMenu/> </div>
                    <p className='cate-text'>categories</p>
                    <div className='down'> <FiChevronDown /> </div>
                    {
                        now &&
                        <div className='menu-drop'>
                        {
                                    Drops.map((drop)=>(
                                        <li key={drop}>
                                            {drop}
                                        </li>
                                    ))
                                }
                        </div>
                    }
                </div>
                <ul>
                    <li className='home'>Home</li>
                    <li>Shop</li>
                    <li>Shop Detail</li>
                    <div className='pg'>
                    <li className='page'>Pages <FiChevronDown /></li>
                    <div className='check'>
                    <li>Shopping Cart</li>
                    <li>Checkout</li>
                    </div>
                    </div>
                    <li>Contact</li>
                </ul>
                <div className='icon'>
                    <div><BsFillCartCheckFill/></div>
                    <div><BsFillHeartFill /></div>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .drop{
        background-color:rgb(31, 28, 28);
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .drop ul{
        list-style: none;
        display: flex;
        gap: 15px;
        color: white;
        margin-right: 500px;
    }
    .drop ul li{
        cursor: pointer;
    }
    .drop ul li:hover{
        color: rgb(194, 194, 7);
    }
    .category{
        background-color: rgb(194, 194, 7);
        padding: 18px 5px;
        display: flex;
        cursor: pointer;
        position: relative;
    }
    .cate-text{
        font-size: 20px;
    }
    .down{
        margin-left: 100px;
        padding-top: 8px;
    }
    .menu{
        margin-right: 3px;
        padding-top: 7px;
    }
    .icon{
        color:rgb(194, 194, 7);
        display: flex;
        gap: 20px;
    }
    .menu-drop{
    position: absolute;
    margin-top: 50px;
    list-style: none;
    background-color: rgb(224, 222, 222);
    width: 235px;
    border: 1px solid rgb(224, 222, 222);
    padding: 20px;
    }
    .menu-drop li{
        padding: 15px;
        color: rgb(105, 103, 103);
    }
    .menu-drop li:hover{
        color: black;
        transition: 0.9s;
        border-bottom: 1px solid black;
        border-top: 1px solid black;
    }
    .pg{
        position: relative;
    }
    .check{
        position:absolute;
        display: none;
        margin-top: 2px;
        padding: 10px;
        width: 150px;
        background-color: white;
        border: 1px solid rgb(224, 222, 222);
    }
    .check li{
        color: black;
        padding: 10px;
    }
    .pg:hover .check{
        display: block;
    }
    .home{
        color: rgb(194, 194, 7);
    }
    @media screen and (max-width:900px){
        .drop{
            display: none;
        }
    }

`