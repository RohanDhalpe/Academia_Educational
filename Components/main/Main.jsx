import "./Main.css";
import sampleimg from "../../assets/suggestion.png";
import sampleimg1 from "../../assets/Images/android.png";
import road_im from "../../assets/Images/road-map.png";
import fron1 from "../../assets/yt/front1.jpg";
import fron2 from "../../assets/yt/front2.jpg";
import fron3 from "../../assets/yt/front3.jpg";
import fron4 from "../../assets/yt/front4.jpg";
import fron5 from "../../assets/yt/front5.jpg";
import cfron1 from "../../assets/courses/cfron1.png";
import cfron2 from "../../assets/courses/cfron2.png";
import cfron3 from "../../assets/courses/cfron3.png";
import cfron4 from "../../assets/courses/cfron4.png";
import Lottie from "lottie-react";
import cs1 from "../../assets/lotties/coming_soon.json";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Modal from "react-modal";

import "swiper/css";
import "swiper/css/pagination";

const Main = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <section id="Main">
      <div className="maindiv_content" id="yash_div"></div>

      <div className="Roadmap container">
        <h4>Roadmap</h4>
        <div className="roadmap_con square">
          <div className="road_img">
            <img src={road_im}></img>
          </div>
          <div className="button">
            <a href="https://roadmap.sh/frontend" target="_blank">
              Get the road map
            </a>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="Courses container square">
        <h4>Courses</h4>
        <div className="course_marquee">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              {" "}
              <a
                href="https://egghead.io/courses/the-beginner-s-guide-to-react"
                target="blank"
              >
                <img className="im1" src={cfron1} />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <a href="https://fireship.io/courses/js/" target="blank">
                <img className="im1" src={cfron2} />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <a
                href="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
                target="blank"
              >
                <img className="im1" src={cfron3} />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <a href="https://frontendmasters.com/" target="blank">
                <img className="im1" src={cfron4} />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div className="Suggestion_form container">
        <h4>Suggestions form</h4>

        <div className="suggest_con">
          <marquee
            id="rightContainer_ContentTable2_panel3"
            align="justify"
            direction="up"
            onmouseout="this.start()"
            height="200px"
            onmouseover="this.stop()"
            scrollamount="3"
            scrolldelay="60"
          ></marquee>
          <div className="texts">
            {/* <p>Suggestion</p> */}
            <a href="#Suggestion"> Suggestion</a>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Main;
