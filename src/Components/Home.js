import React from "react";
import intro from "../Media/intro.svg";
import design from "../Media/design.svg";
import lang from "../Media/languages.svg";
import pay from "../Media/payment.svg";
const Home = () => {
  return (
    <div className="home">
      <div className="main over">
        <h1 className="homeAni">سلَّة.. تجارة ذكيَّة وسهلة </h1>
        <p className="homeAni-d200">
          أنشئ متجرك الإلكتروني في دقائق، واربط منتجاتك بمجموعة متكاملة من
          الحلول الرقميَّة الذكيَّة للمدفوعات، والشحن، وإدارة المخزون، والتسويق،
          بكل سهولة؛ لأن نجاحك لا يحتاج إلى تعقيد.
        </p>
        <div className="btns">
          <div className="btn homeAni-d400">
            أنشئ متجرك مجاناَ <i class="sicon-add-circle"></i>
          </div>
          <div className="btn homeAni-d600">تجربة المنصة </div>
        </div>
        <img className="homeAni-d800" src={intro} alt="" />
      </div>
      <div className="stage">
        <h1 className="js-scroll fade-btm">
          أكبر منصَّة سعودية للتجارة الإلكترونيَّة في الشرق الأوسط
        </h1>
        <p className="js-scroll fade-top">
          أنشئ متجرك الإلكتروني، وانضمَّ لعشرات الآلاف من العلامات المحلية
          والعالمية الناجحة مع سلة اليوم
        </p>
        <div className="icons">
          <div className="icon js-scroll fade-btm">
            <i class="sicon-dollar-money"></i>
            <div className="txt">
              <h1>14,000,000</h1>
              <span> مبيعات المنصة</span>
            </div>
          </div>
          <div className="icon js-scroll fade-btm">
            <i class="sicon-store"></i>
            <div className="txt">
              <h1>36,000</h1>
              <span>متجر إلكتروني</span>
            </div>
          </div>
        </div>
      </div>
      <div className="sections over">
        <div className="box f-c">
          <h1 className="js-scroll fade-btm">سلة تفهم كافة احتياجاتك</h1>
          <p className="js-scroll fade-top">
            مهما كان مجال تجارتك يمكنك الاعتماد على سلة ودعمها لمختلف القطاعات
          </p>
        </div>
        <div className="box items">
          <div className="item js-scroll fade-btm">
            <i class="sicon-store"></i>
            <div className="txt">
              <h2> متاجر التجزئة</h2>
              <span> مزايا عديدة تلائم تجارتك </span>
            </div>
          </div>
          <div className="item js-scroll fade-btm">
            <i class="sicon-store"></i>
            <div className="txt">
              <h2> متاجر التجزئة</h2>
              <span> مزايا عديدة تلائم تجارتك </span>
            </div>
          </div>
          <div className="item js-scroll fade-btm">
            <i class="sicon-store"></i>
            <div className="txt">
              <h2> متاجر التجزئة</h2>
              <span> مزايا عديدة تلائم تجارتك </span>
            </div>
          </div>
          <div className="item js-scroll fade-btm">
            <i class="sicon-store"></i>
            <div className="txt">
              <h2> متاجر التجزئة</h2>
              <span> مزايا عديدة تلائم تجارتك </span>
            </div>
          </div>
          <div className="item js-scroll fade-btm">
            <i class="sicon-store"></i>
            <div className="txt">
              <h2> متاجر التجزئة</h2>
              <span> مزايا عديدة تلائم تجارتك </span>
            </div>
          </div>
          <div className="item js-scroll fade-btm">
            <i class="sicon-store"></i>
            <div className="txt">
              <h2> متاجر التجزئة</h2>
              <span> مزايا عديدة تلائم تجارتك </span>
            </div>
          </div>
        </div>
      </div>
      <div className="box yourStore over">
        <img className="js-scroll fade-left" src={design} alt="" />
        <div className="title">
          <h2 className="js-scroll fade-right">متجرك، على ذوقك </h2>
          <p className="js-scroll fade-left">
            نجاحك التجاري يحتاج لمظهر أنيق، اختر مظهرًا يناسب علامتك.
          </p>
          <div className="arr js-scroll fade-btm">
            <i class="fa-regular fa-angles-left"></i>
            مكتبة متنوعة من الثيمات الجاهزة القابلة للتخصيص حسب رغبتك.
          </div>
          <div className="arr js-scroll fade-btm">
            <i class="fa-regular fa-angles-left"></i>
            تخصيص تفاصيل التصميم عن طريق JS و CSS.
          </div>
          <div className="arr js-scroll fade-btm">
            <i class="fa-regular fa-angles-left"></i>
            كما يمكنك صنع ثيمك الخاص مع Salla Twilight.
          </div>
        </div>
      </div>
      <div className="pg over">
        <div className="box yourStore">
          <img className="js-scroll fade-left" src={lang} alt="" />
          <div className="title">
            <h2 className="js-scroll fade-right">تجارة لا تعرف حدودًا </h2>
            <p className="js-scroll fade-left">
              من السعوديَّة لكل العالم بكل سهولة.
            </p>
            <div className="arr js-scroll fade-btm">
              <i class="fa-regular fa-angles-left"></i>
              دعم أكثر من 40 لغة.
            </div>
            <div className="arr js-scroll fade-btm">
              <i class="fa-regular fa-angles-left"></i>
              استقبال المدفوعات من أكثر من 79 دولة.
            </div>
            <div className="arr js-scroll fade-btm">
              <i class="fa-regular fa-angles-left"></i>
              شحن دولي يغطي معظم دول العالم.
            </div>
          </div>
        </div>
      </div>
      <div className="box yourStore over">
        <img className="js-scroll fade-left" src={pay} alt="" />
        <div className="title">
          <h2 className="js-scroll fade-right">
            مدفوعات آمنة، لتجارة مستدامة، وثقة متينة!{" "}
          </h2>
          <p className="js-scroll fade-left">
            استفد من نظام سلة المتكامل للمدفوعات الإلكترونية لإدارة مدفوعات
            متجرك وعملائك
          </p>
          <div className="arr js-scroll fade-btm">
            <i class="fa-regular fa-angles-left"></i>
            وسائل دفع متنوعة تلبي كافة احتياجات عملائك.
          </div>
          <div className="arr js-scroll fade-btm">
            <i class="fa-regular fa-angles-left"></i>
            تفعيل سريع لنظام المدفوعات خلال يوم واحد.
          </div>
          <div className="arr js-scroll fade-btm">
            <i class="fa-regular fa-angles-left"></i>
            تحصيل المدفوعات بعد 24 ساعة.
          </div>
          <div className="arr js-scroll fade-btm">
            <i class="fa-regular fa-angles-left"></i>
            حماية عالية وأمان لكافة عملياتك.
          </div>
        </div>
      </div>
      <div className="card over">
        <div className="box cd js-scroll fade-top">
          <div className="b">
            أنشئ متجرك مجاناَ <i class="sicon-add-circle"></i>
          </div>
          <div className="t">
            <h1>امتلك متجراً احترافياً في سلة</h1>
            <p>
              أنشئ متجرك الآن بأدوات مرنة وحلول متكاملة تساعدك في كل خطوة نحو
              نمو مبيعاتك وتسويق منتجاتك
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
