import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  return (
    <section id="contact" className="py-24 bg-gray-100">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />

          <input
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}