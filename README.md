# Pix Frontend

A modern React application built with Vite, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **React 18** - A JavaScript library for building user interfaces
- **TypeScript** - Typed superset of JavaScript
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - A utility-first CSS framework
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing with plugins
- **Autoprefixer** - Vendor prefix handling

## 📁 Project Structure

```
pix-frontend/
├── src/
│   ├── App.tsx           # Main application component
│   ├── index.css         # Global styles with Tailwind directives
│   ├── main.tsx          # Application entry point
│   └── vite-env.d.ts     # Vite environment types
├── public/               # Static assets
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── tsconfig.json         # TypeScript configuration
├── tsconfig.app.json     # App-specific TypeScript config
└── vite.config.ts        # Vite configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd pix-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run lint` - Run ESLint for code linting
- `npm run preview` - Preview the production build locally

## 🎨 Adding New Components

Create reusable components in the `src/components/` directory. Follow React best practices:

- Use TypeScript for type safety
- Leverage Tailwind CSS for styling
- Keep components focused and reusable
- Use proper naming conventions

## 🎯 Features

- ⚡ **Fast Development** - Hot module replacement with Vite
- 🎨 **Clean UI** - Styled with Tailwind CSS utility classes
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🔧 **TypeScript Support** - Full type safety and IntelliSense
- 📦 **Modern Tooling** - ESLint, PostCSS, and Autoprefixer
- 🔍 **Path Aliases** - Clean imports with `@/` prefix
- 🎆 **Ready to Extend** - Easy to add components and features

## 🌟 Customization

### Tailwind CSS

Customize your design system by editing `tailwind.config.js`. You can:
- Add custom colors
- Define custom spacing
- Create custom animations
- Add custom components

### Custom Styles

Add custom CSS or modify Tailwind's base styles in `src/index.css`. You can:
- Override default styles
- Add global custom styles
- Define CSS custom properties
- Import additional fonts or resources

## 📚 Learn More

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
