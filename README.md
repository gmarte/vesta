# Vesta Integration Project

## Overview
This project integrates the Vesta anti-fraud solution into a Next.js application. It includes dynamic script loading for Vesta's JS library and API's.

## Features
- **Proof of Concept**: Demonstrates the practical implementation of Vesta into an e-commerce transaction flow.
- **Comprehensive Code Examples**: Includes all necessary code to implement Vesta's anti-fraud features.
- **Dynamic Script Loading**: For Vesta's JS library, enabling dynamic interaction with the Vesta service.
- **Custom Hooks & Components**: Manage Vesta transactions, cart updates, and final evaluations.

## Setup
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Set up your `.env.local` file with the required Vesta credentials.
4. Run `npm run dev` to start the development server.

## Usage
The application consists of several components that interact with the Vesta service:

1. `<AccessTokenFetcher />` - Fetches and stores the access token.
2. `<Initiate />` - Initiates a transaction with Vesta.
3. `<AddCart />` - Adds items to the cart for the transaction.
4. `<PageChange />` - Handles page change events and displays transaction status.
5. `<Finalize />` - Finalizes the transaction.
6. `<Evaluate />` - Evaluates and concludes the transaction process.


## Contributions
Contributions are welcome. Please submit a pull request or open an issue for any bugs or feature requests.

## License
[MIT](https://choosealicense.com/licenses/mit/)
