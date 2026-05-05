# Dent Boyz

Lead gen SEO site for **Dent Boyz** — North Dallas PDR & Auto Hail Damage Repair.

**Live site:** https://dent-boyz.com  
**Vercel project:** https://vercel.com/yankeenovember01/dent-boyz

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Hosting:** Vercel
- **Database:** Supabase (`ptdvazakndnykuyznvxq`)
- **Vector Search:** Pinecone (`dent-boyz-leads`)

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
app/
  layout.tsx      # Root layout — nav, footer, fonts
  page.tsx        # Homepage
  globals.css     # Tailwind base styles
```

---

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=https://ptdvazakndnykuyznvxq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon key from Supabase dashboard>
```
