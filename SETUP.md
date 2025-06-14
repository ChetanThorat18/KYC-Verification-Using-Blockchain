# Decentralized KYC System - Local Setup Guide

This guide will help you set up and run the Decentralized KYC System locally on your machine.

## Prerequisites

1. **Node.js and npm**
   - Install Node.js (v14 or higher) from [nodejs.org](https://nodejs.org/)
   - Verify installation:
     ```bash
     node --version
     npm --version
     ```

2. **MetaMask**
   - Install MetaMask browser extension from [metamask.io](https://metamask.io/)
   - Create a new wallet or import existing one
   - Switch to Localhost 7545 network in MetaMask

3. **Ganache**
   - Download and install from [trufflesuite.com/ganache](https://trufflesuite.com/ganache/)
   - This will be your local blockchain for development

## Project Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd sample-decentralised-kyc-ethereum-main
```

### 2. Blockchain Setup

1. **Install Dependencies**
   ```bash
   cd blockchain
   npm install
   ```

2. **Configure Truffle**
   - Open `truffle-config.js`
   - Ensure it's configured for Ganache:
   ```javascript
   module.exports = {
     networks: {
       development: {
         host: "127.0.0.1",
         port: 7545,
         network_id: "*"
       }
     }
   };
   ```

3. **Deploy Smart Contracts**
   ```bash
   npx truffle migrate --network development
   ```
   - Note down the deployed contract address

### 3. Frontend Setup

1. **Install Dependencies**
   ```bash
   cd front-end
   npm install
   ```

2. **Update Contract Configuration**
   - Open `front-end/src/repository/config.ts`
   - Update `CONTRACT_ADDRESS` with the address from step 2.3

3. **Start Development Server**
   ```bash
   npm start
   ```

## Setting Up Test Accounts

### 1. Ganache Accounts Setup
1. Open Ganache
2. Note down these accounts for testing:
   - Account 1: Admin Account
   - Account 2: Bank 1 Account
   - Account 3: Bank 2 Account
   - Account 4: Customer 1 Account
   - Account 5: Customer 2 Account

### 2. MetaMask Configuration
1. **Add Local Network**
   - Network Name: Localhost 7545
   - RPC URL: http://127.0.0.1:7545
   - Chain ID: 1337
   - Currency Symbol: ETH

2. **Import Test Accounts**
   - In MetaMask, click account icon → Import Account
   - Import each Ganache account using private keys
   - Label accounts appropriately (Admin, Bank 1, etc.)

## Testing the System

### 1. Admin Dashboard
1. Connect MetaMask with Admin Account
2. Access Admin Dashboard
3. Add new banks to the system
4. Monitor system status

### 2. Bank Dashboard
1. Connect MetaMask with Bank Account
2. Access Bank Dashboard
3. Verify customer KYC submissions
4. View customer data

### 3. Customer Dashboard
1. Connect MetaMask with Customer Account
2. Access Customer Dashboard
3. Submit KYC documents
4. View verification status

## Common Issues and Solutions

### 1. Contract Connection Issues
- Ensure Ganache is running
- Verify contract address in `config.ts`
- Check MetaMask network connection

### 2. Transaction Failures
- Check account balance in MetaMask
- Verify gas settings
- Ensure correct network selection

### 3. Frontend Connection Issues
- Clear browser cache
- Restart development server
- Check console for errors

## Development Workflow

### 1. Making Changes to Smart Contracts
```bash
cd blockchain
npx truffle migrate --reset --network development
```

### 2. Updating Frontend
- Make changes to frontend code
- Development server will auto-reload
- Test changes in browser

### 3. Testing Smart Contracts
```bash
cd blockchain
npx truffle test
```

## Security Considerations

1. **Private Keys**
   - Never share private keys
   - Use different accounts for different roles
   - Keep test accounts separate from production

2. **Environment Variables**
   - Keep `.env` files secure
   - Never commit sensitive data
   - Use environment variables for configuration

3. **Network Security**
   - Use HTTPS in production
   - Implement proper access controls
   - Regular security audits

## Support

For issues and support:
1. Check the console for error messages
2. Review the documentation
3. Create an issue in the repository

## License

This project is licensed under the MIT License - see the LICENSE file for details. 