import styled from 'styled-components';
import { BsFillCaretDownFill } from "react-icons/bs";
import { BsFillHeartFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import React, { useState } from 'react';

export default function Top (){
    const [open, setOpen] = useState (false)
    const Menus = ['Sign Up', 'Sign In']
    return(
        <Wrapper>
            <div className='top'>
                <ul className='top-left'>
                    <li className='nav-link'>About</li>
                    <li className='nav-link'>Contact</li>
                    <li className='nav-link'>Help</li>
                    <li className='nav-link'>FAQs</li>
                </ul>
                <ul className='top-right'>
                    <li className='nav-link'>
                        <button onClick={()=>setOpen(!open )}> My Account  <BsFillCaretDownFill/> </button>
                        {
                            open &&
                            <div className="drop-down">
                            {
                                Menus.map((menu)=>(
                                    <li key={menu}>
                                        {menu}
                                    </li>
                                ))
                            }
                        </div>
                        }
                        
                    </li>
                    <select name='currency' id='currency'>
                        <option value='USD'>USD</option>
                        <option value='EUR'>EUR</option>
                        <option value='EUR'>NAR</option>
                        <option value='GBP'>GBP</option>
                        <option value='CAD'>CAD</option>
                    </select>
                    <select name='lang' id='lang'>
                        <option value='EN'>EN</option>
                        <option value='FR'>FR</option>
                        <option value='AR'>AR</option>
                        <option value='RU'>RU</option>
                    </select>
                </ul>
                <div className='like'>
                    <div className='innerlike'>
                        <div className='love'><BsFillHeartFill/></div>
                        <div className='cart'><BsFillCartCheckFill/></div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper= styled.div`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.top{
    display: flex;
    justify-content: space-between;
    background-color: rgb(224, 222, 222);
    width: 100%;
    padding: 0 20px;
}
.nav-link{
    display: inline-block;
    margin-left: 30px;
}
.top-left{
    list-style-type: none;
}
.top-left li{
    margin-bottom: 0;
    cursor: pointer;
}
.top-left li:hover{
    border-bottom: 1px solid black;
}
.top-right{
    display: flex;
    gap: 25px;
    list-style: none;
}
.top-right button{
    background-color: white;
    border: 2px solid white;
    margin: 3px 1px;
    padding: 2px;
    position: relative;
    cursor: pointer;
}
.top-right button:hover{
    background-color: rgb(197, 193, 193);
}
.drop-down{
    position: absolute;
    background-color: white;
    width: 100px;
    border: 1px solid rgb(224, 222, 222);
}
.drop-down li{
    padding: 5px;
    cursor: pointer;
}
.drop-down li:hover{
    background-color: rgb(197, 193, 193);
    transition: 0.9s;
}
select{
    margin: 4px 0;
}
option{
    background-color: white;
}
.like{
    display: none;
}
@media screen and (max-width:900px) {
.top{
    display: flex;
    flex-direction: column;
}
    .top-left{
    display: none;
}
.top-right{
    margin-left: 90px;
}
.like{
    display: block;
}
.innerlike{
    display: flex;
    text-align: center;
    justify-content: center;
    gap: 15px;
}
}
`