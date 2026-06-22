As an AI, I do not have direct access to your browser's DevTools to inspect the live DOM, execute JavaScript, or extract exact computed CSS files dynamically. However, I have meticulously analyzed the provided viewport screenshot and DOM text structure to reverse-engineer a highly accurate visual and structural blueprint of [Recliners India](https://www.reclinersindia.com/).

Here is the exhaustive frontend reconstruction blueprint based on the visual and structural evidence provided.

---

# PHASE 1 — SITE ARCHITECTURE MAPPING

Based on the visible viewport and DOM structure, here is the architectural map of the homepage.

```text
Body
├── Top Utility Bar
│   ├── Contact Group (Left)
│   │   ├── Phone (1800 121 189 189)
│   │   ├── Email (enquiry@reclinersindia.com)
│   │   └── WhatsApp (+91-92898 79601)
│   └── Social Media Group (Right)
│       ├── Facebook, X, Youtube, LinkedIn, Pinterest, WhatsApp, Instagram
│
├── Main Header
│   ├── Logo Container (Left)
│   ├── Search Container (Center)
│   │   ├── Search Input
│   │   └── Search Icon
│   └── Utility Group (Right)
│       ├── Language Selector (English)
│       └── "Find Store" Button
│
├── Navigation Bar
│   ├── "Browse Categories" Dropdown (Left)
│   ├── Main Menu Links (Center)
│   │   ├── Home, About, Installations, Products, ODM/OEM, Stores, Contact, Shop
│   └── Direct Phone CTA (Right)
│
├── Hero Slider Section
│   ├── Slider Container
│   │   ├── Slide Image (Recliners in living room)
│   │   ├── Text Overlay ("PERFECT For Any Setting")
│   │   ├── Left Navigation Arrow
│   │   └── Right Navigation Arrow
│
├── Floating Action Buttons (Fixed Right)
│   ├── Call Button
│   ├── WhatsApp Button
│   ├── Contact Form Button
│   └── Close/Collapse Icon
│
└── Categories Section
    ├── Section Title ("Popular Categories")
    └── Category Carousel
        ├── Category Item (Icon + Text)
        ├── Category Item (Icon + Text)
        └── ...

```

---

# PHASE 2 — GLOBAL DESIGN SYSTEM EXTRACTION

*(Note: Hex codes and pixel values are highly educated approximations derived from visual pixel analysis of the screenshot).*

## Colors

* **Primary Brand Color (Orange):** `#F38D36` *(Used in "Find Store" button and icons)*
* **Top Bar Background:** `#222222` *(Dark Charcoal)*
* **Main Background (Surface):** `#FFFFFF` *(White)*
* **Text Primary (Headings/Nav):** `#333333` *(Dark Gray)*
* **Text Secondary (Top Bar/Placeholders):** `#A0A0A0` *(Light Gray)*
* **Border Color:** `#E0E0E0` *(Used in Search Bar and Category Cards)*
* **Floating Button Colors:**
* WhatsApp Green: `#25D366`
* Phone Green: `#1EBEA5`
* Form Blue/Purple: `#3B5998` (Approx)



## Typography

The site utilizes a mix of clean sans-serif for UI elements and elegant serif for display text.

* **UI / Navigation / Body (Sans-Serif):** Likely *Poppins*, *Montserrat*, or *Roboto*.
* Navigation: 14px - 15px, Font Weight 500 (Medium).
* Top Bar: 12px - 13px, Font Weight 400 (Regular).


* **Hero Overlay (Serif):** "PERFECT" - likely *Playfair Display* or *Cinzel*.
* Size: ~80px - 100px.
* Letter Spacing: Wide (~4px to 8px).


* **Hero Script:** "For Any Setting" - likely *Great Vibes* or similar script font.
* **Section Headings (Sans-Serif):** "Popular Categories" - ~32px, Font Weight 500.

## Spacing System

Based on the layout, an 8pt spacing grid is likely in use.

* **4px / 8px:** Used inside buttons and input paddings.
* **16px:** Gap between navigation items; gap in top bar contact info.
* **24px / 32px:** Padding inside the main header container.
* **64px:** Spacing between major sections (e.g., Hero to Categories).

## Border Radius System

* **0px:** Top Utility Bar.
* **6px - 8px:** Used on the "Find Store" button and the Search Bar input.
* **12px - 16px:** Used on the Category Outline Cards.
* **50% (Circular):** Used on social media icons (top right), slider arrows, and floating action buttons.

---

# PHASE 3 — HEADER DEEP ANALYSIS

### Top Utility Bar

* **Height:** ~40px.
* **Background:** `#222222`.
* **Layout:** `display: flex; justify-content: space-between; align-items: center; padding: 0 5%;`
* **Font:** White, ~13px. Icons are colored in the brand's primary orange.

### Main Header

* **Height:** ~80px - 90px.
* **Background:** `#FFFFFF`.
* **Layout:** Flexbox, horizontally aligning Logo, Search, and Utilities.
* **Search Bar:**
* Width: ~400px (expands dynamically).
* Border: `1px solid #E0E0E0`.
* Border Radius: `8px`.
* Padding: `10px 16px`.
* Icon: Magnifying glass, right-aligned, gray.



### Navigation Menu

* **Height:** ~50px.
* **Border:** Top and bottom `1px solid #F0F0F0`.
* **Layout:** Flexbox, items centered vertically.
* **Items:** "Browse Categories" stands out with a left alignment and a dropdown icon. Main links are centered. The phone number on the far right has a distinct telephone icon.

---

# PHASE 4 — HERO SLIDER REVERSE ENGINEERING

