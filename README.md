# Deep Thought – Technical Project Management

A responsive web interface that explores the world of **Technical Project Management**, inspired by the Deep Thought platform.  
This project fetches live content from a remote JSON API and renders an interactive learning experience with a journey board, task cards, a video player, thread builder, article editor, and 4SA method viewer.


link- https://github.com/Achyut197/Frontendassignmentproject
---

## ✨ Features

- **Responsive layout**  
  Optimized for smartphones, tablets, laptops, and desktops using modern CSS layout techniques (flexbox, grid, and media queries).  

- **Dynamic content from API**  
  Automatically loads title, intro text, and task list from a remote JSON endpoint, with a graceful local fallback if the API fails.  

- **Journey Board sidebar**  
  - Displays “Explore the world of management” and the key tasks as a journey list.  
  - Collapsible sidebar with a compact vertical trigger when minimized.  

- **Task cards**  
  Each task is rendered as a card with:
  - Title  
  - Description  
  - Context-specific content based on `asset_type`:
    - `video` – embedded YouTube player  
    - `threadbuilder` – interactive thread builder UI  
    - `article` – mini article editor with toolbar  
    - `4sa` – collapsible 4SA method sections  

- **Thread builder**  
  - Add multiple sub‑threads dynamically.  
  - Fields for sub‑thread text and interpretation.  
  - Quick action buttons and summary textarea.

- **Article editor**  
  - Title input and content textarea.  
  - Simple toolbar section for typical editor menus (File, Edit, View, etc.).  

- **4SA Method viewer**  
  - Collapsible sections (Introduction, Thread A, etc.).  
  - “See More” actions and inline example block.  

- **Notice Board**  
  Fixed right-side slim panel labeled “Notice Board” to mirror the original UI design.  

- **Floating help actions**  
  Circular buttons at the bottom-right for Help, Users, and Calendar actions.

---

## 🗂 Project Structure

```text
Frontendassignment/
├─ index.html      # Main HTML structure
├─ styles.css      # All layout, typography, and responsive styles
└─ script.js       # Data fetching and dynamic UI logic
