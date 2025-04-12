import "./contact.css";
import FormValidation from "./FormValidation";

export default function Contact() {
  return (
    <>
      <section id="contact" class="contact-section">
        <div class="container">
          <div class="section-title">
            <h2>get in touch</h2>
          </div>
          <div class="contact-row">
            <div class="row g-4">
              <div class="col-12">
                <div className="contact-col-left">

                  <div className="contact-content">
                    <h2>
                      I’m actively seeking <span> full/part-time job </span>opportunities. For any inquiries or further information, don’t hesitate to get in touch.
                    </h2>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div className="contact-col-rgt">
                  
                  <FormValidation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
