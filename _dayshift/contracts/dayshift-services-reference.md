# _dayshift. Services Reference Guide
*Internal use only — pricing breakdowns, tech stack, margins, and client Q&A*

---

## Email Services

### Email Forwarding (Free / Included)
**What it is:** Cloudflare Email Routing forwards emails sent to `info@clientdomain.com` to whatever inbox the client already uses (Gmail, etc.).

**What it does NOT do:** Allow the client to send from that address. When they hit reply, the email goes out from their personal Gmail. Customers see `dave@gmail.com` not `dave@davespressurewashing.com`.

**When to use it:** Clients on the cheapest tier who just need to not miss emails. Fine as a starting point, easy upsell to professional email later.

**Setup time:** 5-10 minutes in Cloudflare dashboard. Zero ongoing maintenance.

**Cost to you:** Free.

---

### Professional Email — Google Workspace
**What it is:** Full business inbox. Client sends AND receives from `@theirdomain.com`. Powered by Google — same Gmail interface they already know.

**Plans:**
- Starter: $6/user/month (30GB storage, Meet, Drive, Calendar)
- Standard: $12/user/month (2TB storage, extras most small clients don't need)

**Your pricing:**

| # of addresses | Your cost (Google) | You charge | Margin |
|---|---|---|---|
| 1 address | $6/mo | $10/mo | $4/mo |
| 3 addresses | $18/mo | $25/mo | $7/mo |
| 5 addresses | $30/mo | $35/mo | $5/mo |

**"Per address" vs "per user":** Google charges per user (seat). Each email address = 1 user = 1 seat. Aliases (like forwarding `hello@` to the same inbox as `info@`) can be done within one seat at no extra cost — clarify this with the client before assuming they need multiple seats.

**Setup time:** 30-45 minutes including DNS verification.

**Common client question:** *"Why can't I just use Gmail?"*
Answer: You can — but your emails will say `davemiller88@gmail.com` not `dave@davespressurewashing.com`. Google Workspace gives you the professional address on the same Gmail platform you already use.

---

## SMS Notifications

### SMS Form Notifications
**What it does:** When a customer submits a contact form on the client's website, the client gets an instant text message with the lead details. No more checking email to find out someone reached out.

**Why clients want this:** Local service businesses live on their phones, not their inboxes. A new lead that sits in email for 4 hours is a lost lead.

**Tech stack options:**

**Option A — Email-to-SMS (free, basic)**
- Form submission → email notification → Gmail forwards to carrier SMS gateway
- Carrier gateways: `5551234567@vtext.com` (Verizon), `@txt.att.net` (AT&T), `@tmomail.net` (T-Mobile)
- Completely free. No third-party accounts needed.
- Downside: unreliable delivery, carrier-dependent, no delivery confirmation, can break if carrier changes gateway

**Option B — Zapier + Twilio (recommended)**
- Form submission → Zapier catches it → Zapier sends via Twilio → client gets text
- Reliable, fast, trackable
- **Twilio costs:** ~$0.0079/SMS in the US (under 1 cent per text). A client receiving 100 form submissions/month pays less than $1 in Twilio fees.
- **Zapier:** Free tier handles up to 100 tasks/month (1 zap = 1 task). Most small clients never exceed this. If they do, Zapier Starter is $19.99/mo — pass that through.
- You set this up once, it runs forever.

**Option C — Make (formerly Integromat)**
- Same concept as Zapier but cheaper at scale
- Free tier: 1,000 operations/month
- Better for clients with higher form volume

**Your pricing:**
- Setup fee: $75 one-time (covers 30-60 min of your time)
- Ongoing SMS costs: passed through to client at cost (Twilio invoices directly or you invoice quarterly)
- If Zapier paid tier is needed: $20/mo pass-through or include in retainer discussion

**What to tell a client asking about per-text cost:**
> "Twilio charges about a penny per text. If you get 50 leads a month through your site, that's 50 cents. It's essentially free at your volume — we just pass the cost through so there are no surprises."

**Setup requirements:**
- Twilio account (client can own it or you manage it)
- Zapier account (you can manage under your agency account on free tier for most clients)
- Form must support webhook or email notifications (Formspree, Netlify Forms, or custom — all supported)

---

## Hosting & Domain

### What's included in $50/mo
- Domain registration or renewal (typically $10-15/yr, absorbed into monthly fee)
- Hosting on Cloudflare Pages (free tier — fast, global CDN, zero cost to you)
- Uptime monitoring
- Minor content updates (hours, phone, address — not structural changes)
- SSL certificate (automatic via Cloudflare, free)

**Your actual cost per client:** ~$1-1.25/month (domain amortized). Everything else is free on Cloudflare's infrastructure.

**Margin:** ~$48.75/mo per client at scale. 10 clients = ~$490/mo pure recurring.

### Annual plan math
- Client pays $500 upfront vs $600 over the year → they save $100, you get cash now
- Your cost for the year: ~$15 (domain). Everything else is Cloudflare free tier.
- You net ~$485 upfront per client on annual hosting

---

## Content Retainer

### What 3 hours/month actually covers
At a $65/hr internal rate, 3 hours = $195 worth of work. You charge $125. Why?

Because most months clients don't use anywhere near 3 hours. Average retainer client probably uses 1-1.5 hours/month. The 3-hour cap is your protection, not their expectation. It's priced for the relationship, not the hours.

**What's in:**
- Swap photos on existing pages (new staff photos, seasonal shots, etc.)
- Update copy on existing pages (new pricing, changed services, seasonal language)
- Google Business Profile posts (1-2/month)
- Minor layout tweaks within existing sections
- Basic monthly report (traffic, form submissions, GBP views)
- SMS/email notification maintenance if set up

**What's NOT in:**
- New pages (always a separate scope conversation at $175/page)
- Structural redesign of any section
- New features (booking integrations, new forms, galleries, etc.)
- SEO campaigns or new keyword targeting
- Anything requiring more than 3 hours in a given month without pre-approval

**How to handle scope creep:**
Before doing any work that falls outside the retainer, send a quick message: *"Hey, this looks like it's beyond the retainer scope — I can do it for $X or we can add it to the next invoice. Let me know how you'd like to proceed."* Never do the work and bill a surprise.

---

## SEO Packages

### On-Page Basics (included)
Every site gets: proper title tags, meta descriptions, H1/H2 heading structure, image alt text, page speed optimization, sitemap, robots.txt. This is the floor — without it, nothing else matters.

### Local SEO Starter — $350
**What it includes:**
- Google Business Profile setup or full optimization (photos, categories, service areas, hours, Q&A)
- 3 local landing pages targeting specific towns/service areas (e.g., "roof cleaning in Red Lion PA")
- These pages live on the site and rank for hyper-local searches
- On-page SEO for each local page

**What it does NOT include:** Ongoing content, link building, monthly reporting. That's the retainer.

**Timeline:** 1-2 weeks after site launch.

### Full SEO Package — $2,000
For clients who want to compete seriously in search. Includes everything in the starter plus:
- Full keyword research for their vertical and service area
- 5+ local landing pages
- Competitor analysis
- Technical SEO audit
- Schema markup (local business, services)
- Setup for ongoing tracking (Google Search Console, Analytics)

Best sold alongside a content retainer for continued results — the package gets them set up, the retainer keeps momentum.

---

## Copywriting

### Internal time estimates
- Copy Assist ($85/page): ~45-60 min per page. You're editing, not writing from scratch.
- Full Copy ($175/page): ~90-120 min per page. Intake brief, research, write, revise.

### Client intake brief (for full copywriting)
When a client chooses full copy, get these answers before writing:
1. Who is your ideal customer?
2. What's the #1 thing you want them to do on this page?
3. What makes you different from competitors?
4. What are 3 common questions or objections customers have?
5. What's your tone — professional, friendly, no-nonsense, fun?

---

## Referral Structure (Internal — do not share with clients)

**Partner referrals (from print partner):**
- Doggie Parlor: 50/50 split on build (founding deal)
- Bair's Property Maintenance and all future referrals: 20% of build price to partner, one-time
- Retainer and monthly revenue: 100% yours — referral fee is build only
- Inverse: if you route a client to partner's print services, 20% back to you

**Why 20%:** You're doing the build, the hosting, the maintenance, the client relationship. He made a call. 20% is generous and sustainable.

---

## Quick Margin Summary

| Service | Your cost | Client pays | Margin |
|---|---|---|---|
| Hosting (per client/mo) | ~$1.25 | $50 | ~$48.75 |
| Google Workspace 1 seat | $6 | $10 | $4 |
| Google Workspace 3 seats | $18 | $25 | $7 |
| Twilio SMS (100 texts) | ~$0.79 | pass-through | setup fee |
| Landing page build | your time | $600 | your time |
| Full site build | your time | $1,200 | your time |
| Content retainer | ~1-1.5 hrs avg | $125 | ~$40-60/hr effective |
