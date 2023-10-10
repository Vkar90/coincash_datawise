import EmailForm from "./EmailForm";

const NewsletterForm = () => {
  return (
    <div className="newsletter-container">
      <div
        className="newsletter-headings-container"
        role="complementary"
        aria-labelledby="newsletterTitle"
      >
        <h3 className="newsletter-title">
          Get started{" "}
          <span className="dark-blue" role="text">
            today
          </span>
        </h3>
        <p className="newsletter-subtitle">
          Sign up to receive email updates on new products announcements,
          special promotions sales and more.
        </p>
      </div>
      <EmailForm />
    </div>
  );
};

export default NewsletterForm;
