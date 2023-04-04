import styled from "styled-components";
import master from "../Paymentimage/master.png";
import paypal from "../Paymentimage/paypal.jpg";
import { FiChevronRight } from "react-icons/fi";
import { IoIosPin } from "react-icons/io";
import { AiFillMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
export default function Footer (){
    return(
        <Wrapper>
            <div className="footer">
                <div className="foot">
                    <div className="fourth">
                        <h1>GET IN TOUCH</h1>
                        <p className="intouch">DakieoShop is your Nigerian one-stop online shop for all your Fashion and High-Tech needs. We offer a wide selection of products including but not limited to Men & Women's Fashion, Mobile Phones, and Laptops, bringing them right to your doorstep.</p>
                        <div className="contact">
                            <p><span><IoIosPin/></span> No 13, Omugo Crescent, Tanke, Ilorin, Kwara State</p>
                            <p><span><AiFillMail/></span> dakieoshop@gmail.com</p>
                            <p><span><BsTelephoneFill/></span> +2348107265575</p>
                        </div>
                    </div>
                    <div className="fourth">
                        <h1>QUICK SHOP</h1>
                        <ul>
                            <li><FiChevronRight/> Home</li>    
                            <li><FiChevronRight/> Our Shop</li>    
                            <li><FiChevronRight/> Shop Detail</li>    
                            <li><FiChevronRight/> Shopping Cart</li>    
                            <li><FiChevronRight/> Checkout</li>    
                            <li><FiChevronRight/> Contact Us</li>    
                        </ul>
                    </div>
                    <div className="fourth">
                    <h1>NEWSLETTER</h1>
                    <p className="mail">Subscribe To Our Mail</p>
                    <label>
                    <input for="text" placeholder="example@gmail.com" />
                    <button id="mail-btn">Sign Up</button>
                    </label>
                    <h4>FOLLOW US</h4>
                    <div className="media">
                        <p className="twitter"><AiFillTwitterSquare/></p>
                        <p className="facebook"><AiFillFacebook /></p>
                        <p className="linkedin"><AiFillLinkedin/></p>
                        <p className="instagram"><AiFillInstagram /></p>
                    </div>
                    </div>
                </div>
                <div className="feet">
                    <div className="feet-text">
                        <p className="copyright">&copy; <span>dakieoshop.com</span>. All Right Reserved. Designed by <span>Dakieo</span></p>
                    </div>
                    <div className="feet-img">
                        <img src={master} alt="master" className="master"/>
                        <img src={paypal} alt="paypal" className="pay"/>
                        
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
 .footer{
    width: 100%;
    color: white;
    background-color: #252222;
    text-align: justify;
 }
 .foot{
    display: flex;
    justify-content: center;

 }
 .feet{
    display: flex;
    justify-content: space-around;
    padding-top: 10px;
    padding-bottom: 10px;
 }
 .fourth{
    width: 100%;
 }
 .intouch{
    padding: 0px 20px;
 }
 h1{
    padding: 15px;
    font-size: 20px;
    text-align: center;
 }
 .contact{
    padding: 20px;
 }
 .mail{
    text-align: center;
 }
 label{
    padding-left: 100px;
 }
 #mail-btn{
    padding: 6px 10px;
    background-color: rgb(194, 194, 7);
    border: 1px solid rgb(194, 194, 7);
    cursor: pointer;
 }
 #mail-btn:hover{
    background-color: rgb(252, 252, 15);
 }
 input{
    margin-top:10px;
    padding: 5px 30px;
    outline-color: white;
 }
 p{
    padding-top: 5px;
 }
 span{
    color: rgb(194, 194, 7);
 }
 .media{
    display: flex;
    color: rgb(194, 194, 7);
    justify-content: center;
    text-align: center;
    gap: 10px;
    font-size: 30px;
    padding: 10px;
 }
 .twitter, .facebook, .linkedin, .instagram{
    cursor: pointer;
 }
 h4{
    text-align: center;
    padding-top: 15px;
    font-size: 20px;
 }
 ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    gap: 10px;
 }
 ul li{
    cursor: pointer;
    text-align: justify;
 }
 li:hover{
    color: #5f5a5a;
 }
 .feet-img{
    display: flex;
    gap: 10px;
    justify-content: space-between;
 }
 .master{
    height: 30px;
    width: 70px;
 }
 .pay{
    height: 30px;
    width: 70px;
 }
`