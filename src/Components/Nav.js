import React from "react";
import logo from "../Media/logo.svg";
const Nav = () => {
  return (
    <nav>
      <div className="box flex">
        <div className="links">
          <div className="otherLinks">
            <button>أنشئ متجرك مجاناَ</button>
            <div className="link">تسجيل الدخول</div>
          </div>
          <div className="mainLinks">
            <div className="link">الأسعار</div>
            <div className="link after">
              الحلول
              <div className="wrapper">
                <div className="wrap">
                  <div className="te">
                    <p>مركز المساعدة</p>
                    <span>مكتبة متكاملة لكل ما تحتاجه لبدء تجارتك مع سلة</span>
                  </div>
                  <i className="text-2xl sicon-information"></i>
                </div>
                <div className="wrap">
                  <div className="te">
                    <p>مركز المساعدة</p>
                    <span>مكتبة متكاملة لكل ما تحتاجه لبدء تجارتك مع سلة</span>
                  </div>
                  <i className="text-2xl sicon-information"></i>
                </div>
                <div className="wrap">
                  <div className="te">
                    <p>مركز المساعدة</p>
                    <span>مكتبة متكاملة لكل ما تحتاجه لبدء تجارتك مع سلة</span>
                  </div>
                  <i className="text-2xl sicon-information"></i>
                </div>
                <div className="wrap">
                  <div className="te">
                    <p>مركز المساعدة</p>
                    <span>مكتبة متكاملة لكل ما تحتاجه لبدء تجارتك مع سلة</span>
                  </div>
                  <i className="text-2xl sicon-information"></i>
                </div>
              </div>
            </div>
            <div className="link after">
              التعليم
              <div className="wrapper">
                <div className="wrap">
                  <div className="te">
                    <p>مركز المساعدة</p>
                    <span>مكتبة متكاملة لكل ما تحتاجه لبدء تجارتك مع سلة</span>
                  </div>
                  <i className="text-2xl sicon-information"></i>
                </div>
                <div className="wrap">
                  <div className="te">
                    <p>مركز المساعدة</p>
                    <span>مكتبة متكاملة لكل ما تحتاجه لبدء تجارتك مع سلة</span>
                  </div>
                  <i className="text-2xl sicon-information"></i>
                </div>
                <div className="wrap">
                  <div className="te">
                    <p>مركز المساعدة</p>
                    <span>مكتبة متكاملة لكل ما تحتاجه لبدء تجارتك مع سلة</span>
                  </div>
                  <i className="text-2xl sicon-information"></i>
                </div>
                <div className="wrap">
                  <div className="te">
                    <p>مركز المساعدة</p>
                    <span>مكتبة متكاملة لكل ما تحتاجه لبدء تجارتك مع سلة</span>
                  </div>
                  <i className="text-2xl sicon-information"></i>
                </div>
              </div>
            </div>
            <div className="link">الرئيسية</div>
          </div>
        </div>
        <button className="menu" onClick={()=>{document.querySelector('nav').classList.toggle('activeMenu')}}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
