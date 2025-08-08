# PGA Tour QA Testing Project


This is a Playwright-based end-to-end test suite for validating core functionality on the [PGATour.com](https://pgatour.com) website. This test simulates a real user flow: searching for a player (Scottie Scheffler) and verifying that their profile page loads successfully. 
 The test focuses on searching for a player and verifying navigation to their profile page.

---

## 📌 Tech Stack

- [Playwright](https://playwright.dev/)
- VS code 
- TypeScript 

---

##  Test Coverage

###  Current Test

- **Search for Scottie Scheffler**
  - Navigate to PGA Tour homepage
  - Click "Players" tab
  - Use search to find "Scottie Scheffler"
  - Verify that the profile page loads correctly

---

##  Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/johnr1044/qa-pga-site
cd qa-pga-site

### 2. Install dependencies
npm install

### 3. Run the test
bash
npx playwright test --headed

### Lessons Learned

- Used the Page Object Model (POM) for test clarity and reuse
- Handled dynamic locators and timouts for real-world scenarios
- Practiced writing end-to-end test logic from scratch

Author

John E. Reyes - https://www.linkedin.com/in/john-e-reyes/ | https://github.com/johnr1044/qa-pga-site 
