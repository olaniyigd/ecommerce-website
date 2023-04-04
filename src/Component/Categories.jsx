import styled from "styled-components";
import cat1 from "../image/cat1.jpg";
import cat2 from '../image/cat2.jpg';
import cat3 from '../image/cat3.jpg';
import cat4 from '../image/cat4.jpg';

export default function Categories (){
    return(
        <Wrapper>
            <div className="cate-head">
                <p className="cate-title">CATEGORIES...</p>
            </div>
            <div className='categories'>
                <div className='second'>
                    <div className="image">
                    <img src={cat2} alt='men'/>
                    </div>
                    <div className="cate-text">
                    <p className="txt">Men Wears</p>
                    <p className="num">100 products</p>
                    </div>
                </div>
                <div className='second'>
                    <div className="image">
                        <img src={cat1} alt='women'/>
                    </div>
                    <div className="cate-text">
                        <p className="txt">Women Wears</p>
                        <p className="num">100 products</p>
                    </div>
                </div>
                <div className='second'>
                    <div className="image">
                        <img src={cat3} alt='phone' />
                    </div>
                    <div className="cate-text">
                        <p className="txt">Iphone</p>
                        <p className="num">100 products</p>
                    </div>
                </div>
                <div className='second'>
                    <div className="image">
                        <img src={cat4} alt='laptop' />
                    </div>
                    <div className="cate-text">
                        <p className="txt">Laptop</p>
                        <p className="num">100 products</p>
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
    .cate-head{
        width: 100%;
        padding: 0 50px;
    }
    .cate-title{
        font-size: 30px;
        font-weight: 700;
        color: rgb(31, 28, 28);
    }
    .categories{
        background-color: white;
        width: 100%;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        gap: 50px;
        padding: 20px 50px;
    }
    .second{
        background-color: #f3ebeb;
        height: 15vh;
        width: 100%;
        display: flex;
        font-size: 25px;
        border: 1px solid #f3ebeb;
    }
    img{
        width:100px;
        height: 97px;
    }
    .cate-text{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 7px;
        align-items: center;
        text-align: center;
        padding: 20px;
        cursor: pointer;
    }
    .cate-text:hover{
        background-color:rgb(194, 194, 7);
        transition: 0.9s;
        color: white;
    }
    .txt{
        font-size: 17px;
        color:rgb(31, 28, 28);
        font-weight:700;
    }
    .num{
        font-size: 13px;
    }
    @media screen and (max-width:900px){
        .categories{
            display: flex;
            flex-direction: column;
        }
    }
`