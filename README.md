# kamillobinski.dev

<p align="left">
<img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/kamillobinski/kamillobinski.dev">
<img alt="Github repo size" src="https://img.shields.io/github/repo-size/kamillobinski/kamillobinski.dev">
<img alt="Website" src="https://img.shields.io/website?down_color=lightgrey&down_message=down&up_color=purple&up_message=running&url=https%3A%2F%2Fkamillobinski.dev">
<img alt="GitHub license" src="https://img.shields.io/github/license/kamillobinski/kamillobinski.dev">
</p>

A lightweight, single-page personal portfolio website built with React.

## Preview

![website-kamillobinskidev-screenshot](https://raw.githubusercontent.com/kamillobinski/kamillobinski.dev/master/src/utils/images/website-kamillobinskidev-screenshot.png)

## Features

- Fully responsive
- Color palette stored as variables
- Toggle between light and dark mode
- Retrieving data from database using Node.js
- Animated text placeholders and progress bars

## Changelog

### 0.1.3

- Default theme changed to light
- Added text placeholders in project section
  - Placeholders will be displayed only when data is being<br/> downloaded from the database or a communication<br/> error occurred
  - Placeholders re-render every 3 seconds with random width
- Added changeable avatar based on theme
- Added fetching recent projects from database
  - Auto searching technologies in text and highlighting them
  - Retry connection with server when error occurs
- Added Node.js server on Heroku
- Added MySQL database on Heroku
- Added new section with progress bars

### 0.1.2

- Improved svg rendering
- Added svg hover event
- Changed mobile layout

### 0.1.1

- Added eduation degree to education
- Added link `rel="noopener noreferrer"`

### 0.1.0

- Added grid layout
- Added light and dark mode
- Added content

## License

Apache 2.0

---

> Gmail [Kamil Łobiński](mailto:kamilobinski@gmail.com) &nbsp;&middot;&nbsp;
> GitHub [@kamillobinski](https://github.com/kamillobinski) &nbsp;&middot;&nbsp;
> LinkedIn [Kamil Łobiński](https://www.linkedin.com/in/kamillobinski/?locale=en_US)
