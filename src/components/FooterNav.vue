<template>
    <footer data-wow-duration="1s" class="wrapper wrapper-footer wow animate_animated animate__zoomIn">
        <div class="footer-left">
            <div class="footer-left_info">
                <p>Coino</p>
                <span>Coino is the best platform to buy, sell and <br>
                    exchange multiple cryptos with ease.
                </span>
            </div>
            <div class="footer-sub">
                <form action="" class="footer-form">
                    <input class="footer-mail" type="email" placeholder="Your email">
                    <button class="footer-btn">Subscribe</button>
                </form> 
            </div>
        </div>
        <div class="footer-right">
            <div class="footer-right_info">
                <p>COMPANY</p>
                <ul class="ul-footer">
                    <li><router-link to="/about">About</router-link></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Affiliates</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Reviews</a></li>
                </ul>
            </div>
            <div class="footer-right_info">
                <p>PRODUCTS</p>
                <ul class="ul-footer">
                    <li><a href="/crypto/buy">Buy</a></li>
                    <li><a href="/crypto/sell">Sell</a></li>
                    <li><a href="#">Swap</a></li>
                    <li><a href="#">Receive</a></li>
                    <li><a href="#">Gateway</a></li>
                </ul>
            </div>
            <div class="footer-right_info">
                <p>LEARN</p>
                <ul class="ul-footer">
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Status</a></li>
                </ul>
            </div>
            <div class="footer-right_info">
                <p>LEGAL</p>
                <ul class="ul-footer">
                    <li><a href="#">AML Policy</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                </ul>
            </div>
        </div>
    </footer>
    <div class="wrapper footer-line"></div>
    <div class="wrapper footer-bottom">
        <div class="footer-bottom_left">
            <p>© 2024 Coino. All Rights Reserved.</p>
        </div>
        <div class="footer-bottom_right">
            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="#"><i class="fa-brands fa-youtube"></i></a>
        </div>
    </div>
</template>