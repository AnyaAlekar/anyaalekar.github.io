# Personal site

Custom Jekyll theme for GitHub Pages. Pages: Home, Research, Projects.

## Setup
1. Copy everything in this folder into your repo root (replace existing files).
2. Make sure `_config.yml` has no `theme:` or `remote_theme:` line.
3. Edit the content files below, then commit and push.

## Where to edit
- `_config.yml`: name, email, GitHub, LinkedIn, Google Scholar id, navigation
- `_data/profile.yml`: role, location, photo path, intro paragraphs, highlights
- `_data/publications.yml`: papers and reports (`type: paper` or `type: report`)
- `_data/projects.yml`: projects
- `assets/css/main.css`: colours and font (tokens at the top)

## Photo
Save a portrait (4:5 ratio works best, around 800x1000) as `assets/img/profile.jpg`,
then set `photo: /assets/img/profile.jpg` in `_data/profile.yml`.

## Local preview
    bundle install
    bundle exec jekyll serve
