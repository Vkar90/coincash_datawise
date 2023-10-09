const EmailForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    console.log(email);
  };

  return (
    <form className="email-form-container" onSubmit={handleSubmit}>
      <div className="input-button-container">
        <div className="input-container">
          <input
            type="email"
            name="email"
            placeholder="Type your email here"
            className="email-form-input"
            required
          />
        </div>
        <div className="button-container">
          <button type="submit" className="email-submit-button" disabled>
            Sign up
          </button>
        </div>
      </div>
    </form>
  );
};

export default EmailForm;
