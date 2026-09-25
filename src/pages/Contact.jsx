import { useForm, ValidationError } from "@formspree/react";

const links = [
  { label: "abd.94t@gmail.com", icon: "mail", href: "mailto:abd.94t@gmail.com" },
  { label: "Glasgow, Scotland", icon: "pin", href: null },
  { label: "github.com/Abdalrazaq94", icon: "github", href: "https://github.com/Abdalrazaq94" },
  { label: "linkedin.com/in/abdalrazaq94t", icon: "linkedin", href: "https://www.linkedin.com/in/abdalrazaq94t" },
];

function IconMark(props) {
  const type = props.type;
  const color = "#2563EB";

  if (type === "mail") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill={color}>
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    );
  }
  if (type === "pin") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill={color}>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
      </svg>
    );
  }
  if (type === "github") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill={color}>
        <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.65.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.61-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.55 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.35-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05A9.36 9.36 0 0 1 12 6.85c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.19C22 6.58 17.52 2 12 2z" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={color}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21h-4V9z" />
    </svg>
  );
}

function ContactForm() {
  const [state, handleSubmit] = useForm("xyezdlpj");

  if (state.succeeded) {
    return (
      <div className="bg-white rounded-xl p-6 md:p-8 flex items-center justify-center min-h-[300px]">
        <p className="text-xl font-bold text-center">
          Thanks! Your message has been sent, I'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 md:p-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <p className="text-sm font-bold mb-1.5">Your name</p>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-base bg-white focus:outline-none focus:border-black transition"
          />
        </div>

        <div>
          <p className="text-sm font-bold mb-1.5">Your email</p>
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-base bg-white focus:outline-none focus:border-black transition"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <p className="text-sm font-bold mb-1.5">Your message</p>
          <textarea
            name="message"
            placeholder="How can I help you?"
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-base bg-white focus:outline-none focus:border-black transition resize-none"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="self-start px-6 py-2.5 rounded-lg text-white font-medium hover:opacity-90 transition disabled:opacity-50"
          style={{ backgroundColor: "#AB824D" }}
        >
          {state.submitting ? "Sending..." : "Send message"}
        </button>
      </form>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="w-full min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start pt-10">
        <div>
          <p className="font-bold text-4xl mb-1 inline-block border-b-4" style={{ borderColor: "#ECD1B3" }}>
            Contact me
          </p>

          <p className="text-xl leading-relaxed mt-6 mb-10 max-w-sm text-black font-medium">
            Have a project in mind or just want to say hello? Feel free to reach out.
          </p>

          <div className="flex flex-col gap-1">
            {links.map(function (item) {
              const content = (
                <div className="flex items-center gap-4 py-3 border-b border-dashed border-gray-300">
                  <div className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center flex-shrink-0">
                    <IconMark type={item.icon} />
                  </div>
                  <span className="text-lg font-bold text-black">{item.label}</span>
                </div>
              );

              if (item.href) {
                return (
                  <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="hover:opacity-70 transition">
                    {content}
                  </a>
                );
              }

              return <div key={item.label}>{content}</div>;
            })}
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}