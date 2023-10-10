import { useState, useEffect } from "react";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    // basic email regex, for real case validation use external library
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    setIsDisabled(!emailRegex.test(email));
  }, [email]);

  // handle form submit with demo console log
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    console.log(email);
  };

  return (
    <form
      className="email-form-container"
      onSubmit={handleSubmit}
      aria-label="Email Subscription Form"
    >
      <div className="input-button-container">
        <div className="input-container">
          <label htmlFor="email-input" className="visually-hidden hidden">
            Email Address:
          </label>
          <input
            type="email"
            name="email"
            placeholder="Type your email here"
            className="email-form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-required="true"
          />
        </div>
        <div className="button-container">
          <button
            type="submit"
            className="email-submit-button"
            disabled={isDisabled}
          >
            Sign up
          </button>
        </div>
      </div>
    </form>
  );
};

export default EmailForm;
