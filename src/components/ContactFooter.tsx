
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactFooter = () => {
  return (
    <section id="contact" className="py-20 px-2 md:px-6 bg-white relative">
      <div className="w-full max-w-4xl mx-auto bg-white/5 backdrop-blur-sm px-4 md:px-12 py-8 md:py-20 rounded-3xl relative overflow-hidden text-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Let's work together
            <span className="text-gray-600">.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a 
              href="mailto:bharathvelamala1929@gmail.com"
              className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-300 hover:scale-105 cursor-pointer"
            >
              <Mail size={20} />
              <span className="underline">bharathvelamala1929@gmail.com</span>
            </a>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone size={20} />
              <span>+1 (520) 543-9800</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={20} />
              <span>Rochester, MN, USA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFooter;
