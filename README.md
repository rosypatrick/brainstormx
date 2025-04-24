# 🚀 BrAInstormX

**Accelerate. Innovate. Deliver.**  
BrAInstormX is an AI-first company helping organizations demystify AI and make it real. We combine actionable services with powerful products to guide teams from confusion to confident execution.

---

## 🧠 What Is BrAInstormX?

We’re building tools and offering services that cut through AI hype and help organizations:

- Understand what AI can do for *them*
- Discover real use cases for their teams
- Execute without getting buried in complexity or waffle

We don’t just talk about AI. We make it happen.

---

## 🎯 Offerings

### 💼 Services
We work directly with organizations to:
- Audit current digital presence
- Design AI strategy that fits the business
- Execute solutions — from tooling to training

> Strategy to execution. No fluff. Just outcomes.

### 🧰 Products
We’re building a suite of AI-first tools that:
- Modernize websites
- Clarify brand positioning
- Rewrite content, intelligently

> Our free-tier tools help organizations take their first step toward AI transformation.

---

## 🧩 The Problem We Solve

Most orgs are stuck in **AI limbo**:  
Buzzwords everywhere. No idea where to begin.

BrAInstormX helps them break the deadlock — fast.  
We give teams direction, insight, and traction.

> No jargon. Just movement.

---

## 🌐 Tech Stack

- **Frontend**: HTML5/CSS3 (MVP), evolving to React/Next.js
- **Backend**: Node/FastAPI + Context7 MCP (modular services)
- **Deployment**: Local → Codespaces → Render (staging/prod)
- **AI Layer**: Pluggable AI providers (OpenAI, Mistral, Cohere, etc.)
- **Hosting**: Render
- **Service Gateway**: Context7-powered MCP interfaces

---

## ⚙️ Dev Workflow

```text
1. Clone repo
2. Run `npx mcp` for local context simulation
3. Dev locally or via Codespaces
4. Push to GitHub → auto-deploy to Render


## 🛠️ Features (MVP)

- **Website Modernization Report**: AI-powered audit with actionable recommendations
- **Brand Positioning Analysis**: Analyze your brand's voice, tone, and market position
- **Mini Homepage Rewrite**: Transform your homepage messaging with AI-generated copy

## 🏗️ Project Structure

```
/brainstormx
├── public/                # Static assets
│   ├── css/               # Stylesheets
│   ├── js/                # Client-side JavaScript
│   ├── index.html         # Landing page
│   └── 404.html           # Error page
├── services/              # Backend services
│   └── mockServices.js    # Mock API endpoints
├── server.js              # Express server setup
├── package.json           # Project dependencies
├── .env.example           # Environment variables template
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/brainstormx.git
cd brainstormx
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000`

## 🚀 Deployment to Render

### Option 1: Using the Render Dashboard (Recommended for First Deployment)

1. Create a Render account at [render.com](https://render.com)

2. From your Render dashboard, click "New +" and select "Web Service"

3. Connect your GitHub repository

4. Configure your web service:
   - **Name**: brainstormx (or your preferred name)
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free (or select appropriate plan)

5. Add environment variables (if needed):
   - `NODE_ENV`: production
   - `PORT`: 10000 (Render will automatically set PORT)

6. Click "Create Web Service"

### Option 2: Using render.yaml (For Subsequent Deployments)

This project includes a `render.yaml` file for easier deployment:

1. From your Render dashboard, click "New +" and select "Blueprint"

2. Connect to the repository containing your render.yaml file

3. Render will automatically configure your services based on the YAML file

4. Review the settings and click "Apply"

### Maintaining Your Deployment

- Render automatically deploys when you push to your connected repository
- You can manually trigger deployments from the Render dashboard
- View logs and metrics from your Render dashboard

## 📝 API Endpoints

### Mock Services (Phase 1)

- **POST /services/analyze-website**: Website analysis report
  - Request: `{ "url": "https://example.com" }`
  - Response: JSON with performance metrics and recommendations

- **POST /services/positioning-scan**: Brand positioning analysis
  - Request: `{ "brandName": "YourBrand", "industry": "Technology", "sampleText": "..." }`
  - Response: JSON with tone analysis and positioning recommendations

- **POST /services/rewrite-preview**: Homepage copy rewrite
  - Request: `{ "currentCopy": "...", "tone": "professional", "industry": "tech" }`
  - Response: JSON with rewritten copy versions and recommendations

## 🧪 Development Roadmap

1. **Phase 0**: Infrastructure setup (Complete)
2. **Phase 1**: Mocked AI tools implementation (Current)
3. **Phase 2**: Platform UX build with email signup
4. **Phase 3**: Brand and communications setup
5. **Phase 4**: Real AI integration with OpenAI/Cohere APIs

## 📚 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (vanilla)
- **Backend**: Node.js, Express
- **Services**: Context7 MCP (Model Context Protocol)
- **Future**: React/Next.js, Supabase, OpenAI API

## 📄 License

MIT

## 🙏 Acknowledgments

- BrAInstormX Team
- Context7 MCP Framework
