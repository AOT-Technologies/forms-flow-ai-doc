---
sidebar_position: 22
slug: /theme
---

# Web: Custom Theme

---

## Introduction

This page describes how to customize the application’s visual theme by updating CSS variables. You can modify the appearance of navigation menus, buttons, headers, fonts, and other interface elements to align with your organization's design standards.

## Customizable CSS Variables

The following table outlines the available CSS variables and their effects:

### Navbar

| Variable | Default Value | Effect |
|----------|---------------|--------|
| `--navbar-bg-color` | #013366 | Changes the background color of the navbar and header. |
| `--navbar-active-submenu-bg-color` | #1E5189 | Changes the background color of the submenu in the navbar when clicked. |
| `--navbar-active-submenu-font-color` | white | Changes the font color of the submenu in the navbar when clicked. |
| `--navbar-active-submenu-font-weight` | 500 | No description provided. |
| `--navbar-active-submenu-font-size` | 1rem | No description provided. |
| `--navbar-main-menu-active-bg-color` | #1E5198 | Changes the background color of the main menu in the navbar when clicked. |
| `--navbar-main-menu-active-font-color` | #FFFFFF | Changes the font color of the main menu in the navbar and other header elements. |
| `--navbar-menu-hover-bg-color` | #1E5198 | Changes the background color of the main menu and submenu in the navbar when hovered. |
| `--navbar-hover-submenu-bg-color` | #1E5198 | No description provided. |
| `--navbar-hover-submenu-font-color` | white | No description provided. |
| `--navbar-hover-submenu-font-weight` | 500 | No description provided. |
| `--navbar-hover-submenu-font-size` | 1rem | No description provided. |

---

### Buttons

| Variable | Default Value | Effect |
|----------|---------------|--------|
| `--primary-btn-font-color` | white | Changes the font color of primary buttons, such as "Submit," "Create New Role," etc. |
| `--primary-btn-bg-color` | #013366 | Changes the background color of primary buttons. |
| `--primary-btn-hover-bg-color` | #1E5189 | Changes the background color of primary buttons when hovered. |
| `--secondary-btn-font-color` | #474543 | Changes the font color of secondary buttons, such as "Edit," "History," and "Undo." |
| `--secondary-btn-bg-color` | #FFFFFF | Changes the background color of secondary buttons. |
| `--secondary-btn-hover-bg-color` | #EDEBE9 | Changes the background color of secondary buttons when hovered. |
| `--link-btn-border-radius` | 4px | No description provided. |
| `--sm-btn-border-radius` | 4px | No description provided. |
| `--md-btn-border-radius` | 4px | No description provided. |
| `--lg-btn-border-radius` | 6px | No description provided. |

---

### Typography & Fonts

| Variable | Default Value | Effect |
|----------|---------------|--------|
| `--default-font-color` | #2D2D2D | Changes the default font color for various components, including forms, task headings, and metrics. |
| `--default-font-size` | 1rem | Sets the default font size for elements like navbar submenus and button labels. |
| `--default-font-family` | BC Sans, sans-serif | No description provided. |
| `--default-font-family-url` | https://raw.githubusercontent.com/bcgov/bc-sans/refs/heads/master/css/BC_Sans.css?family=BC+Sans | No description provided. |
| `--default-link-color` | #255A90 | No description provided. |

---

### Branding & General

| Variable | Default Value | Effect |
|----------|---------------|--------|
| `--custom-logo-path` | https://raw.githubusercontent.com/jimin-aot/mcfd-reporting-assets/main/images/BC_CFD_H_RGB_rev.png | Fully qualified logo URL to replace the app logo. |
| `--custom-logo-horizontal-align` | left | No description provided. |
| `--custom-logo-height` | 3rem | No description provided. |
| `--custom-title` | MCFD Reporting | Updates the header title. |
| `--ff-primary` | #013366 | Sets the primary theme color for borders, active tabs, and other key elements. |
| `--ff-secondary` | #EDEBE9 | Sets the secondary theme color for additional highlights and accents. |
| `--hide-formsflow-logo` | true | No description provided. |
| `--default-danger-color` | #CE3E39 | No description provided. |


## Applying the Theme

1. Review the table above and identify the CSS variables you want to customize.
1. Define your custom values in a JSON theme file.
2. Upload the JSON file to a publicly accessible location.
3. Update your deployment configuration to reference this file by setting the `CUSTOM_THEME_URL` environment variable in the `forms-flow-web` service.

**Tip**: _Test your changes in different browsers and screen sizes to ensure consistency across the application._