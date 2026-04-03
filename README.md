# 🔥 Wildfire Oracle
### Live AI Dashboard — Nepal Wildfire & PM₂.₅ Intelligence

> A real-time research dashboard tracking wildfire hotspots and predicting PM₂.₅ air quality spikes across Nepal, powered by NASA FIRMS satellite data and Claude AI.

**[🌐 Live Demo →](https://nabinpandey16.github.io/wildfire-oracle)**

---

![Dashboard Preview](preview.png)

---

## What This Is

Wildfire Oracle is an interactive intelligence dashboard built on top of an ongoing research project studying the **spatial and temporal impact of wildfires on PM₂.₅ concentrations in Nepal (2001–2026)**.

It combines satellite fire detection, aerosol reanalysis data, and an AI assistant into a single interface — making the research accessible, interactive, and live.

---

## Features

| Feature | Description |
|---|---|
| 🗺 **Live Fire Map** | Real NASA VIIRS/MODIS hotspots over Nepal, updated every 10 minutes |
| 📊 **PM₂.₅ Lag Chart** | Historical seasonal pattern showing fire–PM₂.₅ lag response |
| 📡 **Risk Stats** | Active fire count, estimated PM₂.₅, district risk index |
| 🧠 **Oracle AI** | Claude-powered assistant — ask anything about the data |
| ⚡ **Auto-refresh** | Dashboard refreshes live fire data every 10 minutes |

---

## Data Sources

| Source | What it provides |
|---|---|
| [NASA FIRMS](https://firms.modaps.eosdis.nasa.gov/) | VIIRS SNPP · Active fire detections (last 7 days) |
| [MERRA-2](https://gmao.gsfc.nasa.gov/reanalysis/MERRA-2/) | Aerosol reanalysis · PM₂.₅ estimation |
| [MODIS](https://modis.gsfc.nasa.gov/) | Historical fire radiative power (FRP) |

---

## Research Context

This dashboard is built alongside a research paper:

**"Spatial and Temporal Impact of Wildfires on PM₂.₅ Concentrations in Nepal (2001–2026)"**

**Methods used:**
- Kernel Density Estimation (KDE) for spatial fire clustering
- Time-series analysis of fire count vs PM₂.₅
- Lag-response analysis (peak lag: 1–3 days, March–April season)

**Key findings:**
- Peak fire–PM₂.₅ coupling occurs in **March–April**
- **Mid-Hill belt** (Chitwan, Bardiya, Salyan) shows highest historical exposure
- PM₂.₅ spikes follow fire activity with a **1–3 day lag**

---

## How to Run Locally

This is a **single static HTML file** — no build step, no dependencies to install.

```bash
git clone https://github.com/nabinpandey16/wildfire-oracle.git
cd wildfire-oracle
# Just open index.html in your browser
open index.html
```

For live NASA FIRMS data, the API key is already embedded. To use your own:
1. Get a free key at [firms.modaps.eosdis.nasa.gov/api](https://firms.modaps.eosdis.nasa.gov/api/)
2. Replace `FIRMS_KEY` in `index.html`

---

## Deploy to GitHub Pages

```bash
git add .
git commit -m "🔥 Wildfire Oracle dashboard"
git push origin main
# Then: Repo Settings → Pages → Source: main → / (root)
```

Live at: `https://nabinpandey16.github.io/wildfire-oracle`

---

## Tech Stack

- **Leaflet.js** — interactive map
- **Chart.js** — time-series visualization
- **NASA FIRMS API** — live satellite fire data
- **Claude API (Anthropic)** — AI assistant layer
- Vanilla HTML/CSS/JS — zero framework, fully static

---

## Author

**Nabin Pandey**
B.Sc. Physics · Tri-Chandra Multiple Campus, Tribhuvan University

APS Student Ambassador (2024–2025) · Member, QNepal & ANPA

[![LinkedIn](https://img.shields.io/badge/LinkedIn-nabinpandey1661-blue?style=flat&logo=linkedin)](https://np.linkedin.com/in/nabinpandey1661)
[![GitHub](https://img.shields.io/badge/GitHub-nabinpandey16-black?style=flat&logo=github)](https://github.com/nabinpandey16)

---

## License

MIT — free to use, adapt, and build on. If you use this in research, a citation or mention is appreciated. 🙏
