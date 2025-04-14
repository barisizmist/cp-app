# Best Practices for Next.js Applications

## Application Structure

### Project Organization

```plaintext
src/
├── components/
│   ├── ui/              # Reusable UI components
│   └── features/        # Feature-specific components
├── layouts/             # layout components
├── pages/               # pages (file-based routing)
├── stores/              # Global state management
├── utils/               # Utility functions and helpers
├── styles/              # Global styles and Tailwind customizations
└── assets/              # Static assets like images, fonts
```

### Feature Organization (for larger applications)

```plaintext
src/
├── features/
│   ├── auth/
│   │   ├── components/  # React components specific to auth
│   │   ├── stores/      # Auth-related
│   │   └── utils/       # Auth-specific utilities
│   └── products/
│       ├── components/
│       └── stores/
├── shared/              # Shared components, stores, utilities
│   ├── components/
│   └── utils/
└── pages/               # Pages using components from features
```

## Component Creation Guidelines

### When to Create a New Component

- Create a new component when:
  - UI element will be reused in multiple places
  - A section of UI exceeds 100 lines of code
  - A section has its own distinct responsibility or purpose
  - Logic for a section becomes complex (more than 3 state variables or hooks)
  - Component has a specific interaction pattern (dropdown, modal, etc.)

### When NOT to Create a New Component

- Avoid creating components that are:
  - Used only once and very simple (under 50 lines)
  - Too granular (e.g., a single styled button with no special behavior)
  - Breaking a component only for the sake of smaller files

## Store Organization

- Create a separate store file for each domain/feature
- Export actions and getters, not the raw store
- Group related stores in directories by feature

### Keep Stores Simple

- Focus each store on a single responsibility
- Use atomic stores for primitive values when possible
- Use `map` stores for related data structures
- Create computed values with `computed` for derived state
- Separate UI state from domain data
