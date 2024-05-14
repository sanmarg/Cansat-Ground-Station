[![Build](https://github.com/Gagan-Space/Cansat-Ground-Station/actions/workflows/build.yaml/badge.svg)](https://github.com/Gagan-Space/Cansat-Ground-Station/actions/workflows/build.yaml)
[![Documentation](https://github.com/Gagan-Space/Cansat-Ground-Station/actions/workflows/mkdocs.yaml/badge.svg)](https://github.com/Gagan-Space/Cansat-Ground-Station/actions/workflows/mkdocs.yaml)
![GitHub Release](https://img.shields.io/github/v/release/Gagan-Space/Cansat-Ground-Station)
![GitHub License](https://img.shields.io/github/license/Gagan-Space/Cansat-Ground-Station)
![GitHub Repo stars](https://img.shields.io/github/stars/Gagan-Space/Cansat-Ground-Station?style=flat)

# CanSat Ground Station

Welcome to the CanSat Ground Station project! This project aims to provide a ground station software for CanSat projects using Vite and React.

## Data Format

Telemetry data collected from the CanSat payload is transmitted to the ground station in a structured format.

- **Byte[0] Data Header, 0x0F**
- **Byte[1-47] Telemetry Data :**
  - packetCount (4 bytes)
  - mode (1byte)
  - state (1byte)
  - altitude (4 byte)
  - temperature (4 byte)
  - pressure (4 byte)
  - voltage (4 byte)
  - gpsTime (4 byte)
  - gpsLatitude (4 byte)
  - gpsLongitude (4 byte)
  - gpsSats (1 byte)
  - tiltX (4 byte)
  - tiltY (4 byte)
  - rotZ (4 byte)
- **Byte[48] Data Footer, 0x00**

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your local machine.
- Git installed on your local machine.

### Installation

1. Clone the repository to your local machine:
   ```sh
   https://github.com/Gagan-Space/Cansat-Ground-Station.git
   ```
2. cd cansat-ground-station
   ```sh
   cd cansat-ground-station
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

### Running the Development Server

To start the development server, run:

```sh
npm run dev
```

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository and clone it to your local machine.
2. Create a new branch for your feature or bug fix:
   ```sh
   git checkout -b feature/my-feature
   ```
3. Make your changes and ensure they follow the project's coding style.
4. Commit your changes with descriptive commit messages:
   ```sh
   git commit -am "Add a new feature"
   ```
5. Push your branch to your fork:
   ```sh
   git push origin feature/my-feature
   ```
6. Finally, open a pull request on the original repository's main branch.

## License

This project is licensed under the GNU General Public License v3.0 (GPL-3.0). See the [LICENSE](LICENSE) file for details.
