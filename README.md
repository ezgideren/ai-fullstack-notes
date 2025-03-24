# Mood Journal - AI-Powered Note Taking Application

## Overview

Mood Journal is a full-stack application that allows users to create, update, and analyze personal notes. The application uses AI to analyze the emotional content of each entry, providing insights into the user's mood, sentiment, and overall tone.

## Features

- **User Authentication**: Secure login using Clerk authentication
- **Note Management**: Create and update personal notes
- **AI Analysis**: Automatic analysis of note content including:
  - Mood detection
  - Sentiment scoring (-10 to 10 scale)
  - Subject identification
  - Summary generation
  - Color representation of mood
- **Question & Answer**: Ask questions about your notes and get AI-generated answers based on your journal content

## Tech Stack

- **Frontend**: Next.js
- **Backend**: Next.js API Routes
- **Database**: Prisma ORM
- **Authentication**: Clerk
- **AI/ML**: LangChain with OpenAI models
- **Deployment**: Vercel

## Project Structure

```
├── app/
│   ├── api/                 # API routes
│   │   ├── notes/           # Note management endpoints
│   │   └── question/        # Q&A endpoint
├── utils/
│   ├── ai.ts                # AI analysis utilities
│   ├── api.ts               # API client functions
│   ├── auth.ts              # Authentication utilities
│   └── db.ts                # Database connection
├── middleware.ts            # Next.js middleware
└── next.config.ts           # Next.js configuration
```

## API Endpoints

- `POST /api/notes`: Create a new note
- `PATCH /api/notes/[id]`: Update an existing note
- `POST /api/question`: Ask a question about your notes

## AI Capabilities

The application uses OpenAI's GPT models to:

1. **Analyze Note Content**: Each note is analyzed to extract:
   - Mood
   - Summary
   - Subject
   - Negative sentiment detection
   - Color representation
   - Sentiment score

2. **Answer Questions**: Users can ask questions about their notes, and the AI will search through relevant entries to provide answers.

## Setup and Deployment

### Prerequisites

- Node.js
- OpenAI API key
- Clerk account
- Database (compatible with Prisma)

### Environment Variables

```
# Database
DATABASE_URL=your_database_connection_string

# OpenAI
OPENAI_API_KEY=your_openai_api_key

# Clerk
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### Deployment

This project is configured for easy deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure the environment variables
3. Deploy

## Local Development

```bash
# Clone the repository
git clone https://github.com/yourusername/mood-journal.git
```

```bash
# Install dependencies
npm install
```

```bash
# Set up environment variables
cp .env.example .env.local
```

```bash
# Run the development server
npm run dev
```
