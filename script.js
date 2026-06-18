const PORTFOLIO = {
  name: "Martha",
  title: "A clean portfolio for my work, story, and next opportunity.",
  role: "Personal Brand / Career Profile",
  eyebrow: "Personal Portfolio",
  intro: "Explore selected work, documents, skills, and the easiest ways to get in touch.",
  availability: "Open to selected opportunities",
  shortPitch: "A simple, professional space where people can understand my work, view my supporting files, and contact me quickly.",
  aboutTitle: "A short introduction.",
  aboutText: "I am building a professional profile that presents my background, strengths, work samples, and the opportunities I am ready for. This section will be updated with a personal bio once the final details are provided.",
  contactText: "For opportunities, collaborations, or enquiries, use the links below.",
  email: "add-email@example.com",
  phoneDisplay: "+254 727 678245",
  phoneHref: "tel:+254727678245",
  whatsapp: "254727678245",
  googleDriveUrl: "https://drive.google.com/",
  driveText: "Certificates, CV, detailed project photos, and other supporting files can be shared through one Google Drive folder.",
  stats: ["3", "6", "24h"],
  skills: [
    "Communication",
    "Organisation",
    "Project Work",
    "Team Collaboration",
    "Problem Solving",
    "Personal Branding"
  ],
  socials: [
    { label: "LinkedIn", url: "#" },
    { label: "Instagram", url: "#" },
    { label: "TikTok", url: "#" }
  ],
  projects: [
    {
      title: "Featured Work",
      description: "Use this card for the strongest project, certificate, design, event, service, or achievement.",
      image: "linear-gradient(135deg, #175c4a, #f0b35a)"
    },
    {
      title: "Gallery Highlight",
      description: "Add a photo, screenshot, document preview, or sample that supports the professional profile.",
      image: "linear-gradient(135deg, #1f2937, #8fb9a8)"
    },
    {
      title: "Career Moment",
      description: "Highlight an experience, result, testimonial, role, or milestone that builds credibility.",
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
