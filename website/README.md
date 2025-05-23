# Lamago Website

This directory contains a simple multi-page website with a parallax scrolling effect. It can be served as a standalone site or integrated into a WordPress installation.

## Running with Docker

Build and run the container using Docker:

```bash
docker build -t lamago-site .
docker run -p 8080:80 lamago-site
```

Then open `http://localhost:8080` in your browser.

## Integrating with WordPress

To use this site as a theme, copy the contents of this folder into the `wp-content/themes/lamago` directory of your WordPress setup. Adjust the HTML structure as needed to match the WordPress theme requirements.

## Structure

- `index.html` – Home page with parallax hero section
- `about.html` – About page
- `contact.html` – Contact form posting to a simple backend
- `css/style.css` – Styling including parallax backgrounds
- `js/main.js` – Simple form interaction
- `Dockerfile` – Container for serving the site using nginx

## Note

The container now includes a small Python backend to process contact form submissions.
