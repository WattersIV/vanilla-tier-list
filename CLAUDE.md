# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Development server**: `npm run dev` - starts Vite dev server
- **Build**: `npm run build` - runs TypeScript compilation then Vite build
- **Preview production build**: `npm run preview`

## Architecture

This is a drag-and-drop tier list application for ranking music festival artists. Built with vanilla TypeScript, Vite, and Tailwind CSS.

### Key Files

- `index.html` - Main HTML with tier list structure (S/A/B/C/F/Dont Know tiers) and festival selector
- `src/main.ts` - All application logic including artist data, drag-and-drop handlers, and localStorage persistence
- `src/index.css` - Tailwind imports plus custom CSS for genre tags, tooltips, and ribbon styling

### Data Model

Artists are stored as `Record<string, ArtistData>` objects where keys are artist names and values contain genre info. Each festival has its own artist list (e.g., `esca2026Artists`, `ileSoniqArtists`).

Genres are color-coded via `genreTagMap` which maps genre names to Tailwind border color classes.

Rankings persist to localStorage keyed by festival name (e.g., `escapade2025`, `esca2026`).

### Drag-and-Drop System

- Items have `draggable="true"` attribute
- `handleDragStart` removes item from saved rankings
- `handleDragover` calculates insertion position using `getClosestSiblingToRight/Left`
- `handleDragEnd` saves new ranking position to localStorage

### Adding a New Festival

1. Create artist object (e.g., `const newFestivalArtists: Record<string, ArtistData> = {...}`)
2. Add entry to `festivalInfo` object
3. Add `<option>` to festival selector in `index.html`
