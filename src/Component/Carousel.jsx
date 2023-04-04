import { useState } from "react";
import styled from "styled-components";
import {images} from '../Helper/CarouselData';
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
export default function Carousel(){
    const [currImg, setCurrImg] = useState(0);
    return(
        <Wrapper>
            <div className="carousel">
                    <div className="carouselinner" style={{backgroundImage: `url(${images[currImg].img})`}}>
                            <div className="left" onClick={()=>{currImg > 0 && setCurrImg(currImg -1)}}><FiChevronLeft /></div>
                            <div className="center">
                                <h1>{images[currImg].title}</h1>
                                <p>{images[currImg].subtitle}</p>
                                <button>{images[currImg].btn}</button>
                            </div>
                            <div className="right" onClick={()=>{currImg < images.length -1 && setCurrImg(currImg +1)}}><FiChevronRight /></div>
                    </div>
                    <div className="carousel-right">
                        <div className="up">
                            <div className="upinner">
                            <p className="save">Iphone</p>
                            <button id="bt2">Shop Now</button>
                            </div>
                        </div>
                        <div className="down">
                        <div className="upinner">
                            <p className="save">Women Wears</p>
                            <button id="bt2">Shop Now</button>
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
    .carousel{
        display: flex;
        align-items: center;
        width:100%;
        margin: 20px;
        gap: 20px;
        height: 400px;
    }
    .carousel-right{
        display: flex;
        flex-direction: column;
        gap: 20px;
        height: 400px;
        width: 100%;
    }
    .carouselinner{
        height: 100%;
        width: 100%;
        display: flex;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .carouselinner .left{
        flex:5%;
        height: 100%;
        color: white;
        display: grid;
        place-items: center;
        font-size: 30px;
        cursor: pointer;
        background-color: rgb(0, 0, 0, 0.6);
    }
    .carouselinner .center{
        flex:90%;
        height: 100%;
        display: grid;
        place-items: center;
        text-align: justify;
        text-align-last: center;
        background-color: rgb(0, 0, 0, 0.6);
    }.carouselinner .right{
        flex:5%;
        color: white;
        display: grid;
        cursor: pointer;
        place-items: center;
        font-size: 30px;
        height: 100%;
        background-color: rgb(0, 0, 0, 0.6);
    }
    h1, p {
        color: white;
    }
    button{
        padding: 5px 20px;
        background-color: transparent;
        color: white;
        cursor: pointer;
        border: 1px solid white;
        margin-bottom: 100px;
    }
    button:hover{
        background-color: #bdb3b3;
        color: black;
    }
    .up{
        background: url('/Carouselimage/carousel6.jpeg');
        height: 100vh;
        align-items: center;
        text-align: center;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        transition: ease-in-out .4s;
    }
    .up:hover, .down:hover{
        scale: 0.9;
        transition: ease-in-out .4s;
    }
    .down{
        background-image: url('/Carouselimage/carousel2.jpg');
        height: 100vh;
        align-items: center;
        text-align: center;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
    }
    #bt2{
        background-color: rgb(194, 194, 7);
        padding: 10px 20px;
    }
    .save{
     font-size: 20px;
     color: red;
     font-weight: 900;
     margin-bottom: 25px;
    }
    @media screen and (max-width:900px){
        .carousel{
            display: flex;
            flex-direction: column;
        }
        .carousel-right{
            display: flex;
            flex-direction: column;
            width: 100%;
        }
        .up{
            height: 30vh;
            width: 100%;
        }
        .down{
            height: 30vh;
        }
    }
`