# Aimer

_A Motivational Todo App — Stay productive and inspired, one task at a time._

> _A simple yet powerful daily task tracker with motivational quotes to fuel your day._

## Overview

**Aimer** is a motivational and lightweight todo application built to elevate productivity through a positive and intuitive task management experience.

- **Problem it solves:** Task management apps often feel rigid or uninspiring. Aimer adds a human touch with motivation-driven design and subtle time-tracking features.
- **Who it's for:** Creatives, professionals, students, and anyone who needs structure in their daily workflow — without sacrificing inspiration.
- **What makes it unique:** Seamlessly blends productivity with motivational features like daily quotes and elegant UI, helping you stay focused and encouraged.

## Why This Project?

While many task management tools focus solely on organization, few prioritize **user mindset** and **inspiration**. Aimer is different:

- Most todo apps don’t provide emotional or motivational support.
- Aimer encourages consistent task completion through inspirational quotes and a lightweight, distraction-free interface.
- Built on modern frontend tech (Next.js, Zustand, React Query) for performance and responsiveness.

## Features

- **Daily Inspirational Quotes** to uplift your mood
- **Todo List Management** with prioritization and categorization
- **Lightweight Time Tracking** to help visualize productivity
- **Focus on Mindset & Motivation** while managing work
- **Dark Mode & Responsive UI** for comfort across all devices
- Built with React, Zustand, and Next UI for a seamless experience

## Roadmap

- [x] MVP with Todo & Quotes Integration
- [ ] Add Pomodoro Timer
- [ ] Google Calendar Sync
- [ ] Customizable Themes
- [ ] Mobile App via React Native or Expo

## Tech Stack

**Web:**
TypeScript · React · Next.js · React Query · Zustand · Next UI

**Cloud (Deployment):**
Vercel

## Getting Started

### Prerequisites

- Node.js >= 16
- npm or yarn
- Git

### Installation

```bash
git clone https://github.com/yourusername/aimer.git
cd aimer
npm install
npm run dev
```

## Environment Variables

Create a `.env.local` file with the following:

```env
NEXT_PUBLIC_QUOTES_API_URL=https://...
```

## Usage

```bash
# Start development server
npm run dev
```

## Architecture

```
[Frontend (Next.js/React)]
      |
[Zustand Store for State]
      |
[Quotes API or Local JSON]
```

Optional backend can be added later for authentication and cloud sync.

## Deployment

**Platform:** Vercel
**Domain:** [https://aimer.vercel.app](https://aimer.vercel.app)

## Contributing

We welcome contributions!

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit and push changes
4. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE)

## Credits

- Inspired by the need for mindful productivity
- Built by John Rommel Octaviano
- Powered by: React, Next.js, Zustand, and Vercel
