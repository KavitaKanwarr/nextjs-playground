# nextjs-playground
Creating this Repo for learning purpose where I'll dive deep into Next JS concepts and learn important aspects of each one


<!-- INSTALLATION -->
npx create-next-app@latest


## NextJs VS React
Next JS give these features for improvement:
1. Routing (file based routing)
2. SEO support
3. SSR (Server side rendering)
4. SSG (Static Site Generation)
5. API routes
6. Performance optimizations
7. Full Stack Capabilities
8. Automatic code splitting

## Concepts
CSR - Browser renders.

SSR - Server har request pe HTML bhejta hai.

SSG - Build time pe page generate.

ISR - Static page ko baad me revalidate kar sakte ho.

## Cool features
### Automatic Loading UI
app
|
└── products
      ├── page.tsx
      └── loading.tsx <-- here shows as fallback (Suspense is used internally)

### Error handling
app
└── dashboard
      ├── page.tsx
      └── error.tsx <-- must be "use client" because we need button click handler in it to retry. Takes two args - {error, reset} in latest version it's {error, unstable_retry}

### Not found handling
app
 └── not-found.tsx

### Route groups
Need to group multiple relatable routes but don't want it to be in URL, do this

app
|
├── (marketing)
      ├── about
      │    └── page.tsx <-- /about
      └── contact
            └── page.tsx <-- /contact

### Dynamic Routes
app
|
└── products
      └── [id]
            └── page.tsx <-- access via {params} from props of the component

1. Catch All Route - [...slug] requires atleast one segment 
2. Optional Catch All - [[...slug]] doesn't require any segment