import React from 'react'

const FooterComponent=()=> {
return (
<footer class="site-footer">
  <div class="footer-menu">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-sm-4 col-xs-12">
          <div class="Footer-nav">
            <h3>Our company</h3>
            <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit Suspendisse et justo Praesent mattis commodo augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci. </p>
            <div class="paymentM"><img src="images/payment-method.png" alt=""/></div>
          </div>
        </div>
        <div class="col-lg-2 col-sm-4 col-xs-12">
          <div class="Footer-nav">
            <h3>Campaign</h3>
            <ul class="footer-link">
              <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i> Campaign</a></li>
              <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i> Pricing </a></li>
              <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i> Support</a></li>
              <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i> Discover</a></li>
              <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i> Terms of Use</a></li>
              <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i> Checkout</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-sm-4 col-xs-12">
          <div class="Footer-nav">
            <h3>Explore </h3>
            <ul class="footer-link">
              <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i> Environment</a></li>
              <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i> Fashion</a></li>
              <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i> Health</a></li>
              <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i> Innovation</a></li>
              <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i> Nonprofit</a></li>
              <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i> Travels</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-sm-12 col-xs-12">
          <div class="Footer-nav newsletter">
            <h3>Newsletter</h3>
            <form action="https://preview.templatehouse.net/getfund/s" method="POST" id="newsletterForm">
              <input type="text" value="" name="s" placeholder="Enter your email..."/>
              <button type="submit" value=""><span class="fa fa-paper-plane"></span></button>
            </form>
            <div class="follow">
              <h3>Follow us</h3>
              <ul>
                <li><a target="_Blank" href="https://www.facebook.com/"><i class="fa fa-facebook-f"></i></a></li>
                <li><a target="_Blank" href="https://www.twitter.com/"><i class="fa fa-twitter"></i></a></li>
                <li><a target="_Blank" href="https://www.google.com/"><i class="fa fa-google-plus-g"></i></a></li>
                <li><a target="_Blank" href="https://www.linkedin.com/"><i class="fa fa-linkedin-in"></i></a></li>
                <li><a target="_Blank" href="https://www.instagram.com/"><i class="fa fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- .footer-menu --> */}
  <div class="footer-copyright">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-sm-12">
          <p class="copyright">&copy; {new Date().getFullYear()} Royal  Tech. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
</footer>
)
}
export default FooterComponent