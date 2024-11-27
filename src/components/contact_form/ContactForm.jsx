import React from "react";
import styles from "./ContactForm.module.css";
import { GrMail } from "react-icons/gr";
import { ImPhone } from "react-icons/im";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { sendMessage } from "../../utilities/sendMessage";

const ContactForm = () => {
  let [isSending, setIsSending] = React.useState(false);
  let [sentStatus, setSentStatus] = React.useState(null);
  let timeoutRef = React.useRef(null);
  let form = React.useRef();
  const details = {
    mail: "s.sudharshan2151@gmail.com",
    mobile: "+91 9384905182",
  };
  const { mail, mobile } = details;

  const handleMail = () => {
    window.open(`mailto:${mail}`);
  };

  const handleAlert = (status) => {
    setSentStatus(status);
    timeoutRef.current = setTimeout(() => {
      setSentStatus(null);
    }, 3000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    sendMessage(form.current)
      .then(
        (res) => {
          e.target.reset();
          handleAlert(true);
        },
        (error) => {
          handleAlert(false);
        }
      )
      .catch((error) => {
        handleAlert(false);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const handleGithub = () => {
    window.open("https://github.com/sudharshan2151");
  };

  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/sudharshan2151/");
  };

 

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.container} id="contact">
      <div className={styles.left}>
        <div className={styles.left_header}>
          <div className={styles.left_header_l1}>Have an idea?</div>
          <div className={styles.left_header_l2}>Let's connect!</div>
        </div>
        <div className={styles.left_content}>
          <div
            className={`${styles.icon_text} ${styles.mail}`}
            onClick={handleMail}
            id="contact-email"
          >
            <GrMail size='1.6em' />
            <span>{mail}</span>
          </div>
          <div className={styles.icon_text}  id="contact-phone">
            <ImPhone size='1.6em' />
            <span>{mobile}</span>
          </div>
          <div className={styles.connect}>
            <FaGithub id="contact-github" onClick={handleGithub} size='1.8em' />
            <FaLinkedin  id="contact-linkedin" onClick={handleLinkedin} size='1.8em' />
          </div> 
        </div>
      </div>
      <div className={styles.right}>
        <form className={styles.form_container} ref={form} onSubmit={handleFormSubmit}>
          <div className={styles.form_elements}>
            <div>Email</div>
            <input type='email' name='email' required={true} />
          </div>
          <div className={styles.form_elements}>
            <div>Subject</div>
            <input type='text' name='subject' />
          </div>
          <div className={styles.form_elements}>
            <div>Message</div>
            <textarea name='message' rows='7' required={true} />
          </div>
          <div className={styles.form_elements} disabled={isSending}>
            {sentStatus === null ? null : sentStatus === false ? (
              <div className={styles.red_alert}>Something went wrong</div>
            ) : (
              <div className={styles.green_alert}>Sent successfully</div>
            )}
            <button
              style={{ backgroundColor: isSending ? "#b3cccc" : "#186883" }}
            >
              {isSending ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { ContactForm };
