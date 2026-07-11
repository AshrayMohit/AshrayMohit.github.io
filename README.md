# Ashray Mohit — CFD Research Website

Personal research website for Ashray Mohit, focused on computational fluid dynamics, turbulent reacting flows, combustion, OpenFOAM development, and thermal-fluid systems.

## Publish with GitHub Pages

1. Create a new public GitHub repository. A repository named `AshrayMohit.github.io` is convenient, but any repository name works with the custom domain.
2. Upload all files in this folder to the repository and push them to the `main` branch.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment → Source**, select **GitHub Actions**.
5. The included workflow at `.github/workflows/deploy-pages.yml` will build and publish the website automatically.
6. In **Settings → Pages → Custom domain**, enter `www.ashraymohit.com` and save it.
7. At the company where the domain is registered, add this DNS record:

   - Type: `CNAME`
   - Host/Name: `www`
   - Target/Value: `AshrayMohit.github.io`

8. After GitHub verifies the DNS, enable **Enforce HTTPS**.

The included `public/CNAME` file preserves the custom domain during future deployments.

## Optional root-domain redirect

To make `ashraymohit.com` redirect to `www.ashraymohit.com`, configure forwarding through the domain registrar or DNS provider. Alternatively, add GitHub Pages apex-domain records according to GitHub's current documentation.

## Local preview

```bash
npm install
npm run dev
```

## Update the website

- Publications, software, and presentations: edit the `WORK` object in `script.js`.
- Research summary and biography: edit `index.html`.
- CV: replace `public/assets/Ashray_Mohit_CV.pdf` while retaining the filename.
- Research media: replace files in `public/assets/media/` while retaining their filenames.
- Styling: edit `styles.css`.

Every push to `main` triggers a fresh GitHub Pages deployment.
