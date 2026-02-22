# Implementation Plan - Debt Collector App

## 📋 Task List

### ✅ Task 1: Dashboard - Collector's Routes List
Create a dashboard showing all routes assigned to the collector with key metrics.

- [x] Create `RoutesCollectorTable` component with proper data display
- [x] Show route name, city, current balance, loans count
- [x] Add navigation to route details
- [x] Style with responsive design
- [x] Add summary cards with totals
- [x] Add refresh functionality

**Status:** ✅ COMPLETED

---

### 📋 Task 2: Route Detail Page
Show detailed information about a specific route.

- [ ] Display route information (balance, city, manager)
- [ ] Show list of loans in the route
- [ ] Add loan cards with status indicators
- [ ] Show overdue loans prominently

---

### 📋 Task 3: Loans List View
Create a comprehensive list of all collector's loans.

- [ ] Create `LoansCollectorTable` component
- [ ] Show loan amount, client name, status, due date
- [ ] Add filtering (overdue, active, paid)
- [ ] Add search by client name

---

### 📋 Task 4: Loan Detail and Payments
Show loan details and payment history.

- [ ] Create loan detail page
- [ ] Show payment history table
- [ ] Add "Register Payment" button/modal
- [ ] Display loan metrics (paid, pending, overdue days)

---

### 📋 Task 5: Register Payment Modal
Create modal to record loan payments.

- [ ] Create payment form with validation
- [ ] Select payment method (CASH, TRANSFER, OTHER)
- [ ] Add payment date and notes
- [ ] Show updated balance after payment

---

## 🎯 Starting with Task 1: Dashboard - Collector's Routes List

This will be the main landing page showing all routes assigned to the logged-in collector.
