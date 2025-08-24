# BonusServer 🎯

## 📖 Project Overview

**BonusServer** is a robust backend application designed to manage a bonus program for the Academy of Informatics for Schoolchildren (AISH) and the Higher Engineering School (VISH) of Peter the Great St. Petersburg Polytechnic University (SPbPU). This system incentivizes learning and engagement by allowing students and participants to earn, track, and redeem bonuses for rewards and discounts on courses. Built with modern technologies, it ensures scalability, maintainability, and performance.

---

## 📝 Note

**This is a project developed for a hackathon (programming competition "Engineering leage") and was implemented for educational purposes.** The system represents a functional prototype demonstrating the core concepts of a bonus program management system rather than a production-ready application.

---

## ✨ Key Features (Based on Program Concept)

*   **User Registration & Profiles:** Users can create an account, log in, and manage their profile.
*   **Bonus Balance & Tracking:** Users can view their current bonus balance and transaction history.
*   **Bonus Earnings Mechanism:** Users earn bonuses by:
    *   Successfully completing a semester at AISH/VISH.
    *   Completing a full course at AISH or VISH.
    *   Referring a friend to AISH/VISH.
    *   Participating in events like The Polytech Quest or Polytech Engineering League and so on!
*   **Bonus Transfers:** Users can transfer bonuses to other participants (minimum transfer amount is 10 bonuses).
*   **Rewards Catalog:** Users can exchange their bonuses for branded merchandise (e.g., **badges for 100 bonuses**, **stationery kits for 500 bonuses**, **t-shirts for 1500 bonuses**, **hoodies for 3000 bonuses**) or discounts on courses.
*   **Feedback System:** A platform for users to leave comments and reviews to help improve the service.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **Node.js** | JavaScript runtime environment |
| **NestJS** | Progressive framework for building efficient and scalable server-side applications |
| **TypeScript** | Strongly typed programming language that builds on JavaScript |
| **MongoDB** | NoSQL database for flexible and scalable data storage |
| **JWT** | JSON Web Tokens for secure authentication |

---

## 📁 Project Structure

```
bonus_server/
├── src/
│   ├── auth/                 # Authentication logic (registration, login)
│   ├── user/                 # User management and profile operations
│   ├── bonus/                # Core bonus logic (balance, earning rules)
│   ├── transfer/             # Bonus transfer functionality between users
│   ├── catalog/              # Rewards catalog management (products, discounts)
│   ├── operation/            # Logging bonus transactions and history
│   ├── feedback/             # User feedback and comment handling
│   ├── config/               # Application configuration
│   └── main.ts               # Application entry point
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🎯 Project Goals & Benefits

*   **Increase Motivation:** Enhance student motivation to learn and complete courses at AISH and VISH.
*   **Boost Enrollment:** Encourage new sign-ups for AISH and VISH programs.
*   **Promote SPbPU:** Foster a desire to continue education or work at SPbPU.
*   **Develop IT Talent:** Cultivate new specialists and schoolchildren with IT knowledge.
*   **Eco-Friendly:** A digital solution that avoids plastic cards.
*   **Popularize Education:** Raise awareness about the activities of AISH and VISH.

---

## 💰 Monetization & Business Model

*   **Target Audience:** Schoolchildren and adults seeking discounts or prizes for educational courses and participation in SPbPU events.
*   **Primary Customer:** Clients of VISH and AISH.
*   **Revenue Source:** A **20% commission** from the cost of an AISH/VISH course if the client is a participant in the bonus program.
*   **Future Perspective:** Potential to sell subscriptions to online textbooks (~52,000 RUB/year revenue forecast).
*   **Investors/Funding Sources:** SPbPU, VISH, AISH.

---

You can find more information in presentation included)

---

## 🤝 Contributing

Contributions are welcome! If you would like to contribute to the BonusServer project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Create a pull request.

---

**Thank you for checking out BonusServer!** 🎉 This project is developed by **Blue Tigers**. Happy coding! 💻✨
