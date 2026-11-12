# Dr. Shalini Narayanan

Portfolio website of Dr. Shalini Narayanan, media academic, author and trainer. Built with Gatsby and deployed on Netlify.

![Home page](docs/screenshot.jpg)

| Environment | URL | Branch |
| --- | --- | --- |
| Production | https://shalininarayanan.in | `master` |
| Dev (not indexed) | https://dev.shalininarayanan.in | `develop` |

## Development

Requires Node 22.

```shell
npm install
npm start        # http://localhost:8000
npm run build    # production build in public/
```

## Content

All content is local; there is no CMS.

- `src/content/*.json` holds the text for each section (about, achievements, services, etc.)
- `static/images/` holds images; content images live in `static/images/content/`
- `static/files/` holds downloadable PDFs, served at `/files/...`

To add or edit an item, change the matching JSON file and put any new image next to the existing ones.

## Deployment

GitHub Actions builds the site and deploys it to Netlify on every push:

- `develop` deploys to dev, which is built with `GATSBY_DEPLOY_ENV=dev` to block search engines and disable analytics
- `master` deploys to production

Each GitHub environment (`DEV`, `PROD`) needs the variable `NETLIFY_SITE_ID`, and the repository needs the secret `NETLIFY_AUTH_TOKEN`.
