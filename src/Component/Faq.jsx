import styled from "styled-components"
import Drop from "./Drop";
import Footer from "./Footer";
import faq from "../Faqimage/faq.jpg"

export default function Faq(){
    return(
        <Wrapper>
            <Drop />
            <div className="faq">
                <h1>Frequently Asked Questions</h1>
                <div className="faq-front">
                    <div className="faq-lef">
                        <p className="faq-text">Get all the answers to the most frequently asked questions (FAQs) regarding some of our popular categories which include electronics, mobile phones, computers, fashion, beauty products, home and kitchen,building and construction materials and a whole lot more from premium brands as well as managing your account, payment, vouchers and much, much more.</p>
                    </div>
                    <div className="faq-right">
                        <img src={faq} alt="faq" className="faqimage" />
                    </div>
                </div>
                <div className="faq-question">
                    <div className="question-left">
                        <p className="left-quest">.Can i buy in bulk?</p>
                        <p className="left-quest">.Will all of the items in my order arrive in a single package?</p>
                        <p className="left-quest">.Why do I see different prices for the same product?</p>
                        <p className="left-quest">.What is buyer protection?</p>
                        <p className="left-quest">.What is the estimated delivery time?</p>
                        <p className="left-quest">.Why does the estimated delivery time vary?</p>
                        <p className="left-quest">.Who will deliver my order?</p>
                        <p className="left-quest">.My order is shipped. How can I track it?</p>
                    </div>
                    <div className="question-right">
                            <div className="right-quest">
                                <h2>Can I buy in bulk?</h2>
                                <p className="answer">For all your Corporate Procurement, Gift Vouchers and Consumer Promotion Activities, please contact us on +2348107265575 or email us at help@dakieoshop.com</p>
                            </div>
                            <div className="right-quest">
                                <h2>Will all of the items in my order arrive in a single package?</h2>
                                <p className="answer">If your order consists of items from more than one seller, your items will arrive separately. If your order consists of items from a single seller, your items may arrive together or separately. If your orders arrive separately, be rest assured that the remaining item(s) will be delivered shortly.</p>
                            </div>
                            <div className="right-quest">
                                <h2>Why do I see different prices for the same product?</h2>
                                <p className="answer">Dakieoshop is your trusted online marketplace that supports Nigerian entrepreneurs and we have many different sellers competing for business. Therefore, you may see the same product offered by different sellers at different prices. We believe that by supporting these 'third-party' sellers, we can offer you a wider product selection, more choice, increased convenience, and better pricing.</p>
                            </div>
                            <div className="right-quest">
                                <h2>What is buyer protection?</h2>
                                <p className="answer">We offer all our customers ultimate peace of mind. We have you covered 100% on every eligible purchase.</p>
                            </div>
                            <div className="right-quest">
                                <h2>What is the estimated delivery time?</h2>
                                <p className="answer">Dakieoshop delivers products to customers all over Nigeria & other Countries 10-15 days.</p>
                            </div>
                            <div className="right-quest">
                                <h2>Why does the estimated delivery time vary?</h2>
                                <p className="answer">Dakieoshop is a true online marketplace that empowers people across the world. This means that not all products on dakieoshop are sold or delivered by dakieoshop. In addition, dakieoshop buyers and sellers are found in every countries in the world. Given the various factors involved (the time it takes a seller to ship, the courier company used, the distance between buyer and seller, and more) delivery times may vary.</p>
                            </div>
                            <div className="right-quest">
                                <h2>Who will deliver my order?</h2>
                                <p className="answer">Your order may be delivered by dakieoshop agent, or by other courier companies, or by the seller or the seller's agents, depending on whether the item was sold by dakieoshop or a third-party seller and on the delivery method chosen by a third-party seller. You may be called prior to or on the same day as delivery to see if you are available to receive your order.</p>
                            </div>
                            <div className="right-quest">
                                <h2>My order is shipped. How can I track it?</h2>
                                <p className="answer">To track your order visit: <span>dakieoshop.com</span></p>
                            </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Wrapper>
    )
}
const Wrapper = styled.div`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .faq{
        width: 100%;
        padding: 10px 10px;
    }
    h1{
        padding: 10px;
    }
    .faq-text{
        color: white;
        padding-top: 30px;
    }
    .faq-front{
        background-color: #666262;
        width: 100%;
        display: flex;
        padding: 50px;
    }
    .faqimage{
        width: 450px;
        height: 170px;
    }
    .faq-question{
        display: flex;
    }
    .question-left{
        display: flex;
        flex-direction: column;
        gap: 15px;
        border: 1px solid #ece6e6;
        background-color: #fffbfb;
        padding: 20px;
        font-weight: 700;
    }
    .question-right{
        padding: 20px;
    }
    
    h2{
        padding: 15px 0px;
    }
    .answer{
        color:#8b8989;
    }
    span{
        color:rgb(194, 194, 7);
    }
    
`