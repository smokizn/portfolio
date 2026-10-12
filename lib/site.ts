export const site = {
  name: 'Sakar Adhikari',
  email: 'hello@sakaradhikari.dev',
  github: 'https://github.com/sakaradhikari',
  linkedin: 'https://www.linkedin.com/in/sakaradhikari',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  demo?: string
  label: string
}

export const projects: Project[] = [
  {
    title: 'Minesweeper Explorer',
    label: 'Featured',
    description:
      "A unique take on the classic Minesweeper formula where you don't click tiles—you explore the board as a character.",
    image: '/images/mineswiper.png',
    tags: ['Html', 'JavaScript', 'CSS'],
    github: `https://smokizn.github.io/Minesweeper-Explorer/`,
    demo: 'https://smokizn.github.io/Minesweeper-Explorer/',
  },
  {
    title: 'Mini Automation Hub',
    label: 'Tooling',
    description: 'A small dashboard for scheduling and running everyday scripts, with readable run logs.',
    image: '/images/automation-hub.png',
    tags: ['Python', 'FastAPI', 'React'],
    github: `${site.github}/mini-automation-hub`,
  },
  {
    title: 'Hyprland Dot file',
    label: 'Config',
    description: 'My personal Arch Linux + Hyprland dotfiles, built for a clean, dark, keyboard-driven desktop experience. ',
    image: '/images/hypr_dot.jpg',
    tags: ['Shell', 'Lua','Python'],
    github: `${site.github}/dot_hypr`,
  },
  {
    title: 'Zoro Browser Engine',
    label: 'Experimental',
    description: 'A toy rendering engine that parses HTML/CSS into a layout tree and paints it.',
    image: '/images/zoro-browser.png',
    tags: ['C++', 'Parsing'],
    github: `${site.github}/zoro-browser-engine`,
  },
]
