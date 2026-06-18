const PORTFOLIO = {
  name: "Martha Nyanchama Nyangena",
  title: "Virtual Assistant helping businesses stay organized and efficient.",
  role: "Virtual Assistant",
  eyebrow: "Virtual Assistant Portfolio",
  intro: "Administrative support, scheduling, research, document preparation, and customer support for busy entrepreneurs and businesses.",
  availability: "Open to selected opportunities",
  shortPitch: "I help clients save time, streamline their workflows, and focus on what matters most: growing their business.",
  aboutTitle: "Reliable virtual support for growing businesses.",
  aboutText: "I am Martha, a dedicated Virtual Assistant with strong organizational, communication, and administrative support skills. I help entrepreneurs and businesses stay organized by managing emails, calendars, scheduling, data entry, travel planning, internet research, document preparation, and customer support. I am detail-oriented, tech-savvy, and committed to delivering accurate, efficient, and confidential support.",
  contactText: "For administrative support, customer support, scheduling, research, or document preparation enquiries, use the links below.",
  email: "marthanyanchama60@gmail.com",
  phoneDisplay: "+254 727 678245",
  phoneHref: "tel:+254727678245",
  whatsapp: "254727678245",
  googleDriveUrl: "https://drive.google.com/",
  driveText: "Certificates, CV, detailed project photos, and other supporting files can be shared through one Google Drive folder.",
  stats: ["3", "6", "24h"],
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
    { label: "LinkedIn", url: "#" },
    { label: "Instagram", url: "#" },
    { label: "TikTok", url: "#" }
  ],
  projects: [
    {
      title: "Administrative Support",
      description: "Email management, calendar coordination, scheduling, document preparation, and day-to-day business organization.",
      image: "linear-gradient(135deg, #175c4a, #f0b35a)"
    },
    {
      title: "Research & Data Entry",
      description: "Internet research, data entry, information organization, and accurate task handling for busy professionals.",
      image: "linear-gradient(135deg, #1f2937, #8fb9a8)"
    },
    {
      title: "Customer Support",
      description: "Professional communication, customer follow-up, and reliable support that helps businesses serve clients better.",
      image: "linear-gradient(135deg, #7c3f1d, #f2c078)"
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
        <div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>
      </article>
    `)
    .join("");
}

renderPortfolio();
