/* ================================================================
   Muhammad Yasir — Portfolio | script.js
   Full Stack Developer | Islamabad, Pakistan
   ================================================================ */

'use strict';

/* ================================================================
   DATA
   ================================================================ */

const DATA = {

    personal: {
        name: 'Muhammad Yasir',
        role: 'Full Stack Developer',
        email: 'myasirtech4831@gmail.com',
        location: 'Islamabad, Pakistan',
        github: 'https://github.com/YasirAwan4831',
        linkedin: 'https://www.linkedin.com/in/yasirawan4831/',
        instagram: 'https://www.instagram.com/yasirawan4831/',
        twitter: 'https://x.com/YasirAwan4831',
        facebook: 'https://www.facebook.com/profile.php?id=61575935942197',
        whatsapp: 'https://call.whatsapp.com/voice/Vy6FTmNnwmVqZPvP7XFIfk',
        youtube: 'https://www.youtube.com/@YasirTech-t1d',
        medium: 'https://medium.com/@YasirAwan4831',
        website: 'https://yasirawaninfo.vercel.app/',
        cv: '/assets/m-cv.pdf',
        avatar: '/assets/my-pic.jpeg',
        bio: [
            'I am a passionate <strong>Full Stack Developer</strong> with 2+ years of hands-on experience building modern web applications. I specialize in creating interactive, responsive and performance-optimized digital experiences from frontend to backend.',
            'My journey began with a deep curiosity for how the web works, which evolved into a professional career crafting clean code and beautiful interfaces. I thrive on transforming complex problems into elegant, user-friendly solutions.',
            'I am currently continuing my studies in <strong>Information Technology</strong> while constantly learning new technologies and improving my development skills.'
        ],
        ambitions: [
            'Build scalable SaaS products that solve real-world problems',
            'Contribute to open source and grow the developer community',
            'Grow into a Senior Full Stack Engineer within 2 years',
            'Launch my own tech startup focused on EdTech in Pakistan'
        ]
    },

    heroStats: [
        { num: '25+', label: 'Projects' },
        { num: '2+', label: 'Years Exp.' },
        { num: '4+', label: 'Internships' }
    ],

    typedPhrases: [
        'Full Stack Developer',
        'Frontend Engineer',
        'UI / UX Enthusiast',
        'WordPress Developer',
        'AI Integrations Dev',
        'Problem Solver'
    ],

    floatCards: [
        { icon: 'fab fa-react', label: 'React', cls: 'fc1', color: '#61dafb' },
        { icon: 'fab fa-node-js', label: 'Node.js', cls: 'fc2', color: '#339933' },
        { icon: 'fab fa-js', label: 'JavaScript', cls: 'fc3', color: '#f7df1e' }
    ],

    socials: [
        { icon: 'fab fa-github', url: 'https://github.com/YasirAwan4831', label: 'GitHub' },
        { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/yasirawan4831/', label: 'LinkedIn' },
        { icon: 'fas fa-envelope', url: 'mailto:myasirtech4831@gmail.com', label: 'Email' },
        { icon: 'fas fa-link', url: 'https://yasirawan4831.github.io/futuristic-links-dashboard/', label: 'Linktree' }
    ],

    allSocials: [
        { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/yasirawan4831/', label: 'LinkedIn' },
        { icon: 'fab fa-github', url: 'https://github.com/YasirAwan4831', label: 'GitHub' },
        { icon: 'fab fa-instagram', url: 'https://www.instagram.com/yasirawan4831/', label: 'Instagram' },
        { icon: 'fas fa-link', url: 'https://yasirawan4831.github.io/futuristic-links-dashboard/', label: 'Linktree' },
        { icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/profile.php?id=61575935942197', label: 'Facebook' },
        { icon: 'fas fa-c', url: 'https://coderlegion.com/user/YasirAwan4831', label: 'CoderLegion' },
        { icon: 'fab fa-youtube', url: 'https://www.youtube.com/@YasirTech-t1d', label: 'YouTube' },
        { icon: 'fab fa-medium-m', url: 'https://medium.com/@YasirAwan4831', label: 'Medium' }
    ],

    projectFilters: [
        { key: 'all', label: 'All Projects' },
        { key: 'fullstack', label: 'Full Stack' },
        { key: 'frontend', label: 'Frontend' },
        { key: 'python', label: 'Python / AI' },
        { key: 'wordpress', label: 'WordPress' }
    ],

    projects: [
        {
            id: 1,
            title: 'Portfolio Website',
            category: 'fullstack',
            year: '2025',
            description: 'A fully responsive and modern portfolio website built with clean UI/UX principles. Highlights professional skills, completed projects and technical expertise.',
            image: '/assets/project/portfolio-website.jpeg',
            tools: ['React', 'JavaScript', 'CSS3', 'Vite', 'GSAP', 'EmailJS', 'FetchAPI'],
            role: 'Solo Developer — Design, Development & Deployment',
            outcome: 'Deployed on Vercel, 100% Lighthouse score',
            liveLink: 'https://yasirawaninfo.vercel.app/',
            githubLink: 'https://github.com/YasirAwan4831/muhammad-yasir-portfolio'
        },
        {
            id: 2,
            title: 'Business Nexus Dashboard',
            category: 'Frontend',
            year: '2025',
            description: 'A modern React + Tailwind CSS dashboard for Investors & Entrepreneurs with role-based UI, meeting calendar, payment mock UI and guided onboarding.',
            image: '/assets/business-app.png',
            tools: ['React', 'TypeScript', 'Tailwind CSS', 'React Joyride', 'Dashboard', 'UI', 'OTP', 'Role-Based Auth'],
            role: 'Frontend Architect — UI System, Routing & Component Library',
            outcome: 'Complete investor-entrepreneur platform deployed on Vercel',
            liveLink: 'https://yasirawan.vercel.app/login',
            githubLink: 'https://github.com/YasirAwan4831/Nexus'
        },
        {
            id: 3,
            title: 'DigiTech Solutions Corporate Web',
            category: 'Frontend',
            year: '2026',
            description: 'A frontend-focused architectural overview of DigiTech Solutions, highlighting AI-driven services, system design & product vision for demonstration & recruitment purposes.',
            image: '/assets/digitech.jpg',
            tools: ['React', 'Tailwind CSS', 'VITE', 'JavaScript', 'React Joyride', 'Dashboard', 'UI', 'GSAP', 'Lottie'],
            role: 'Frontend Architect — UI System, Routing & Component Library',
            outcome: 'Complete investor-entrepreneur platform deployed on Vercel',
            liveLink: 'https://github.com/YasirAwan4831/digitech-solutions-ai-platform-overview00/blob/main/README.md',
            githubLink: 'https://github.com/YasirAwan4831/digitech-solutions-ai-platform-overview00'
        },
        {
            id: 4,
            title: 'E-Commerce Store',
            category: 'Frontend',
            year: '2025',
            description: 'A fully functional e-commerce website with product listings, dynamic pages, cart handling and complete user-side shopping experience.',
            image: '/assets/project/e-commerce.jpeg',
            tools: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX', 'Responsive Design', 'LocalStorage API', 'DOM Manipulation', 'Font Awesome'],
            role: 'Full Stack Developer — Architecture, UI & Cart Logic',
            outcome: '30+ products, smooth cart UX, deployed on Netlify',
            liveLink: 'https://yasirawan-devhub-corporation-intern.netlify.app/',
            githubLink: 'https://github.com/YasirAwan4831/developerhub-corporation-internship--Task_1_Ecommerce_Website'
        },

        {
            id: 5,
            title: 'Typing Practice Web App',
            category: 'Frontend',
            year: '2026',
            description: 'A modern typing practice web app built with React and Vite featuring speed tests, accuracy tracking, performance charts and history management.',
            image: '/assets/typing-master-web.jpg',
            tools: ['React', 'VITE', 'JavaScript', 'Canvas API', 'Context API', 'localStorage API', 'Dark Mode', 'NPM' , 'JSON'],
            role: 'Frontend Developer — Full Feature Build',
            outcome: 'Persistent task management with zero backend dependency',
            liveLink: 'https://typing-master-react-tau.vercel.app/',
            githubLink: 'https://github.com/YasirAwan4831/typing-master-react'
        },

        {
            id: 6,
            title: 'YARIS AI Smart Chatbot',
            category: 'python',
            year: '2025',
            description: 'An interactive AI-powered chatbot built with React, Node.js, JavaScript and Google Gemini AI. Delivers smart context-aware responses with intelligent conversation flow.',
            image: '/assets/yaris-ai-chatbot.jpeg',
            tools: ['React', 'VITE', 'JavaScript', 'Node.JS', 'API', 'Google Gemini AI', 'ChatBot','Chat UI', 'Google Cloud'],
            role: 'Full Stack Developer — AI Integration & UI Development',
            outcome: 'Context-aware chatbot with 95% response accuracy',
            liveLink: 'https://github.com/YasirAwan4831/YARIS-AI-Smart-Chat-Bot',
            githubLink: 'https://github.com/YasirAwan4831/YARIS-AI-Smart-Chat-Bot'
        },
        {
            id: 7,
            title: 'Web Dev Quiz App',
            category: 'frontend',
            year: '2025',
            description: 'An interactive web-dev quiz app featuring 300+ MCQs, user login, timed questions and strict anti-cheating system that blocks copying and tab switching.',
            image: '/assets/quiz-app.png',
            tools: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage', 'Anti-Cheat System', 'Timer-Based', 'Login', ' Scoring System'],
            role: 'Frontend Developer — Game Logic, UI & Security System',
            outcome: '300+ MCQs, zero external dependencies, live on GitHub Pages',
            liveLink: 'https://yasirawan4831.github.io/webdev-quiz-app/',
            githubLink: 'https://github.com/YasirAwan4831/webdev-quiz-app'
        },
        {
            id: 8,
            title: 'Product Listing Website',
            category: 'fullstack',
            year: '2025',
            description: 'A modern product listing website with responsive design, smooth scroll, login/signup system, My Cart functionality and complete payment flow.',
            image: '/assets/product-list.png',
            tools: ['JavaScript', 'HTML5', 'CSS3', 'Login System', 'Cart Logic', 'DOM Manipulation', 'E-Commerce UI', 'Filtering System'],
            role: 'Frontend Developer — Full Feature Build from Scratch',
            outcome: 'Complete shopping flow without any framework — pure JS',
            liveLink: 'https://github.com/YasirAwan4831/ApexcifyTechnologys-FrontendInternship/tree/main/product-listing-website_Task-3',
            githubLink: 'https://github.com/YasirAwan4831/ApexcifyTechnologys-FrontendInternship/tree/main/product-listing-website_Task-3'
        },
        {
            id: 9,
            title: 'Tourism Travel Website',
            category: 'frontend',
            year: '2025',
            description: 'A modern and responsive tourism website providing destination details, travel guides and popular attractions with dynamic JSON-powered content.',
            image: '/assets/project/tourism-travel-website.jpeg',
            tools: ['JavaScript', 'React', 'TypeScript', 'React Router', 'VITE', 'JSON', 'HTML5', 'CSS3', ],
            role: 'Frontend Developer — UI Design & JSON Data Integration',
            outcome: '50+ destination pages, fully responsive, live deployment',
            liveLink: 'https://github.com/YasirAwan4831',
            githubLink: 'https://github.com/YasirAwan4831'
        },
        {
            id: 10,
            title: 'Final Year Diploma Project',
            category: 'frontend',
            year: '2025',
            description: 'A multi-page Business web application built as a Final Year Project, featuring structured UI, dynamic content, animations and responsive layout.',
            image: '/assets/project/FYP-1.jpeg',
            tools: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Vanilla JS', 'Google Fonts', 'Multi-Page Structure',],
            role: 'Lead Developer — Full Project Lifecycle from Design to Deploy',
            outcome: 'FYP Grade A — Deployed on W3Spaces',
            liveLink: 'https://yasirawaninfo-com.w3spaces.com/index.html',
            githubLink: 'https://github.com/YasirAwan4831/Final-Year-Diploma-Web-Project'
        },
        {
            id: 11,
            title: 'Marketing Agency (WordPress)',
            category: 'wordpress',
            year: '2024',
            description: 'A WordPress-based marketing agency website featuring service pages, portfolio section, contact forms and SEO-friendly layout.',
            image: '/assets/project/wpproject.jpeg',
            tools: ['WordPress', 'Elementor', 'Plugin', 'SEO', 'Gutenberg Blocks', 'WP Rocket', 'Agency Website'],
            role: 'WordPress Developer — Design, SEO & Content Strategy',
            outcome: 'Fully functional agency site with SEO optimization',
            liveLink: 'https://yasirawaninfo.lovestoblog.com/',
            githubLink: 'https://github.com/YasirAwan4831'
        },
        {
            id: 12,
            title: 'Python Image Processing',
            category: 'python',
            year: '2024',
            description: 'A Python-based computer vision project using OpenCV focused on real-time image processing and analysis with 10+ filter operations.',
            image: '/assets/python-project.png',
            tools: ['Python', 'Open CV', 'Computer Vision', 'Matplotlib',, 'Pillow', 'imutils', 'NumPy'],
            role: 'Python Developer — Algorithm Design & Implementation',
            outcome: 'Real-time image processing with 10+ filter operations',
            liveLink: 'https://github.com/YasirAwan4831/python-practice-project_0',
            githubLink: 'https://github.com/YasirAwan4831/python-practice-project_0'
        },
        {
            id: 13,
            title: 'Futuristic Links Dashboard',
            category: 'frontend',
            year: '2024',
            description: 'A futuristic JavaScript-based links dashboard with animated UI, canvas particle effects and smooth dark/light theme toggle.',
            image: '/assets/aii-links.png',
            tools: ['JavaScript', 'Vanilla JS', 'HTML5', 'Canvas API', 'CSS Animations', 'Dark/Light Mode', 'ESLint'],
            role: 'Frontend Developer — Creative UI & Canvas Animation',
            outcome: 'Viral-ready link-in-bio page with unique canvas effects',
            liveLink: 'https://yasirawan4831.github.io/futuristic-links-dashboard/',
            githubLink: 'https://github.com/YasirAwan4831/futuristic-links-dashboard'
        },
        {
            id: 14,
            title: 'To-Do List App',
            category: 'fullstack',
            year: '2024',
            description: 'A simple and interactive To-Do List application with add, edit, delete tasks, task counters, dark mode and localStorage data persistence.',
            image: '/assets/todo.jpg',
            tools: ['JavaScript', 'localStorage', 'Dark Mode', 'Web API', 'Vanilla JS', 'JSON', 'HTML', 'CSS3', 'Fonts'],
            role: 'Frontend Developer — Full Feature Build',
            outcome: 'Persistent task management with zero backend dependency',
            liveLink: 'https://yasirawan4831.github.io/arch-technologies-internship-task-2-todo-list/',
            githubLink: 'https://github.com/YasirAwan4831/arch-technologies-internship-task-2-todo-list'
        },

        {
            id: 15,
            title: 'Futuristic Login Form UI',
            category: 'frontend',
            year: '2025',
            description: 'A beautifully designed login & signup form with a dark futuristic UI, animated background, glassmorphism card and smooth transitions.',
            image: '/assets/project/Login form.png',
            tools: ['HTML5', 'CSS3', 'JavaScript', 'Glassmorphism', 'Animations', 'Email Validation', 'Responsive Design', 'Git & GitHub'],
            role: 'Frontend Developer — UI/UX Design & Implementation',
            outcome: 'Production-ready auth UI with premium visual design',
            liveLink: 'https://github.com/YasirAwan4831/modern-login-singup-page',
            githubLink: 'https://github.com/YasirAwan4831/modern-login-singup-page'
        }
    ],

    skillCategories: [
        {
            icon: 'fas fa-laptop-code',
            title: 'Frontend',
            items: [
                { icon: 'fab fa-html5', name: 'HTML5', color: '#f63601' },
                { icon: 'fab fa-css3-alt', name: 'CSS3', color: '#1572b6' },
                { icon: 'fab fa-js', name: 'JavaScript', color: '#fee103' },
                { icon: 'fab fa-react', name: 'React', color: 'rgb(59, 209, 250)' },
                { icon: 'fas fa-bolt', name: 'Vite', color: '#646cff' },
                { icon: 'fas fa-code', name: 'TypeScript', color: '#0095f8' }
            ]
        },
        {
            icon: 'fas fa-server',
            title: 'Backend',
            items: [
                { icon: 'fab fa-node-js', name: 'Node.js', color: '#25df25' },
                { icon: 'fas fa-database', name: 'Express.js', color: '#00e5a0' },
                { icon: 'fab fa-php', name: 'PHP', color: '#7b93fe' },
                { icon: 'fab fa-python', name: 'Python', color: '#2c8ddc' },
                { icon: 'fas fa-plug', name: 'REST APIs', color: '#ff6b6b' },
                { icon: 'fas fa-code', name: 'JSON', color: '#f8db00' }
            ]
        },
        {
            icon: 'fas fa-database',
            title: 'Database',
            items: [
                { icon: 'fas fa-database', name: 'MongoDB', color: '#47a248' },
                { icon: 'fas fa-database', name: 'MySQL', color: '#1682d4' },
                { icon: 'fas fa-fire', name: 'Firebase', color: '#f7501d' }
            ]
        },
        {
            icon: 'fas fa-paint-brush',
            title: 'Design & Tools',
            items: [
                { icon: 'fab fa-figma', name: 'Figma', color: '#f24e1e' },
                { icon: 'fas fa-palette', name: 'Canva', color: '#00c4cc' },
                { icon: 'fab fa-git-alt', name: 'Git', color: '#f05032' },
                { icon: 'fab fa-github', name: 'GitHub', color: '#6e5494' },
                { icon: 'fab fa-wordpress', name: 'WordPress', color: '#35bfff' },
                { icon: 'fas fa-robot', name: 'Open AI', color: '#412991' }
            ]
        }
    ],

    softSkills: [
        'Problem Solving', 'Team Collaboration', 'Communication',
        'Agile / Scrum', 'Time Management', 'Creativity',
        'Adaptability', 'Critical Thinking', 'Mentoring', 'Leadership'
    ],

experience: [
    {
        role: 'Full Stack Web Development Intern',
        company: 'ARCH Technologies',
        date: 'Mar 2026 – Present',
        type: 'Internship',
        desc: 'Currently working on real-world web development tasks, focusing on both frontend and backend fundamentals while improving practical development skills.',
        contributions: [
            'Building responsive web applications using HTML, CSS and JavaScript',
            'Developing projects like portfolio websites and task-based applications',
            'Practicing clean code structure and problem-solving techniques',
            'Continuously learning full stack development concepts'
        ],
        tech: ['React', 'TypeScript', 'JavaScript', 'Node.JS', 'Database', 'UI/UX', 'Full Stack' ],
        link: 'https://github.com/YasirAwan4831/arch-technologies-internship-task-1-portfolio-website',
        linkLabel: 'View Work',
        linkIcon: 'fab fa-github'
    },
    {
        role: 'Frontend Web Developer Intern',
        company: 'Apexcify Technologies',
        date: 'Dec 2025 – Jan 2026',
        type: 'Internship',
        desc: 'Worked on building modern and responsive user interfaces while improving frontend development skills in a professional environment.',
        contributions: [
            'Developed responsive UI components using HTML, CSS, JavaScript and  React',
            'Worked on real-world frontend tasks and layouts',
            'Improved website responsiveness for different screen sizes',
            'Collaborated with team members on development tasks'
        ],
        tech: ['JavaScript', 'UI/UX', 'HTML', 'CSS', 'Responsive Design', 'E-Commerce UI', 'Frontend Dev.', 'Git & GitHub'],
        link: 'https://github.com/YasirAwan4831/ApexcifyTechnologys-FrontendInternship',
        linkLabel: 'View Work',
        linkIcon: 'fab fa-github'
    },
    {
        role: 'Frontend Web Developer Intern',
        company: 'DeveloperHub Corporation',
        date: 'Nov 2025 – Jan 2026',
        type: 'Internship',
        desc: 'Gained hands-on experience in frontend web development by working on real projects and improving UI/UX skills.',
        contributions: [
            'Built user-friendly web pages using React / React Joyride, Tailwind CSS and Typescript',
            'Worked on project-based learning tasks',
            'Improved layout design and UI structure',
            'Used GitHub for version control and project submission, Vercel  For deployment'
        ],
        tech: ['React', 'React Joyride', 'Typescript', 'JavaScript', 'Tailwind CSS', 'Role-Based UI', 'Vercel', 'Git', 'GitHub'],
        link: 'https://github.com/YasirAwan4831/Nexus',
        linkLabel: 'View Work',
        linkIcon: 'fab fa-github'
    },
    {
        role: 'Career Development Intern',
        company: 'Pakistan Career Fire',
        date: 'Oct 2025 – Dec 2025',
        type: 'Internship',
        desc: 'Worked on career development initiatives, helping students improve their professional skills and career direction.',
        contributions: [
            'Guided students on basic career planning',
            'Created simple content for awareness and guidance',
            'Improved communication and mentoring skills',
            'Participated in online sessions and activities'
        ],
        tech: ['Communication', 'Career Guidance', 'Freelancing', 'Teamwork ', 'Content Creation', 'Digital Workflow', 'Digital Workflow'],
        link: 'https://www.linkedin.com/posts/yasirawan4831_pakistancareerfair-pcfinternship-finalprojectpresentation-activity-7411395614892244992-mZAJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFyt-1EB5XKMOcxukQpAzVmx6pIKiXdCz64',
        linkLabel: 'View Certificate',
        linkIcon: 'fab fa-linkedin'
    }
],

    expStats: [
        { num: '2+', label: 'Years Exp.' },
        { num: '4+', label: 'Internships' },
        { num: '20+', label: 'Projects' },
        { num: '100%', label: 'Satisfaction' }
    ],

    education: [
        {
            icon: 'fas fa-university',
            date: '2023 – 2027',
            degree: 'Bachelor of Science — Information Technology',
            school: 'Western Norway University of Applied Sciences',
            desc: 'Expanding knowledge in Information Technology through continuous learning and practical experience.',
            tags: ['IT', 'Coding', 'Tech', 'Software Development', 'Databases', 'Problem Solving']
        },
        {
            icon: 'fas fa-graduation-cap',
            date: '2024 – 2026',
            degree: 'Information Technology Diploma',
            school: 'RED-C Institute of Engineering & Technology, Islamabad',
            desc: 'Currently pursuing a Diploma in Information Technology, focusing on practical skills in web development, programming and modern IT tools.',
            tags: ['Programming', 'IT Tools', 'Computer Applications', 'Networking', 'MS Office']
        },
        {
            icon: 'fas fa-school',
            date: '2019 – 2021',
            degree: 'Secondary School Certificate (SSC)',
            school: 'Government High Secondary School Ghumawan',
            desc: 'Completed SSC with a strong academic foundation in science and mathematics.',
            tags: ['Biology', 'Chemistry', 'Physics', 'Mathematics', 'Science Basics']
        }
    ],

  certifications: [
    { icon: 'fas fa-code', name: 'Full Stack Web Development Diploma', issuer: 'National Institute of TSEP', year: '2024–2025', link: '/assets/nistep.jpg' },
    { icon: 'fab fa-wordpress', name: 'WordPress Web Development', issuer: 'Digi-Skills Training Program', year: '2025', link: 'assets/wp.pdf'},
    { icon: 'fas fa-globe', name: 'Frontend Development Intern ', issuer: 'Developer Hub Corporation', year: '2025-2026', link: 'assets/devh.jpg' },
    { icon: 'fas fa-laptop-code', name: 'Frontend Development Intern', issuer: 'Apexcify Technologies', year: '2026-2026', link: 'assets/aaa.jpg' },
    { icon: 'fas fa-shield-alt', name: 'Freelancing & Earning Skills (DigiSkills)', issuer: 'DigiSkills.pk', year: '2025', link: 'assets/frf.pdf' },
    { icon: 'fas fa-briefcase', name: 'Career Development Internship', issuer: 'Pakistan Career Fire', year: '2025-2026', link: 'assets/pcf.jpg' }
],

    achievements: [
    {
        icon: 'fas fa-briefcase',
        year: '2025',
        title: 'Frontend Development Intern',
        issuer: 'DevHub Corporation',
        desc: 'Completed internship by building responsive web interfaces and improving practical frontend development skills.'
    },
    {
        icon: 'fas fa-star',
        year: '2025',
        title: '12+ Projects Milestone',
        issuer: 'Personal Portfolio',
        desc: 'Successfully built 12+ web development projects to strengthen practical skills and problem-solving ability.'
    },
    {
        icon: 'fas fa-trophy',
        year: '2025',
        title: 'Top Performing Intern',
        issuer: 'Pakistan Career Fire',
        desc: 'Recognized for active participation and strong contribution in career development and mentoring activities.'
    },
    {
        icon: 'fas fa-code',
        year: '2024',
        title: 'GitHub Portfolio',
        issuer: 'GitHub',
        desc: 'Maintained multiple repositories showcasing consistent learning and development practice.'
    },
    {
            icon: 'fas fa-robot',
            year: '2025',
            title: 'AI Integration Developer',
            issuer: 'Self Achievement',
            desc: 'Successfully built and deployed YARIS AI Chatbot integrating Google Gemini API with React.'
    },
    {
        icon: 'fas fa-rocket',
        year: '2025',
        title: 'Multiple Internships Experience',
        issuer: 'Professional Growth',
        desc: 'Completed multiple internships to gain real-world experience and improve development skills.'
    }
],

    testimonials: [
    {
        text: 'Yasir helped improve our social media presence with consistent content and better engagement strategies. Very cooperative and easy to work with.',
        name: 'Ahmed R.',
        role: 'Small Business Owner',
        initial: 'A',
        stars: 5
    },
    {
        text: 'He optimized my LinkedIn profile professionally and guided me on personal branding. I started getting more profile views and connections.',
        name: 'Hassan M.',
        role: 'Job Seeker',
        initial: 'H',
        stars: 5
    },
    {
        text: 'Yasir designed a clean and professional CV for me. The layout and presentation were impressive and helped me stand out.',
        name: 'Usman K.',
        role: 'Student',
        initial: 'U',
        stars: 5
    },
    {
        text: 'He is currently working on our corporate website and has shown good understanding of requirements and modern web design practices.',
        name: 'Mehwish Fatima',
        role: 'Co Founder DigiTech Solutions',
        initial: 'C',
        stars: 5
    }
],

    blogPosts: [
{
    id: 'blog-001',
    title: 'How I Structured My React Portfolio Like a Real Product',
    category: 'Web Development',
    date: '2026',
    readTime: '5 min read',
    author: 'Muhammad Yasir',
    excerpt: 'Instead of building my portfolio as a simple demo, I structured it like a real-world product using component-based architecture, clean folder structure and production-level thinking.',
    image: 'assets/portfolio-pic.png',
    content: `
        <h3>Thinking Like a Product Builder</h3>
        <p>When I started building my React portfolio, my goal was simple — don’t treat it like a demo, treat it like a real product. This mindset completely changed how I approached structure, design and development.</p>

        <h3>Component-Based Structure</h3>
        <p>I used a reusable component approach where each section (Home, About, Projects, Contact) was built as a separate component. This made the code clean, scalable and easy to maintain.</p>

        <h3>Clean Folder Organization</h3>
        <p>Instead of mixing everything, I followed a structured folder system with clear naming conventions. This reflects how real-world React applications are built.</p>

        <h3>Real-World Features</h3>
        <p>I added practical features like a working contact form, responsive design and performance optimization. This made the project feel like a complete product instead of just UI.</p>

        <h3>Deployment</h3>
        <p>Finally, I deployed the project on Vercel for fast performance and easy updates.</p>

        <blockquote>“Structure matters as much as design when building real-world applications.”</blockquote>

        <p><strong>🔗 Read Full Blog:</strong> 
        <a href="https://coderlegion.com/11143/how-i-structured-my-react-portfolio-like-a-real-product" target="_blank">
        Click Here
        </a></p>
     `
      },

{
    id: 'blog-002',
    title: 'Google Gemini’s Personal Intelligence: How AI Is Becoming Context-Aware',
    category: 'Artificial Intelligence',
    date: '2026',
    readTime: '4 min read',
    author: 'Muhammad Yasir',
    excerpt: 'Google Gemini is evolving into a context-aware AI system with Personal Intelligence, changing how users interact with technology and how developers build intelligent applications.',
    image: 'assets/blog3.webp',
    content: `
        <h3>Introduction</h3>
        <p>Artificial Intelligence is rapidly evolving, and Google Gemini’s Personal Intelligence feature shows a major shift toward context-aware systems that understand user intent.</p>

        <h3>What is Personal Intelligence?</h3>
        <p>This feature allows Gemini to analyze contextual signals and provide responses that are more relevant, personalized and useful in real-world scenarios.</p>

        <h3>Multi-App Integration</h3>
        <p>Gemini connects with services like Gmail, YouTube and Search to understand user behavior and deliver smarter, more accurate responses.</p>

        <h3>Why It Matters</h3>
        <p>This evolution highlights the future of AI — systems that understand not just queries, but the purpose behind them, improving user experience and automation.</p>

        <blockquote>“The future of AI is not just answering questions — it’s understanding context.”</blockquote>

        <p><strong>🔗 Read Full Blog:</strong> 
        <a href="https://medium.com/@YasirAwan4831/google-geminis-personal-intelligence-how-ai-is-becoming-truly-context-aware-a7de3dbb3ce6" target="_blank">
        Click Here
        </a></p>
    `
},


    serviceGroups: [
        {
            title: 'Full Stack Web Development',
            icon: 'fas fa-code',
            plans: [
                {
                    name: 'Starter',
                    amount: '$150',
                    period: '/ project',
                    popular: false,
                    desc: 'Perfect for small businesses and individuals needing a simple web presence.',
                    features: [
                        { text: 'Up to 5 Pages', included: true },
                        { text: 'Responsive Design', included: true },
                        { text: 'Contact Form Integration', included: true },
                        { text: 'Basic SEO Setup', included: true },
                        { text: 'Backend / Database', included: false },
                        { text: 'API Integration', included: false }
                    ]
                },
                {
                    name: 'Professional',
                    amount: '$350',
                    period: '/ project',
                    popular: true,
                    desc: 'Complete web application for growing businesses with full features.',
                    features: [
                        { text: 'Up to 15 Pages', included: true },
                        { text: 'Responsive + Animated UI', included: true },
                        { text: 'Backend with Node.js/Express', included: true },
                        { text: 'Database Integration', included: true },
                        { text: 'API Integration', included: true },
                        { text: 'Performance Optimization', included: true }
                    ]
                },
                {
                    name: 'Enterprise',
                    amount: '$700+',
                    period: '/ project',
                    popular: false,
                    desc: 'Full-scale custom web applications for established businesses.',
                    features: [
                        { text: 'Unlimited Pages', included: true },
                        { text: 'Full Stack Architecture', included: true },
                        { text: 'Authentication System', included: true },
                        { text: 'Admin Dashboard', included: true },
                        { text: 'Advanced API Integrations', included: true },
                        { text: '3 Months Priority Support', included: true }
                    ]
                }
            ]
        },
        {
            title: 'Graphic Design Services',
            icon: 'fas fa-paint-brush',
            plans: [
                {
                    name: 'Basic',
                    amount: '$30',
                    period: '/ package',
                    popular: false,
                    desc: 'Essential design assets for startups and small projects.',
                    features: [
                        { text: 'Logo Design (2 Concepts)', included: true },
                        { text: '3 Social Media Posts', included: true },
                        { text: 'Business Card Design', included: true },
                        { text: '1 Revision Round', included: true },
                        { text: 'Brand Guidelines', included: false },
                        { text: 'Source Files', included: false }
                    ]
                },
                {
                    name: 'Standard',
                    amount: '$80',
                    period: '/ package',
                    popular: true,
                    desc: 'Complete branding package for professional businesses.',
                    features: [
                        { text: 'Logo Design (5 Concepts)', included: true },
                        { text: '10 Social Media Posts', included: true },
                        { text: 'Banner & Poster Design', included: true },
                        { text: 'Brand Color Palette', included: true },
                        { text: '3 Revision Rounds', included: true },
                        { text: 'Source Files (PSD/Figma)', included: true }
                    ]
                },
                {
                    name: 'Premium',
                    amount: '$180',
                    period: '/ package',
                    popular: false,
                    desc: 'Full brand identity and marketing design solution.',
                    features: [
                        { text: 'Full Brand Identity Kit', included: true },
                        { text: 'Unlimited Social Media Posts', included: true },
                        { text: 'UI/UX Mockups', included: true },
                        { text: 'Animated Posts', included: true },
                        { text: 'Unlimited Revisions', included: true },
                        { text: '48-Hour Priority Delivery', included: true }
                    ]
                }
            ]
        },
        {
            title: 'WordPress Development',
            icon: 'fab fa-wordpress',
            plans: [
                {
                    name: 'Basic',
                    amount: '$100',
                    period: '/ project',
                    popular: false,
                    desc: 'Simple WordPress site setup for individuals and freelancers.',
                    features: [
                        { text: 'Domain + Hosting Setup', included: true },
                        { text: 'Free Theme Installation', included: true },
                        { text: 'Up to 5 Pages', included: true },
                        { text: 'Contact Form Setup', included: true },
                        { text: 'Elementor Design', included: false },
                        { text: 'WooCommerce Store', included: false }
                    ]
                },
                {
                    name: 'Business',
                    amount: '$250',
                    period: '/ project',
                    popular: true,
                    desc: 'Professional WordPress site for businesses and agencies.',
                    features: [
                        { text: 'Premium Theme', included: true },
                        { text: 'Elementor Pro Design', included: true },
                        { text: 'Up to 12 Pages', included: true },
                        { text: 'WooCommerce Setup', included: true },
                        { text: 'Speed Optimization', included: true },
                        { text: 'Advanced SEO', included: true }
                    ]
                },
                {
                    name: 'Premium',
                    amount: '$500+',
                    period: '/ project',
                    popular: false,
                    desc: 'Full-scale WordPress solution for large businesses.',
                    features: [
                        { text: 'Custom Theme Development', included: true },
                        { text: 'Unlimited Pages', included: true },
                        { text: 'Advanced WooCommerce', included: true },
                        { text: 'Custom Plugin Dev', included: true },
                        { text: 'Full Security Suite', included: true },
                        { text: '3 Months Free Support', included: true }
                    ]
                }
            ]
        }
    ],

    contactDetails: [
        { icon: 'fas fa-envelope', label: 'Email', value: 'myasirtech4831@gmail.com', href: 'mailto:myasirtech4831@gmail.com' },
        { icon: 'fab fa-github', label: 'GitHub', value: 'github.com/YasirAwan4831', href: 'https://github.com/YasirAwan4831' },
        { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Islamabad, Pakistan', href: null },
        { icon: 'fas fa-clock', label: 'Response', value: 'Within 24 hours', href: null }
    ],

    footerLinks: {
        quickLinks: [
            { label: 'Home', href: '#home' },
            { label: 'About', href: '#about' },
            { label: 'Projects', href: '#projects' },
            { label: 'Skills', href: '#skills' },
            { label: 'Experience', href: '#experience' },
            { label: 'Blog', href: '#blog' }
        ],
        services: [
            { label: 'Full Stack Dev', href: '#services' },
            { label: 'Frontend Dev', href: '#services' },
            { label: 'Graphic Design', href: '#services' },
            { label: 'WordPress Dev', href: '#services' }
        ]
    }

};


/* ================================================================
   RENDER
   ================================================================ */

const RENDER = {

    heroStats() {
        const el = document.getElementById('heroStats');
        if (!el) return;
        el.innerHTML = DATA.heroStats.map((s, i) => `
            ${i > 0 ? '<div class="h-stat-div"></div>' : ''}
            <div class="h-stat">
                <span class="h-stat-n counter" data-target="${parseInt(s.num)}" data-suffix="${s.num.replace(/\d+/, '')}">${s.num}</span>
                <span class="h-stat-l">${s.label}</span>
            </div>
        `).join('');
    },

    heroSocials() {
        const el = document.getElementById('heroSocial');
        if (!el) return;
        el.innerHTML = DATA.socials.map(s => `
            <a href="${s.url}" target="_blank" class="h-soc" aria-label="${s.label}">
                <i class="${s.icon}"></i>
            </a>
        `).join('');
    },

    floatCards() {
        const el = document.getElementById('floatCards');
        if (!el) return;
        el.innerHTML = DATA.floatCards.map(c => `
            <div class="f-card ${c.cls}">
                <i class="${c.icon}" style="color:${c.color}"></i>
                <span>${c.label}</span>
            </div>
        `).join('');
    },

    about() {
        const el = document.getElementById('aboutContent');
        if (!el) return;
        const d = DATA.personal;
        el.innerHTML = `
            <div class="about-img-col" data-aos="fade-up">
                <div class="about-img">
                    <img src="${d.avatar}" alt="${d.name}">
                    <div class="about-dec"></div>
                </div>
                <div class="about-info">
                    <div class="info-row">
                        <div class="info-ico"><i class="fas fa-user"></i></div>
                        <div><strong>Full Name</strong><span>${d.name}</span></div>
                    </div>
                    <div class="info-row">
                        <div class="info-ico"><i class="fas fa-map-marker-alt"></i></div>
                        <div><strong>Location</strong><span>${d.location}</span></div>
                    </div>
                    <div class="info-row">
                        <div class="info-ico"><i class="fas fa-envelope"></i></div>
                        <div><strong>Email</strong><span>${d.email}</span></div>
                    </div>
                    <div class="info-row">
                        <div class="info-ico"><i class="fas fa-briefcase"></i></div>
                        <div><strong>Status</strong><span class="status-open">Open to Work</span></div>
                    </div>
                </div>
            </div>
            <div class="about-text" data-aos="fade-up">
                <h3 class="sub-title">I build things for the web</h3>
                ${d.bio.map(p => `<p>${p}</p>`).join('')}
                <div class="ambi-box">
                    <h4><i class="fas fa-rocket"></i> My Ambitions</h4>
                    <ul class="ambi-list">
                        ${d.ambitions.map(a => `<li><i class="fas fa-check-circle"></i>${a}</li>`).join('')}
                    </ul>
                </div>
                <div class="about-acts">
                    <a href="#contact" class="btn btn-primary">Let's Talk</a>
                    <a href="${d.cv}" download class="btn btn-outline">Download CV</a>
                </div>
            </div>
        `;
    },

    projectFilters() {
        const el = document.getElementById('projectFilters');
        if (!el) return;
        el.innerHTML = DATA.projectFilters.map((f, i) => `
            <button class="f-btn${i === 0 ? ' active' : ''}" data-filter="${f.key}">${f.label}</button>
        `).join('');
    },

    projects() {
        const el = document.getElementById('projectsGrid');
        if (!el) return;
        el.innerHTML = DATA.projects.map((p, i) => `
            <article class="proj-card${i >= 6 ? ' hidden' : ''}" data-category="${p.category}" data-aos="fade-up">
                <div class="proj-img">
                    <img src="${p.image}" alt="${p.title}" loading="lazy">
                    <div class="proj-overlay">
                        <a href="${p.liveLink}" target="_blank" class="ov-btn" aria-label="Live Demo"><i class="fas fa-external-link-alt"></i></a>
                        <a href="${p.githubLink}" target="_blank" class="ov-btn" aria-label="Source Code"><i class="fab fa-github"></i></a>
                    </div>
                </div>
                <div class="proj-body">
                    <div class="proj-meta">
                        <span class="proj-cat">${p.category.charAt(0).toUpperCase() + p.category.slice(1)}</span>
                        <span class="proj-yr">${p.year}</span>
                    </div>
                    <h3 class="proj-title">${p.title}</h3>
                    <p class="proj-desc">${p.description}</p>
                    <div class="proj-tags">
                        ${p.tools.slice(0, 5).map(t => `<span class="p-tag">${t}</span>`).join('')}
                        ${p.tools.length > 5 ? `<span class="p-tag">+${p.tools.length - 5}</span>` : ''}
                    </div>
                    <div class="proj-links">
                        <a href="${p.liveLink}" target="_blank" class="pl-btn"><i class="fas fa-external-link-alt"></i> Live</a>
                        <a href="${p.githubLink}" target="_blank" class="pl-btn ghost"><i class="fab fa-github"></i> Code</a>
                    </div>
                </div>
            </article>
        `).join('');
    },

    skills() {
        const el = document.getElementById('skillsContent');
        if (!el) return;
        const catsHTML = DATA.skillCategories.map(cat => `
            <div class="skill-cat" data-aos="fade-up">
                <div class="cat-head">
                    <i class="${cat.icon}"></i>
                    <h3>${cat.title}</h3>
                </div>
                <div class="skill-items">
                    ${cat.items.map(s => `
                        <div class="s-item">
                            <i class="${s.icon}" style="color:${s.color}"></i>
                            <span>${s.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
        el.innerHTML = `
            <div class="skills-cats">${catsHTML}</div>
            <div class="soft-skills" data-aos="fade-up">
                <h3>Soft Skills</h3>
                <div class="soft-tags">
                    ${DATA.softSkills.map(s => `<span class="st">${s}</span>`).join('')}
                </div>
            </div>
        `;
    },

    experience() {
        const el = document.getElementById('expContent');
        if (!el) return;
        el.innerHTML = `
            <div class="exp-timeline">
                ${DATA.experience.map(e => `
                    <div class="exp-item" data-aos="fade-up">
                        <div class="exp-dot"></div>
                        <div class="exp-card">
                            <div class="exp-top">
                                <div>
                                    <h3 class="exp-role">${e.role}</h3>
                                    <p class="exp-company">${e.company}</p>
                                </div>
                                <span class="exp-date">${e.date}</span>
                            </div>
                            <span class="exp-type">${e.type}</span>
                            <p class="exp-desc">${e.desc}</p>
                            <ul class="exp-contribs">
                                ${e.contributions.map(c => `<li>${c}</li>`).join('')}
                            </ul>
                            <div class="exp-tech">
                                ${e.tech.map(t => `<span class="et">${t}</span>`).join('')}
                            </div>
                            <a href="${e.link}" target="_blank" class="exp-lnk">
                                <i class="${e.linkIcon}"></i> ${e.linkLabel}
                            </a>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="exp-side" data-aos="fade-up">
                <div class="exp-stat-card">
                    ${DATA.expStats.map(s => `
                        <div class="e-stat">
                            <span class="big-n counter" data-target="${parseInt(s.num)}" data-suffix="${s.num.replace(/\d+/, '')}">${s.num}</span>
                            <span>${s.label}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="prof-btns">
                    <a href="https://github.com/YasirAwan4831" target="_blank" class="prof-btn">
                        <i class="fab fa-github"></i> GitHub Profile
                    </a>
                    <a href="https://www.linkedin.com/in/yasirawan4831/" target="_blank" class="prof-btn li">
                        <i class="fab fa-linkedin"></i> LinkedIn Profile
                    </a>
                </div>
            </div>
        `;
    },

    education() {
        const el = document.getElementById('eduContent');
        if (!el) return;
        el.innerHTML = `
            <div data-aos="fade-up">
                <h3 class="edu-col-title"><i class="fas fa-graduation-cap"></i> Education</h3>
                ${DATA.education.map(e => `
                    <div class="edu-item">
                        <div class="edu-ico"><i class="${e.icon}"></i></div>
                        <div class="edu-body">
                            <span class="edu-date">${e.date}</span>
                            <h4 class="edu-degree">${e.degree}</h4>
                            <p class="edu-school">${e.school}</p>
                            <p class="edu-desc">${e.desc}</p>
                            <div class="edu-tags">
                                ${e.tags.map(t => `<span class="etag">${t}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div data-aos="fade-up">
                <h3 class="edu-col-title"><i class="fas fa-certificate"></i> Certifications</h3>
                ${DATA.certifications.map(c => `
                    <div class="cert-card">
                        <div class="cert-ico"><i class="${c.icon}"></i></div>
                        <div class="cert-body">
                            <h4>${c.name}</h4>
                            <span class="cert-issuer">${c.issuer}</span>
                            <span class="cert-yr">${c.year}</span>
                        </div>
                        <a href="${c.link}" target="_blank" class="cert-link" aria-label="View Certificate">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                `).join('')}
            </div>
        `;
    },

    achievements() {
        const el = document.getElementById('achievementsGrid');
        if (!el) return;
        el.innerHTML = DATA.achievements.map((a, i) => `
            <div class="ach-card" data-aos="fade-up">
                <div class="ach-ico"><i class="${a.icon}"></i></div>
                <div>
                    <span class="ach-yr">${a.year}</span>
                    <h3>${a.title}</h3>
                    <span class="ach-issuer">${a.issuer}</span>
                    <p class="ach-desc">${a.desc}</p>
                </div>
            </div>
        `).join('');
    },

    testimonials() {
        const el = document.getElementById('testiGrid');
        if (!el) return;
        const stars = (n) => Array(n).fill('<i class="fas fa-star"></i>').join('');
        el.innerHTML = DATA.testimonials.map((t, i) => `
            <div class="testi-card" data-aos="fade-up" data-aos-delay="${i * 100}">
                <span class="testi-q">"</span>
                <p class="testi-text">${t.text}</p>
                <div class="testi-author">
                    <div class="testi-av">${t.initial}</div>
                    <div class="testi-info">
                        <strong>${t.name}</strong>
                        <span>${t.role}</span>
                    </div>
                    <div class="testi-stars">${stars(t.stars)}</div>
                </div>
            </div>
        `).join('');
    },

    blog() {
        const el = document.getElementById('blogGrid');
        if (!el) return;
        el.innerHTML = DATA.blogPosts.map(post => `
            <article class="blog-card" data-post-id="${post.id}" data-aos="fade-up" tabindex="0" role="button" aria-label="Read: ${post.title}">
                <div class="blog-img">
                    <img src="${post.image}" alt="${post.title}" loading="lazy">
                    <span class="blog-cat">${post.category}</span>
                </div>
                <div class="blog-body">
                    <div class="blog-meta">
                        <span><i class="fas fa-calendar"></i> ${post.date}</span>
                        <span><i class="fas fa-clock"></i> ${post.readTime}</span>
                    </div>
                    <h3 class="blog-title">${post.title}</h3>
                    <p class="blog-excerpt">${post.excerpt}</p>
                    <span class="blog-read">Read Article <i class="fas fa-arrow-right"></i></span>
                </div>
            </article>
        `).join('');
    },

    services() {
        const el = document.getElementById('servicesContent');
        if (!el) return;
        el.innerHTML = `
            <div class="services-wrap">
                ${DATA.serviceGroups.map(group => `
                    <div class="service-group" data-aos="fade-up">
                        <h3><i class="${group.icon}"></i> ${group.title}</h3>
                        <div class="plans-grid">
                            ${group.plans.map(plan => `
                                <div class="plan-card${plan.popular ? ' popular' : ''}">
                                    ${plan.popular ? '<span class="plan-badge">Most Popular</span>' : ''}
                                    <h4 class="plan-name">${plan.name}</h4>
                                    <div class="plan-price">
                                        <span class="amount">${plan.amount}</span>
                                        <span class="period">${plan.period}</span>
                                    </div>
                                    <p class="plan-desc">${plan.desc}</p>
                                    <ul class="plan-feats">
                                        ${plan.features.map(f => `
                                            <li class="${f.included ? '' : 'no'}">
                                                <i class="${f.included ? 'fas fa-check' : 'fas fa-times'}"></i>
                                                ${f.text}
                                            </li>
                                        `).join('')}
                                    </ul>
                                    <a href="#contact" class="plan-cta">
                                        Get Started <i class="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    contact() {
        const el = document.getElementById('contactContent');
        if (!el) return;
        el.innerHTML = `
            <div data-aos="fade-up">
                <div class="contact-info-card">
                    <h3>Let's talk about your project</h3>
                    <p>I'm always open to new opportunities, collaborations and exciting projects. Feel free to reach out anytime — I respond within 24 hours!</p>
                    <div class="c-details">
                        ${DATA.contactDetails.map(d => `
                            ${d.href ? `<a href="${d.href}" class="c-detail" ${d.href.startsWith('http') ? 'target="_blank"' : ''}>` : '<div class="c-detail">'}
                                <div class="c-ico"><i class="${d.icon}"></i></div>
                                <div>
                                    <strong>${d.label}</strong>
                                    <span>${d.value}</span>
                                </div>
                            ${d.href ? '</a>' : '</div>'}
                        `).join('')}
                    </div>
                </div>
                <div class="soc-block">
                    <h4>Find Me On</h4>
                    <div class="soc-grid">
                        ${DATA.allSocials.map(s => `
                            <a href="${s.url}" target="_blank" class="soc-btn ${s.cls || ''}" aria-label="${s.label}">
                                <i class="${s.icon}"></i>
                            </a>
                        `).join('')}
                    </div>
                </div>
            </div>
            <div class="contact-form-card" data-aos="fade-up">
                <form id="contactForm" class="contact-form" novalidate>
                    <div class="form-row">
                        <div class="form-grp">
                            <label for="cName">Full Name <span>*</span></label>
                            <input type="text" id="cName" name="name" placeholder="Your full name" required autocomplete="name">
                        </div>
                        <div class="form-grp">
                            <label for="cEmail">Email <span>*</span></label>
                            <input type="email" id="cEmail" name="email" placeholder="your@email.com" required autocomplete="email">
                        </div>
                    </div>
                    <div class="form-grp">
                        <label for="cSubject">Subject</label>
                        <input type="text" id="cSubject" name="subject" placeholder="What's this about?">
                    </div>
                    <div class="form-grp">
                        <label for="cService">Service Interested In</label>
                        <select id="cService" name="service">
                            <option value="">Select a service (optional)</option>
                            <option value="fullstack">Full Stack Web Development</option>
                            <option value="frontend">Frontend Development</option>
                            <option value="design">Graphic Design</option>
                            <option value="wordpress">WordPress Development</option>
                            <option value="other">Other / Custom</option>
                        </select>
                    </div>
                    <div class="form-grp">
                        <label for="cMsg">Message <span>*</span></label>
                        <textarea id="cMsg" name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
                    </div>
                    <button type="submit" class="form-submit" id="submitBtn">
                        <span>Send Message</span>
                        <i class="fas fa-paper-plane"></i>
                    </button>
                    <div class="form-status" id="formStatus" role="alert" aria-live="polite"></div>
                </form>
            </div>
        `;
    },

    footer() {
        const el = document.getElementById('footerGrid');
        const yr = document.getElementById('currentYear');
        if (yr) yr.textContent = new Date().getFullYear();
        if (!el) return;
        const d = DATA.personal;
        el.innerHTML = `
            <div class="footer-brand">
                <a href="#home" class="footer-logo">
                    &lt;<span class="accent">Yasir</span>/&gt;
                </a>
                <p>Full Stack Developer based in Islamabad, Pakistan. Building modern web experiences with clean code and thoughtful design.</p>
                <div class="footer-soc">
                    ${DATA.socials.map(s => `
                        <a href="${s.url}" target="_blank" class="f-soc" aria-label="${s.label}">
                            <i class="${s.icon}"></i>
                        </a>
                    `).join('')}
                </div>
            </div>
            <div class="footer-col">
                <h4>Quick Links</h4>
                <ul>
                    ${DATA.footerLinks.quickLinks.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}
                </ul>
            </div>
            <div class="footer-col">
                <h4>Services</h4>
                <ul>
                    ${DATA.footerLinks.services.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}
                </ul>
            </div>
            <div class="footer-col">
                <h4>Contact</h4>
                <div class="f-contact-item">
                    <i class="fas fa-envelope"></i>
                    <a href="mailto:${d.email}">${d.email}</a>
                </div>
                <div class="f-contact-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${d.location}</span>
                </div>
                <div class="f-contact-item">
                    <i class="fab fa-github"></i>
                    <a href="${d.github}" target="_blank">github.com/YasirAwan4831</a>
                </div>
            </div>
        `;
    }

};


/* ================================================================
   FEATURES
   ================================================================ */

/* ── PAGE LOADER ─────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('loader')?.classList.add('out');
    }, 600);
});


/* ── CUSTOM CURSOR ───────────────────────────────────────────── */
(function initCursor() {
    const dot = document.getElementById('cursorDot');
    const outline = document.getElementById('cursorOutline');
    if (!dot || !outline || window.innerWidth <= 1024) return;

    let mx = 0, my = 0, ox = 0, oy = 0;

    window.addEventListener('mousemove', (e) => {
        mx = e.clientX;
        my = e.clientY;
        dot.style.left = mx + 'px';
        dot.style.top = my + 'px';
    });

    const animate = () => {
        ox += (mx - ox) * 0.15;
        oy += (my - oy) * 0.15;
        outline.style.left = ox + 'px';
        outline.style.top = oy + 'px';
        requestAnimationFrame(animate);
    };
    animate();

    document.querySelectorAll('a, button, .proj-card, .blog-card, .plan-card, .s-item').forEach(el => {
        el.addEventListener('mouseenter', () => {
            dot.style.transform = 'translate(-50%,-50%) scale(2)';
            outline.style.transform = 'translate(-50%,-50%) scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            dot.style.transform = 'translate(-50%,-50%) scale(1)';
            outline.style.transform = 'translate(-50%,-50%) scale(1)';
        });
    });
})();


/* ── NAVBAR ──────────────────────────────────────────────────── */
(function initNavbar() {
    const navbar = document.getElementById('navbar');
    const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.getElementById('navMenu');
    const themeBtn = document.getElementById('themeBtn');
    const sections = document.querySelectorAll('section[id]');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const cur = window.scrollY;
        navbar?.classList.toggle('scrolled', cur > 50);



        /* Active nav highlight */
        const scrollPos = window.scrollY + 100;
        sections.forEach(section => {
            const top = section.offsetTop;
            const h = section.offsetHeight;
            const id = section.id;
            const link = document.querySelector(`.nav-link[href="#${id}"]`);
            if (link) link.classList.toggle('active', scrollPos >= top && scrollPos < top + h);
        });

        /* Back to top */
        document.getElementById('backTop')?.classList.toggle('show', cur > 400);

    }, { passive: true });

    /* Hamburger */
    menuBtn?.addEventListener('click', () => {
        menuBtn.classList.toggle('open');
        navMenu?.classList.toggle('open');
        document.body.style.overflow = navMenu?.classList.contains('open') ? 'hidden' : '';
    });

    navMenu?.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn?.classList.remove('open');
            navMenu?.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    /* Theme */
    const saved = localStorage.getItem('theme') || 'dark';
    if (saved === 'light') applyTheme('light');

    themeBtn?.addEventListener('click', () => {
        applyTheme(document.body.classList.contains('light-theme') ? 'dark' : 'light');
    });

    function applyTheme(theme) {
        document.body.classList.toggle('light-theme', theme === 'light');
        const icon = themeBtn?.querySelector('i');
        if (icon) icon.className = theme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
        localStorage.setItem('theme', theme);
    }
})();


/* ── SMOOTH SCROLL ───────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
    });
});


/* ── BACK TO TOP ─────────────────────────────────────────────── */
document.getElementById('backTop')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


/* ── TYPED TEXT ──────────────────────────────────────────────── */
(function initTyped() {
    const el = document.getElementById('typed');
    if (!el) return;
    const phrases = DATA.typedPhrases;
    let pi = 0, ci = 0, del = false;

    const tick = () => {
        const cur = phrases[pi];
        el.textContent = del ? cur.substring(0, ci - 1) : cur.substring(0, ci + 1);
        del ? ci-- : ci++;

        if (!del && ci === cur.length) { del = true; setTimeout(tick, 2000); return; }
        if (del && ci === 0) { del = false; pi = (pi + 1) % phrases.length; }

        setTimeout(tick, del ? 50 : 100);
    };
    tick();
})();


/* ── AOS SCROLL ANIMATIONS ───────────────────────────────────── */
function initAOS() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('on');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));
}


/* ── COUNTER ANIMATION ───────────────────────────────────────── */
function initCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.querySelectorAll('.counter').forEach(el => {
                const target = parseInt(el.dataset.target) || 0;
                const suffix = el.dataset.suffix || '';
                const step = target / (1400 / 16);
                let count = 0;
                const timer = setInterval(() => {
                    count = Math.min(count + step, target);
                    el.textContent = Math.floor(count) + suffix;
                    if (count >= target) clearInterval(timer);
                }, 16);
            });
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.hero-stats, .exp-stat-card').forEach(el => observer.observe(el));
}


/* ── PROJECT FILTER & LOAD MORE ──────────────────────────────── */
function initProjects() {
    const grid = document.getElementById('projectsGrid');
    const filtersEl = document.getElementById('projectFilters');
    const loadBtn = document.getElementById('loadMoreBtn');
    let showing = 6;

    filtersEl?.addEventListener('click', (e) => {
        const btn = e.target.closest('.f-btn');
        if (!btn) return;
        filtersEl.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        grid?.querySelectorAll('.proj-card').forEach(card => {
            const show = filter === 'all' || card.dataset.category === filter;
            card.style.display = show ? '' : 'none';
        });
    });

    loadBtn?.addEventListener('click', () => {
        let shown = 0;
        grid?.querySelectorAll('.proj-card.hidden').forEach(card => {
            if (shown < 3) { card.classList.remove('hidden'); shown++; showing++; }
        });
        if (showing >= DATA.projects.length) loadBtn.style.display = 'none';
    });
}


/* ── TESTIMONIALS SLIDER ─────────────────────────────────────── */
/* ── TESTIMONIALS (NOW A GRID) ─────────────────────────────── */
// Slider logic removed as requested.


/* ── BLOG MODAL ──────────────────────────────────────────────── */
function initBlogModal() {
    const modal = document.getElementById('blogModal');
    const closeBtn = document.getElementById('closeModal');
    const modalBody = document.getElementById('modalContent');
    const blogGrid = document.getElementById('blogGrid');
    if (!modal) return;

    function openPost(id) {
        const post = DATA.blogPosts.find(p => p.id === id);
        if (!post) return;
        modalBody.innerHTML = `
            <span class="modal-post-cat">${post.category}</span>
            <h2 class="modal-post-title">${post.title}</h2>
            <div class="modal-post-meta">
                <span><i class="fas fa-user"></i> ${post.author}</span>
                <span><i class="fas fa-calendar"></i> ${post.date}</span>
                <span><i class="fas fa-clock"></i> ${post.readTime}</span>
            </div>
            <div class="modal-post-body">${post.content}</div>
        `;
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        modal.scrollTop = 0;
    }

    function closeModal() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }

    blogGrid?.addEventListener('click', (e) => {
        const card = e.target.closest('[data-post-id]');
        if (card) openPost(card.dataset.postId);
    });

    blogGrid?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const card = e.target.closest('[data-post-id]');
            if (card) openPost(card.dataset.postId);
        }
    });

    closeBtn?.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
}


/* ── CONTACT FORM ────────────────────────────────────────────── */
function initContactForm() {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    const btn = document.getElementById('submitBtn');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = form.querySelector('#cName')?.value.trim();
        const email = form.querySelector('#cEmail')?.value.trim();
        const message = form.querySelector('#cMsg')?.value.trim();

        if (!name || !email || !message) {
            showStatus('error', '⚠ Please fill in all required fields.');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showStatus('error', '⚠ Please enter a valid email address.');
            return;
        }

        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Sending…';

        await new Promise(r => setTimeout(r, 1500));

        btn.disabled = false;
        btn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
        form.reset();
        showStatus('success', '✓ Message sent! I\'ll reply within 24 hours. Thank you!');
        setTimeout(() => { if (status) status.style.display = 'none'; }, 5000);
    });

    function showStatus(cls, msg) {
        if (!status) return;
        status.className = `form-status ${cls}`;
        status.textContent = msg;
        status.style.display = 'block';
    }
}


/* ================================================================
   INIT — DOMContentLoaded
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* 1. سب سے پہلے سارا data render کریں */
    RENDER.heroStats();
    RENDER.heroSocials();
    RENDER.floatCards();
    RENDER.about();
    RENDER.projectFilters();
    RENDER.projects();
    RENDER.skills();
    RENDER.experience();
    RENDER.education();
    RENDER.achievements();
    RENDER.testimonials(); /* ← پہلے HTML render */
    RENDER.blog();
    RENDER.services();
    RENDER.contact();
    RENDER.footer();

    /* 2. پھر سارے features initialize کریں */
    /* Removed Testimonial Slider  */
    initProjects();
    initBlogModal();
    initContactForm();
    initCounters();

    /* 3. AOS animations — تھوڑی دیر بعد تاکہ DOM مکمل بن جائے */
    setTimeout(initAOS, 100);

    console.log('%c✦ Muhammad Yasir — Portfolio ✦', 'color:#00e5a0;font-size:14px;font-weight:bold');
    console.log('%c Full Stack Developer | Islamabad, Pakistan', 'color:#a0aec0;font-size:11px');

});