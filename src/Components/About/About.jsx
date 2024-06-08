import React from 'react'
import "./about.css"

export default function About() {
  return (
    <div className="about-container">
      <h2 className="about-head">About Us</h2>
      <p>
        Welcome to <span className="about-text">Taste of Ghana</span>, where we
        bring the heart and soul of Ghanaian cuisine to <b>Accra</b>.
        Established in <b>2015</b>, our restaurant is dedicated to sharing the
        rich culinary traditions and vibrant flavors of Ghana with our
        community. At <span className="about-text">Taste of Ghana</span>, our mission is to
        provide an authentic and memorable dining experience that captures the
        essence of Ghanaian culture. We believe in the power of food to connect
        people and tell stories, and every dish we serve is a testament to the
        warmth, hospitality, and rich heritage of Ghana. Our menu features a
        diverse selection of traditional Ghanaian dishes, each prepared with the
        freshest ingredients sourced locally. From our signature jollof rice to
        the comforting flavors of our groundnut soup, we aim to offer a true
        taste of Ghana that delights and satisfies. Beyond our commitment to
        excellent food, we take pride in our welcoming and vibrant atmosphere.
        Our restaurant is adorned with beautiful Ghanaian decor, creating a
        space that feels like a home away from home. Our friendly and attentive
        staff are always ready to provide exceptional service, ensuring that
        every visit to <span className="about-text">Taste of Ghana</span> is
        special. We also believe in giving back to the community and supporting
        local farmers and suppliers. By choosing to dine with us, you’re not
        only enjoying delicious food but also contributing to a network of local
        businesses and sustainable practices. Thank you for choosing{" "}
        <span className="about-text">Taste of Ghana</span>. We are honored to
        share our passion for Ghanaian cuisine with you and look forward to
        serving you soon.
      </p>
    </div>
  );
}
