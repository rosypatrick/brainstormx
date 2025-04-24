# BrAInstormX – Architecture Document

## 🏗️ Overview
BrAInstormX is a modular, API-ready AI platform hosted on Render. The system will evolve from a static landing + signup flow to a full-featured platform delivering AI-powered services and products that help organizations demystify AI and make it actionable.

---

## 🧱 Frontend
- **Framework:** HTML5/CSS3 (initial static), with plan to evolve into React/Next.js for app side
- **UI Style:** Custom gradient-based dark mode, modular components with professional SVG icons
- **Deployment:** Static HTML hosted on Render (public landing)
- **Signup Capture:** Basic form → API route or serverless function → Mailchimp / Supabase / DB
- **Routing Plan (v1):**
  - `/` → Landing page
  - `/platform` → Gated section (TBD)
  - `/services/*` → API endpoint paths

---

## 🧠 Backend Services (Phase 1)
- **Stack:** Node.js (or Python/FastAPI) for services layer
- **Services Layer Plan:**
  - `/services/analyze-website` → Free-tier site audit
  - `/services/positioning-scan` → Mini brand analysis
  - `/services/rewrite-preview` → Homepage AI copy generation
  - [ ] Start with **mocked responses**, simulate AI processing
- **Modular API approach** – easy to replace with real AI provider calls later

---

## 🧪 AI Integration Plan
- **Pluggable AI providers:** OpenAI, Mistral, Cohere, etc.
- **Use AI for:**
  - Content rewriting
  - Brand tone detection
  - Strategy suggestions
- **Context7 MCP:** Model Context Protocol for modular service interfaces
- Start with **mocked endpoints**, then swap to live calls post validation

---

## 🔐 Authentication & Access
- **Phase 1:** Public + gated "Coming Soon" platform with email signup
- **Phase 2:** Login/auth with Supabase/Auth0 for access to full dashboard
- **Roles:** Anonymous (Free), Registered (Pro), Admin

---

## ☁️ Hosting & CI/CD
- **Host:** [Render.com](https://render.com) — serves static frontend + backend services
- **Environment Vars:** `.env` per service
- **CI/CD:** Manual for now → GitHub Actions later
- **Workflow:** Local → Codespaces → Render (staging/prod)

---

## 🧩 File Structure Preview (App Side)
```bash
/src
  /components
  /services
  /pages
  /utils
  App.jsx
```

---

## 🔄 Dev Workflow
```text
1. Clone repo
2. Run `npx mcp` for local context simulation
3. Dev locally or via Codespaces
4. Push to GitHub → auto-deploy to Render
