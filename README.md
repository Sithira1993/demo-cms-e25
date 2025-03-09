# Demo CMS

A content management system built with Payload CMS, providing a powerful admin panel and a beautifully designed website using Next.js.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
  - [Layout Builder](#layout-builder)
  - [Draft Preview](#draft-preview)
  - [Live Preview](#live-preview)
  - [Search](#search)
  - [Scheduled Publishing](#scheduled-publishing)
- [Deployment](#deployment)
  - [Payload Cloud](#payload-cloud)
  - [Vercel](#vercel)
- [Contributing](#contributing)
- [Questions and Support](#questions-and-support)

## Overview

This project is based on the official Payload Website Template, customized for our specific needs. It provides a complete solution for content management with a powerful admin panel and a production-ready website.

## Features

- **Authentication and Access Control**: User management with role-based permissions
- **Layout Builder**: Create unique page layouts with pre-configured building blocks
- **Draft & Live Preview**: Preview content changes before publishing
- **On-demand Revalidation**: Regenerate pages when content changes
- **SEO Optimization**: Built-in SEO tools for better discoverability
- **Search Functionality**: Integrated search capabilities
- **Scheduled Publishing**: Publish or unpublish content on a schedule
- **Modern Frontend**: Built with Next.js App Router, TypeScript, and TailwindCSS

## Getting Started

### Prerequisites

- Node.js (v16 or newer)
- pnpm (recommended) or npm
- MongoDB (local instance or connection string)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd demo-cms
   cp .env.example .env
   pnpm install
   ```

### Development

1. Start the development server:

```bash
 pnpm dev
```

2. Open http://localhost:3000 in your browser.

3. Follow the on-screen instructions to create your first admin user.

### Project Structure

demo-cms/
├── src/ # Source code
│ ├── app/ # Next.js app router
│ ├── collections/ # Payload collections
│ ├── components/ # React components
│ ├── globals/ # Payload globals
│ ├── blocks/ # Layout building blocks
│ └── utilities/ # Helper functions
├── public/ # Static assets
├── .env.example # Example environment variables
├── docker-compose.yml # Docker configuration
└── payload.config.ts # Payload CMS configuration

### Vercel

To deploy to Vercel:

1. Build the project:

   ```bash
   pnpm build
   ```

2. Start the production server:

   ```bash
   pnpm start
   ```

3. Follow Vercel's deployment guides for connecting your repository.

## Contributing

We follow a structured approach to contributions. Please see our CONTRIBUTING.md file for details on:

- Commit message conventions
- Code style guidelines
- Pull request process
- Development workflow
  Before submitting changes, please:

1. Make sure your code follows our style guidelines
2. Add tests for new features
3. Ensure all tests pass with pnpm test
4. Update documentation as needed

## Questions and Support

If you have questions or need support, please:

- Check existing GitHub issues
- Create a new issue if needed
- Reach out to the project maintainers
