import styled from "styled-components";
import prod1 from '../image/prod1.jpg';
import prod2 from '../image/prod2.jpg';
import prod3 from '../image/prod3.jpg';
import prod4 from '../image/prod4.jpg';
import { BsFillCartCheckFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
export default function Product (){
    return(
        <Wrapper>
            <div className="prod-head">
                <p className="prod-title">FEATURED PRODUCTS...</p>
            </div>
            <div className='products'>
                <div className="prod-up">
                <div className='third'>
                    <img src={prod1} alt="product1" className="productimg" />
                    <p className="prod-text">Trendyol Skirt-Black-Mini</p>
                    <p className="amount">$20</p>
                    <button id="cart"><BsFillCartCheckFill/> Cart</button>
                    <div className="star">
                    <span><AiFillStar/></span>
                    <span><AiFillStar/></span>
                    <span><AiFillStar/></span>
                    <span><AiFillStar/></span>
                    <span><AiFillStar/></span>
                    </div>
                </div>
                <div className='third'>
                    <img src={prod2} alt="product2" className="productimg" />
                    <p className="prod-text">Trendyol T-Shirt-Brown-Regular</p>
                    <p className="amount">$25</p>
                    <button id="cart"><BsFillCartCheckFill/> Cart</button>
                    <div className="star">
                    <span><AiFillStar/></span>
                    <span><AiFillStar/></span>
                    <span><AiFillStar/></span>
                    <span><AiFillStar/></span>
                    <span><AiFillStar/></span>
                    </div>
                    </div>
                    <div className='third'>
                    <img src={prod3} alt="product3" className="productimg"/>
                    <p className="prod-text">Danami Button Designed Long Sleeve T-Shirt</p>
                    <p className="amount">$25.6</p>
                    <button id="cart"><BsFillCartCheckFill/> Cart</button>
                    <div className="star">
                    <span><AiFillStar/></span>
                    <span><AiFillStar/></span>
                    <span><AiFillStar/></span>
                    <span><AiFillStar/></span>
                    <span><AiFillStar/></span>
                    </div>
                    </div>
                    <div className='third'>
                    <img src={prod4} alt="product4" className="productimg" />
                    <p className="prod-text">Plain Mens T-shirts Combo of 3</p>
                    <p className="amount">$26</p>
                    <button id="cart"><BsFillCartCheckFill/> Cart</button>
                    <div className="star">
                    <span><AiFillStar/></span>
                    <span><AiFillStar/></span>
                    <span><AiFillStar/></span>
                    <span><AiFillStar/></span>
                    <span><AiFillStar/></span>
                    </div>
                    </div>
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
    .prod-head{
        width: 100%;
        padding: 50px 50px;
    }
    .prod-title{
        font-size: 30px;
        font-weight: 700;
        color: rgb(31, 28, 28);
    }
    .products{
        width: 100%;
        padding: 0 50px;
    }
    .prod-up{
        display: flex;
        gap: 20px;
    }
    .third{
        width: 100%;
        text-align: center;
        border: 1px solid rgb(223, 218, 218);
    }
    .productimg{
        height: 290px;
        width: 290px;
        padding: 20px;
        position: relative;
        cursor: pointer;
    }
    .prod-down{
        display: flex;
        gap: 20px;
    }
    #cart{
        padding: 5px 45px;
        margin: 5px;
        background-color: rgb(194, 194, 7);
        color: white;
        border: 1px solid rgb(194, 194, 7);
        cursor: pointer;
        border-radius: 5px;
    }
    #cart:hover{
        background-color: transparent;
        color: black;
        transition: 0.9s;
    }
    .star{
        padding: 5px;
        font-size: 20px;
    }
    span{
        color:yellow;
        cursor: pointer;
    }
    @media screen and (max-width:900px){
        .prod-up{
            display: flex;
            flex-direction: column;
        }
    }
`