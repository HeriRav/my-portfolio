import ContactIcon from "./assets/contact-icon.png"
import LocalisationIcon from "./assets/localisationIcon";
import EmailIcon from "./assets/emailIcon";
import PhoneIcon from "./assets/phoneIcon";

const linksEn = [
  {
    title: 'Contact',
    description: 'Got a project to develop or a position to fill? Let’s talk!',
    name: 'Name',
    phone: 'Phone number',
    email: 'E-mail',
    message: 'Message',
    button: 'Send',
  }
];

const contactEn = [
  {
    title: 'Localisation',
    contact: 'Antananarivo 101, Madagascar',
    icon : LocalisationIcon,
  },
  {
    title: 'E-mail',
    contact: 'heritiana.rav@gmail.com',
    icon : EmailIcon,
  },
  {
    title: 'Call',
    contact: '034 77 768 96',
    icon: PhoneIcon,
  },
]

const Contact = () => {
  return (
    <>
      <section id="CONTACT" className="flex flex-col items-center py-4">
        {linksEn.map((link, index) => (
          <div key={index} className="section-container">
            <h2 className="title">
              {link.title}
            </h2>
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
              <img src={ContactIcon} alt={link.title} className="block w-full h-full md:w-96 md:h-96" />
              <form className="flex flex-col space-y-4 border-light-grey max-w-xl w-full border-1 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <input type="text" placeholder={link.name} className="px-4 py-3 rounded-lg border-1 border-light-grey" />
                <input type="text" placeholder={link.phone} className="px-4 py-3 rounded-lg border-1 border-light-grey" />
                <input type="text" placeholder={link.email} className="px-4 py-3 rounded-lg border-1 border-light-grey" />
                <textarea rows={1} name="meassafg" id="message" placeholder={link.message} className="px-4 pt-3 pb-12 rounded-lg border-1 border-light-grey"></textarea>
                <div className="flex justify-center">
                  <a href="" className="btn-primary w-full lg:w-52 text-center">
                    {link.button}
                  </a>
                </div>
              </form>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

export default Contact;