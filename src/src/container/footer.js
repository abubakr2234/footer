import React from 'react'
import Footer from '../components/footer';
import Icon from '../components/icons';


export function FooterContainer() {
    return (
        
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                
                    <Footer.Link href="#">ABOUT</Footer.Link>
                    <Footer.Link href="#">OUR EXPERIENCE</Footer.Link>
                    <Footer.Link href="#">SUSTAINABILITY & IMPACT</Footer.Link>
                    <Footer.Link href="#">PORTFOLIO</Footer.Link>
                    <Footer.Link href="#">MEDIA CENTER</Footer.Link>
                    <Footer.Link href="#">CONTACT US</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                
                    <Footer.Link href="#">CONTACT DETAILS</Footer.Link>
                    <Footer.Link href="#">+27 21 671 3311</Footer.Link>
                    <Footer.Link href="#">+27 21 671 3322</Footer.Link>
                    <Footer.Link href="#">info@thusopartners.co.za</Footer.Link>
                </Footer.Column>
                
                <Footer.Column>
                
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />FOLLOW US</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
            <p >@2019 THUSO Incumbation All Rights Reserved Reg No 2019/121231/07</p>
            <p>Juristic Representative under Ke Nako Capital (Pty) Ltd FSP NO 33507</p>
        </Footer>
    )
}