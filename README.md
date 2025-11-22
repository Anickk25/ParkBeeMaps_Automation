# ParkBee UAT – Cypress Automation Reg Tests

Automated tests for ParkBee UAT environment[](https://uat.parkbee.com)


## Scenarios Covered

| Scenario | Type           | Description                                      |
|---------|----------------|--------------------------------------------------|
| 1       | Hourly Parking | Form selection + Search  |
| 2       | Monthly Parking| Select start date (tomorrow) + Search results    |
| 3       | Park Now       | Instant parking flow → List view                 |


## Project Structure and Information__


```textcypress/
├── e2e/          → All test scenarios
├── fixtures/     → Test data
├── support/      → Commands & config
cypress.config.js → Cypress configuration

## Tech Stack

- Cypress 13+
- JavaScript
- GitHub Actions ready 

## How to Run Locally

```bash
# 1. Clone repo
git clone https://github.com/Anickk25/ParkBeeMaps.git
cd ParkBeeMaps

# 2. Install dependencies
npm install

# 3. Open Cypress
npx cypress open

# Or run headless
npx cypress run

## Current Status
All 3 scenarios passing on UAT as of 21 Nov 2025
Maintained by @Anickk25

# Commands to run
