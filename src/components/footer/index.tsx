const Footer = () => {
  return (
    <footer className="py-4 bg-footer md:h-24 flex items-center justify-center">
      <div className="container mx-auto text-center">
        <p className="text-sm !text-light">
          © {new Date().getFullYear()} Heritiana Raveloson. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
