# Decentralized KYC System

A blockchain-based Know Your Customer (KYC) system that enables secure, transparent, and efficient customer verification across multiple financial institutions.

## Overview

This project implements a decentralized KYC system using Ethereum blockchain technology. It allows customers to complete KYC verification once and share it with multiple banks, reducing redundancy and improving efficiency in the banking sector.

### Key Features

- **Single Verification**: Complete KYC once, use it across multiple banks
- **Decentralized Storage**: Secure storage of verification status on blockchain
- **Role-Based Access**: Separate dashboards for Admin, Banks, and Customers
- **Transparent Process**: All verifications are recorded on the blockchain
- **User Control**: Customers control which banks can access their data
- **IPFS Integration**: Secure document storage using IPFS

## Architecture

### Smart Contracts

The system consists of several smart contracts:

1. **KYC.sol**: Main contract managing the KYC process
2. **Banks.sol**: Manages bank registration and verification
3. **Customers.sol**: Handles customer data and verification status
4. **Types.sol**: Common data structures and types
5. **Helpers.sol**: Utility functions and helpers

### Frontend

Built with React and TypeScript, the frontend includes:

1. **Role-Based Dashboards**:
   - Admin Dashboard
   - Bank Dashboard
   - Customer Dashboard

2. **Key Components**:
   - Authentication system
   - Document upload and verification
   - Status tracking
   - Permission management

## Codebase Structure

```
├── blockchain/                 # Smart contracts and blockchain setup
│   ├── contracts/             # Solidity smart contracts
│   ├── migrations/            # Contract deployment scripts
│   ├── test/                  # Contract tests
│   └── truffle-config.js      # Truffle configuration
│
├── front-end/                 # React frontend application
│   ├── public/               # Static files
│   ├── src/                  # Source code
│   │   ├── components/       # Reusable components
│   │   ├── contexts/         # React contexts
│   │   ├── hooks/           # Custom hooks
│   │   ├── pages/           # Page components
│   │   ├── repository/      # Contract interaction
│   │   └── utils/           # Utility functions
│   └── package.json         # Frontend dependencies
│
└── assets/                   # Project assets and images
```

## Technology Stack

### Blockchain
- Solidity (Smart Contracts)
- Truffle (Development Framework)
- Web3.js (Blockchain Interaction)
- Ganache (Local Blockchain)

### Frontend
- React
- TypeScript
- Web3.js
- IPFS (Document Storage)
- MetaMask (Wallet Integration)

## Getting Started

For detailed setup instructions, please refer to [SETUP.md](SETUP.md).

### Quick Start

1. Install dependencies:
   ```bash
   # Blockchain
   cd blockchain
   npm install

   # Frontend
   cd front-end
   npm install
   ```

2. Deploy smart contracts:
   ```bash
   cd blockchain
   npx truffle migrate --network development
   ```

3. Start the frontend:
   ```bash
   cd front-end
   npm start
   ```

## Features in Detail

### Admin Dashboard
- Add/remove banks
- Monitor system status
- View all verifications
- Manage permissions

### Bank Dashboard
- Verify customer KYC
- View customer data
- Track verification status
- Manage bank profile

### Customer Dashboard
- Submit KYC documents
- View verification status
- Manage data sharing
- Update information

## Security Features

1. **Smart Contract Security**
   - Role-based access control
   - Secure data storage
   - Transaction validation

2. **Frontend Security**
   - MetaMask integration
   - Secure document upload
   - Permission management

3. **Data Privacy**
   - IPFS document storage
   - Encrypted data transmission
   - User-controlled access

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please:
1. Check the [documentation](SETUP.md)
2. Open an issue in the repository
3. Contact the development team

## Acknowledgments

- Ethereum Foundation
- Truffle Suite
- IPFS
- MetaMask 