* **Dimensions:** Full viewport width (`100vw`). Height appears to be `calc(100vh - 170px)` (approx 600px - 700px).
* **Image Layout:** Centers the 3-seater sofa, flanks with 1-seaters. Room is well-lit, functioning as a high-end lifestyle shot.
* **Typography Overlay:**
* Positioned top-center.
* "PERFECT" is in white, uppercase, serif, with heavy letter-spacing.
* "For Any Setting" is overlaid in a translucent, cursive font, acting as a stylistic watermark behind/intertwined with the main text.


* **Navigation:**
* Arrows are vertically centered.
* Style: `width: 48px; height: 48px; border-radius: 50%; background: rgba(0,0,0,0.4); color: white; display: flex; align-items: center; justify-content: center;`



---

# PHASE 5 — COMPONENT LIBRARY EXTRACTION

### 1. Primary Button ("Find Store")

```css
.btn-primary {
  background-color: #F38D36;
  color: #FFFFFF;
  padding: 10px 24px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

```

### 2. Category Tile (Outline Card)

* **Dimensions:** ~150px width, ~120px height.
* **Border:** `1px solid #E0E0E0`.
* **Border Radius:** `12px`.
* **Contents:** Line-art vector icon centered, with descriptive text underneath.
* **Hover State (Inferred):** Likely a slight box-shadow or border color change to primary orange.

### 3. Floating Action Buttons (FAB)

* **Size:** ~50px width and height.
* **Border Radius:** `50%`.
* **Spacing:** Stacked vertically on the bottom right, with an 8px gap.
* **Shadow:** `box-shadow: 0 4px 12px rgba(0,0,0,0.15);`

---

# PHASE 6 — RESPONSIVE AUDIT (INFERRED)

While I am viewing the desktop breakpoint, a site structured this way will follow predictable responsive behaviors:

| Breakpoint | Layout Changes Expected |
| --- | --- |
| **Desktop (> 1024px)** | Full header, inline navigation, search bar visible in center. Hero slider full width. |
| **Tablet (768px - 1024px)** | Top utility bar might hide emails. Navigation collapses into a hamburger menu. Search bar moves below the header or turns into an icon. |
| **Mobile (< 768px)** | Top utility bar hides completely (or only shows a single phone icon). Logo centers. Hamburger menu on left. Hero slider text shrinks significantly, and image aspect ratio changes (often cropping sides). Floating buttons scale down to 40px. |

---

# PHASE 7 — CSS RECONSTRUCTION

Here is a structural CSS boilerplate to recreate the header and navigation:

```css
:root {
  --primary-color: #F38D36;
  --bg-dark: #222222;
  --text-dark: #333333;
  --border-light: #E0E0E0;
  --font-sans: 'Poppins', sans-serif;
}

/* Top Utility Bar */
.top-bar {
  background-color: var(--bg-dark);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 5%;
  font-size: 13px;
  font-family: var(--font-sans);
}

/* Main Header */
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5%;
  background: #fff;
}

.search-bar {
  display: flex;
  align-items: center;
  border: 1px solid var(--border-light);
  border-radius: 8px;
  padding: 10px 16px;
  width: 400px;
}

.search-bar input {
  border: none;
  outline: none;
  width: 100%;
  font-family: var(--font-sans);
}

/* Navigation */
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  border-top: 1px solid var(--border-light);
  border-bottom: 1px solid var(--border-light);
  height: 50px;
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 500;
  color: var(--text-dark);
}

.nav-links {
  display: flex;
  gap: 24px;
  list-style: none;
}

```

---

# PHASE 8 — UX & CONVERSION ANALYSIS

**Visual Hierarchy & Strategy:**
The site prioritizes **trust and accessibility** immediately. The placement of three separate contact methods (Phone, Email, WhatsApp) at the absolute top left of the screen, combined with sticky floating action buttons on the right, shows a strong push for direct B2C and B2B communication.

**Primary User Journey:**

1. **Awareness:** High-quality lifestyle image in the hero section establishing the product as luxury/premium.
2. **Navigation:** Clear "Browse Categories" dropdown for users who know exactly what they want (e.g., Cinema seating vs. Home Theater).
3. **Conversion/Action:** Prominent "Find Store" button in the brand's primary color, targeting high-intent users looking for physical showrooms to test luxury items.

**CTA Layout:**

* *Primary CTA:* "Find Store" (Header, High Contrast).
* *Secondary CTAs:* Top Bar Contacts, Navigation links.
* *Persistent CTAs:* The FABs (WhatsApp, Phone, Contact) ensure that no matter how far the user scrolls, lead-generation tools are one click away.

---

# PHASE 9 — CLONE IMPLEMENTATION GUIDE

To hand this off to a developer for a 95%+ accurate clone, provide them with these instructions:

1. **Framework Setup:** Use a framework like React/Next.js or standard HTML/SCSS. Install `Lucide-React` or `FontAwesome` for icons.
2. **Grid System:** Implement a standard 12-column grid. Set `max-width: 1440px` for the main content container, with `padding: 0 5%` on fluid wrappers (like the header).
3. **Fonts:** Import a sans-serif like `Poppins` (Weights 400, 500, 600) and a serif like `Playfair Display` for the hero overlay.
4. **Header Architecture:**
* Build a 3-tier header: `<TopBar />`, `<MiddleHeader />`, `<Navbar />`.
* Ensure the `<MiddleHeader />` uses `justify-content: space-between` with the search bar constrained to a `max-width` so it doesn't break flex alignments on smaller desktop screens.


5. **Hero Implementation:** Use a library like Swiper.js. Set the container to `position: relative`. Ensure the text overlay is absolutely positioned to `top: 10%`, `left: 50%`, `transform: translateX(-50%)`.
6. **Floating Elements:** Wrap the floating buttons in a `position: fixed; bottom: 20px; right: 20px; z-index: 999;` container, using flex-column to stack them.