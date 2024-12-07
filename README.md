## Getting Started:

- clone this repo
- go to project directory and run `npm install` to install all the dependencies
- run `npm run dev` to start development server
- open `http://localhost:3000` in browser to see the result

## Features:

- [x] **Course Overview:** Title, description
- [x] **SEO:** Title, description, default meta
- [x] Variant checklist, variant offer (countdown)
- [x] Multiple media trailers and media images
- [x] Variant and plan (use variant API)
- [x] Product checklist
- [x] Demo Class book
- [x] Instructors
- [x] Features
- [x] Pointers
- [x] Routine
- [x] Testimonials
- [x] About

## Challenges:

- Showing a section based on scroll. As I used next.js server component that's why it's not possible to apply Intersection Observer API or framer motion useInView hook. To make this working there need some refactoring but I didn't get enough time to do this.

## Improvement areas:

- UI could be more responsive but didn't get enough scope to do this.
- Navigation links are sticky top position but it jumped on top position if any of the links is clicked without scrolling to it's sticky position.
- Navigation links responsive behavior could be improved for smaller devices
- I used TypeScript, few types could be more strict.
