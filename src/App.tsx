import React from 'react';
import logo from './images/logo.png'
import headerPic from './images/others/headerPic.jpeg'
import food1Img from './images/foods/food1Img.jpeg'
import  pizzaMargarita from './images/foods/pizzaMargarita.jpeg'
import cakeImg from './images/foods/cakeImg.jpg'
import drinking from './images/foods/drinking.jpg'
import strawberry from './images/others/strawberry.png'
import './App.css';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import MenuItem from './components/menuItem/menuItem'

function App() {
  return (
    <div>
      <Header  backgroundPic={headerPic} logo={logo}  PrCafeName="کافه جزیه" EngCafeName= "JEZIEH CAF&Eacute;" />
      <main className='menu-container'>
      <h2 className='menu-titles'>پیش غذاها</h2>
        <img className="little-pics"  src={strawberry} alt="strawberry" />


       <MenuItem foodName="سالاد جزیه" foodName2="سیب زمینی" foodName3="سالاد ویلیچ" foodName4="سالاد شیدایی"
           description="، کرنبری ، کاهو رسمی ، سبزیجات ارگانیک ، میوه فصل  سینه مرغ بلانچ شده و سس هانی بری
           "
          description2="سیب زمینی تنوری به همراه دیپ پنیر خامه‌ای"
          description3="کاهو رسمی ، مرغ بلانچ شده ، گوجه گیلاسی ،خیار ، ذرت ، زیتون سیاه ، پنیر سفید، بروکلی و سس پرین" 
          description4="کاهو پیچ ، کاهو فرانسوی ، مرغ گریل ، ریحون ، زیتون ، سورل و سس پرتقال پارمیسان" 
          price="265000t" price2="195000t" price3="245000t"
           price4="250000t" image={food1Img} align="right"
        />  

      <h2 className='menu-titles'>غذاها</h2>

      <MenuItem foodName="پیتزا مارگاریتا" foodName2="پیتزا سیسیل" foodName3="پاستا مرغ" foodName4="پاستا پستو"
         description="سس مارینارا، پنیر موزارلا تازه ، ریحان، روغن زیتون "
         description2="سس پستو دست ساز، پنیر موزارلا تازه ، بیکن سینه بوقلمون، گوجه مزه‌دار شده، زیتون سیاه "
         description3="پنه،سینه مرغ، قارچ، سس خامه" 
         description4="پنه،سینه مرغ، گوجه خشک،سس پستو" 
         price="295000t" price2="375000t" price3="315000t"
        price4="335000t" image={pizzaMargarita}  align="left"
        />



        <h2 className='menu-titles'>کیک و دسر</h2>
        <MenuItem foodName="چیز کیک نیویورکی لوتوس" foodName2="دسر شکلات و توت فرنگی" foodName3="وافل" foodName4=">فرنچ تست"
         description=""
         description2=""
         description3="نوتلا،موز،توت فرنگی،بستنی"
         description4="نان بریوش،کرم پاتیسیر، موز کاراملایز، سس نمکی دست ساز و میوه‌های فصل" 
         price="125000t" price2="145000t" price3="195000t"
     price4="210000t" image={cakeImg} align="right"
        />
        
       

        <h2 className='menu-titles'> نوشیدنی‌ها</h2>

        <MenuItem foodName="موهیتو" foodName2="لیمو و نعنا" foodName3="بلو لاگون" foodName4="بلک فیگ"
         description=""
         description2="بلوبری، نارگیل، خامه" 
         description3="انبه،چای تر"
         description4="میوه‌های استوایی"
         price="95000t" price2="100000t" price3="100000t"
        price4="100000t" image={drinking}  align="left"
        />
       
      
      </main>
      <br/>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
