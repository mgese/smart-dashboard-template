# Smart Home Wall Dashboard

## Overview
This project is a wall-mounted dashboard designed for displaying weather data and managing smart home devices. It is optimized for small screens with a 16:9 aspect ratio. The dashboard offers a sleek and interactive interface to display current weather conditions and, in the future, will support controlling smart home devices.

### Key Features:
- **Weather Display:** The homepage shows current weather data, refreshed every 10 minutes.
- **Smart Home Integration (Upcoming):** Future updates will allow users to view and control selected smart home devices.
- **Swipe Navigation:** Navigate through pages by swiping, making it easy to switch between weather data and smart home devices.
- **Redux State Management:** All data is efficiently processed and managed using Redux.
- **Custom Icons:** Weather icons are fetched from the repository: [weather-icons](https://github.com/basmilius/weather-icons).

---

## Technology Stack
- **Frontend:** React (with Redux for state management)
- **Weather Data API:** [Weather API](https://www.weatherapi.com/)
- **Icon Resources:** [weather-icons](https://github.com/basmilius/weather-icons)

---

## Installation
Follow these steps to get the project running locally:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure environment variables:
   Create and update the necessary configurations in the `environment` constants file. Ensure to set up API keys and endpoints correctly.
5. Start the development server:
   ```bash
   npm start
   ```

---

## Usage
- **Homepage:** Displays current weather conditions.
- **Navigation:** Swipe to access additional pages.
- **Weather Updates:** Data refreshes automatically every 10 minutes.

---

## Future Plans
- **Smart Home Integration:**
    - Display and control smart home devices.
    - Support for additional data visualization and control mechanisms.
- **Customizable UI:**
    - User-defined layouts and themes.
- **Enhanced Navigation:**
    - Gesture-based controls and voice command support.

---

## Contributing
Contributions are welcome! If you have ideas or improvements, feel free to open a pull request or submit an issue.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments
- **Weather API:** [Weather API](https://www.weatherapi.com/)
- **Icons:** [weather-icons](https://github.com/basmilius/weather-icons)
- **State Management:** Redux for efficient data handling.

