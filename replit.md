# Pratyush Portfolio

## Overview

This is a personal portfolio website for Pratyush, a creative developer and designer. The application showcases work, services, and provides contact functionality through a modern, futuristic design aesthetic combining glassmorphism and neon accents. Built as a full-stack application with a React frontend and Express backend, it features a contact form with message storage and multiple pages highlighting different aspects of the portfolio.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- React 18 with TypeScript for type safety and modern component patterns
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for lightweight client-side routing (alternative to React Router)

**UI Component System**
- Shadcn/ui component library with Radix UI primitives for accessible, unstyled components
- TailwindCSS for utility-first styling with custom design tokens
- Custom glassmorphism components (GlassCard) implementing the futuristic design aesthetic
- Extensive use of Radix UI components: dialogs, dropdowns, navigation, tooltips, forms, etc.

**State Management & Data Fetching**
- TanStack Query (React Query) for server state management, caching, and data synchronization
- Custom query client configuration with disabled refetching for static content
- Form state managed through React Hook Form with Zod validation

**Design System**
- Typography: Outfit (display) and Inter (body) from Google Fonts
- Color scheme: Custom HSL-based color system with support for glassmorphism effects
- Spacing: Tailwind's standard spacing scale (4, 6, 8, 12, 16, 20, 24, 32)
- Component library follows "new-york" style variant from shadcn/ui

**Page Structure**
- Home: Hero section with parallax effects, skills showcase, featured projects
- About: Timeline, values, professional journey
- Projects: Filterable project gallery with technology tags
- Services: Service offerings with detailed feature lists
- Contact: Contact form with validation and API integration

**Custom Hooks**
- `useScrollAnimation`: Intersection Observer-based scroll animations
- `useParallax`: Parallax scrolling effects
- `useIsMobile`: Responsive breakpoint detection
- `useToast`: Toast notification system

### Backend Architecture

**Server Framework**
- Express.js as the HTTP server framework
- ESM module system (type: "module")
- Custom middleware for request logging and JSON parsing with raw body capture

**API Design**
- RESTful API structure with `/api` prefix
- Single endpoint implemented: POST `/api/contact` for contact form submissions
- JSON request/response format with Zod schema validation
- Error handling with appropriate HTTP status codes (400 for validation, 500 for server errors)

**Development Setup**
- Vite integration in development mode with HMR support
- Middleware mode for seamless dev server integration
- Custom error logging with formatted timestamps
- Request/response logging for API endpoints with truncation for readability

**Production Build**
- esbuild for server-side code bundling
- Vite for client-side production builds
- Static file serving for built client assets
- Separate build output directories (dist/public for client, dist for server)

### Data Storage

**Storage Abstraction**
- Interface-based storage design (`IStorage`) allowing multiple implementations
- Currently implemented: `MemStorage` (in-memory storage using Maps)
- Designed for future database integration without API changes

**Data Models**
- Users: id, username, password (prepared for authentication features)
- Contact Messages: id, name, email, subject, message, createdAt
- UUID-based primary keys using `crypto.randomUUID()`

**Database Schema (Prepared)**
- Drizzle ORM configured for PostgreSQL
- Schema defined in `shared/schema.ts` for type-safe database access
- Zod schemas generated from Drizzle tables for validation
- Migration support configured via drizzle-kit

**Validation Layer**
- Drizzle-Zod integration for consistent validation between database and API
- Insert schemas omit auto-generated fields (id, timestamps)
- Type inference from schemas for end-to-end type safety

### External Dependencies

**Database (Configured)**
- PostgreSQL via Neon Database serverless driver (@neondatabase/serverless)
- Drizzle ORM for type-safe database queries and migrations
- Connection via DATABASE_URL environment variable

**UI Component Libraries**
- Radix UI: Complete suite of unstyled, accessible UI primitives
- Embla Carousel: Carousel/slider functionality
- Lucide React: Icon system
- CMDK: Command palette component
- Vaul: Drawer component

**Form & Validation**
- React Hook Form: Form state management and validation
- Zod: Schema validation for both client and server
- @hookform/resolvers: Integration between React Hook Form and Zod

**Styling & Utilities**
- TailwindCSS: Utility-first CSS framework
- class-variance-authority: Type-safe variant management
- clsx + tailwind-merge: Conditional className utilities
- date-fns: Date formatting and manipulation

**Development Tools**
- TypeScript: Static type checking across the stack
- Replit-specific plugins: runtime error modal, cartographer, dev banner
- tsx: TypeScript execution for development server
- esbuild: Fast JavaScript bundler for production

**Path Aliases**
- `@/*`: Client source files
- `@shared/*`: Shared types and schemas between client and server
- `@assets/*`: Static assets (images)