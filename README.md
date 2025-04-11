# Interactive Banner For Outreachy Contribution

This repository contains a React-based banner component system designed for the contribtion stage of outreachy 2025. The banners are highly customizable and support multiple styles, including **Minimal**, **Modern**, and **Retro**. The project is built using **Next.js** and includes features like dynamic styling and a color picker for real-time customization.

---

## Table of Contents

- [Features](#features)
- [Installation and Development](#installation-and-development)
- [Usage](#usage)
- [Banner Styles](#banner-styles)
  - [Modern Style](#modern-style)
  - [Retro Style](#retro-style)
  - [Minimal Style](#minimal-style)
- [Customization](#customization)
- [License](#license)
- [Contributing](#contributing)
- [Contact](#contact)

---

## Features

- **Dynamic Styling**: Automatically adjusts text and background colors for readability.
- **Multiple Banner Styles**: Choose between Minimal, Modern, and Retro designs.
- **Color Picker**: A color picker is included to allow users to drag across the wheel and see changes in real-time without having to worry about color codes or hex values.
- **Image Support**: Easily add images to banners with customizable dimensions.

---

## Installation and Development

1. Clone the repository:
   `git clone https://github.com/Dahbaeraychy/interactive-banner.git`
   `cd interactive-banner`

2. Install dependencies:
   `yarn`

3. Start the development server:
   `yarn dev`

4. Lint the code:
   `yarn lint`

5. Run tests:
   `yarn test`

6. Build for production:
   `yarn build`

---

## Usage

1. To use the banner after creation, simply click the **Download** button, which will download the banner image onto your PC.

---

## Banner Styles

### Modern Style

A visually appealing banner with a grid layout and diamond-shaped elements. This style is ideal for banners that include images and dynamic layouts.

- Title: "Modern Banner"
- Description: "A modern banner with dynamic colors and images."
- Image: ![Modern Banner](https://raw.githubusercontent.com/Dahbaeraychy/interactive-banner/main/public/banner-1.png)

### Retro Style

A retro-themed banner with bold typography and horizontal layouts. Use this style for banners with a vintage or classic aesthetic.

- Title: "Retro Banner"
- Description: "A retro-style banner with a unique layout."
- Image: ![Retro Banner](https://raw.githubusercontent.com/Dahbaeraychy/interactive-banner/main/public/banner-2.png)

### Minimal Style

A clean and simple banner with a focus on text content. Use this style for banners that prioritize text clarity and simplicity.

- Title: "Minimal Banner"
- Description: "A simple and clean banner design."
- Image: ![Minimal Banner](https://raw.githubusercontent.com/Dahbaeraychy/interactive-banner/main/public/banner-3.png)

---

## Customization

### Props

- **`title`** (`string`): The title text of the banner. (Required)
- **`description`** (`string`): The description text of the banner. (Required)
- **`image`** (`string` or `null`): The image URL to display in the banner. (Optional)
- **`bgColor`** (`string`): The background color of the banner. (Required)
- **`bannerStyle`** (`"minimal" | "modern" | "retro"`): The style of the banner. (Required)

---

## License

This project is licensed under the MIT License.

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

You are also welcome to submit new banner styles! If you have a creative idea for a new banner design, feel free to contribute by adding a new style to the `Banner` component. Make sure to include proper documentation and examples for your new style.

---

## Contact

For questions or support, please contact [Linkedin](https://www.linkedin.com/in/okoriedaberechi/).
