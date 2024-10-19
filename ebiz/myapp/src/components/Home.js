
import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Home.css";
import jk from "../assets/jk-tyre.png";
import marvel from "../assets/marvel.png";
import aima from "../assets/aima.png";
import reli from "../assets/reliance.png";
import ficci from "../assets/ficci.png";
import adavnced from "../assets/advanced.png";
import tech from "../assets/techstudio.png";
import whiz from "../assets/whiz.png";
import lp from "../assets/lpwala.png";
import quick from "../assets/qwickteam.png";
import deliver from "../assets/deleivere.png";
import leadstory from "../assets/leadstory.png";
import mic from "../assets/mic.png";
import adobe from "../assets/adobe.png";
import aws from "../assets/aws.png";
import onepay from "../assets/onepay.png";
import shopify from "../assets/shopify.png";
import tem from "../assets/te.png";
import html from "../assets/html.png";
import sql from "../assets/mysqll.png";
import s from "../assets/s.png";
import js from "../assets/js.png";
import marvellogo from "../assets/marvellogo.png";
import visitor from "../assets/visitor.png";
import jkbanner from "../assets/jk-banner.png";
import pino from "../assets/pinop.jpg";
import pinobanner from "../assets/pinopbanner.png";
import java from "../assets/java.png";
import texml from "../assets/texml.png";
import k from "../assets/k.png";
import and from "../assets/andrioid.png";
import api from "../assets/api.png";
import m from "../assets/mvvm.png";
import advancedlogo from "../assets/advancedlogo.png";
import solar from "../assets/solar.png";
import metaverse from "../assets/metaverse.png";
import linkedin from "../assets/linkedin.png";
import powehouse from "../assets/power house.png";
import iso from "../assets/iso.png";
import google from "../assets/google.png";
import cluch from "../assets/cluch.png";
import logo from "../assets/logo.jpg";


