import { useState, type FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import ContactIcon from "./assets/contact-icon.png";
import LocalisationIcon from "./assets/localisationIcon";
import EmailIcon from "./assets/emailIcon";
import PhoneIcon from "./assets/phoneIcon";

const linksEn = [
  {
    title: "Contact",
    description: "Got a project to develop or a position to fill? Let’s talk!",
    name: "Name",
    phone: "Phone number",
    email: "E-mail",
    message: "Message",
    button: "Send",
    loading: "Sending...",
  },
];

const contactEn = [
  {
    title: "Localisation",
    contact: "Antananarivo 101, Madagascar",
    icon: LocalisationIcon,
  },
  {
    title: "E-mail",
    contact: "heritiana.rav@gmail.com",
    icon: EmailIcon,
  },
  {
    title: "Call",
    contact: "034 77 768 96",
    icon: PhoneIcon,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
    message: "",
  });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = "service_x2rdhcv";
    const templateId = "template_wrbvlbn";
    const publicKey = "zVJo-S3WOEH4qUyoB";

    if (
      !formData.name ||
      !formData.tel ||
      !formData.email ||
      !formData.message
    ) {
      console.error("All fields are required");
      toast.warn("All fields are required", { position: "top-center" });
      setLoading(false);
      return;
    }

    if (!emailRegex.test(formData.email)) {
      console.error("Invalid email format");
      toast.warn("Invalid email format", { position: "top-center" });
      setLoading(false);
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_tel: formData.tel,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      )
      .then((response) => {
        console.log("Email sent successfully", response);
        notify_success();
        setFormData({ name: "", tel: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending email", error);
        notify_failure();
        setFormData({ name: "", tel: "", email: "", message: "" });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const notify_success = () => {
    toast.success("Message sent successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const notify_failure = () => {
    toast.error("Error sending message. Please try again.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <section id="CONTACT" className="flex flex-col items-center py-4">
        {linksEn.map((link, index) => (
          <div key={index} className="section-container">
            <h2 className="title">{link.title}</h2>
            <p className="text-center text-3xl !text-dark-grey">
              {link.description}
            </p>
            <div className="flex flex-col justify-center space-y-8 md:flex-row md:space-x-24 md:space-y-0 md:items-center py-8">
              {contactEn.map((contact, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <span className="max-w-10 max-h-10 flex items-center justify-center">
                    <contact.icon aria-label={contact.title} />
                  </span>
                  <div>
                    <p className="font-semibold !text-dark">{contact.title}</p>
                    <p className="text-sm !text-dark-grey">{contact.contact}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center w-full 2xl:ml-0 gap-8">
              <img
                src={ContactIcon}
                alt={link.title}
                className="block w-full h-full md:w-96 md:h-96"
              />
              <form
                className="flex flex-col space-y-4 border-light-grey max-w-xl w-full border-1 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                onSubmit={handleSubmit}
              >
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder={link.name}
                  className="contact-input"
                  onChange={handleChange}
                />
                <input
                  id="tel"
                  type="tel"
                  name="tel"
                  value={formData.tel}
                  placeholder={link.phone}
                  className="contact-input"
                  onChange={handleChange}
                />
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder={link.email}
                  className="contact-input"
                  onChange={handleChange}
                />
                <textarea
                  rows={6}
                  id="message"
                  name="message"
                  value={formData.message}
                  placeholder={link.message}
                  className="px-4 pt-3 rounded-lg border-1 border-light-grey resize-none"
                  onChange={handleChange}
                ></textarea>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full lg:w-52 text-center transition-colors duration-200 ${
                      loading ? "btn-loading" : "btn-primary"
                    }`}
                  >
                    {loading ? link.loading : link.button}
                  </button>
                </div>
              </form>
            </div>
          </div>
        ))}
        <ToastContainer />
      </section>
    </>
  );
};

export default Contact;
