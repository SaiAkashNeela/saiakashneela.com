# Sai Akash Neela - Portfolio Site

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. This project showcases my skills, experience, and projects in a clean and interactive interface.

![Portfolio Preview](https://www.saiakashneela.com)

## Features

- **Responsive Design**: Looks great on all devices, from mobile to desktop
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Animations**: Using Framer Motion for engaging UI interactions
- **Docker Ready**: Containerized for easy deployment
- **Modern UI**: Built with Tailwind CSS for a clean, modern look
- **Publications Section**: Showcase research papers and academic work
- **Contact Form**: Simple email-based contact system

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Docker (optional, for containerized deployment)

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/SaiAkashNeela/saiakashneela.com.git
   cd saiakashneela.com
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Docker Deployment

1. Build and run using the provided Docker configuration:
   ```bash
   ./docker/run.sh
   ```

2. Access the site at [http://localhost:3333](http://localhost:3333)

## Customizing the Portfolio

### Personal Information

1. Edit the components in the `src/components` directory to update content:
   - `Hero.js`: Update name, title, and introduction
   - `About.js`: Modify the about me section
   - `Experience.js`: Update your work experience
   - `Skills.js`: Modify your skills
   - `Publications.js`: Add your research papers and academic work
   - `Projects.js`: Showcase your projects
   - `Contact.js`: Update contact information

### Styling

1. Colors and theme:
   - Edit `tailwind.config.js` to modify color schemes
   - Update `src/index.css` and `src/App.css` for global styles

2. Layout:
   - Each component has its own styling that can be customized

### Adding New Sections

1. Create a new component in `src/components`
2. Import and add the component to `App.js`
3. Add navigation link in `Navbar.js` if needed

## Project Structure

```
saiakashneela.com/
├── public/             # Static files
├── src/                # Source code
│   ├── components/     # React components
│   ├── App.js          # Main application component
│   ├── index.js        # Entry point
│   └── ...
├── docker/             # Docker configuration
│   ├── Dockerfile      # Docker build instructions
│   ├── nginx.conf      # Nginx server configuration
│   └── ...
└── ...
```

## Technologies Used

- **React**: UI library
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Router**: For page navigation
- **Docker**: Containerization
- **Nginx**: Web server for production

## License

This project is open-source and available under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Icons provided by [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
