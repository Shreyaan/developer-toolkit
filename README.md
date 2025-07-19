
# The Modern Developer's Toolkit

This repository contains a curated list of powerful tools, services, and libraries for building modern applications.

The list is managed via the `toolsData.json` file in this repository. The live site and this README are automatically updated when changes are merged into the `main` branch.

**[➡️ View the Live Toolkit Website](https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/)**

---

## Tools Overview

| Tool & Link | Category | Description | Pairs With |
|-------------|----------|-------------|------------|
| [Backblaze B2 Cloud Storage](https://www.backblaze.com/sign-up/cloud-storage) | `Object Storage` | Ultra-low cost (up to 80% cheaper than AWS), free egress when paired with Cloudflare. | Cloudflare |
| [Better Auth](https://better-auth.com/) | `Auth` | better than next auth. Full control in your code—no vendor lock-in. Plug in OAuth, email, or custom providers via simple adapter pattern. | N/A |
| [Bunny CDN](https://bunny.net/cdn/) | `CDN` | Blazing-fast global CDN with ultra-low cost, flexible per-region pricing, and free SSL. | Bunny Storage |
| [Bunny Storage](https://bunny.net/storage/) | `Object Storage` | Cheap & fast geo-replicated storage that pairs perfectly with Bunny CDN. | Bunny CDN |
| [Bunny Stream + Bunny Optimizer](https://bunny.net/stream/) | `Media Optimization & Streaming, Video Streaming` | Seamless image & file optimization plus end-to-end video streaming — built-in encoding, global delivery, usage-based pricing, and real-time resizing. | Bunny CDN |
| [Caddy](https://caddyserver.com/) | `Reverse Proxy` | Auto HTTPS, easy config, and super developer-friendly — nice if you want a modern alternative to nginx without fiddling with certbot. | N/A |
| [ClickHouse](https://clickhouse.com/) | `Analytics, Database` | When Postgres gets slow for big aggregates, ClickHouse eats huge logs for breakfast. SQL, columnar, crazy fast — but needs care when writing. | N/A |
| [Cloudflare AI Gateway](https://www.cloudflare.com/developer-platform/ai-gateway/) | `AI Proxy` | Unified gateway for managing and observing calls to AI APIs — adds caching, rate limiting, logging, and cost control for any AI provider. | Cloudflare Workers AI |
| [Cloudflare CDN](https://www.cloudflare.com/cdn/) | `CDN` | Massive global network, free tier, DDoS protection, and automatic caching — best all-round CDN for performance + security. | Cloudflare Workers |
| [Cloudflare Containers](https://developers.cloudflare.com/containers/) | `Serverless/Edge computing` | Run any containerized app on Cloudflare’s global edge with tight Workers integration, on-demand scaling, and globally routable Durable Objects — serverless, stateful, and cost-effective. | Cloudflare Workers |
| [Cloudflare R2](https://www.cloudflare.com/developer-platform/r2/) | `Object Storage` | Zero egress fees by default, S3-compatible API, and built-in Cloudflare edge network for faster global delivery. | Cloudflare Workers |
| [Cloudflare Stream](https://www.cloudflare.com/developer-platform/stream/) | `Video Streaming` | Hassle-free video hosting and streaming with global delivery, usage-based billing, and built-in player. | Cloudflare CDN |
| [Cloudflare Tunnel](https://www.cloudflare.com/products/tunnel/) | `Networking, Reverse Proxy` | Expose local dev servers or self-hosted apps securely without fiddling with firewall or NAT — TLS and auth baked in. Dead simple if you’re already on Cloudflare. | N/A |
| [Cloudflare Vectorize](https://developers.cloudflare.com/vectorize/) | `Vector Database` | Serverless vector database built right into the Cloudflare edge — store, index, and search embeddings globally with zero infrastructure headaches. | Cloudflare Workers AI |
| [Cloudflare Waiting Room](https://www.cloudflare.com/products/waiting-room/) | `Traffic Management` | Virtual waiting room to manage peak traffic, balance load, and prevent server overload. | Cloudflare CDN |
| [Cloudflare Workers](https://workers.cloudflare.com/) | `Serverless/Edge computing` | Run serverless code at the edge with zero cold starts — powerful for APIs, redirects, or custom logic. | Cloudflare R2 |
| [Cloudflare Workers AI](https://www.cloudflare.com/developer-platform/workers-ai/) | `AI Inference` | Run 50+ open-source models on serverless GPUs, globally distributed. Zero infrastructure to manage — fully integrated with Workers, Pages & AI Gateway. | Cloudflare AI Gateway |
| [cobalt.tools](https://cobalt.tools/) | `Media Downloader` | Private, ad-free, zero-log downloader for dozens of sites — works locally or self-hosted, with encrypted tunnels for maximum privacy. | N/A |
| [Convex](https://www.convex.dev/) | `Auth, BaaS, Database` | Built-in realtime data syncing + auth in one SDK. No separate GraphQL or REST layers—just call JS/TS functions that magically keep clients in sync. | N/A |
| [Coolify](https://coolify.io/) | `PaaS` | Self-hosted Heroku — spin up apps, DBs, cron, and deploy from Git with no vendor lock. Good if you want full control but Heroku simplicity. | N/A |
| [Crawlee](https://crawlee.dev/) | `Web Scraping` | Open source Headless browser scraping with smart anti-bot handling baked in. Good middle ground between DIY Puppeteer scripts and big scraping SaaS. | N/A |
| [Dagster](https://dagster.io/) | `Data Orchestration, ETL` | Modern alternative to Airflow — better DX for building pipelines with Python. Good observability and solid for local dev. | N/A |
| [DigitalOcean](https://www.digitalocean.com/) | `Serverless/Edge computing, VPS Hosting` | The classic “just works” VPS. Dead-simple UI, tons of tutorials — perfect for quick side projects when you don’t want to fiddle too much. | N/A |
| [DLT](https://dlthub.com/) | `Data Integration, ETL` | Sane Python framework for building robust data pipelines — perfect for ELT with modern data stacks. Way less boilerplate than hand-rolled scripts. | N/A |
| [Docuseal](https://www.docuseal.co/) | `Document Workflow, eSignature` | Straightforward, self-hostable e-sign tool — good alternative if you want to skip pricey SaaS and keep documents private. | N/A |
| [DuckDB](https://duckdb.org/) | `Analytics, Database` | Just run heavy analytical SQL right in your script — no infra needed. Like having a mini-data warehouse in your Python notebook. | MotherDuck, Pandas |
| [Effect](https://www.effect.website/) | `Backend Framework` | If you like TypeScript but want Haskell-style effects and dependency injection, Effect is a no-brainer. Handles async, errors, and resources like a real FP runtime. | N/A |
| [Fivetran](https://www.fivetran.com/) | `Data Integration, ETL` | Similar to Airbyte but fully managed — rock-solid syncs for when you don’t want to babysit pipelines. Costs add up fast though. | N/A |
| [Fly.io](https://fly.io/) | `PaaS, Serverless/Edge computing` | Lets you run real containers close to users, not just serverless functions. LiteFS for SQLite replication at the edge is genuinely unique. | N/A |
| [Hetzner](https://www.hetzner.com/cloud) | `VPS Hosting` | Reliable EU-based servers with unbeatable price-to-performance, generous bandwidth, and transparent pricing. | OVH CDN |
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
| [NocoDB](https://www.nocodb.com/) | `Database, No-Code` | Turn any SQL DB into a spreadsheet-like interface. Good for letting non-devs poke at data without writing SQL or spinning up Airtable. | N/A |
| [http://novel.sh/](https://novel.sh/) | `AI Writing, WYSIWYG Editor` | Notion-inspired editor with built-in AI autocompletion—means I get smart suggestions without context-switching to ChatGPT. Feels native, fast, and avoids fiddling with separate tooling.  | N/A |
| [OVH CDN](https://www.ovhcloud.com/en/cdn/) | `CDN` | Cost-effective EU-focused CDN with tight integration for OVH hosting and pay-as-you-go pricing. | OVH VPS |
| [OVHCloud VPS](https://www.ovhcloud.com/en-in/vps/) | `VPS Hosting` | High-performance VPS with unmetered bandwidth (except Asia-Pacific) at very competitive prices. | OVH CDN |
| [Pandoc](https://pandoc.org/) | `Document Parsing` | Swiss army knife for converting anything text-ish to anything else — Markdown to PDF, DOCX to HTML, you name it. CLI is legendary once you get the flags right. | N/A |
| [PlanetScale](https://planetscale.com/) | `Database, Serverless/Edge computing` | Schema changes never block production — database branching is the real standout here. Great if you hate late-night “oops, migration locked the app” moments. | Railway, Vercel |
| [PocketBase](https://pocketbase.io/) | `Auth, BaaS` | Tiny Go backend you can run anywhere — gives you auth, real-time DB, file storage, and an admin UI in a single binary. Ridiculously easy for side projects or POCs. | N/A |
| [Portainer](https://www.portainer.io/) | `Container Management` | Easiest way to manage Docker containers via a web UI. Great when you’re self-hosting lots of stuff and don’t want to SSH for every little tweak. | N/A |
| [PostHog](https://posthog.com/) | `Product Analytics` | Full-stack, open-source analytics you can self-host. Heatmaps + feature flags in one dashboard—no “black box” data hoarding. | N/A |
| [Prefect](https://www.prefect.io/) | `Data Integration, ETL` | Prefect is a platform for building and orchestrating data pipelines. It is a modern alternative to Airflow. | N/A |
| [Pulumi](https://www.pulumi.com/) | `Infrastructure as Code` | Write your infra in real programming languages (TS/Python/Go/C#) instead of YAML. Native loops, abstractions, and testing feel like real code. | N/A |
| [Pusher](https://pusher.com/) | `PaaS, Real-Time Messaging` | If you just want WebSockets working now with zero infra, Pusher is still the easiest plug-and-play for channels and events. | N/A |
| [Railway](https://railway.app/) | `PaaS` | Basically “Heroku, but modern”. Git push, deploy, done. Usage-based billing is great if you don’t want to idle infra burning cash. | N/A |
| [Raycast](https://www.raycast.com/) | `Dev Tooling` | Spotlight on steroids for devs — extensions for GitHub, Jira, scripts, clipboard manager, all in one launcher. You’ll never open your browser for tiny tasks again. | N/A |
| [Sentry](https://sentry.io/) | `Error Monitoring` | Best way to actually see what broke — traces, breadcrumbs, and releases make debugging less guesswork. | N/A |
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
| [Weaviate](https://weaviate.io/) | `Vector Database` | Handles multi-tenancy out of the box — one of the easiest vector DBs if you need isolated spaces for each customer without gluing together your own auth layer. | N/A |
| [WorkOS](https://workos.com/) | `Auth` |  Lets you bolt on enterprise SSO, directory sync, and audit logs in minutes—no wrestling with SAML/OIDC specs. All your user-management headaches handled via a simple REST/SDK interface | N/A |
