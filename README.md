# The Modern Developer's Toolkit 🚀

> **A curated collection of powerful tools, services, and libraries for building modern applications.**

This repository contains a curated list of powerful tools, services, and libraries for building modern applications.

The list is managed via the `toolsData.json` file in this repository. The live site and this README are automatically updated when changes are merged into the `master` branch.

**Goal is to have a list of tools that are useful for building modern applications. Please feel free to contribute to the list as I know for the fact that I have missed out on a lot of tools.**

I have tried to categorize the tools as best as I can.

**Looking forward to your contributions! 😄🚀**

---

## 🎯 Quick Start

**[➡️ View the Live Toolkit Website](https://modern-developer-toolkit.vercel.app/)**


**[🤖Talk to *Chatgpt* using this list](https://chatgpt.com/?prompt=You%20are%20an%20expert%20Tech%20Lead%20and%20software%20architect%20specializing%20in%20modern%20development%20tools%20and%20infrastructure.%20You%20have%20access%20to%20a%20curated%20list%20of%2077%20carefully%20selected%20tools%20across%2050%20categories%20for%20building%20modern%2C%20scalable%20applications.%0A%0AList%20is%20called%20Modern%20Developer%20Toolkit%20and%20is%20at%20https%3A%2F%2Fgithub.com%2FShreyaan%2Fmodern-developer-toolkit%0A%0A%23%23%20Available%20Tools%3A%0ABackblaze%20B2%20Cloud%20Storage%3A%20Object%20Storage%2C%20Better%20Auth%3A%20Auth%2C%20Bunny%20CDN%3A%20CDN%2C%20Bunny%20Storage%3A%20Object%20Storage%2C%20Bunny%20Stream%20%2B%20Bunny%20Optimizer%3A%20Media%20Optimization%20%26%20Streaming%2C%20Video%20Streaming%2C%20Caddy%3A%20Reverse%20Proxy%2C%20ClickHouse%3A%20Analytics%2C%20Database%2C%20Cloudflare%20AI%20Gateway%3A%20AI%20Proxy%2C%20Cloudflare%20CDN%3A%20CDN%2C%20Cloudflare%20Containers%3A%20Serverless%2FEdge%20computing%2C%20Cloudflare%20R2%3A%20Object%20Storage%2C%20Cloudflare%20Stream%3A%20Video%20Streaming%2C%20Cloudflare%20Tunnel%3A%20Networking%2C%20Reverse%20Proxy%2C%20Cloudflare%20Vectorize%3A%20Vector%20Database%2C%20Cloudflare%20Waiting%20Room%3A%20Traffic%20Management%2C%20Cloudflare%20Workers%3A%20Serverless%2FEdge%20computing%2C%20Cloudflare%20Workers%20AI%3A%20AI%20Inference%2C%20cobalt.tools%3A%20Media%20Downloader%2C%20Convex%3A%20Auth%2C%20BaaS%2C%20Database%2C%20Coolify%3A%20PaaS%2C%20Crawlee%3A%20Web%20Scraping%2C%20Dagster%3A%20Data%20Orchestration%2C%20ETL%2C%20DigitalOcean%3A%20Serverless%2FEdge%20computing%2C%20VPS%20Hosting%2C%20DLT%3A%20Data%20Integration%2C%20ETL%2C%20Docuseal%3A%20Document%20Workflow%2C%20eSignature%2C%20DuckDB%3A%20Analytics%2C%20Database%2C%20Effect%3A%20Backend%20Framework%2C%20Fivetran%3A%20Data%20Integration%2C%20ETL%2C%20Fly.io%3A%20PaaS%2C%20Serverless%2FEdge%20computing%2C%20Hetzner%3A%20VPS%20Hosting%2C%20Hetzner%20Storage%20Boxes%20%2B%20Object%20Storage%3A%20Object%20Storage%2C%20Inngest%3A%20Event%20Automation%2C%20Job%20Queue%2C%20Jam.dev%3A%20Bug%20Reporting%2C%20Koyeb%3A%20AI%20Inference%2C%20PaaS%2C%20Serverless%2FEdge%20computing%2C%20LearnDMARC%3A%20Email%2C%20Linode%20(Akamai)%3A%20VPS%20Hosting%2C%20Liveblocks%3A%20Real-Time%20Collaboration%2C%20Mastra%20AI%3A%20AI%20Agent%20Framework%2C%20MECSA%3A%20Email%2C%20Metabase%3A%20Analytics%2C%20BI%2C%20MinIO%3A%20Object%20Storage%2C%20Modal%3A%20AI%2FML%20Infra%2C%20Serverless%20GPU%2C%20MotherDuck%3A%20Analytics%2C%20Database%2C%20Serverless%2FEdge%20computing%2C%20Mux%3A%20Video%20Streaming%2C%20NocoDB%3A%20Database%2C%20No-Code%2C%20http%3A%2F%2Fnovel.sh%2F%3A%20AI%20Writing%2C%20WYSIWYG%20Editor%2C%20OVH%20CDN%3A%20CDN%2C%20OVHCloud%20VPS%3A%20VPS%20Hosting%2C%20Pandoc%3A%20Document%20Parsing%2C%20PlanetScale%3A%20Database%2C%20Serverless%2FEdge%20computing%2C%20PocketBase%3A%20Auth%2C%20BaaS%2C%20Portainer%3A%20Container%20Management%2C%20PostHog%3A%20Product%20Analytics%2C%20Prefect%3A%20Data%20Integration%2C%20ETL%2C%20Pulumi%3A%20Infrastructure%20as%20Code%2C%20Pusher%3A%20PaaS%2C%20Real-Time%20Messaging%2C%20Railway%3A%20PaaS%2C%20Raycast%3A%20Dev%20Tooling%2C%20Sentry%3A%20Error%20Monitoring%2C%20Shodan%3A%20OSINT%2C%20Recon%2C%20Security%2C%20SST%3A%20Infrastructure%20as%20Code%2C%20Supabase%3A%20Auth%2C%20BaaS%2C%20Database%2C%20Serverless%2FEdge%20computing%2C%20Tailscale%3A%20Networking%2C%20VPN%2C%20Temporal%3A%20Event%20Automation%2C%20Job%20Queue%2C%20Tiptap%3A%20WYSIWYG%20Editor%2C%20Trigger.dev%3A%20Event%20Automation%2C%20Job%20Queue%2C%20Turso%3A%20Database%2C%20Typesense%3A%20Search%2C%20Unstructured%3A%20Document%20Parsing%2C%20Upstash%3A%20Job%20Queue%2C%20PaaS%2C%20Serverless%2FEdge%20computing%2C%20Vultr%3A%20VPS%20Hosting%2C%20WeasyPrint%3A%20Document%20Parsing%2C%20Weaviate%3A%20Vector%20Database%2C%20TablePlus%3A%20Database%2C%20Dev%20Tooling%2C%20FFmpeg%3A%20Media%20Processing%2C%20Dev%20Tooling%2C%20SQLite%3A%20Database%2C%20WorkOS%3A%20Auth%0A%0A%23%23%20Your%20Expertise%3A%0A-%20Tool%20selection%20and%20architecture%20recommendations%0A-%20Modern%20development%20best%20practices%0A-%20Cost-effective%20and%20scalable%20solutions%0A-%20Implementation%20strategies%20and%20trade-offs%0A%0A%23%23%20Guidelines%3A%0A1.%20Ask%20clarifying%20questions%20about%20specific%20needs%20and%20constraints%0A2.%20Recommend%20tools%20based%20on%20use%20case%2C%20scale%2C%20and%20budget%0A3.%20Explain%20trade-offs%20between%20different%20approaches%0A4.%20Suggest%20complementary%20tool%20combinations%0A5.%20Provide%20practical%20implementation%20advice%0A%0APlease%20help%20me%20with%20the%20following%20question%3A%20)**

---

## 📊 Statistics

- **Total Tools:** 77
- **Categories:** 50
- **Last Updated:** July 19, 2025

---

## 🛠️ Tools by Category

### AI Agent Framework (1)

- **[Mastra AI](https://www.mastra.ai/)** - A full-fledged TypeScript framework for building, observing, and deploying AI agents and workflows. From practical experience, it’s saved me hours wiring up RAG, tool-calling, memory, tracing, and playback—all integrated and type-safe (no messy glue code between SDKs) 

### AI Inference (2)

- **[Cloudflare Workers AI](https://developers.cloudflare.com/workers-ai/)** - Run 50+ open-source models on serverless GPUs, globally distributed. Zero infrastructure to manage — fully integrated with Workers, Pages & AI Gateway. **Pairs with:** Cloudflare AI Gateway
- **[Koyeb](https://www.koyeb.com/)** - Global serverless platform for running Docker containers and web services and ai models

### AI Proxy (1)

- **[Cloudflare AI Gateway](https://developers.cloudflare.com/ai-gateway/)** - Unified gateway for managing and observing calls to AI APIs — adds caching, rate limiting, logging, and cost control for any AI provider. **Pairs with:** Cloudflare Workers AI

### AI Writing (1)

- **[http://novel.sh/](https://novel.sh/)** - Notion-inspired editor with built-in AI autocompletion—means I get smart suggestions without context-switching to ChatGPT. Feels native, fast, and avoids fiddling with separate tooling. 

### AI/ML Infra (1)

- **[Modal](https://modal.com/)** - Easiest way to run GPU-heavy Python without wrangling CUDA or Docker. Feels like writing local code that scales to big machines when needed. **Pairs with:** Cloud Storage

### Analytics (4)

- **[ClickHouse](https://clickhouse.com/)** - When Postgres gets slow for big aggregates, ClickHouse eats huge logs for breakfast. SQL, columnar, crazy fast — but needs care when writing.
- **[DuckDB](https://duckdb.org/)** - Just run heavy analytical SQL right in your script — no infra needed. Like having a mini-data warehouse in your Python notebook. Personally, I love it for data exploration and analysis. **Pairs with:** MotherDuck, Pandas
- **[Metabase](https://www.metabase.com/)** - Easiest self-hosted BI tool — connects to your DB, point and click charts for non-technical folks. Great if you’re tired of making dashboards in Google Sheets.
- **[MotherDuck](https://motherduck.com/)** - If you outgrow local DuckDB files, MotherDuck makes it trivial to scale up to the cloud but keep the same workflow. Hybrid local+cloud is the key angle.

### Auth (5)

- **[Better Auth](https://better-auth.com/)** - better than next auth. Full control in your code—no vendor lock-in. Plug in OAuth, email, or custom providers via simple adapter pattern.
- **[Convex](https://www.convex.dev/)** - Built-in realtime data syncing + auth in one SDK. No separate GraphQL or REST layers—just call JS/TS functions that magically keep clients in sync. Convex is a great choice for building realtime applications with a modern developer experience.
- **[PocketBase](https://pocketbase.io/)** - Tiny Go backend you can run anywhere — gives you auth, real-time DB, file storage, and an admin UI in a single binary. Ridiculously easy for side projects or POCs.
- **[Supabase](https://supabase.com/)** - Instant Postgres with realtime, row-level security, auth, and auto-generated APIs. Postgres fanatics finally get a Firebase alternative.
- **[WorkOS](https://workos.com/)** -  Lets you bolt on enterprise SSO, directory sync, and audit logs in minutes—no wrestling with SAML/OIDC specs. All your user-management headaches handled via a simple REST/SDK interface

### BI (1)

- **[Metabase](https://www.metabase.com/)** - Easiest self-hosted BI tool — connects to your DB, point and click charts for non-technical folks. Great if you’re tired of making dashboards in Google Sheets.

### BaaS (3)

- **[Convex](https://www.convex.dev/)** - Built-in realtime data syncing + auth in one SDK. No separate GraphQL or REST layers—just call JS/TS functions that magically keep clients in sync. Convex is a great choice for building realtime applications with a modern developer experience.
- **[PocketBase](https://pocketbase.io/)** - Tiny Go backend you can run anywhere — gives you auth, real-time DB, file storage, and an admin UI in a single binary. Ridiculously easy for side projects or POCs.
- **[Supabase](https://supabase.com/)** - Instant Postgres with realtime, row-level security, auth, and auto-generated APIs. Postgres fanatics finally get a Firebase alternative.

### Backend Framework (1)

- **[Effect](https://www.effect.website/)** - If you like TypeScript but want Haskell-style effects and dependency injection, Effect is a no-brainer. Handles async, errors, and resources like a real FP runtime. Makes your code more robust and easier to reason about.

### Bug Reporting (1)

- **[Jam.dev](https://jam.dev/)** - Instant screen recording with console logs, network requests, and repro steps auto-attached — devs get exactly what they need to fix bugs fast.

### CDN (3)

- **[Bunny CDN](https://bunny.net/cdn/)** - Blazing-fast global CDN with ultra-low cost, flexible per-region pricing, and free SSL. **Pairs with:** Bunny Storage
- **[Cloudflare CDN](https://www.cloudflare.com/cdn/)** - Massive global network, free tier, DDoS protection, and automatic caching — best all-round CDN for performance + security. **Pairs with:** Cloudflare Workers
- **[OVH CDN](https://www.ovhcloud.com/en-in/web-hosting/options/cdn/)** - Cost-effective EU-focused CDN with tight integration for OVH hosting and pay-as-you-go pricing. Use if using ovh servers. **Pairs with:** OVH VPS

### Container Management (1)

- **[Portainer](https://www.portainer.io/)** - Easiest way to manage Docker containers via a web UI. Great when you’re self-hosting lots of stuff and don’t want to SSH for every little tweak.

### Data Integration (3)

- **[DLT](https://dlthub.com/)** - Sane Python framework for building robust data pipelines — perfect for ELT with modern data stacks. Way less boilerplate than hand-rolled scripts. Its like React for data pipelines.
- **[Fivetran](https://www.fivetran.com/)** - Similar to Airbyte but fully managed — rock-solid syncs for when you don’t want to babysit pipelines. Costs add up fast though.
- **[Prefect](https://www.prefect.io/)** - Prefect is a platform for building and orchestrating data pipelines. It is a modern alternative to Airflow.

### Data Orchestration (1)

- **[Dagster](https://dagster.io/)** - Modern alternative to Airflow — better DX for building pipelines with Python. Good observability and solid for local dev.

### Database (10)

- **[ClickHouse](https://clickhouse.com/)** - When Postgres gets slow for big aggregates, ClickHouse eats huge logs for breakfast. SQL, columnar, crazy fast — but needs care when writing.
- **[Convex](https://www.convex.dev/)** - Built-in realtime data syncing + auth in one SDK. No separate GraphQL or REST layers—just call JS/TS functions that magically keep clients in sync. Convex is a great choice for building realtime applications with a modern developer experience.
- **[DuckDB](https://duckdb.org/)** - Just run heavy analytical SQL right in your script — no infra needed. Like having a mini-data warehouse in your Python notebook. Personally, I love it for data exploration and analysis. **Pairs with:** MotherDuck, Pandas
- **[MotherDuck](https://motherduck.com/)** - If you outgrow local DuckDB files, MotherDuck makes it trivial to scale up to the cloud but keep the same workflow. Hybrid local+cloud is the key angle.
- **[NocoDB](https://www.nocodb.com/)** - Spreadsheet-like interface for teams. Good for letting non-devs poke at data without writing SQL or spinning up Airtable. Have Hosted this for a lot of teams and they all love it.
- **[PlanetScale](https://planetscale.com/)** - Provides mysql databse for scaling your application. Pretty industry standard. Vouched by industry leaders. Also added support for postgres recently. **Pairs with:** Railway, Vercel
- **[Supabase](https://supabase.com/)** - Instant Postgres with realtime, row-level security, auth, and auto-generated APIs. Postgres fanatics finally get a Firebase alternative.
- **[Turso](https://turso.tech/)** - SQLite with global edge replicas — so you can do low-latency reads basically anywhere. Pairs well with edge runtimes like Workers or Fly. **Pairs with:** Cloudflare Workers
- **[TablePlus](https://tableplus.com/)** - Modern, native, and friendly GUI tool for relational databases: PostgreSQL, Redis, SQLite, DuckDB & more. Best GUI for database management — clean interface, fast performance, and supports Apple Silicon, Windows, and Linux. Perfect for developers who want a native experience. Its fast and powerful.
- **[SQLite](https://www.sqlite.org/)** - Please use this — it will handle your app pretty well, you don't need a hosted DB. Embedded, zero-config, ACID-compliant database that's perfect for most applications. Ships with every app, no server setup, and scales surprisingly well. Stop over-engineering your database choice.

### Dev Tooling (3)

- **[Raycast](https://www.raycast.com/)** - Spotlight on steroids for devs — extensions for GitHub, Jira, scripts, clipboard manager, all in one launcher. You’ll never open your browser for tiny tasks again.
- **[TablePlus](https://tableplus.com/)** - Modern, native, and friendly GUI tool for relational databases: PostgreSQL, Redis, SQLite, DuckDB & more. Best GUI for database management — clean interface, fast performance, and supports Apple Silicon, Windows, and Linux. Perfect for developers who want a native experience. Its fast and powerful.
- **[FFmpeg](https://ffmpeg.org/)** - It's a sin not to add this — the Swiss Army knife of media processing. Convert, compress, stream, and manipulate any video/audio format. CLI tool that handles everything from simple conversions to complex video pipelines. Essential for any media-heavy app.

### Document Parsing (3)

- **[Pandoc](https://pandoc.org/)** - Swiss army knife for converting anything text-ish to anything else — Markdown to PDF, DOCX to HTML, you name it. CLI is legendary once you get the flags right.
- **[Unstructured](https://unstructured.io/)** - Turn PDFs, DOCX, and messy HTML into clean text chunks for LLMs — saves tons of regex hacking when building RAG pipelines.
- **[WeasyPrint](https://weasyprint.org/)** - Turn HTML + CSS into PDFs with great control over styling. Solid if you need pixel-perfect invoices or reports without fighting headless Chrome.

### Document Workflow (1)

- **[Docuseal](https://www.docuseal.co/)** - Straightforward, self-hostable e-sign tool — good alternative if you want to skip pricey SaaS and keep documents private.

### ETL (4)

- **[Dagster](https://dagster.io/)** - Modern alternative to Airflow — better DX for building pipelines with Python. Good observability and solid for local dev.
- **[DLT](https://dlthub.com/)** - Sane Python framework for building robust data pipelines — perfect for ELT with modern data stacks. Way less boilerplate than hand-rolled scripts. Its like React for data pipelines.
- **[Fivetran](https://www.fivetran.com/)** - Similar to Airbyte but fully managed — rock-solid syncs for when you don’t want to babysit pipelines. Costs add up fast though.
- **[Prefect](https://www.prefect.io/)** - Prefect is a platform for building and orchestrating data pipelines. It is a modern alternative to Airflow.

### Email (2)

- **[LearnDMARC](https://learndmarc.com/)** - Straightforward learning hub to master SPF, DKIM, and DMARC — solid if you’re setting up secure email and want to avoid the usual trial and error.
- **[MECSA](https://mecsa.jrc.ec.europa.eu/en/)** - EU-hosted tool for testing and monitoring your email authentication (SPF, DKIM, DMARC). Good for catching misconfigs that wreck deliverability or compliance.

### Error Monitoring (1)

- **[Sentry](https://sentry.io/)** - Best way to actually see what broke — traces, breadcrumbs, and releases make debugging less guesswork. None of my projects are without Sentry.

### Event Automation (3)

- **[Inngest](https://www.inngest.com/)** - Handles retries, delays, and workflows that normally need a ton of cron + queue glue. Local dev experience is great — feels like writing normal server code. **Pairs with:** Railway, Vercel
- **[Temporal](https://temporal.io/)** - Makes complex workflows dead-simple — retries, timeouts, long-running tasks, all handled for you. Feels weird at first but saves you from spaghetti cron jobs + DB flags
- **[Trigger.dev](https://trigger.dev/)** - Similar to Inngest but fully open source and really tight with TypeScript/Next.js. Good if you want background jobs baked right into your app repo. **Pairs with:** Vercel

### Infrastructure as Code (2)

- **[Pulumi](https://www.pulumi.com/)** - Write your infra in real programming languages (TS/Python/Go/C#) instead of YAML. Native loops, abstractions, and testing feel like real code.
- **[SST](https://sst.dev/)** - Combines CDK for infra with live Lambda development. Edit your Lambda code locally and see changes instantly—no rebuilds or redeploys.Ask ChatGPT

### Job Queue (4)

- **[Inngest](https://www.inngest.com/)** - Handles retries, delays, and workflows that normally need a ton of cron + queue glue. Local dev experience is great — feels like writing normal server code. **Pairs with:** Railway, Vercel
- **[Temporal](https://temporal.io/)** - Makes complex workflows dead-simple — retries, timeouts, long-running tasks, all handled for you. Feels weird at first but saves you from spaghetti cron jobs + DB flags
- **[Trigger.dev](https://trigger.dev/)** - Similar to Inngest but fully open source and really tight with TypeScript/Next.js. Good if you want background jobs baked right into your app repo. **Pairs with:** Vercel
- **[Upstash](https://upstash.com/)** - Serverless Redis or Kafka with usage-based pricing — dead simple to plug into serverless or edge runtimes where you can’t run stateful infra. Good for queues or rate limits.

### Media Downloader (1)

- **[cobalt.tools](https://cobalt.tools/)** - Private, ad-free, zero-log downloader for dozens of sites — works locally or self-hosted, with encrypted tunnels for maximum privacy.

### Media Optimization & Streaming (1)

- **[Bunny Stream + Bunny Optimizer](https://bunny.net/stream/)** - Seamless image & file optimization plus end-to-end video streaming — built-in encoding, global delivery, usage-based pricing, and real-time resizing. **Pairs with:** Bunny CDN

### Media Processing (1)

- **[FFmpeg](https://ffmpeg.org/)** - It's a sin not to add this — the Swiss Army knife of media processing. Convert, compress, stream, and manipulate any video/audio format. CLI tool that handles everything from simple conversions to complex video pipelines. Essential for any media-heavy app.

### Networking (2)

- **[Cloudflare Tunnel](https://www.cloudflare.com/products/tunnel/)** - Expose local dev servers or self-hosted apps securely without fiddling with firewall or NAT — TLS and auth baked in. Dead simple if you’re already on Cloudflare.
- **[Tailscale](https://tailscale.com/)** - Zero-config mesh VPN — connect all your servers, VMs, and dev machines like they’re on the same LAN. Magic DNS and easy ACLs are a lifesaver.

### No-Code (1)

- **[NocoDB](https://www.nocodb.com/)** - Spreadsheet-like interface for teams. Good for letting non-devs poke at data without writing SQL or spinning up Airtable. Have Hosted this for a lot of teams and they all love it.

### OSINT (1)

- **[Shodan](https://www.shodan.io/)** - Search engine for internet-connected devices — find exposed servers, IoT, or vulnerabilities instantly.

### Object Storage (5)

- **[Backblaze B2 Cloud Storage](https://www.backblaze.com/sign-up/cloud-storage)** - Ultra-low cost (up to 80% cheaper than AWS), free egress when paired with Cloudflare. **Pairs with:** Cloudflare
- **[Bunny Storage](https://bunny.net/storage/)** - Cheap & fast geo-replicated storage that pairs perfectly with Bunny CDN. **Pairs with:** Bunny CDN
- **[Cloudflare R2](https://www.cloudflare.com/developer-platform/r2/)** - Zero egress fees by default, S3-compatible API, and built-in Cloudflare edge network for faster global delivery. **Pairs with:** Cloudflare Workers
- **[Hetzner Storage Boxes + Object Storage](https://www.hetzner.com/storage/storage-box)** - Affordable, high-capacity storage with unlimited traffic, easy protocols (SFTP, SMB, WebDAV), and EU data privacy. **Pairs with:** Hetzner
- **[MinIO](https://min.io/)** - S3-compatible storage you can run anywhere — local dev, on-prem, or cloud. Great when you want S3 features but don’t want S3 bills.

### PaaS (6)

- **[Coolify](https://coolify.io/)** - Self-hosted Heroku — spin up apps, DBs, cron, and deploy from Git with no vendor lock. Good if you want full control but Heroku simplicity. I personally use it in my organization for all our apps.
- **[Fly.io](https://fly.io/)** - Lets you run real containers close to users, not just serverless functions. LiteFS for SQLite replication at the edge is genuinely unique.
- **[Koyeb](https://www.koyeb.com/)** - Global serverless platform for running Docker containers and web services and ai models
- **[Pusher](https://pusher.com/)** - If you just want WebSockets working now with zero infra, Pusher is still the easiest plug-and-play for channels and events.
- **[Railway](https://railway.com/)** - Basically “Heroku, but modern”. Git push, deploy, done. Usage-based billing is great if you don’t want to idle infra burning cash. I vouch for this heavily esp after metal pricing.
- **[Upstash](https://upstash.com/)** - Serverless Redis or Kafka with usage-based pricing — dead simple to plug into serverless or edge runtimes where you can’t run stateful infra. Good for queues or rate limits.

### Product Analytics (1)

- **[PostHog](https://posthog.com/)** - Full-stack, open-source analytics you can self-host. Heatmaps + feature flags in one dashboard—no “black box” data hoarding.

### Real-Time Collaboration (1)

- **[Liveblocks](https://liveblocks.io/)** - Add Google Docs–style multiplayer to your app with dead simple APIs for presence, live cursors, and CRDT-backed storage.

### Real-Time Messaging (1)

- **[Pusher](https://pusher.com/)** - If you just want WebSockets working now with zero infra, Pusher is still the easiest plug-and-play for channels and events.

### Recon (1)

- **[Shodan](https://www.shodan.io/)** - Search engine for internet-connected devices — find exposed servers, IoT, or vulnerabilities instantly.

### Reverse Proxy (2)

- **[Caddy](https://caddyserver.com/)** - Auto HTTPS, easy config, and super developer-friendly — nice if you want a modern alternative to nginx without fiddling with certbot.
- **[Cloudflare Tunnel](https://www.cloudflare.com/products/tunnel/)** - Expose local dev servers or self-hosted apps securely without fiddling with firewall or NAT — TLS and auth baked in. Dead simple if you’re already on Cloudflare.

### Search (1)

- **[Typesense](https://typesense.org/)** - If you want Algolia-level speed but truly open source and easy to self-host. Good docs, very community-friendly.

### Security (1)

- **[Shodan](https://www.shodan.io/)** - Search engine for internet-connected devices — find exposed servers, IoT, or vulnerabilities instantly.

### Serverless GPU (1)

- **[Modal](https://modal.com/)** - Easiest way to run GPU-heavy Python without wrangling CUDA or Docker. Feels like writing local code that scales to big machines when needed. **Pairs with:** Cloud Storage

### Serverless/Edge computing (9)

- **[Cloudflare Containers](https://developers.cloudflare.com/containers/)** - Run any containerized app on Cloudflare’s global edge with tight Workers integration, on-demand scaling, and globally routable Durable Objects — serverless, stateful, and cost-effective. **Pairs with:** Cloudflare Workers
- **[Cloudflare Workers](https://workers.cloudflare.com/)** - Run serverless code at the edge with zero cold starts — powerful for APIs, redirects, or custom logic. **Pairs with:** Cloudflare R2
- **[DigitalOcean](https://www.digitalocean.com/)** - The classic “just works” VPS. Dead-simple UI, tons of tutorials — perfect for quick side projects when you don’t want to fiddle too much. Also has k8s support, database support, and more.
- **[Fly.io](https://fly.io/)** - Lets you run real containers close to users, not just serverless functions. LiteFS for SQLite replication at the edge is genuinely unique.
- **[Koyeb](https://www.koyeb.com/)** - Global serverless platform for running Docker containers and web services and ai models
- **[MotherDuck](https://motherduck.com/)** - If you outgrow local DuckDB files, MotherDuck makes it trivial to scale up to the cloud but keep the same workflow. Hybrid local+cloud is the key angle.
- **[PlanetScale](https://planetscale.com/)** - Provides mysql databse for scaling your application. Pretty industry standard. Vouched by industry leaders. Also added support for postgres recently. **Pairs with:** Railway, Vercel
- **[Supabase](https://supabase.com/)** - Instant Postgres with realtime, row-level security, auth, and auto-generated APIs. Postgres fanatics finally get a Firebase alternative.
- **[Upstash](https://upstash.com/)** - Serverless Redis or Kafka with usage-based pricing — dead simple to plug into serverless or edge runtimes where you can’t run stateful infra. Good for queues or rate limits.

### Traffic Management (1)

- **[Cloudflare Waiting Room](https://www.cloudflare.com/en-in/application-services/products/waiting-room/)** - Virtual waiting room to manage peak traffic, balance load, and prevent server overload. **Pairs with:** Cloudflare CDN

### VPN (1)

- **[Tailscale](https://tailscale.com/)** - Zero-config mesh VPN — connect all your servers, VMs, and dev machines like they’re on the same LAN. Magic DNS and easy ACLs are a lifesaver.

### VPS Hosting (5)

- **[DigitalOcean](https://www.digitalocean.com/)** - The classic “just works” VPS. Dead-simple UI, tons of tutorials — perfect for quick side projects when you don’t want to fiddle too much. Also has k8s support, database support, and more.
- **[Hetzner](https://www.hetzner.com/cloud)** - Reliable EU-based servers with unbeatable price-to-performance, generous bandwidth, and transparent pricing. Love it as a VPS provider. **Pairs with:** OVH CDN
- **[Linode (Akamai)](https://www.linode.com/)** - Solid, no-frills VPS. They’ve been around forever and now get Akamai’s global network perks. Good if you want predictable performance with no drama.
- **[OVHCloud VPS](https://www.ovhcloud.com/en-in/vps/)** - High-performance VPS with unmetered bandwidth (except Asia-Pacific) at very competitive prices. Must use for bandwidth intensive applications. **Pairs with:** OVH CDN
- **[Vultr](https://www.vultr.com/)** - Easy to find a location really close to users — more city-level data centers than most. Their High-Frequency compute is a great bang-for-buck if you need snappy CPUs. **Pairs with:** Cloudflare CDN

### Vector Database (2)

- **[Cloudflare Vectorize](https://developers.cloudflare.com/vectorize/)** - Serverless vector database built right into the Cloudflare edge — store, index, and search embeddings globally with zero infrastructure headaches. **Pairs with:** Cloudflare Workers AI
- **[Weaviate](https://weaviate.io/)** - Handles multi-tenancy out of the box — one of the easiest vector DBs if you need isolated spaces for each customer without gluing together your own auth layer. Easy to setup and use.

### Video Streaming (3)

- **[Bunny Stream + Bunny Optimizer](https://bunny.net/stream/)** - Seamless image & file optimization plus end-to-end video streaming — built-in encoding, global delivery, usage-based pricing, and real-time resizing. **Pairs with:** Bunny CDN
- **[Cloudflare Stream](https://www.cloudflare.com/en-in/developer-platform/products/cloudflare-stream/)** - Hassle-free video hosting and streaming with global delivery, usage-based billing, and built-in player. **Pairs with:** Cloudflare CDN
- **[Mux](https://www.mux.com/)** - Developer-friendly video platform for streaming, live, and on-demand video — APIs, analytics, and beautiful playback with pay-as-you-go pricing. **Pairs with:** Cloudflare CDN

### WYSIWYG Editor (2)

- **[http://novel.sh/](https://novel.sh/)** - Notion-inspired editor with built-in AI autocompletion—means I get smart suggestions without context-switching to ChatGPT. Feels native, fast, and avoids fiddling with separate tooling. 
- **[Tiptap](https://tiptap.dev/)** - A ProseMirror-based, headless TS editor with full control over UI and extensions. I've built custom editors and it’s flexible and reliable—no vendor lock-in, and docs/community are solid. 

### Web Scraping (1)

- **[Crawlee](https://crawlee.dev/)** - Open source Headless browser scraping with smart anti-bot handling baked in. Good middle ground between DIY Puppeteer scripts and big scraping SaaS.

### eSignature (1)

- **[Docuseal](https://www.docuseal.co/)** - Straightforward, self-hostable e-sign tool — good alternative if you want to skip pricey SaaS and keep documents private.


## 📋 Complete Tools Table

| Tool & Link | Category | Description | Pairs With |
|-------------|----------|-------------|------------|
| [Backblaze B2 Cloud Storage](https://www.backblaze.com/sign-up/cloud-storage) | `Object Storage` | Ultra-low cost (up to 80% cheaper than AWS), free egress when paired with Cloudflare. | Cloudflare |
| [Better Auth](https://better-auth.com/) | `Auth` | better than next auth. Full control in your code—no vendor lock-in. Plug in OAuth, email, or custom providers via simple adapter pattern. | N/A |
| [Bunny CDN](https://bunny.net/cdn/) | `CDN` | Blazing-fast global CDN with ultra-low cost, flexible per-region pricing, and free SSL. | Bunny Storage |
| [Bunny Storage](https://bunny.net/storage/) | `Object Storage` | Cheap & fast geo-replicated storage that pairs perfectly with Bunny CDN. | Bunny CDN |
| [Bunny Stream + Bunny Optimizer](https://bunny.net/stream/) | `Media Optimization & Streaming, Video Streaming` | Seamless image & file optimization plus end-to-end video streaming — built-in encoding, global delivery, usage-based pricing, and real-time resizing. | Bunny CDN |
| [Caddy](https://caddyserver.com/) | `Reverse Proxy` | Auto HTTPS, easy config, and super developer-friendly — nice if you want a modern alternative to nginx without fiddling with certbot. | N/A |
| [ClickHouse](https://clickhouse.com/) | `Analytics, Database` | When Postgres gets slow for big aggregates, ClickHouse eats huge logs for breakfast. SQL, columnar, crazy fast — but needs care when writing. | N/A |
| [Cloudflare AI Gateway](https://developers.cloudflare.com/ai-gateway/) | `AI Proxy` | Unified gateway for managing and observing calls to AI APIs — adds caching, rate limiting, logging, and cost control for any AI provider. | Cloudflare Workers AI |
| [Cloudflare CDN](https://www.cloudflare.com/cdn/) | `CDN` | Massive global network, free tier, DDoS protection, and automatic caching — best all-round CDN for performance + security. | Cloudflare Workers |
| [Cloudflare Containers](https://developers.cloudflare.com/containers/) | `Serverless/Edge computing` | Run any containerized app on Cloudflare’s global edge with tight Workers integration, on-demand scaling, and globally routable Durable Objects — serverless, stateful, and cost-effective. | Cloudflare Workers |
| [Cloudflare R2](https://www.cloudflare.com/developer-platform/r2/) | `Object Storage` | Zero egress fees by default, S3-compatible API, and built-in Cloudflare edge network for faster global delivery. | Cloudflare Workers |
| [Cloudflare Stream](https://www.cloudflare.com/en-in/developer-platform/products/cloudflare-stream/) | `Video Streaming` | Hassle-free video hosting and streaming with global delivery, usage-based billing, and built-in player. | Cloudflare CDN |
| [Cloudflare Tunnel](https://www.cloudflare.com/products/tunnel/) | `Networking, Reverse Proxy` | Expose local dev servers or self-hosted apps securely without fiddling with firewall or NAT — TLS and auth baked in. Dead simple if you’re already on Cloudflare. | N/A |
| [Cloudflare Vectorize](https://developers.cloudflare.com/vectorize/) | `Vector Database` | Serverless vector database built right into the Cloudflare edge — store, index, and search embeddings globally with zero infrastructure headaches. | Cloudflare Workers AI |
| [Cloudflare Waiting Room](https://www.cloudflare.com/en-in/application-services/products/waiting-room/) | `Traffic Management` | Virtual waiting room to manage peak traffic, balance load, and prevent server overload. | Cloudflare CDN |
| [Cloudflare Workers](https://workers.cloudflare.com/) | `Serverless/Edge computing` | Run serverless code at the edge with zero cold starts — powerful for APIs, redirects, or custom logic. | Cloudflare R2 |
| [Cloudflare Workers AI](https://developers.cloudflare.com/workers-ai/) | `AI Inference` | Run 50+ open-source models on serverless GPUs, globally distributed. Zero infrastructure to manage — fully integrated with Workers, Pages & AI Gateway. | Cloudflare AI Gateway |
| [cobalt.tools](https://cobalt.tools/) | `Media Downloader` | Private, ad-free, zero-log downloader for dozens of sites — works locally or self-hosted, with encrypted tunnels for maximum privacy. | N/A |
| [Convex](https://www.convex.dev/) | `Auth, BaaS, Database` | Built-in realtime data syncing + auth in one SDK. No separate GraphQL or REST layers—just call JS/TS functions that magically keep clients in sync. Convex is a great choice for building realtime applications with a modern developer experience. | N/A |
| [Coolify](https://coolify.io/) | `PaaS` | Self-hosted Heroku — spin up apps, DBs, cron, and deploy from Git with no vendor lock. Good if you want full control but Heroku simplicity. I personally use it in my organization for all our apps. | N/A |
| [Crawlee](https://crawlee.dev/) | `Web Scraping` | Open source Headless browser scraping with smart anti-bot handling baked in. Good middle ground between DIY Puppeteer scripts and big scraping SaaS. | N/A |
| [Dagster](https://dagster.io/) | `Data Orchestration, ETL` | Modern alternative to Airflow — better DX for building pipelines with Python. Good observability and solid for local dev. | N/A |
| [DigitalOcean](https://www.digitalocean.com/) | `Serverless/Edge computing, VPS Hosting` | The classic “just works” VPS. Dead-simple UI, tons of tutorials — perfect for quick side projects when you don’t want to fiddle too much. Also has k8s support, database support, and more. | N/A |
| [DLT](https://dlthub.com/) | `Data Integration, ETL` | Sane Python framework for building robust data pipelines — perfect for ELT with modern data stacks. Way less boilerplate than hand-rolled scripts. Its like React for data pipelines. | N/A |
| [Docuseal](https://www.docuseal.co/) | `Document Workflow, eSignature` | Straightforward, self-hostable e-sign tool — good alternative if you want to skip pricey SaaS and keep documents private. | N/A |
| [DuckDB](https://duckdb.org/) | `Analytics, Database` | Just run heavy analytical SQL right in your script — no infra needed. Like having a mini-data warehouse in your Python notebook. Personally, I love it for data exploration and analysis. | MotherDuck, Pandas |
| [Effect](https://www.effect.website/) | `Backend Framework` | If you like TypeScript but want Haskell-style effects and dependency injection, Effect is a no-brainer. Handles async, errors, and resources like a real FP runtime. Makes your code more robust and easier to reason about. | N/A |
| [Fivetran](https://www.fivetran.com/) | `Data Integration, ETL` | Similar to Airbyte but fully managed — rock-solid syncs for when you don’t want to babysit pipelines. Costs add up fast though. | N/A |
| [Fly.io](https://fly.io/) | `PaaS, Serverless/Edge computing` | Lets you run real containers close to users, not just serverless functions. LiteFS for SQLite replication at the edge is genuinely unique. | N/A |
| [Hetzner](https://www.hetzner.com/cloud) | `VPS Hosting` | Reliable EU-based servers with unbeatable price-to-performance, generous bandwidth, and transparent pricing. Love it as a VPS provider. | OVH CDN |
| [Hetzner Storage Boxes + Object Storage](https://www.hetzner.com/storage/storage-box) | `Object Storage` | Affordable, high-capacity storage with unlimited traffic, easy protocols (SFTP, SMB, WebDAV), and EU data privacy. | Hetzner |
| [Inngest](https://www.inngest.com/) | `Event Automation, Job Queue` | Handles retries, delays, and workflows that normally need a ton of cron + queue glue. Local dev experience is great — feels like writing normal server code. | Railway, Vercel |
| [Jam.dev](https://jam.dev/) | `Bug Reporting` | Instant screen recording with console logs, network requests, and repro steps auto-attached — devs get exactly what they need to fix bugs fast. | N/A |
| [Koyeb](https://www.koyeb.com/) | `AI Inference, PaaS, Serverless/Edge computing` | Global serverless platform for running Docker containers and web services and ai models | N/A |
| [LearnDMARC](https://learndmarc.com/) | `Email` | Straightforward learning hub to master SPF, DKIM, and DMARC — solid if you’re setting up secure email and want to avoid the usual trial and error. | N/A |
| [Linode (Akamai)](https://www.linode.com/) | `VPS Hosting` | Solid, no-frills VPS. They’ve been around forever and now get Akamai’s global network perks. Good if you want predictable performance with no drama. | N/A |
| [Liveblocks](https://liveblocks.io/) | `Real-Time Collaboration` | Add Google Docs–style multiplayer to your app with dead simple APIs for presence, live cursors, and CRDT-backed storage. | N/A |
| [Mastra AI](https://www.mastra.ai/) | `AI Agent Framework` | A full-fledged TypeScript framework for building, observing, and deploying AI agents and workflows. From practical experience, it’s saved me hours wiring up RAG, tool-calling, memory, tracing, and playback—all integrated and type-safe (no messy glue code between SDKs)  | N/A |
| [MECSA](https://mecsa.jrc.ec.europa.eu/en/) | `Email` | EU-hosted tool for testing and monitoring your email authentication (SPF, DKIM, DMARC). Good for catching misconfigs that wreck deliverability or compliance. | N/A |
| [Metabase](https://www.metabase.com/) | `Analytics, BI` | Easiest self-hosted BI tool — connects to your DB, point and click charts for non-technical folks. Great if you’re tired of making dashboards in Google Sheets. | N/A |
| [MinIO](https://min.io/) | `Object Storage` | S3-compatible storage you can run anywhere — local dev, on-prem, or cloud. Great when you want S3 features but don’t want S3 bills. | N/A |
| [Modal](https://modal.com/) | `AI/ML Infra, Serverless GPU` | Easiest way to run GPU-heavy Python without wrangling CUDA or Docker. Feels like writing local code that scales to big machines when needed. | Cloud Storage |
| [MotherDuck](https://motherduck.com/) | `Analytics, Database, Serverless/Edge computing` | If you outgrow local DuckDB files, MotherDuck makes it trivial to scale up to the cloud but keep the same workflow. Hybrid local+cloud is the key angle. | N/A |
| [Mux](https://www.mux.com/) | `Video Streaming` | Developer-friendly video platform for streaming, live, and on-demand video — APIs, analytics, and beautiful playback with pay-as-you-go pricing. | Cloudflare CDN |
| [NocoDB](https://www.nocodb.com/) | `Database, No-Code` | Spreadsheet-like interface for teams. Good for letting non-devs poke at data without writing SQL or spinning up Airtable. Have Hosted this for a lot of teams and they all love it. | N/A |
| [http://novel.sh/](https://novel.sh/) | `AI Writing, WYSIWYG Editor` | Notion-inspired editor with built-in AI autocompletion—means I get smart suggestions without context-switching to ChatGPT. Feels native, fast, and avoids fiddling with separate tooling.  | N/A |
| [OVH CDN](https://www.ovhcloud.com/en-in/web-hosting/options/cdn/) | `CDN` | Cost-effective EU-focused CDN with tight integration for OVH hosting and pay-as-you-go pricing. Use if using ovh servers. | OVH VPS |
| [OVHCloud VPS](https://www.ovhcloud.com/en-in/vps/) | `VPS Hosting` | High-performance VPS with unmetered bandwidth (except Asia-Pacific) at very competitive prices. Must use for bandwidth intensive applications. | OVH CDN |
| [Pandoc](https://pandoc.org/) | `Document Parsing` | Swiss army knife for converting anything text-ish to anything else — Markdown to PDF, DOCX to HTML, you name it. CLI is legendary once you get the flags right. | N/A |
| [PlanetScale](https://planetscale.com/) | `Database, Serverless/Edge computing` | Provides mysql databse for scaling your application. Pretty industry standard. Vouched by industry leaders. Also added support for postgres recently. | Railway, Vercel |
| [PocketBase](https://pocketbase.io/) | `Auth, BaaS` | Tiny Go backend you can run anywhere — gives you auth, real-time DB, file storage, and an admin UI in a single binary. Ridiculously easy for side projects or POCs. | N/A |
| [Portainer](https://www.portainer.io/) | `Container Management` | Easiest way to manage Docker containers via a web UI. Great when you’re self-hosting lots of stuff and don’t want to SSH for every little tweak. | N/A |
| [PostHog](https://posthog.com/) | `Product Analytics` | Full-stack, open-source analytics you can self-host. Heatmaps + feature flags in one dashboard—no “black box” data hoarding. | N/A |
| [Prefect](https://www.prefect.io/) | `Data Integration, ETL` | Prefect is a platform for building and orchestrating data pipelines. It is a modern alternative to Airflow. | N/A |
| [Pulumi](https://www.pulumi.com/) | `Infrastructure as Code` | Write your infra in real programming languages (TS/Python/Go/C#) instead of YAML. Native loops, abstractions, and testing feel like real code. | N/A |
| [Pusher](https://pusher.com/) | `PaaS, Real-Time Messaging` | If you just want WebSockets working now with zero infra, Pusher is still the easiest plug-and-play for channels and events. | N/A |
| [Railway](https://railway.com/) | `PaaS` | Basically “Heroku, but modern”. Git push, deploy, done. Usage-based billing is great if you don’t want to idle infra burning cash. I vouch for this heavily esp after metal pricing. | N/A |
| [Raycast](https://www.raycast.com/) | `Dev Tooling` | Spotlight on steroids for devs — extensions for GitHub, Jira, scripts, clipboard manager, all in one launcher. You’ll never open your browser for tiny tasks again. | N/A |
| [Sentry](https://sentry.io/) | `Error Monitoring` | Best way to actually see what broke — traces, breadcrumbs, and releases make debugging less guesswork. None of my projects are without Sentry. | N/A |
| [Shodan](https://www.shodan.io/) | `OSINT, Recon, Security` | Search engine for internet-connected devices — find exposed servers, IoT, or vulnerabilities instantly. | N/A |
| [SST](https://sst.dev/) | `Infrastructure as Code` | Combines CDK for infra with live Lambda development. Edit your Lambda code locally and see changes instantly—no rebuilds or redeploys.Ask ChatGPT | N/A |
| [Supabase](https://supabase.com/) | `Auth, BaaS, Database, Serverless/Edge computing` | Instant Postgres with realtime, row-level security, auth, and auto-generated APIs. Postgres fanatics finally get a Firebase alternative. | N/A |
| [Tailscale](https://tailscale.com/) | `Networking, VPN` | Zero-config mesh VPN — connect all your servers, VMs, and dev machines like they’re on the same LAN. Magic DNS and easy ACLs are a lifesaver. | N/A |
| [Temporal](https://temporal.io/) | `Event Automation, Job Queue` | Makes complex workflows dead-simple — retries, timeouts, long-running tasks, all handled for you. Feels weird at first but saves you from spaghetti cron jobs + DB flags | N/A |
| [Tiptap](https://tiptap.dev/) | `WYSIWYG Editor` | A ProseMirror-based, headless TS editor with full control over UI and extensions. I've built custom editors and it’s flexible and reliable—no vendor lock-in, and docs/community are solid.  | N/A |
| [Trigger.dev](https://trigger.dev/) | `Event Automation, Job Queue` | Similar to Inngest but fully open source and really tight with TypeScript/Next.js. Good if you want background jobs baked right into your app repo. | Vercel |
| [Turso](https://turso.tech/) | `Database` | SQLite with global edge replicas — so you can do low-latency reads basically anywhere. Pairs well with edge runtimes like Workers or Fly. | Cloudflare Workers |
| [Typesense](https://typesense.org/) | `Search` | If you want Algolia-level speed but truly open source and easy to self-host. Good docs, very community-friendly. | N/A |
| [Unstructured](https://unstructured.io/) | `Document Parsing` | Turn PDFs, DOCX, and messy HTML into clean text chunks for LLMs — saves tons of regex hacking when building RAG pipelines. | N/A |
| [Upstash](https://upstash.com/) | `Job Queue, PaaS, Serverless/Edge computing` | Serverless Redis or Kafka with usage-based pricing — dead simple to plug into serverless or edge runtimes where you can’t run stateful infra. Good for queues or rate limits. | N/A |
| [Vultr](https://www.vultr.com/) | `VPS Hosting` | Easy to find a location really close to users — more city-level data centers than most. Their High-Frequency compute is a great bang-for-buck if you need snappy CPUs. | Cloudflare CDN |
| [WeasyPrint](https://weasyprint.org/) | `Document Parsing` | Turn HTML + CSS into PDFs with great control over styling. Solid if you need pixel-perfect invoices or reports without fighting headless Chrome. | N/A |
| [Weaviate](https://weaviate.io/) | `Vector Database` | Handles multi-tenancy out of the box — one of the easiest vector DBs if you need isolated spaces for each customer without gluing together your own auth layer. Easy to setup and use. | N/A |
| [TablePlus](https://tableplus.com/) | `Database, Dev Tooling` | Modern, native, and friendly GUI tool for relational databases: PostgreSQL, Redis, SQLite, DuckDB & more. Best GUI for database management — clean interface, fast performance, and supports Apple Silicon, Windows, and Linux. Perfect for developers who want a native experience. Its fast and powerful. | N/A |
| [FFmpeg](https://ffmpeg.org/) | `Media Processing, Dev Tooling` | It's a sin not to add this — the Swiss Army knife of media processing. Convert, compress, stream, and manipulate any video/audio format. CLI tool that handles everything from simple conversions to complex video pipelines. Essential for any media-heavy app. | N/A |
| [SQLite](https://www.sqlite.org/) | `Database` | Please use this — it will handle your app pretty well, you don't need a hosted DB. Embedded, zero-config, ACID-compliant database that's perfect for most applications. Ships with every app, no server setup, and scales surprisingly well. Stop over-engineering your database choice. | N/A |
| [WorkOS](https://workos.com/) | `Auth` |  Lets you bolt on enterprise SSO, directory sync, and audit logs in minutes—no wrestling with SAML/OIDC specs. All your user-management headaches handled via a simple REST/SDK interface | N/A |

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Adding a New Tool

1. **Fork** this repository
2. **Add** your tool to the `toolsData.json` file with the following structure:
   ```json
   {
     "tool": "Tool Name",
     "category": "Category1, Category2",
     "description": "Brief description of what the tool does and why it's useful",
     "pairedWith": "Optional: What it pairs well with",
     "link": "https://tool-website.com"
   }
   ```
3. **Submit** a pull request

### Guidelines

- **Quality over quantity**: Only add tools you've personally used or thoroughly researched
- **Clear descriptions**: Write descriptions that explain the value proposition, not just features
- **Proper categorization**: Use existing categories when possible, or suggest new ones
- **Valid links**: Ensure all links are working and point to the official tool website

### Categories

Current categories include:
- `AI Agent Framework`
- `AI Inference`
- `AI Proxy`
- `AI Writing`
- `AI/ML Infra`
- `Analytics`
- `Auth`
- `BI`
- `BaaS`
- `Backend Framework`
- `Bug Reporting`
- `CDN`
- `Container Management`
- `Data Integration`
- `Data Orchestration`
- `Database`
- `Dev Tooling`
- `Document Parsing`
- `Document Workflow`
- `ETL`
- `Email`
- `Error Monitoring`
- `Event Automation`
- `Infrastructure as Code`
- `Job Queue`
- `Media Downloader`
- `Media Optimization & Streaming`
- `Media Processing`
- `Networking`
- `No-Code`
- `OSINT`
- `Object Storage`
- `PaaS`
- `Product Analytics`
- `Real-Time Collaboration`
- `Real-Time Messaging`
- `Recon`
- `Reverse Proxy`
- `Search`
- `Security`
- `Serverless GPU`
- `Serverless/Edge computing`
- `Traffic Management`
- `VPN`
- `VPS Hosting`
- `Vector Database`
- `Video Streaming`
- `WYSIWYG Editor`
- `Web Scraping`
- `eSignature`

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

*Generated automatically from `toolsData.json` - Last updated: 2025-07-19T20:40:53.741Z*
