import React from "react";
import playstore from "../Media/playstore.png";
import appstore from "../Media/appstore.png";
const Footer = () => {
  return (
    <footer>
      <div className="box center">
        <div className="fLinks">
          <p>سلة</p>
          <a href="##">منصة المقترحات</a>
          <a href="##">انضم لفريق سلة</a>
          <a href="##">اتفاقية الاستخدام</a>
          <a href="##">سياسة الخصوصية</a>
        </div>
        <div className="fLinks">
          <p>متجر التطبيقات</p>
          <a href="##">ما هو متجر تطبيقات سلة؟ </a>
          <a href="##"> تصفح التطبيقات</a>
        </div>
        <div className="fLinks">
          <p>صانع التطبيقات</p>
          <a href="##"> ماهو صانع التطبيقات؟</a>
          <a href="##">اصنع تطبيقاً لمتجرك </a>
        </div>
        <div className="fLinks">
          <p>الخدمات المساندة</p>
          <a href="##"> مركز المساعدة</a>
          <a href="##"> أكاديمية سلة</a>
          <a href="##">مجتمع تجار سلة </a>
          <a href="##"> منصة الشكاوى</a>
        </div>
      </div>
      <div className="box sec">
        <div className="imgs">
          <a href="##">
            <img src={appstore} alt="" />
          </a>
          <a href="##">
            <img src={playstore} alt="" />
          </a>
        </div>
        <div className="media">
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-youtube"></i>
        </div>
      </div>
      <div className="box ff">
        <div className="copy">
          <p>جميع الحقوق محفوظة لدي سلة القابضة 2023 ©</p>
        </div>
        <div className="cont">
          <div className="li">
            <i class="fa-light fa-phone"></i>
            <a href="##">8001111210</a>
          </div>
          <div className="li">
            <i class="fa-light fa-location-dot"></i>
            <a href="##">مكة المكرمة، المملكة العربية السعودية</a>
          </div>
          <div className="li">
            <i class="fa-light fa-envelope"></i>
            <a href="##">info@salla.sa</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
