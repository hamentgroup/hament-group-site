import React from "react";
import logo from "./assets/Logo.jpg";

function App() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* Logo */}
      <header className="text-center py-8">
        <img src={logo} alt="Hament Group Logo" className="w-32 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-darkBlue">Hament Group</h1>
        <p className="text-sm">Fintech Solutions for Africa</p>
      </header>

      {/* About Section */}
      <section id="about" className="px-6 py-12 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-darkBlue">About Us</h3>
        <p>
          Hament Group is a visionary financial services company aiming to provide Saxo Bank–level investment platforms within Africa. 
          We are starting in Tanzania with expansion plans into Kenya and South Africa.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-12 bg-gray-100 dark:bg-gray-800">
        <h3 className="text-2xl font-bold mb-6 text-darkBlue">Our Services</h3>
        <ul className="space-y-2 text-lg list-disc pl-5">
          <li>Online trading platforms for stocks and ETFs</li>
          <li>Regulatory-compliant investment solutions</li>
          <li>Market insights and portfolio management tools</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-12 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4 text-darkBlue">Partner With Us</h3>
        <p className="mb-6">
          We’re seeking strategic partners and early investors.
        </p>
        <a
          href="mailto:info@hamentgroup.com"
          className="px-6 py-3 bg-darkBlue text-white rounded-md hover:bg-blue-800"
        >
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-100 dark:bg-gray-800 text-sm">
        <p>© 2025 Hament Group. All rights reserved.</p>
        <p className="mt-1">+255 749 915 615 | info@hamentgroup.com</p>
      </footer>
    </div>
  );
}

export default App;