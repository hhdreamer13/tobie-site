const ContactUs = () => {
  return (
    <div className="grid-wrapper w-full">
      {/* ...other parts unchanged... */}

      {/* Contact Us Section */}
      <div className="min-h-screen text-slate-100 text-2xl leading-5 relative not-italic flex items-center justify-center">
        <div>
          <h3 className="text-4xl font-semibold mb-6">Contactez-nous</h3>
          <p className="mb-4">
            Nous aimerions avoir de vos nouvelles. Envoyez-nous un message !
          </p>

          {/* Contact Form */}
          <form className="w-full max-w-lg">
            <div className="mb-4">
              <input
                className="border p-2 w-full"
                type="text"
                placeholder="Nom"
                name="name"
              />
            </div>
            <div className="mb-4">
              <input
                className="border p-2 w-full"
                type="email"
                placeholder="Email"
                name="email"
              />
            </div>
            <div className="mb-4">
              <textarea
                className="border p-2 w-full"
                rows="6"
                placeholder="Votre message"
                name="message"
              ></textarea>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Envoyer
            </button>
          </form>

          {/* Social Network Addresses */}
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-blue-600"
            >
              Facebook
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-blue-400"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-pink-600"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-blue-800"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
