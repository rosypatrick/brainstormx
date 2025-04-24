# BrAInstormX – Task Breakdown & Execution Plan

## 🎯 Goal
Define clear, high-impact tasks for launching the MVP of BrAInstormX. Each task is tied to core value delivery: help organizations demystify AI, capture leads, and prepare for scaling.

---

## 🛠️ Phase 0 – Infrastructure Prep (Week 1)
| Task | Owner | Status | Notes |
|------|-------|--------|-------|
| Set up Render static hosting | DevOps | ✅ Complete | Landing page deployed |
| Configure Render for services (Node/FastAPI) | DevOps | 🔲 Pending | For `/services/*` mock API |
| Configure email signup service (e.g. Supabase, Mailchimp) | Backend | 🔲 Pending | Use Supabase for now |
| Create `.env` template file | Backend | 🔲 Pending | Secrets for services |

---

## 🧪 Phase 1 – Mocked AI Tools (Week 2)
| Task | Owner | Status | Notes |
|------|-------|--------|-------|
| Design `/services/analyze-website` API mock | Backend | 🔲 Pending | Returns JSON audit |
| Design `/services/positioning-scan` API mock | Backend | 🔲 Pending | Returns brand tone snippet |
| Design `/services/rewrite-preview` API mock | Backend | 🔲 Pending | Returns AI-style copy rewrite |
| Frontend integration to display report preview | Frontend | 🔲 Pending | Stub out interface |

---

## ✍️ Phase 2 – Platform UX Build (Week 3)
| Task | Owner | Status | Notes |
|------|-------|--------|-------|
| Build "Coming Soon" gated platform page | Frontend | 🔲 Pending | Triggered via CTA |
| Connect email form to backend/store | Full Stack | 🔲 Pending | Save to Supabase or similar |
| Add animations/interactions to hero section | Frontend | 🔲 Optional | Polish, not MVP-critical |
| Implement simple toast/alert UI | Frontend | 🔲 Pending | Notify user after signup |

---

## 📬 Phase 3 – Brand & Comms (Week 4)
| Task | Owner | Status | Notes |
|------|-------|--------|-------|
| Set up @brainstormx email domain (e.g. hey@) | Ops | 🔲 Pending | Gmail/Zoho/SimpleLogin |
| Draft first email drip content | Content | 🔲 Pending | "AI transformation" series |
| Launch Twitter/LinkedIn/X presence | Brand | 🔲 Pending | Focus on AI demystification |
| Build landing traffic checklist | Growth | 🔲 Pending | Target organizations seeking AI clarity |

---

## 🧱 Phase 4 – Real AI Integration (Post-MVP)
| Task | Owner | Status | Notes |
|------|-------|--------|-------|
| Implement Context7 MCP for service interfaces | Backend | 🔲 Pending | Pluggable AI provider interface |
| Add plan-based tiering system (Free/Pro/Premium) | Backend | 🔲 Pending | Stripe or LemonSqueezy |
| Track user requests in Supabase DB | Backend | 🔲 Pending | Store usage + reports |
| Admin dashboard for report logs | Backend | 🔲 Pending | Optional Phase 5 feature |

---

## 🔄 Phase 5 – Service Expansion
| Task | Owner | Status | Notes |
|------|-------|--------|-------|
| Develop AI strategy consulting offering | Product | 🔲 Pending | Service package for organizations |
| Create custom AI solution implementation framework | Engineering | 🔲 Pending | Modular approach to AI deployment |
| Build case studies from early adopters | Marketing | 🔲 Pending | Showcase real transformation stories |

---

## ⚠️ Global Task Rules
- Break larger tasks into small PR-able commits
- All commits follow `conventional commits` format
- Tasks not in this file = not in scope (unless approved by project lead)
- All services must return mocked data w/ realistic latency (~500ms–1.5s)
