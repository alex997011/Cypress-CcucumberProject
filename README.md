# 🚀 Automation Framework with Cypress and Ccucumber

We created a framework from scratch using any version of cypress and cucumber to test the webpage: https://www.demoblaze.com

# 💻Technology Stack

1. Java
2. Cypress v13.16.1
3. Cucumber v4.3.1
4. Node.js
5. Git installed

# 🔎 Features - Test Scenarios
The framework include test cases for the follwing funcionalities

1. Featured Items Carousel
   
     Scenario 1 : Navigate through carousel using next button
   
     Scenario 2: Navigate through carousel using prev button

     Scenario 3: Verify automatic slide transition
   

  ![image](https://github.com/user-attachments/assets/e5aca565-4c56-46a5-b096-98d51f831f2d)



2. Feautred Navigation Bar Options
   
     Scenario 1 : Navigate to Cart Page
   
     Scenario 2: Open About Us Video

     Scenario 3: Open Contact Form

     Scenario 4: Open Login Form

     Scenario 5: Open Sign Up Form

   
![image](https://github.com/user-attachments/assets/0da4f8e7-5ac9-441a-bca6-67fccdac524c)


   
3. Featured Cart Functionalities

     Scenario 1 : Navigate through the Categories
   
     Scenario 2: Product Selection

     Scenario 3: Add to Cart

     Scenario 4: Buying Cart

     Scenario 5: Deleting product from cart
   
![image](https://github.com/user-attachments/assets/5d59b742-2619-4657-8230-44f08925d711)


## 📥 Installation Guide

In the root of your project folder, open the git basdh and put:

- git clone https://github.com/alex997011/Cypress-CcucumberProject.git

Then use this command to initialize Node Project

- npm init -y

![image](https://github.com/user-attachments/assets/f94e6e55-c25d-4da7-8da6-374fc723f766)

Then install cypress:

- npm install --save-dev cypress

Then we install the Cucumber preprocessor

- npm install --save-dev cypress-cucumber-preprocessor

Install Allure dependencies:

- npm install --save-dev @shelex/cypress-allure-plugin allure-commandline


## 🏃‍♂️ Running Tests

Open Cypress Test Runner:

- npx cypress open

In the Cypress Test Runner:

   - Choose "E2E Testing"
   - Select your preferred browser
   - Click on any spec file to run the tests

## 📊 Generating Allure Reports

Run tests first with the browser :

- npm run browser:chrome   

Generate Allure report:

- npm run report:allure 

![image](https://github.com/user-attachments/assets/597017c5-07ab-4fea-b85f-adc53e414b51)


## 🔧 Configuration


Make sure your cypress.config.js includes the Cucumber preprocessor configuration (in this case I have it with the Allure and additional configurations):

![image](https://github.com/user-attachments/assets/9781ea1a-89c4-4b1e-a7a3-4a83c9739ca6)


## 📝 Writing Tests


Tests are written in Gherkin syntax (.feature files) and step definitions are in JavaScript.


## 🤝 Contributing

Feel free to submit issues.


















