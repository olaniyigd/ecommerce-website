import styled from 'styled-components';
import { ImCheckmark } from "react-icons/im";
import { TbTruckDelivery } from "react-icons/tb";
import { RiArrowLeftRightLine } from "react-icons/ri";
import { MdOutlineWifiCalling3 } from "react-icons/md";

export default function Info () {
    return(
        <Wrapper>
            <div className='info'>
                <div className='first'>
                    <div className='icon'>
                    <ImCheckmark/>
                    </div>
                    <p>Qualiti Product</p>
                </div>
                <div className='first'>
                    <div className='icon'>
                        <TbTruckDelivery/>
                    </div>
                    <p>Free Shipping</p>
                </div>
                <div className='first'>
                    <div className='icon'>
                        <RiArrowLeftRightLine/>
                    </div>
                    <p>14-Day Return</p>
                </div>
                <div className='first'>
                    <div className='icon'>
                        <MdOutlineWifiCalling3/>
                    </div>
                    <p>24/7 Support</p>
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
    .info{
            background-color: white;
            width: 100%;
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: center;
            gap: 50px;
            padding: 50px 50px;
         }
         .first{
            background-color: #f3ebeb;
            height: 15vh;
            width: 100%;
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: center;
            gap: 10px;
            font-size: 25px;
         }
         p{
            font-weight: bold;
            cursor: pointer;
         }
         .icon{
            color:rgb(194, 194, 7);
            font-weight: bold;
         }
         @media screen and (max-width:900px){
            .info{
                display: flex;
                flex-direction: column;
                justify-content: left;
                padding: 200px 15px;

            }
            .first{
                display: flex;
                justify-content: left;
            }
            p{
                font-size: 25px;
            }
         }
`