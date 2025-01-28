# React Todo List Application

A modern, responsive Todo List application built with React, TypeScript, and Tailwind CSS.

![Todo List App Screenshot](https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=1000&q=80)

## Features

- ✨ Create, Read, Update, and Delete todos
- 🎯 Mark todos as complete/incomplete
- ✏️ Edit existing todos with inline editing
- 🎨 Modern and responsive design
- 🌈 Beautiful gradient background
- 💻 TypeScript for type safety
- 📱 Mobile-friendly interface

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Lucide React (for icons)
- Vite (for build tooling)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/react-todo-list.git
```

2. Navigate to the project directory
```bash
cd react-todo-list
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── types/
│   └── todo.ts         # TypeScript interfaces
├── App.tsx            # Main application component
├── main.tsx          # Application entry point
└── index.css         # Global styles and Tailwind imports
```

## Features in Detail

### Todo Management
- Add new todos with the input field
- Mark todos as complete/incomplete with a checkbox
- Edit existing todos with inline editing
- Delete todos with a single click

### User Interface
- Clean and intuitive design
- Responsive layout that works on all devices
- Smooth animations and transitions
- Clear visual feedback for user actions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Icons provided by [Lucide React](https://lucide.dev)
- Styling powered by [Tailwind CSS](https://tailwindcss.com)
- Built with [Vite](https://vitejs.dev)