const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blogs");
        setBlogs(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#about">COMPANY</a>
            </li>
            <li>
              <a href="#services">SERVICES</a>
            </li>
            <li>
              <a href="#portfolio">CLIENTS</a>
            </li>
            <li>
              <a href="#contact">RESOURCES</a>
            </li>
            <li>
              <a href="#contact">CONTACT US</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* ********************************ABOUT SECTION ************************************************** */}

      <div className="about-section">
        <h1>
          <span className="text-black">e-Biz </span>
          <span className="text-gradient">Technocrats</span>
        </h1>
        <p>
          E-BIZ TECHNOCRATS (P) LIMITED, founded in 2003, delivering a wide
          spectrum of cutting-edge IT solutions which include Custom Software
          development, Web application, and Mobile app development that empower
          businesses to thrive in the digital age.
        </p>
        <p>
          We have provided successful solutions and services to clients from
          various industries like Hospitality, Education, Universities,
          Healthcare, Real Estate, Retail, Manufacturing, Mining, Agriculture,
          Telecom, Banks, Online Media Houses, and Startup Businesses.
        </p>
        <p>
          We believe in a collaborative approach to problem-solving. We work
          closely with our clients to understand their unique challenges, goals,
          and requirements, ensuring that we deliver tailored solutions that
          exceed their expectations. Our iterative and agile development
          methodologies enable us to adapt to changing needs and deliver results
          with speed and precision.
        </p>
        <div className="button-container">
          <a href="#explore" className="btn-explore">
            EXPLORE MORE
          </a>
        </div>
      </div>

      {/* ***************************PARTNER SECTION *************************************************** */}

      <div className="partners-section">
        <h2>
          Products We Develop <span className="text-gradient">Are Used By</span>
        </h2>

        <div className="logos-container">
          <img src={jk} alt="JK Tyre" />
          <img src={marvel} alt="Marvel" />
          <img src={aima} alt="AIMA" />
          <img src={reli} alt="Reliance" />
          <img src={ficci} alt="FICCI" />
          <img src={adavnced} alt="Advanced Solar Batteries" />
          <img src={tech} alt="Tech Studio" />
          <img src={whiz} alt="Whiz Tech" />
          <img src={lp} alt="LP Wala" />
          <img src={quick} alt="Qwick Team" />
          <img src={deliver} alt="Delievere" />
          <img src={leadstory} alt="The Lead Story" />
        </div>
      </div>

      {/* ****************************PARTENERS *********************************************** */}

      <div class="box">
        <div className="textcontainer">
          <h2>
            Building Strong Relationships with{" "}
            <span class="highlight">Partners</span> &{" "}
            <span class="highlight-2">Technology</span>
          </h2>
          <p class="sub-text">
            We foster strong relationships through strategic tech partnerships,
            driving innovation and collaboration.
          </p>
        </div>

        <div class="partners">
          <div class="partner">
            <img src={aws} />
          </div>
          <div class="partner">
            <img src={adobe} />
          </div>
          <div class="partner">
            <img src={onepay} />
          </div>
          <div class="partner">
            <img src={mic} />
          </div>
          <div class="partner">
            <img src={shopify} />
          </div>
        </div>
      </div>

      <div className="text">
        <h1>
          Where We Turned <span>Ideas Into Reality</span>{" "}
        </h1>
      </div>

      {/* ******************CARDS******************************************************************* */}

      <div class="card">
        <div class="card-content">
          <div class="text-section">
            <img src={marvellogo} alt="Marvel Logo" class="logo" />
            <h2>Visitor Pass Management</h2>
            <p>
              A Visitor Pass Management System streamlines the process of
              tracking and managing guest access to your facility. It automates
              check-ins, generates digital or physical visitor passes, and
              enhances security by providing real-time alerts and visitor logs.
              This solution improves efficiency, ensures compliance with
              security protocols, and enhances the overall visitor experience.
            </p>
            <h3>Technology Stack</h3>
            <div class="tech-icons">
              <img src={tem} alt="Tech 1" />
              <img src={html} alt="Tech 2" />
              <img src={js} alt="Tech 2" />
              <img src={s} alt="Tech 3" />
              <img src={sql} alt="Tech 4" />
            </div>
            <a href="#" class="explore-btn">
              Explore
            </a>
          </div>
          <div class="image-section">
            <img src={visitor} alt="Visitor System" class="main-image" />
          </div>
        </div>
      </div>

      <div className="card1">
        <div className="card-content">
          <div className="image-section">
            <img src={jkbanner} alt="jkbanner System" class="main-image" />
          </div>

          <div className="text-section">
            <img src={jk} alt="Marvel Logo" class="logo" />
            <h2>Tire Testing Analysis Solution</h2>
            <p>
              Our tire testing analysis software delivers precise and
              comprehensive evaluations of tire performance, durability, and
              safety. It provides detailed insights and data to optimize tire
              design, enhance vehicle safety, and improve overall performance,
              ensuring your products meet the highest standards.
            </p>
            <h3>Technology Stack</h3>
            <div class="tech-icons">
              <img src={tem} alt="Tech 1" />
              <img src={html} alt="Tech 2" />
              <img src={js} alt="Tech 2" />
              <img src={s} alt="Tech 3" />
              <img src={sql} alt="Tech 4" />
            </div>
            <a href="#" class="explore-btn">
              Explore
            </a>
          </div>
        </div>
      </div>

      <div class="card2">
        <div class="card-content">
          <div class="text-section">
            <img src={pino} alt="Marvel Logo" class="logo" />
            <h2>Pnoy App</h2>
            <p>
              Introducing our revolutionary Alkaline Water Purifier App Solution
              – your one-stop solution for optimal health and hydration.
              Experience the power of Alkaline water on-the-go with our
              user-friendly app. In this App You can gather knowledge about
              water purifiers. You can ensure you and your loved ones have
              access to clean, pH-balanced water anytime, anywhere. Stay
              informed with real-time filter status alerts and easily reorder
              replacements. Our app provides a seamless and convenient
              experience, promoting a healthier lifestyle.
            </p>
            <h3>Technology Stack</h3>
            <div class="tech-icons">
              <img src={and} alt="Tech 1" />
              <img src={java} alt="Tech 2" />
              <img src={k} alt="Tech 2" />
              <img src={texml} alt="Tech 3" />
              <img src={m} alt="Tech 4" />
              <img src={api} alt="Tech 4" />
            </div>
            <a href="#" class="explore-btn">
              Explore
            </a>
          </div>
          <div class="image-section">
            <img src={pinobanner} alt="pinop System" class="main-image" />
          </div>
        </div>
      </div>

      <div className="card1">
        <div className="card-content">
          <div className="image-section">
            <img src={solar} alt="jkbanner System" class="main-image" />
          </div>

          <div className="text-section">
            <img src={advancedlogo} alt="Marvel Logo" class="logo" />
            <h2>Advanced Solar & Batteries</h2>
            <p>
              Our website design & development solution for Advanced Solar &
              Batteries offers a sleek, user-friendly platform. Solar-related
              solutions are available on this website. It includes custom
              features for showcasing solar products, and battery systems. We
              optimized each page for performance and SEO. With responsive
              design, seamless navigation, and integrated inquiry options, the
              ASB business can engage customers efficiently while promoting
              sustainable energy solutions.
            </p>
            <h3>Technology Stack</h3>
            <div class="tech-icons">
              <img src={tem} alt="Tech 1" />
              <img src={html} alt="Tech 2" />
              <img src={js} alt="Tech 2" />
              <img src={s} alt="Tech 3" />
              <img src={sql} alt="Tech 4" />
            </div>
            <a href="#" class="explore-btn">
              Explore
            </a>
          </div>
        </div>
      </div>

      <section className="blog-section">
        <h2>
          Browse Our Latest <span>Blog Articles</span>
        </h2>

        <div className="blog-cards">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error fetching blogs: {error}</p>
          ) : (
            blogs.map((blog) => (
              <div className="blog-card" key={blog.id}>
                <img src={blog.imageUrl || metaverse} alt={blog.title} />
                {/* <img src={blog.image || metaverse} alt={blog.title} />  */}

                <div className="blog-card-content">
                  <p className="date">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </p>
                  <h3>{blog.title}</h3>
                  <p>
                    {blog.excerpt || blog.content.substring(0, 100) + "..."}
                  </p>
                  <a href={`/blog/${blog.id}`}>Read More</a>
                </div>
              </div>
            ))
          )}
        </div>

        <a href="#" className="view-all-blogs">
          View All Blogs
        </a>
      </section>

      <footer>
        <div class="container">
          <div class="office-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
              alt="India Flag"
            />
            <h2>India - Office</h2>
            <p>
              3rd floor, Indraytan, City Center, Lashkar,
              <br />
              Gwalior, Madhya Pradesh
            </p>
            <p class="phone">📞 +91-8962733774</p>
            <p class="email">📧 info@ebiztechnocrats.com</p>
          </div>

          <div class="office-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg"
              alt="Australia Flag"
            />
            <h2>Australia - Office</h2>
            <p>
              311 White Road, South Dudley,
              <br />
              Vic 3995, Australia
            </p>
            <p class="phone">📞 +61-438329353</p>
            <p class="email">📧 bhavya@ebiztechnocrats.com</p>
          </div>

          <div class="office-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
              alt="UK Flag"
            />
            <h2>United Kingdom - Office</h2>
            <p>
              281, Lythalls Lane, Holbrooks,
              <br />
              Coventry, CV6 6FW UK
            </p>
            <p class="phone">📞 +44 7855818795</p>
            <p class="email">📧 info@ebiztechnocrats.com</p>
          </div>
        </div>

        {/* *********************************FOOTER SECTION ************************************************************ */}

        <div class="footer-container">
          <div class="footer-column">
            <h3>Reach Us</h3>
            <p>📞 0751-4010424</p>
            <p>📱 +91-8962733774</p>
            <p>📱 +91-8962733774 (WhatsApp)</p>
            <p>✉️ info@ebiztechnocrats.com</p>
          </div>

          <div class="footer-column">
            <h3>Industries Catered</h3>
            <p>Healthcare</p>
            <p>Food & Restaurant</p>
            <p>LMS & eLearning</p>
            <p>Finance & Banking</p>
            <p>e-Commerce</p>
          </div>

          <div class="footer-column">
            <h3>What We Do</h3>
            <p>IT Solution & Services</p>
            <p>Web Services & Solution</p>
            <p>SaaS Applications</p>
            <p>Third Party Application</p>
            <p>Telephony Solution</p>
            <p>More</p>
          </div>

          <div class="footer-column">
            <h3>Group Websites</h3>
            <p>e-Biz Skill</p>
            <p>Deshraag Foundation</p>
            <p>Yardstikk</p>
          </div>

          <div class="footer-reviews">
            <div class="google-review">
              <img src={google} alt="Google Reviews" />
              <p>
                <strong>Google Reviews</strong> 4.3 ★ (70 reviews)
              </p>
            </div>
            <div class="clutch-review">
              <p>Reviewed on</p>
              <img src={cluch} alt="Clutch" />
              <p>Review Us</p>
            </div>
            <div class="iso-certification">
              <img
                style={{ cursor: "pointer" }}
                src={iso}
                alt="ISO Certification"
              />
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <p>
            &copy; Copyrights © 2024. All Rights Reserved by e-Biz Technocrats
            Pvt. Ltd.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
