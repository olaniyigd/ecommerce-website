import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
export default function Nav (){
    return(
        <Wrapper>
            <div className="desktop-nav">
                <div className="logo">
                    <span className="name">DAKIEO</span>
                    <span className="shop">SHOP</span>
                </div>
                <div>
                    <input for='text' placeholder="Search for Products"/><button id="search"><FiSearch/></button>
                </div>
                <div className="customer">
                        <p className="cust">Customer Service</p>
                        <p className="num">+2348107265575</p>
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
    .desktop-nav{
        display: flex;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        padding: 30px 0px;
    }
    .name{
        background-color: rgb(31, 28, 28);
        color: white;
        font-weight: bold;
        padding: 15px;
        cursor: pointer;
    }
    .shop{
        background-color: rgb(194, 194, 7);
        color:rgb(31, 28, 28) ;
        font-weight: bold;
        padding: 15px;
        cursor: pointer;
    }
    input{
        width: 400px;
        border:1px solid rgb(196, 191, 191);
        padding: 9px 5px;
        outline-color: rgb(196, 191, 191);
    }
    #search{
        padding:7.8px;
        background-color: white;
        border:1px solid rgb(196, 191, 191);
        cursor: pointer;
    }
    .cust{
        font-size: 20px;
        font-weight: bold;
        color: grey;
    }
    .num{
        font-size: 22px;
        font-weight: bold;
    }
    @media screen and (max-width:900px) {
        .desktop-nav{
        display: none;
    }
    }
`
