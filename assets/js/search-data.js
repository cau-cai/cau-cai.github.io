// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-members",
          title: "Members",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/members/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "Topics we&#39;ve explored, welcoming new ideas :bulb:",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Top-tier conferences and journals have badges.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "news-jun-hyuk-kim-joined-the-department-of-ai-at-chung-ang-university-as-an-assistant-professor-clap",
          title: 'Jun-Hyuk Kim joined the Department of AI at Chung-Ang University as an Assistant...',
          description: "",
          section: "News",},{id: "news-cai-lab-s-hompage-unveiled-rocket",
          title: 'CAI Lab’s hompage unveiled! :rocket:',
          description: "",
          section: "News",},{id: "research-efficient-ai",
          title: 'Efficient AI',
          description: "Efficient neural modeling of visual information",
          section: "Research",handler: () => {
              window.location.href = "/research/1_research.html";
            },},{id: "research-perceptual-ai",
          title: 'Perceptual AI',
          description: "Setting the right goals for human-like perception",
          section: "Research",handler: () => {
              window.location.href = "/research/2_research.html";
            },},{id: "research-robust-ai",
          title: 'Robust AI',
          description: "Exploring vulnerability &amp; Advancing robustness",
          section: "Research",handler: () => {
              window.location.href = "/research/3_research.html";
            },},{id: "research-future-ai",
          title: 'Future AI',
          description: "Embracing new ideas for future AI innovations",
          section: "Research",handler: () => {
              window.location.href = "/research/4_research.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },];
