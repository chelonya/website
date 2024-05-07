import styles from "./Register.module.css";
import Nav from "../components/Nav";
import LogoNav from "../components/LogoNav";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import HamMenu from "../components/HamMenu";
import FooterMobile from "../components/FooterMobile";
import { useRef, useState } from "react";
const Register = () => {
  return (
    <div>
      <HamMenu></HamMenu>

      <Banner
        bannerImg="formBanner.jpg"
        bannerText=" "
      />

      <div className={styles.wrapperForm}>
        <iframe className={styles.form}
          src="https://docs.google.com/forms/d/e/1FAIpQLScev8I7FXIFIe99Q-1VDZoWpnX2Z83I975rKnVCOjgF2i-p3Q/viewform?embedded=true"
          title="Participation Form"

        ></iframe>
      </div>

      <Nav />

      <LogoNav />
      <FooterMobile />
      <Footer />
    </div>
  );
};

export default Register;
