# Plantsy 🌱

Plantsy is a single-page React inventory management application for a plant store. Built with React (`useState` and `useEffect`), Vite, and a `json-server` REST API backend, it enables store administrators to view available inventory, add new plants, update stock status, and filter plants in real time.

## Visuals

![Plantsy Application Screenshot](./screenshot.png)

## Features

- **Dynamic Inventory Loading:** Fetches and displays all plants from the backend API on initial page load.
- **Add New Plants:** Controlled form that validates inputs and sends a `POST` request to persist new plants to the database while immediately updating the UI.
- **Stock Status Toggle:** Interactive button on each plant card allowing users to mark individual plants as **In Stock** or **Out of Stock**.
- **Real-Time Search Filter:** Case-insensitive search bar that filters displayed plants dynamically as you type and restores the full list when cleared.

## Installation & Setup

1. **Clone the repository and install dependencies:**
   ```bash
   npm install