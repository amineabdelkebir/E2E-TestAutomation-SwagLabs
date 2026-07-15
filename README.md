# Playwright E2E & API Automation Framework

A scalable Test Automation Framework built with **Playwright** and **TypeScript**, following Page Object Model (POM), reusable components, and best practices for UI and API testing.

## Features

- UI Automation with Playwright
- API Testing with Playwright APIRequestContext
- Page Object Model (POM)
- BasePage and BaseApi abstraction
- Environment configuration (.env)
- Reusable fixtures
- Test data separation
- TypeScript interfaces/models
- HTML reporting
- GitHub Actions ready

---

## Tech Stack

- TypeScript
- Playwright
- Node.js
- Dotenv

---

## Project Structure

```
project
│
├── api/
│   ├── BaseApi.ts
│   └── ProductsApi.ts
│
├── config/
│   └── environments.ts
│
├── fixtures/
│   └── pages.ts
│
├── models/
│
├── pages/
│   ├── BasePage.ts
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── test-data/
│
├── tests/
│   ├── ui/
│   └── api/
│
├── .env.dev
├── playwright.config.ts
└── README.md
```

---

## Environment Configuration

Example `.env.dev`

```env
BASE_URL=https://www.saucedemo.com
API_BASE_URL=https://dummyjson.com

USERNAME=standard_user
PASSWORD=secret_sauce

HEADLESS=false
```

---

## Installation

```bash
git clone <repository-url>

cd ecommerce-playwright-framework

npm install
```

---

## Execute Tests

Run all tests

```bash
npm test
```

Run Development environment

```bash
npm run test:dev
```

Run QA environment

```bash
npm run test:qa
```

Run Staging environment

```bash
npm run test:staging
```

Run Production environment

```bash
npm run test:prod
```

Run UI tests

```bash
npx playwright test tests/ui
```

Run API tests

```bash
npx playwright test tests/api
```

---

## Reports

Generate HTML report

```bash
npx playwright show-report
```

---

## Design Principles

- Page Object Model (POM)
- DRY (Don't Repeat Yourself)
- Reusability
- Separation of Concerns
- Single Responsibility Principle
- Maintainability
- Scalability

---

## Current Coverage

### UI

- Login
- Products
- Cart
- Checkout

### API

- Get all products
- Get product by ID
- Create product

---

## Future Improvements

- DELETE / PUT API tests
- Authentication API
- Data Factory
- API Response Validators
- Mocking
- Allure Reporting
- GitHub Actions CI/CD
- BrowserStack
- Cucumber BDD
- Xray Integration

---

## Author

**Amin Abdelkebir**

Test Automation Engineer | SDET

Playwright & TypeScript project focused on modern UI and API automation best practices.
