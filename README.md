# Amar Lahlouh — Developer Portfolio

A clean, modern, responsive developer portfolio built with plain **HTML5, CSS3, and vanilla JavaScript** — no frameworks, no build tools. Ready to deploy directly on **GitHub Pages**.

---

## About Me

Full-Stack Developer and Computer Engineering student at the **Lebanese International University (LIU)**, focused on building complete web and mobile applications — from frontend interfaces to backend APIs, databases, authentication, and payments.

---

## Technologies Used (this site)

- HTML5
- CSS3 (custom properties, Grid, Flexbox, no framework)
- Vanilla JavaScript (no libraries)
- Google Fonts: Sora, Inter, JetBrains Mono

## Technologies Featured (in the projects/skills)

Frontend: React.js, Vite, Tailwind CSS, Bootstrap, DaisyUI, React Router, Context API, Redux
Mobile: React Native, Expo
Backend: Node.js, Express.js, REST APIs, CORS
Databases: MongoDB, MySQL
Auth: Clerk, Google Sign-In, Apple Sign-In, RBAC, Protected Routes
Payments: Stripe
Data/APIs: TanStack Query, Data Fetching, Caching
Tools: Git, GitHub, ImageKit, Inngest, Sentry, Sevalla, Docker
Python/ML: Python, scikit-learn, pandas, matplotlib, seaborn

---

## Portfolio Sections

1. Navbar — sticky, responsive, active-section highlighting
2. Hero — intro, CTAs, animated code-terminal visual
3. About Me
4. Skills — categorized technology chips (no fake percentages)
5. Featured Project — E-Commerce Mobile App, with a details modal
6. Projects — Food Delivery App, Doctor Appointment System, AI Image Generator, Travel Senior, Car Rental System
7. Education — Lebanese International University (LIU)
8. Certificates — placeholder cards, ready for real certificates
9. Contact — contact details + validated contact form
10. Footer — social links + dynamic year

## Featured Project

**E-Commerce Mobile App** — React Native + Expo, Node.js + Express, MongoDB. A complete shopping app with Clerk authentication (Google/Apple sign-in), cart, checkout, Stripe payments, and a full admin dashboard (products, orders, customers, analytics). Click **View Details** on the site for the full feature breakdown.

---

## Project Structure

```text
amar-portfolio/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── Amar-Lahlouh-CV.pdf        ← add your real CV here
│
└── assets/
    ├── profile.jpg             ← optional, not currently wired into a section
    ├── ecommerce.jpg           ← featured project screenshot
    ├── food-delivery.jpg
    ├── doctor-appointment.jpg
    ├── ai-image-generator.jpg
    ├── travel-senior.jpg
    └── car-rental.jpg
```

> The site currently ships with elegant placeholder blocks instead of real images (since no screenshots were provided). Each placeholder has an HTML comment showing exactly which file to add and where. Once you add an image to `assets/`, replace the placeholder `<div class="img-placeholder">…</div>` with an `<img>` tag, e.g.:
>
> ```html
> <img src="assets/ecommerce.jpg" alt="E-Commerce Mobile App screenshot" />
> ```

---

## How to Run Locally

No build tools or installs required.

1. Download or clone the project folder.
2. Open `index.html` directly in your browser, **or** serve it locally for a nicer dev experience:
   ```bash
   # Python 3
   python -m http.server 5500
   # then visit http://localhost:5500
   ```

---

## Placeholders to Replace

Search the code for these and swap in your real information:

| Placeholder | Location | Replace with |
|---|---|---|
| `YOUR_GITHUB_URL` | Contact section, footer | Your GitHub profile URL |
| `YOUR_GITHUB_REPO_URL` | Project cards, featured project | Each project's real repo URL |
| `YOUR_LIVE_DEMO_URL` | Project cards | Each project's live demo URL |
| `YOUR_LINKEDIN_URL` | Contact section, footer | Your LinkedIn profile URL |
| `YOUR_EMAIL@example.com` | Contact section, footer | Your real email address |
| `YOUR_CERTIFICATE_LINK` | Certificates section | Link to each certificate (PDF, image, or Credly-style URL) |
| `Amar-Lahlouh-CV.pdf` | Navbar, hero | Add your actual CV PDF with this exact filename in the project root |
| `assets/*.jpg` comments | Featured/project cards, certificates | Add real screenshots and swap placeholder divs for `<img>` tags |

The Certificates section ships with 3 empty template cards — duplicate the `<div class="cert-card">…</div>` block in `index.html` for more, and fill in the title, issuing organization, date, optional description, and certificate link for each.

---

## Contact Form — Connecting Real Submissions

This is a **static site**, so the form only does client-side validation and shows a success message — it does not send real emails. To make it functional, pick one:

**Option A — Formspree**
1. Create a free form at [formspree.io](https://formspree.io).
2. Change the `<form id="contactForm" ...>` tag to include `action="https://formspree.io/f/YOUR_FORM_ID"` and `method="POST"`.
3. You can keep the existing JavaScript validation, or let Formspree handle the submission entirely.

**Option B — EmailJS**
1. Create an account at [emailjs.com](https://www.emailjs.com) and set up an email service/template.
2. Include the EmailJS SDK script tag in `index.html`.
3. In `script.js`, inside the form's `submit` handler (after validation passes), call `emailjs.send(...)` with your service ID, template ID, and public key instead of just showing the local success message.

---

## Deploying to GitHub Pages

1. **Create a GitHub repository**
   - Go to [github.com/new](https://github.com/new) and create a new repository (e.g. `amar-portfolio`).

2. **Add the files**
   - Copy `index.html`, `style.css`, `script.js`, `README.md`, `Amar-Lahlouh-CV.pdf`, and the `assets/` folder into your local repository folder.

3. **Commit and push**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/amar-portfolio.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - In your repository, go to **Settings → Pages**.
   - Under **Build and deployment → Source**, select **Deploy from a branch**.
   - Choose the **`main`** branch and the **`/root`** folder, then click **Save**.

5. **Get your public portfolio URL**
   - After a minute or two, GitHub will show your live URL, typically:
     ```
     https://YOUR_USERNAME.github.io/amar-portfolio/
     ```
   - Share this link with recruiters — no backend, database, or build step required.

---

## Author

**Amar Lahlouh**
Full-Stack Developer | Computer Engineering Student, Lebanese International University (LIU)

- GitHub: `YOUR_GITHUB_URL`
- LinkedIn: `YOUR_LINKEDIN_URL`
