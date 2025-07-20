const linksEn = [
  {
    title: 'Contact me',
  }
]

const Contact = () => {
  return (
    <>
      <section id="CONTACT" className="flex flex-col items-center py-4">
        {linksEn.map((link, index) => (
          <div key={index} className="section-container">
            <h2 className="title">{link.title}</h2>
          </div>
        ))}
      </section>
    </>
  )
}

export default Contact;