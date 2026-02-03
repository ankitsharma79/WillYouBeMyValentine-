# WillYouBeMyValentine?

This is a small Valentine’s Day prank webpage built using plain HTML, CSS, and JavaScript.

It asks a simple question — *“Will you be my Valentine?”* — with two buttons:
- **Yes**, which works normally
- **No**, which refuses to be clicked and keeps moving away when the user tries

The idea is intentionally simple and playful, with all behavior handled on the client side and no external libraries involved.

---

## What this does

- Shows a clean Valentine-themed card in the center of the page
- Displays **Yes** and **No** buttons next to each other initially
- Once interaction starts, the **No** button jumps to random positions
- The button movement is restricted to a fixed area so it never:
  - leaves the card
  - overlaps important content
  - becomes invisible
- Clicking **Yes** ends the interaction and shows a confirmation message

Everything is kept predictable so the prank feels intentional rather than broken.

---

## How it’s built

- **HTML** for structure  
- **CSS** for layout, spacing, and styling  
- **JavaScript** for:
  - detecting cursor proximity
  - repositioning the No button
  - keeping movement inside safe bounds

There are no frameworks, build tools, or dependencies.  
The entire project lives in a single HTML file.

---
