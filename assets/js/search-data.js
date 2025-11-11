// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "List of publications in chronological order, including peer-reviewed and preprint papers.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Curriculum Vitae of Beechui (Katy) Koo - MS in Applied Data Science @ University of Chicago",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-presenting-at-the-us-korea-conference-2025",
        
          title: "Presenting at the US-Korea Conference 2025",
        
        description: "My poster presentation on CT metal artifact reduction algorithms at the US-Korea Conference in Atlanta",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/us-korea-conference/";
          
        },
      },{id: "post-winning-2nd-place-at-united-airlines-genai-hackathon",
        
          title: "Winning 2nd Place at United Airlines GenAI Hackathon",
        
        description: "My experience building an agent-to-agent GenAI solution for real-time airline fault reporting at the United Airlines GenAI Hackathon",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/united-airlines-genai-hackathon/";
          
        },
      },{id: "post-presenting-at-uchicagograd-7th-annual-transcending-boundaries-research-symposium",
        
          title: "Presenting at UChicagoGRAD 7th Annual Transcending Boundaries Research Symposium",
        
        description: "My oral presentation on quantitative comparison of CT metal artifact reduction algorithms at the UChicagoGRAD research symposium",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/uchicago-transcending-boundaries-symposium/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-paper-stress-granules-are-shock-absorbers-that-prevent-excessive-innate-immune-responses-to-dsrna-was-published-in-molecular-cell-see-publication",
          title: 'Our paper “Stress granules are shock absorbers that prevent excessive innate immune responses...',
          description: "",
          section: "News",},{id: "news-started-my-m-s-in-applied-data-science-at-the-university-of-chicago",
          title: 'Started my M.S. in Applied Data Science at the University of Chicago.',
          description: "",
          section: "News",},{id: "news-our-paper-quantitative-comparison-of-ct-metal-artifact-reduction-mar-algorithms-in-radiation-oncology-was-submitted-to-radiation-physics-and-chemistry-now-under-minor-revision-see-publication",
          title: 'Our paper “Quantitative Comparison of CT Metal Artifact Reduction (MAR) Algorithms in Radiation...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%6F%6F%62%63%62%63@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/koobcbc", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/katybkoo", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
