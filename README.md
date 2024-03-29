<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Netlify Status](https://api.netlify.com/api/v1/badges/66b1140a-f959-43d9-9b28-0c8e0ef9084d/deploy-status)](https://app.netlify.com/sites/personal-finance-application/deploys)

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h3 align="center">Personal Finance App</h3>

  <p align="center">
     <a href="https://personal-finance-application.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/sdolmo/personal-finance-app-web-js/issues">Report Bug</a>
    ·
    <a href="https://github.com/sdolmo/personal-finance-app-web-js/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <!-- <li><a href="#usage">Usage</a></li> -->
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<img src="./src/assets/images/personal-finance-app.png" />

The Personal Finance Application allows users to view and monitor transactions associated with their accounts.

The main features provided are:

- A dashboard that displays all connected accounts and their current balance.
- Users can view their transactions and it's categorization.
- Secure connection to user's bank account using the Plaid Link API.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- [![React-router][React-router]][React-router-url]
- [![AG-Grid][AG-Grid]][AG-Grid-url]
- [![Netlify][Netlify-badge]][Netlify-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This project uses npm

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/sdolmo/personal-finance-app-web-js.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. In the project directory, you can run:

```sh
  npm start
```

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

### For Developers

To use the application, you must have a Plaid account. You can create one [here](https://dashboard.plaid.com/signup).

Once you have an account, you can connect your `PLAID_CLIENT_ID` and `PLAID_SECRENT` in the `.env` file.

Use the following credentials to connect to the sandbox environment:

- Username: `user_good`
- Password: `pass_good`
- Code: `credential_good`

### Use Live Demo

To just use the [live demo](https://personal-finance-application.netlify.app/), you can use the following credentials:

1. Login using a name and email address
2. Use the following credentials to connect to the sandbox environment:

- Username: `user_good`
- Password: `pass_good`
- Code: `credential_good`

3. View your transactions
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Add README
- [x] Implement [React Router](https://reactrouter.com/en/main)
- [x] Add pages
  - [x] Home
  - [x] Login
  - [x] Accounts
  - [x] Balances
  - [x] Transactions
- [x] Update Google Charts with mock data --> Used AG Grid Instead
- [x] Update Year/Month selector widget --> Used AG Grid instead
- [x] Get Transactions from Plaid API to display on the Transactions page
- [x] Update Styling
- [x] Code clean up
  - [x] Spending Component
  - [x] Remove Balances Page
- [x] Host on Netlify 🎉

See the [open issues](https://github.com/sdolmo/personal-finance-app-web-js/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

If you have a suggestion that would make this better, you can open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Sylvia Dolmo - [@SylviaDolmo](https://twitter.com/SylviaDolmo) - sylviadolmo@gmail.com

Project Link: [https://github.com/sdolmo/personal-finance-app-web-js](https://github.com/sdolmo/personal-finance-app-web-js)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
- [PIRATE KING](https://www.piratekingdom.com/projects/personal-finance-app-frontend)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[forks-shield]: https://img.shields.io/github/forks/sdolmo/personal-finance-app-web-js.svg?style=for-the-badge
[forks-url]: https://github.com/sdolmo/personal-finance-app-web-js/forks
[stars-shield]: https://img.shields.io/github/stars/sdolmo/personal-finance-app-web-js.svg?style=for-the-badge
[stars-url]: https://github.com/sdolmo/personal-finance-app-web-js/stargazers
[issues-shield]: https://img.shields.io/github/issues/sdolmo/personal-finance-app-web-js.svg?style=for-the-badge
[issues-url]: https://github.com/sdolmo/personal-finance-app-web-js/issues
[license-shield]: https://img.shields.io/github/license/sdolmo/personal-finance-app-web-js.svg?style=for-the-badge
[license-url]: https://github.com/sdolmo/personal-finance-app-web-js/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/sylviadolmo/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[React-router]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&color=white
[React-router-url]: https://reactrouter.com/
[AG-Grid]: https://img.shields.io/badge/AG_Grid-2B9348?style=for-the-badge&logo=ag-grid&logoColor=white
[AG-Grid-url]: https://www.ag-grid.com/
[Netlify-badge]: https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white
[Netlify-url]: https://netlify.com

<!-- [product-screenshot]: images/screenshot.png -->
