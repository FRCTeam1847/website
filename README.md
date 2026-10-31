# Wyandotte Robotics Website

This repository contains the Wyandotte Robotics team website.

## What this project is

- A React app built with Vite
- Uses TanStack Router for routing
- Uses Tailwind CSS for styling
- Uses Biome for linting and formatting
- Uses `pnpm` as the package manager

## Get started

Install these tools:

- [Node.js](https://nodejs.org/) (latest LTS)
- [pnpm](https://pnpm.io/)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/)

Then run:

```powershell
pnpm install
pnpm dev
```

Open the site at:

```text
http://localhost:3000
```

## Build

```powershell
pnpm build
```

## Media gallery integration

The website's `/media` page fetches public albums and paginated image data from
Piwigo using a TanStack Start server function. Configure `PIWIGO_BASE_URL` in
the website server's environment (for example,
`PIWIGO_BASE_URL=http://{url}:8081`). It must be an HTTP(S) origin
reachable from the website server/container, with no trailing path. This
address is used only on the server and is not sent to the browser.

The website server also proxies thumbnails and original images through its
`/api/media/asset` endpoint. The browser only requests assets from the website
domain; no Piwigo host or separate Nginx media proxy is needed. The website
server/container must be able to reach Piwigo directly. Visitors can open the
original image or download it from the gallery. Keep Piwigo's admin interface
restricted to the media host's private network.

## Useful commands

- `pnpm install` – install dependencies
- `pnpm dev` – run the app locally
- `pnpm build` – build the site for production
- `pnpm preview` – preview the production build

## Notes

- Page files live in `src/routes`
- Reusable UI components live in `src/components`