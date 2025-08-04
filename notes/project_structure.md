app/
├── layout.tsx                 # Root layout
├── page.tsx                   # Home page (redirects to dashboard)
├── globals.css               # Global styles
├── dashboard/
│   ├── layout.tsx            # Dashboard layout with sidebar
│   ├── page.tsx              # Dashboard home
│   ├── analytics/
│   │   └── page.tsx          # Analytics page
│   ├── invoice/
│   │   ├── layout.tsx        # Invoice layout with top bar
│   │   ├── page.tsx          # Invoice list
│   │   ├── new/
│   │   │   └── page.tsx      # Create new invoice
│   │   └── [id]/
│   │       └── page.tsx      # Invoice detail view
│   ├── schedule/
│   │   └── page.tsx          # Schedule page
│   ├── calendar/
│   │   └── page.tsx          # Calendar page
│   ├── messages/
│   │   └── page.tsx          # Messages page
│   ├── notifications/
│   │   └── page.tsx          # Notifications page
│   └── settings/
│       └── page.tsx          # Settings page
└── components/
    ├── Sidebar.tsx           # Reusable sidebar component
    └── TopBar.tsx            # Reusable top bar component