import React from 'react';
import Nav from './Nav';
import SliderImage from './SliderImage';
import Content from './Content';
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import Content5 from './Content5';
import Content6 from './Content6';
import Content7 from './Content7';
import Footer from './Footer';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
      {/* Fixed Navbar */}
      <Nav className={'mb-5'} />

      {/* Slider Section */}
      <section id="slider">
        <SliderImage />
      </section>

      {/* Intro Content */}
      <section id="content">
        <Content />
      </section>

      {/* Free Training Program */}
      <section id="content2">
        <Content2 />
      </section>

      {/* Intermediate Sections */}
      <section id="content3">
        <Content3 />
      </section>

      <section id="content4">
        <Content4 />
      </section>

      {/* Courses Offered */}
      <section id="content5">
        <Content5 />
      </section>

      {/* About Us */}
      <section id="content6">
        <Content6 />
      </section>

      {/* Content7 Section */}
      <section id="content7">
        <Content7 />
      </section>
       
       {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer Section */}
      <section id='footer'>
        <Footer/>
      </section>
    </div>
  );
};

export default Home;
