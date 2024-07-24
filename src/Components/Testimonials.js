import React from "react";

const Testimonials = ({ data }) => {
  if (data) {
    var testimonials = data.testimonials.map(function (testimonial) {
      return (
        <li key={testimonial.user}>
          <blockquote>
            <p>{testimonial.text}</p>
            <cite>{testimonial.user}</cite>
          </blockquote>
        </li>
      );
    });
  }

  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="twelve columns header-col">
            <h1>
              <span>Client Testimonials</span>
            </h1>
          </div>

          <div className="twelve columns flex-container">
            <ul className="slides">{testimonials}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
