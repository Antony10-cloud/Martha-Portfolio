const PORTFOLIO = {
  name: "Martha Nyanchama Nyangena",
  title: "Calm, capable virtual support for busy founders and growing teams.",
  role: "Virtual Assistant",
  eyebrow: "Virtual Assistant Portfolio",
  intro: "I help entrepreneurs and businesses bring order to busy days through admin support, scheduling, research, documents, data entry, travel planning, and customer care.",
  availability: "Open to selected opportunities",
  shortPitch: "When the inbox is full, the calendar is moving, and the details need attention, I step in with structure, care, and follow-through.",
  aboutTitle: "Reliable virtual support for growing businesses.",
  aboutText: "I am Martha, a dedicated Virtual Assistant with strong organizational, communication, and administrative support skills. I help entrepreneurs and businesses stay organized by managing emails, calendars, scheduling, data entry, travel planning, internet research, document preparation, and customer support. I am detail-oriented, tech-savvy, and committed to delivering accurate, efficient, and confidential support.",
  contactText: "For administrative support, customer support, scheduling, research, or document preparation enquiries, use the links below.",
  email: "marthanyanchama60@gmail.com",
  phoneDisplay: "+254 727 678245",
  phoneHref: "tel:+254727678245",
  whatsapp: "254727678245",
  googleDriveUrl: "https://l1nk.dev/2cm155j",
  driveText: "The full Google Drive folder includes Martha's work samples, CV, certificate, and related professional documents.",
  stats: ["8", "Remote", "Flexible"],
  skills: [
    "Email Management",
    "Calendar Scheduling",
    "Data Entry",
    "Travel Planning",
    "Internet Research",
    "Document Preparation",
    "Customer Support",
    "Confidential Support"
  ],
  socials: [
    { label: "LinkedIn", url: "https://acesse.one/lzplcbo" }
  ],
  projects: [
    {
      title: "Research & Data Organization",
      type: "Google Sheets",
      description: "A structured research spreadsheet on parks and cities in California, showing internet research, data entry, and clean information organization.",
      image: "linear-gradient(135deg, #175c4a, #f0b35a)",
      link: "https://docs.google.com/spreadsheets/d/14BBvYKyFjXjJLgFtOYqhcUbZshBd1s6TWT6J1OnjY8s/edit?usp=sharing"
    },
    {
      title: "Meeting Agenda Preparation",
      type: "Google Docs",
      description: "A professional meeting agenda document, showing planning, administrative preparation, and the ability to turn meetings into clear action points.",
      image: "linear-gradient(135deg, #1f2937, #8fb9a8)",
      link: "https://docs.google.com/document/d/1OLvvNXhsI_5D6aYZnzfLU5JiztFWxxVY9E-0fCAOMLU/edit?usp=sharing"
    },
    {
      title: "Travel Planning Pack",
      type: "Google Slides",
      description: "A travel planning presentation for Santorini, Greece, showing destination research, itinerary thinking, and polished presentation support.",
      image: "linear-gradient(135deg, #7c3f1d, #f2c078)",
      link: "https://docs.google.com/presentation/d/18NojBpBubLvgDyrfW-lMtVisOjf5g7vLPihV26juX5M/edit?usp=sharing"
    },
    {
      title: "Virtual Assistant Certificate",
      type: "Certificate",
      description: "A professional certificate supporting Martha's Virtual Assistant training, readiness, and commitment to reliable remote support.",
      image: "linear-gradient(135deg, #10352c, #d9823b)",
      link: "https://drive.google.com/file/d/1FmgTimfOobWrwYmNChlKlQamprvfNHA5/view?usp=sharing"
    }
  ]
};

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function firstInitial(name) {
  return (name || "P").trim().charAt(0).toUpperCase();
}

function renderPortfolio() {
  document.title = `${PORTFOLIO.name} | Portfolio`;
  setText("brandInitial", firstInitial(PORTFOLIO.name));
  setText("brandName", PORTFOLIO.name);
  setText("avatar", firstInitial(PORTFOLIO.name));
  setText("profileName", PORTFOLIO.name);
  setText("footerName", PORTFOLIO.name);
  setText("profileRole", PORTFOLIO.role);
  setText("eyebrow", PORTFOLIO.eyebrow);
  setText("heroTitle", PORTFOLIO.title);
  setText("heroIntro", PORTFOLIO.intro);
  setText("availability", PORTFOLIO.availability);
  setText("shortPitch", PORTFOLIO.shortPitch);
  setText("aboutTitle", PORTFOLIO.aboutTitle);
  setText("aboutText", PORTFOLIO.aboutText);
  setText("contactText", PORTFOLIO.contactText);
  setText("driveText", PORTFOLIO.driveText);
  setText("statOne", PORTFOLIO.stats[0]);
  setText("statTwo", PORTFOLIO.stats[1]);
  setText("statThree", PORTFOLIO.stats[2]);

  const emailLink = document.getElementById("emailLink");
  emailLink.textContent = PORTFOLIO.email;
  emailLink.href = `mailto:${PORTFOLIO.email}`;

  const phoneLink = document.getElementById("phoneLink");
  phoneLink.textContent = PORTFOLIO.phoneDisplay;
  phoneLink.href = PORTFOLIO.phoneHref;

  const whatsappLink = document.getElementById("whatsappLink");
  whatsappLink.href = `https://wa.me/${PORTFOLIO.whatsapp}`;

  const primaryContact = document.getElementById("primaryContact");
  primaryContact.href = `https://wa.me/${PORTFOLIO.whatsapp}`;
  primaryContact.target = "_blank";
  primaryContact.rel = "noopener noreferrer";

  const driveLink = document.getElementById("driveLink");
  driveLink.href = PORTFOLIO.googleDriveUrl;

  document.getElementById("skills").innerHTML = PORTFOLIO.skills
    .map((skill) => `<span>${skill}</span>`)
    .join("");

  document.getElementById("socials").innerHTML = PORTFOLIO.socials
    .filter((social) => social.url && social.url !== "#")
    .map((social) => `<a href="${social.url}" target="_blank" rel="noopener noreferrer">${social.label}</a>`)
    .join("");

  document.getElementById("gallery").innerHTML = PORTFOLIO.projects
    .map((project) => `
      <article class="project-card">
        <div class="project-image" style="--image: ${project.image};"></div>
        <div class="project-content">
          <span class="project-type">${project.type}</span>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a class="project-link" href="${project.link}" target="_blank" rel="noopener noreferrer">View sample</a>
        </div>
      </article>
    `)
    .join("");
}

renderPortfolio();
