import React from "react";

const VSPAbout = () => {
  const descriptionHTML = `
    <div>
      <div>
        <h2>Our Mission:</h2>
        <p>
          Our mission is to transform your space into a clean and
          inviting haven where you can relax, work, and thrive. We
          strive to exceed your expectations by delivering reliable,
          efficient, and personalized cleaning solutions that enhance
          your quality of life.
        </p>
      </div>

      <div>
        <h2>Our Approach:</h2>
        <p>
          We take a personalized approach to cleaning, understanding
          that every space is unique and requires individualized
          attention. Our team of professional cleaners is trained to
          meticulously clean and sanitize your home, office, or
          commercial space using eco-friendly products and
          state-of-the-art equipment.
        </p>
      </div>

      <ul>
        <li>
          <h2>Services We Offer:</h2>
          <ul>
            <li>
              <b>Residential Cleaning:</b> From routine housekeeping to deep
              cleaning, we offer a range of residential cleaning
              services to keep your home spotless and organized.
            </li>
            <li>
              <b>Commercial Cleaning:</b> Our commercial cleaning services
              are tailored to meet the specific needs of businesses,
              offices, and commercial properties, ensuring a clean and
              welcoming environment for employees and customers.
            </li>
            <li>
              <b>Specialized Cleaning:</b> We also offer specialized cleaning
              services for move-in/move-out cleaning,
              post-construction cleaning, and event cleanup, providing
              comprehensive solutions for all your cleaning needs.
            </li>
          </ul>
        </li>

        <li>
          <h2>Why Choose Us:</h2>
          <ul>
            <li>
              <b>Experienced Professionals:</b> Our team consists of
              experienced and trained cleaning professionals who are
              dedicated to delivering exceptional results.
            </li>
            <li>
              <b>Quality Service:</b> We prioritize quality and attention to
              detail in every cleaning task we undertake, ensuring
              your complete satisfaction.
            </li>
            <li>
              <b>Eco-Friendly Practices:</b> We are committed to
              sustainability and use environmentally friendly cleaning
              products and practices whenever possible.
            </li>
            <li>
              <b>Customer Satisfaction:</b> Your satisfaction is our top
              priority, and we strive to exceed your expectations with
              every cleaning service we provide.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  `;

  return (
    <div className="stp-15 sbp-15">
      <h3 className="heading-3 border-b border-n30 pb-5">About this service</h3>

      <div
        className="view-src-p-description"
        dangerouslySetInnerHTML={{ __html: descriptionHTML }}
      />
    </div>
  );
};

export default VSPAbout;
