import "./contactRight.css";

function ContactRight() {
  return (
    <>
      <div className="container map-container">
        <iframe
          className="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13280.74069171725!2d73.0158147!3d33.6782691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe1f4447adf5%3A0xac381766b408a3d7!2sG-10%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory!5e0!3m2!1sen!2s!4v1696576979664!5m2!1sen!2s"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default ContactRight;
