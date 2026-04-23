export type Resource = {
  id: number;
  title: string;
  desc: string;
  url: string;
  category: string;
  tags: string[];
  trending?: boolean;
  newRelease?: boolean;
};

export const categories = [
  "Frontend Frameworks",
  "UI Components & Libraries",
  "CSS Ecosystem",
  "JavaScript Ecosystem",
  "Backend Frameworks",
  "Databases & Auth",
  "DevOps & Hosting",
  "AI & Code Generation",
  "Mobile Development",
  "Code Editors & IDEs",
  "Design & Prototyping",
  "Animations & 3D",
  "Typography & Fonts",
  "Colors & Gradients",
  "Icons",
  "Images & Videos",
  "Testing & QA",
  "Learning & System Design",
];

export const resourcesData: Resource[] = [
  // --- UI Components & Libraries ---
  { id: 1, title: "shadcn/ui", desc: "Beautifully designed components that you can copy and paste.", url: "https://ui.shadcn.com", category: "UI Components & Libraries", tags: ["UI", "React", "Tailwind"], trending: true },
  { id: 32, title: "Magic UI", desc: "UI Library for Design Engineers. Animated React components.", url: "https://magicui.design/", category: "UI Components & Libraries", tags: ["UI", "Animation", "React"], trending: true },
  { id: 33, title: "Aceternity UI", desc: "Copy paste the most trending components and use them in your websites.", url: "https://ui.aceternity.com/", category: "UI Components & Libraries", tags: ["UI", "Tailwind", "Components"], trending: true },
  { id: 106, title: "Relume Library", desc: "The world's largest Webflow and Figma component library.", url: "https://library.relume.io/", category: "UI Components & Libraries", tags: ["Webflow", "Components"] },

  // --- Frontend Frameworks ---
  { id: 4, title: "Next.js", desc: "The React Framework for the Web.", url: "https://nextjs.org", category: "Frontend Frameworks", tags: ["Framework", "React"], trending: true },
  { id: 97, title: "Astro", desc: "The web framework that scales with you. Build fast content sites.", url: "https://astro.build/", category: "Frontend Frameworks", tags: ["Framework", "Fast"] },
  { id: 98, title: "HTMX", desc: "High power tools for HTML. Build modern UIs without JS frameworks.", url: "https://htmx.org/", category: "Frontend Frameworks", tags: ["HTML", "Minimalist"] },
  { id: 110, title: "SvelteKit", desc: "Web development, streamlined. The fastest way to build Svelte apps.", url: "https://kit.svelte.dev/", category: "Frontend Frameworks", tags: ["Framework", "Svelte"] },
  { id: 111, title: "Qwik", desc: "The HTML-first framework. Instant loading web apps.", url: "https://qwik.builder.io/", category: "Frontend Frameworks", tags: ["Framework", "Fast"] },
  { id: 5, title: "Vite", desc: "Next Generation Frontend Tooling.", url: "https://vitejs.dev", category: "Frontend Frameworks", tags: ["Build Tool", "Fast"] },

  // --- Animations & 3D ---
  { id: 3, title: "Framer Motion", desc: "Production-ready declarative animations for React.", url: "https://framer.com/motion", category: "Animations & 3D", tags: ["Animation", "React"] },
  { id: 123, title: "Spline", desc: "3D design tool in the browser with real-time collaboration.", url: "https://spline.design/", category: "Animations & 3D", tags: ["3D", "Design"], trending: true },
  { id: 124, title: "Rive", desc: "Build interactive animations that run anywhere.", url: "https://rive.app/", category: "Animations & 3D", tags: ["Animation", "Interactive"] },
  { id: 125, title: "LottieFiles", desc: "Lightweight, scalable animations for your websites and apps.", url: "https://lottiefiles.com/", category: "Animations & 3D", tags: ["Animation", "JSON"] },

  // --- Databases & Auth ---
  { id: 6, title: "Supabase", desc: "The open source Firebase alternative.", url: "https://supabase.com", category: "Databases & Auth", tags: ["Database", "Auth", "BaaS"], trending: true },
  { id: 7, title: "Prisma", desc: "Next-generation Node.js and TypeScript ORM.", url: "https://prisma.io", category: "Databases & Auth", tags: ["ORM", "TypeScript", "Database"] },
  { id: 28, title: "Drizzle ORM", desc: "TypeScript ORM that is headless and serverless ready.", url: "https://orm.drizzle.team/", category: "Databases & Auth", tags: ["ORM", "TypeScript"], trending: true },
  { id: 29, title: "Clerk", desc: "More than authentication. Complete user management.", url: "https://clerk.com/", category: "Databases & Auth", tags: ["Auth", "React"] },
  { id: 95, title: "Better Auth", desc: "The most comprehensive authentication framework for TypeScript.", url: "https://better-auth.com/", category: "Databases & Auth", tags: ["Auth", "TypeScript", "Security"], newRelease: true, trending: true },
  { id: 99, title: "Upstash", desc: "Serverless data platform (Redis, Kafka) for modern apps.", url: "https://upstash.com/", category: "Databases & Auth", tags: ["Database", "Serverless"] },
  { id: 100, title: "Neon", desc: "Serverless Postgres built for the cloud.", url: "https://neon.tech/", category: "Databases & Auth", tags: ["Database", "Postgres"] },
  { id: 101, title: "Turso", desc: "Edge SQLite database. Build for the edge.", url: "https://turso.tech/", category: "Databases & Auth", tags: ["Database", "SQLite", "Edge"] },
  { id: 107, title: "NextAuth.js", desc: "Authentication for Next.js. Flexible and secure.", url: "https://next-auth.js.org/", category: "Databases & Auth", tags: ["Auth", "Next.js"] },

  // --- AI & Code Generation ---
  { id: 113, title: "Trae", desc: "An adaptive AI IDE that understands your codebase and workflows.", url: "https://www.trae.ai/", category: "AI & Code Generation", tags: ["AI", "IDE", "Editor"], newRelease: true, trending: true },
  { id: 114, title: "Google Antigravity", desc: "Advanced Agentic AI Coding Assistant designed by Google DeepMind.", url: "https://deepmind.google/", category: "AI & Code Generation", tags: ["AI", "Agent", "Google"], newRelease: true, trending: true },
  { id: 115, title: "Windsurf", desc: "The world's first agentic IDE, built by Codeium.", url: "https://codeium.com/windsurf", category: "AI & Code Generation", tags: ["AI", "IDE"], trending: true },
  { id: 116, title: "PearAI", desc: "The Open Source AI Code Editor.", url: "https://trypear.ai/", category: "AI & Code Generation", tags: ["AI", "Editor", "Open Source"] },
  { id: 118, title: "Lovable", desc: "AI developer platform that builds full-stack apps from conversational prompts.", url: "https://lovable.dev/", category: "AI & Code Generation", tags: ["AI", "Generative"], newRelease: true },
  { id: 119, title: "GitHub Copilot Workspace", desc: "A Copilot-native developer environment for exploring and building.", url: "https://githubnext.com/projects/copilot-workspace", category: "AI & Code Generation", tags: ["AI", "GitHub"] },
  { id: 120, title: "Claude 3.5 Sonnet", desc: "Industry-leading AI model for writing code and reasoning.", url: "https://claude.ai/", category: "AI & Code Generation", tags: ["AI", "LLM"], trending: true },
  { id: 121, title: "Bolt.new", desc: "Prompt, run, edit, and deploy full-stack web apps in the browser.", url: "https://bolt.new/", category: "AI & Code Generation", tags: ["AI", "Generative", "Browser"], trending: true },
  { id: 122, title: "V0 by Vercel", desc: "Generate UI components and full screens with AI.", url: "https://v0.dev/", category: "AI & Code Generation", tags: ["AI", "UI", "React"] },
  { id: 10, title: "Hugging Face", desc: "The AI community building the future.", url: "https://huggingface.co", category: "AI & Code Generation", tags: ["Models", "Community"] },
  { id: 11, title: "OpenAI API", desc: "API for accessing cutting-edge AI models.", url: "https://openai.com/api", category: "AI & Code Generation", tags: ["API", "LLM"] },
  { id: 12, title: "LangChain", desc: "Building applications with LLMs through composability.", url: "https://langchain.com", category: "AI & Code Generation", tags: ["Framework", "LLM"] },
  { id: 108, title: "Codeium", desc: "Free AI code acceleration toolkit.", url: "https://codeium.com/", category: "AI & Code Generation", tags: ["AI", "Extension"] },

  // --- Design & Prototyping ---
  { id: 15, title: "Figma", desc: "The collaborative interface design tool.", url: "https://figma.com", category: "Design & Prototyping", tags: ["Design", "Prototyping"] },
  { id: 126, title: "Penpot", desc: "Open Source design and prototyping platform.", url: "https://penpot.app/", category: "Design & Prototyping", tags: ["Open Source", "Design"] },
  { id: 127, title: "Stitch", desc: "The rapid design tool for modern product teams.", url: "https://stitch.design/", category: "Design & Prototyping", tags: ["Design", "UI"] },
  { id: 109, title: "Locofy.ai", desc: "Convert Figma designs to React, Next.js, HTML, and more.", url: "https://www.locofy.ai/", category: "Design & Prototyping", tags: ["AI", "Code Generation"] },

  // --- Code Editors & IDEs ---
  { id: 96, title: "Cursor", desc: "The AI-first Code Editor built for pair-programming.", url: "https://cursor.sh/", category: "Code Editors & IDEs", tags: ["Editor", "AI"], trending: true },
  { id: 117, title: "Zed", desc: "High-performance, multiplayer code editor with AI integration.", url: "https://zed.dev/", category: "Code Editors & IDEs", tags: ["Editor", "Rust", "Fast"], trending: true },
  { id: 92, title: "Visual Studio Code", desc: "The best text editor in the world.", url: "https://code.visualstudio.com/", category: "Code Editors & IDEs", tags: ["Editor", "IDE"] },
  { id: 93, title: "Codepen", desc: "Essential tool to quickly test out ideas.", url: "https://codepen.io/", category: "Code Editors & IDEs", tags: ["Playground", "Code"] },

  // --- JavaScript Ecosystem ---
  { id: 27, title: "Bun", desc: "A fast all-in-one JavaScript runtime.", url: "https://bun.sh/", category: "JavaScript Ecosystem", tags: ["Runtime", "JS", "Fast"], trending: true },
  { id: 26, title: "Biome", desc: "One toolchain for your web project. Formatter and linter.", url: "https://biomejs.dev/", category: "JavaScript Ecosystem", tags: ["Linter", "Formatter", "Fast"] },
  { id: 30, title: "Zod", desc: "TypeScript-first schema validation with static type inference.", url: "https://zod.dev/", category: "JavaScript Ecosystem", tags: ["Validation", "TypeScript"] },
  { id: 25, title: "Zustand", desc: "Bear necessities for state management in React.", url: "https://github.com/pmndrs/zustand", category: "JavaScript Ecosystem", tags: ["State Management", "React"] },
  { id: 48, title: "You Might Not Need jQuery", desc: "Complete DOM manipulation reference for vanilla JS.", url: "https://youmightnotneedjquery.com/", category: "JavaScript Ecosystem", tags: ["DOM", "Vanilla JS"] },

  // --- CSS Ecosystem ---
  { id: 2, title: "Tailwind CSS", desc: "A utility-first CSS framework for rapid UI development.", url: "https://tailwindcss.com", category: "CSS Ecosystem", tags: ["CSS", "Framework"] },
  { id: 37, title: "CSS3 Reference by MDN", desc: "Comprehensive CSS properties reference.", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference", category: "CSS Ecosystem", tags: ["CSS", "Docs"] },
  { id: 41, title: "CSS for People Who Hate CSS", desc: "Guide on how to write better, cleaner and more reusable CSS code.", url: "https://paulcpederson.com/articles/css-for-people-who-hate-css/", category: "CSS Ecosystem", tags: ["Guide", "CSS"] },
  { id: 43, title: "CSS easing functions", desc: "An amazing collection of easing functions for CSS transitions.", url: "https://easings.net/", category: "CSS Ecosystem", tags: ["Animation", "CSS"] },

  // --- DevOps & Hosting ---
  { id: 8, title: "Vercel", desc: "Develop. Preview. Ship. For the best frontend teams.", url: "https://vercel.com", category: "DevOps & Hosting", tags: ["Hosting", "CI/CD"] },
  { id: 9, title: "Docker", desc: "Empowering App Development for Developers.", url: "https://docker.com", category: "DevOps & Hosting", tags: ["Containers", "Infrastructure"] },
  { id: 105, title: "Sentry", desc: "Application monitoring and error tracking software.", url: "https://sentry.io/", category: "DevOps & Hosting", tags: ["Monitoring", "Errors"] },

  // --- Mobile Development ---
  { id: 13, title: "Flutter", desc: "Build apps for any screen.", url: "https://flutter.dev", category: "Mobile Development", tags: ["Cross-platform", "Dart"] },
  { id: 14, title: "React Native", desc: "A framework for building native apps using React.", url: "https://reactnative.dev", category: "Mobile Development", tags: ["Cross-platform", "React"] },

  // --- Testing & QA ---
  { id: 102, title: "Storybook", desc: "Frontend workshop for UI component development and testing.", url: "https://storybook.js.org/", category: "Testing & QA", tags: ["UI", "Testing"] },
  { id: 103, title: "Playwright", desc: "Fast and reliable end-to-end testing for modern web apps.", url: "https://playwright.dev/", category: "Testing & QA", tags: ["Testing", "E2E"] },

  // --- APIs & Network ---
  { id: 18, title: "Stripe", desc: "Financial infrastructure for the internet.", url: "https://stripe.com", category: "APIs", tags: ["Payments", "Infrastructure"] },
  { id: 19, title: "Resend", desc: "Email for developers.", url: "https://resend.com", category: "APIs", tags: ["Email", "DevTools"] },
  { id: 31, title: "tRPC", desc: "Move Fast and Break Nothing. End-to-end typesafe APIs made easy.", url: "https://trpc.io/", category: "APIs", tags: ["TypeScript", "RPC"] },
  { id: 22, title: "Postman", desc: "An API platform for building and using APIs.", url: "https://postman.com", category: "APIs", tags: ["API", "Testing"] },

  // --- Typography & Fonts ---
  { id: 52, title: "Google Fonts", desc: "The #1 resource for free and easy-to-use webfonts.", url: "https://fonts.google.com/", category: "Typography & Fonts", tags: ["Fonts", "Free"] },
  { id: 53, title: "Fontsquirrel", desc: "The best, 100% free fonts for commercial use.", url: "https://www.fontsquirrel.com/", category: "Typography & Fonts", tags: ["Fonts", "Free"] },

  // --- Colors & Gradients ---
  { id: 57, title: "Open Color", desc: "An open-source color scheme optimized for UI.", url: "https://yeun.github.io/open-color/", category: "Colors & Gradients", tags: ["Colors", "UI"] },
  { id: 61, title: "Colorhunt", desc: "Curated collection of beautiful color palettes.", url: "https://www.colorhunt.co/", category: "Colors & Gradients", tags: ["Colors", "Palettes"] },
  { id: 63, title: "UI Gradients", desc: "Collection of beautiful color gradients.", url: "https://uigradients.com/", category: "Colors & Gradients", tags: ["Colors", "Gradients"] },

  // --- Icons ---
  { id: 112, title: "Lucide Icons", desc: "Beautiful & consistent icon toolkit made by the community.", url: "https://lucide.dev/", category: "Icons", tags: ["Icons", "SVG"], trending: true },
  { id: 79, title: "Phosphor Icons", desc: "Beautiful, boxy SVG icon set with customizable thickness.", url: "https://phosphoricons.com/", category: "Icons", tags: ["Icons", "SVG"] },
  { id: 78, title: "Heroicons", desc: "A 230-pieces icon set by the makers of Tailwind CSS.", url: "https://heroicons.com/", category: "Icons", tags: ["Icons", "Tailwind"] },

  // --- Images & Videos ---
  { id: 68, title: "Unsplash", desc: "The internet’s source of freely-usable images.", url: "https://unsplash.com/", category: "Images & Videos", tags: ["Photos", "Free"] },
  { id: 72, title: "unDraw", desc: "Hundreds of free and open-source illustrations.", url: "https://undraw.co/illustrations", category: "Images & Videos", tags: ["Illustrations", "SVG"] },

  // --- Learning & System Design ---
  { id: 20, title: "ByteByteGo", desc: "System Design Interview prep and insights.", url: "https://bytebytego.com", category: "Learning & System Design", tags: ["Learning", "Interviews"] },
  { id: 23, title: "FreeCodeCamp", desc: "Learn to code — for free.", url: "https://freecodecamp.org", category: "Learning & System Design", tags: ["Free", "Courses"] },
  { id: 24, title: "Frontend Mentor", desc: "Improve your front-end coding skills by building real projects.", url: "https://frontendmentor.io", category: "Learning & System Design", tags: ["Challenges", "Frontend"] }
];
