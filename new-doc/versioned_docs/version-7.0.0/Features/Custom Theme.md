---
sidebar_position: 22
slug: /theme
---

# Web: Custom Theme

---

### Introduction

This guide explains how to customize themes in your application by modifying various CSS variables. These changes allow you to adjust the visual appearance of navigation menus, buttons, headers, fonts, and more, creating a tailored experience for your users.

### Customizable CSS Variables

The following table outlines the available CSS variables and their effects:

| Variable | Default Value | Effect |
|----------|---------------|--------|
| `--custom-logo-path` |  | Fully qualified logo URL to replace the app logo. |
| `--navbar-active-submenu-bg-color` | #145a32 | Changes the background color of the submenu in the navbar when clicked. |
| `--navbar-active-submenu-font-color` | #ba4a00 | Changes the font color of the submenu in the navbar when clicked. |
| `--navbar-menu-hover-bg-color` | #bb8fce | Changes the background color of the main menu and submenu in the navbar when hovered. |
| `--navbar-main-menu-active-bg-color` | #fad7a0 | Changes the background color of the main menu in the navbar when clicked. |
| `--navbar-main-menu-active-font-color` | #641e16 | Changes the font color of the main menu in the navbar and other header elements. |
| `--navbar-bg-color` | #b7950b | Changes the background color of the navbar and header. |
| `--custom-title` | "SampleWebsite.in" | Updates the header title. |
| `--primary-btn-font-color` | #e59866 | Changes the font color of primary buttons, such as "Submit," "Create New Role," etc. |
| `--primary-btn-bg-color` | #0b5345 | Changes the background color of primary buttons. |
| `--primary-btn-hover-bg-color` | #a9dfbf | Changes the background color of primary buttons when hovered. |
| `--secondary-btn-font-color` | #d6dbdf | Changes the font color of secondary buttons, such as "Edit," "History," and "Undo." |
| `--secondary-btn-bg-color` | #5d6d7e | Changes the background color of secondary buttons. |
| `--secondary-btn-hover-bg-color` | #aeb6bf | Changes the background color of secondary buttons when hovered. |
| `--default-font-color` | #7d3c98 | Changes the default font color for various components, including forms, task headings, and metrics. |
| `--default-font-size` | 2rem | Sets the default font size for elements like navbar submenus and button labels. |
| `--ff-primary` | #c32047 | Sets the primary theme color for borders, active tabs, and other key elements. |
| `--ff-secondary` | #cae85a | Sets the secondary theme color for additional highlights and accents. |

### Applying the Theme

1. Identify the CSS variables you want to customize based on the table above.
2. Update the values in your theme JSON.
3. Host the JSON file to file storage and configure the deployment to use this theme file.

**Tip**: _Test your changes in different browsers and screen sizes to ensure consistency across the application._