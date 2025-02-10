# Project Name

## Description

This project is a web application built using React, Material UI and TypeScript. It includes various components and features designed to provide a responsive and user-friendly interface.

## Folder Structure

- `src/`: Contains the source code for the application.
  - `components/`: Contains reusable React components.
    - `Header.tsx`: The header component of the application, which includes navigation and branding.
  - `styles/`: Contains CSS and styling files.
  - `utils/`: Contains utility functions and helpers.
- `public/`: Contains public assets such as images and the HTML template.

## Key Components

### Header.tsx

The `Header.tsx` file defines the header component of the application. It includes:

- A link that navigates to the home page.
- A `Grid` component from Material-UI to layout the header content.
- A `MenuIcon` component for the menu icon.
- A `Typography` component for displaying the application name ("Google").

### Example Code Snippet

```tsx
<a href="/">
  <Grid
    xs={12}
    sm={8}
    item
    container
    alignItems="center"
    justifyContent={isMobile ? "center" : "flex-start"}
  >
    <MenuIcon className="text-white mr-2" />
    <Typography
      variant="h5"
      sx={{ flexGrow: 1, color: "white" }}
      className="text-white"
    >
      Google
    </Typography>
  </Grid>
</a>
{/* Center section: Tabs */}
<Grid
  xs={12}
  sm={8}
  item
  container
  justifyContent={isMobile ? "center" : "center"}
>
