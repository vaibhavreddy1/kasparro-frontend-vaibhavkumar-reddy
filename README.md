# Kasparro – Frontend Engineering Assignment (V1)

This repository contains a frontend implementation of **Kasparro**, an AI-native SEO & Brand Intelligence platform designed for the AI-first search era (ChatGPT, Gemini, Perplexity, etc.).

The goal of this project is not visual polish, but to demonstrate **system thinking, frontend architecture, data modeling, and clear communication of a complex AI product through UI**.

---

## 🚀 Overview

The application is divided into **two distinct product surfaces**:

1. **Public Website**  
   Marketing + product narrative to explain Kasparro’s value proposition.

2. **Product Dashboard (Mocked)**  
   An authenticated product shell that simulates the core Kasparro experience using structured mocked data.

No backend is used — all product behavior is driven by typed JSON data to reflect real-world frontend constraints.

---

## 🧱 Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Zustand** (state management)
- **Mocked JSON data** (no backend)

Optional libraries such as shadcn/ui or animation libraries were intentionally avoided to keep focus on clarity and architecture.

---

## 🗂️ Folder Structure

src/
├── app/
│ ├── layout.tsx # Public website layout
│ ├── page.tsx # Home (/)
│ ├── platform/page.tsx # Product overview
│ ├── about/page.tsx # About / vision
│ └── app/
│ ├── layout.tsx # Product dashboard shell
│ ├── dashboard/page.tsx # Brand snapshot
│ ├── audit/page.tsx # Core audit screen
│ └── architecture/page.tsx
│
├── components/
│ ├── layout/ # Layout components
│ │ ├── PublicNavbar.tsx
│ │ ├── AppSidebar.tsx
│ │ └── Footer.tsx
│ │
│ ├── audit/ # Feature components
│ │ ├── AuditModuleList.tsx
│ │ ├── AuditModuleDetail.tsx
│ │ └── AuditScore.tsx
│ │
│ └── ui/ # UI primitives
│ ├── Card.tsx
│ ├── Metric.tsx
│ └── Section.tsx
│
├── data/ # Mocked backend data
│ ├── brands.json
│ ├── dashboard.json
│ └── audit-modules.json
│
├── lib/
│ └── types.ts # Shared TypeScript interfaces
│
├── store/
│ └── useAppStore.ts # Global state (Zustand)


This structure enforces a clear separation between **layout**, **features**, **UI primitives**, and **data**, avoiding page-level monoliths.

---

## 🧠 Architectural Decisions

### 1. App Router Layouts
Separate layouts are used for:
- Public website (`/`)
- Product dashboard (`/app`)

This reflects real-world products where marketing and application surfaces evolve independently.

---

### 2. Data-Driven UI
All product content (dashboard metrics, audit modules, insights) is sourced from structured JSON files.

This:
- Simulates real backend responses
- Avoids hard-coded JSX
- Makes UI predictable and testable

---

### 3. Typed Data Models
All mocked data conforms to explicit TypeScript interfaces defined in `lib/types.ts`.

This ensures:
- Consistent schemas
- No ad-hoc object shapes
- Easier future backend integration

---

### 4. State Management
Zustand is used to manage:
- Selected brand
- Selected audit module

State flow is intentionally simple and centralized to keep the system easy to reason about.

---

### 5. Component Boundaries
- **Layout components** handle structure and navigation
- **Feature components** handle domain-specific UI
- **UI primitives** are stateless and reusable

This keeps JSX files small and responsibilities clear.

/////
Communicating AI-SEO Through Examples

To ground abstract AI-SEO concepts, the public pages include concrete, real-world examples, such as:

A SaaS brand ranking highly on Google but never appearing in ChatGPT answers

Non-branded queries (e.g. “best cloud security platforms”) where competitors are cited instead

Differences between keyword ranking reports and AI citation / trust signals

These examples are used to clearly demonstrate how AI-first search systems behave differently from traditional SEO engines.
/////


---

## 🎨 UX & Design Approach

- Minimal visual language
- Clear information hierarchy
- Dense data presented in readable sections
- Intentional contrast and spacing for clarity

The focus is on **communicating system behavior**, not visual decoration.

---

## ⚖️ Tradeoffs & Assumptions

### Tradeoffs
- Mocked data instead of real APIs
- Minimal animation to avoid UX noise
- Simple visual components over complex charts

### Assumptions
- Single active brand context
- User is already authenticated
- Audit modules return structured textual insights

---

## 🔮 Future Improvements

- API integration and real authentication
- Advanced visualizations for audit insights
- Role-based access control
- Historical audit comparisons



## 📝 Final Notes

This project prioritizes **clarity, structure, and system thinking** over pixel perfection.  
The goal is to demonstrate how a complex AI-native product can be represented through a scalable and maintainable frontend architecture.
