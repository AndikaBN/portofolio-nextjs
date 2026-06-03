# Portfolio Design Direction: Mature Neo Brutalism

## 1. Design Goal

This portfolio should look bold, clean, personal, and professional.

The UI should feel like a real developer portfolio, not an AI-generated SaaS landing page.

The style is Mature Neo Brutalism:

* Strong black borders
* Solid hard shadows
* Flat colors
* Bold typography
* Clear section hierarchy
* Slightly playful but still professional
* Easy to scan by recruiters

## 2. Personality

The portfolio should communicate:

* Practical developer
* Product-minded
* Mobile Developer and Full-Stack Developer
* Able to build real client projects
* Confident but not arrogant
* Creative but still professional

## 3. Visual Style

### Base Style

Use:

* Off-white or cream background
* Near-black text
* Thick black borders
* Solid shadow without blur
* Flat color accents
* Large but controlled typography
* Geometric card layout
* Clear spacing between sections

Avoid:

* Purple-blue AI gradients
* Glassmorphism
* Glow effects
* Floating blob background
* Too many animations
* Too many colors in one screen
* Generic AI-style cards
* Overly polished SaaS landing page look

## 4. Color Palette

Recommended palette:

```css
--background: #F7F1E1;
--foreground: #111111;
--primary: #FFD93D;
--secondary: #4D96FF;
--accent: #6BCB77;
--danger-accent: #FF6B6B;
--muted: #EFE7D0;
--border: #111111;
```

Color usage:

* Background should mostly use off-white or cream.
* Text should mostly use near-black.
* Yellow can be the main accent.
* Blue or green can be secondary accents.
* Red/pink/orange should only be used as small highlights.
* Do not use more than 2–3 accent colors heavily.

## 5. Typography

Typography should be bold but readable.

Recommended direction:

* Hero heading: large, bold, direct
* Section title: bold with strong contrast
* Body text: readable, not too small
* Project description: concise and scannable
* Avoid overly dramatic AI copywriting

Good copywriting style:

* Clear
* Human
* Specific
* Developer-focused
* Not too formal
* Not too marketing-heavy

Avoid phrases like:

* "Crafting digital experiences"
* "Transforming ideas into reality"
* "Passionate developer creating innovative solutions"
* "Where creativity meets technology"

Prefer phrases like:

* "I build mobile and web products with Flutter, Laravel, and Next.js."
* "Selected client projects, real features, and production-focused work."
* "Full-stack and mobile developer focused on clean UI, APIs, and reliable delivery."

## 6. Layout Rules

The layout should be mobile-first.

General rules:

* Use generous spacing between sections.
* Do not make every section look like the same card.
* Mix layout rhythm: hero, split sections, cards, timeline, project case studies.
* Keep content easy to scan.
* Avoid overcrowding the page.
* Use asymmetry carefully.
* Keep the design bold but organized.

## 7. Component Rules

### Buttons

Use Neo Brutalism button style:

* Thick black border
* Solid background
* Hard shadow
* Clear hover interaction

Example Tailwind style:

```tsx
className="border-2 border-black bg-yellow-300 px-5 py-3 font-bold text-black shadow-[4px_4px_0px_#000] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000]"
```

### Cards

Cards should use:

* Thick border
* Hard shadow
* Solid background
* Clear title
* Short useful content
* Not too much blur or gradient

Example Tailwind style:

```tsx
className="border-2 border-black bg-white p-6 shadow-[6px_6px_0px_#000]"
```

### Badges

Badges should be simple:

* Border black
* Small padding
* Solid muted/accent background
* Not too many badges in one row

Example:

```tsx
className="border border-black bg-yellow-200 px-3 py-1 text-sm font-semibold"
```

## 8. Section Direction

### Navbar

Navbar should be simple and strong.

Use:

* Border bottom
* Clean links
* Resume/contact CTA
* Sticky optional

Avoid:

* Transparent glass navbar
* Blur-heavy navbar
* Too many nav items

### Hero

Hero should immediately explain who the developer is.

Hero must include:

* Name
* Role
* Short value statement
* Primary CTA
* Secondary CTA
* Small personal visual/detail

Recommended tone:

"I build mobile and web products using Flutter, Laravel, and Next.js."

Avoid:

* Too much animation
* Abstract AI copy
* Too many floating objects

### About

About should feel personal but still concise.

Include:

* Short background
* What kind of products/projects the developer builds
* Main strengths
* Current focus

Avoid:

* Long biography
* Generic motivational text

### Skills

Group skills by category:

* Mobile
* Frontend
* Backend
* Database
* Tools
* Deployment

Do not display skills as random badges only.

Make it structured and easy to scan.

### Experience

Experience should show real contribution.

Each item should include:

* Role
* Company/project
* Period
* 2–4 bullet points
* Stack or responsibility

Use card or timeline style.

Avoid:

* Too much corporate wording
* Too many repeated bullet points

### Projects

Projects should look like mini case studies.

Each project should show:

* Project name
* Short description
* Role
* Tech stack
* Main features
* Impact or result if available
* Link or CTA if available

Avoid:

* Generic cards with only title and description
* Too many equal-looking project cards
* Fake-sounding impact

### Contact

Contact should be simple.

Include:

* Friendly short text
* Email
* GitHub/LinkedIn
* CTA button

Avoid:

* Big form if not needed
* Overly dramatic closing text

## 9. Responsive Rules

Mobile:

* One-column layout
* Buttons should stack or wrap nicely
* Text must not be too large
* Cards should not overflow
* Shadows should not make layout feel cramped

Tablet:

* Use two-column layout where useful
* Keep spacing balanced

Desktop:

* Use stronger layout composition
* Hero can use split layout
* Projects can use grid or featured project layout

## 10. Anti AI-Generated Checklist

Before finishing, check these:

* Does the UI still use generic purple/blue gradients?
* Are there too many glowing elements?
* Are all cards too similar?
* Is the copywriting too vague?
* Is the section order too template-like?
* Are there too many random badges?
* Does the hero sound like a SaaS landing page?
* Is the design too perfect but not personal?
* Does the portfolio clearly show real developer work?

If yes, improve it.

## 11. Final Quality Target

The final portfolio should feel:

* Bold
* Clean
* Human-made
* Recruiter-friendly
* Developer-focused
* Mature Neo Brutalism
* Easy to read
* Strong but not childish
