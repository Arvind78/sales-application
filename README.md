# Sales Management Application

This is a sales management application built using React.js for a consumer goods manufacturing company. The application helps manage product inventory by generating sale orders for retailers or distributors. It includes features such as user authentication, theme toggling, and managing active and completed sale orders.

## Features
1. **Single Page Application**: The app is a SPA with a login page requiring a dummy username and password. Unauthenticated users are redirected to the login page.
2. **Dark Theme Toggle Switch**: The application includes a toggle switch for dark theme, with the selected theme persisting across reloads.
3. **Active and Completed Sale Orders**: The app has two tabs to manage active and completed sale orders.
4. **Sale Order Creation**: A button to create a new sale order, which triggers a modal with a form to enter the sale order details.
5. **Edit Sale Order**: An option to edit existing active sale orders using a modal with pre-filled details. For completed sale orders, the form is read-only.

## Project Structure
sales-management-app/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── Auth/
│ │ │ └── LoginPage.jsx
│ │ ├── Orders/
│ │ │ ├── ActiveOrders.jsx
│ │ │ ├── CompletedOrders.jsx
│ │ │ ├── OrderForm.jsx
│ │ │ └── OrderModal.jsx
│ │ ├── Theme/
│ │ │ └── ThemeToggle.jsx
│ │ └── ...
│ ├── contexts/
│ │  └── ThemeContext.jsx
│ ├── pages/
│ │ ├── HomePage.jsx
│ │ ├── NotFoundPage.jsx
│ │ └── ...
│ ├── styles/
│ │ └── ...
│ ├── App.jsx
│ ├── index.js
│ └── router.js
├── .gitignore
├── package.json
└── README.md

## Installation and Setup
1. **Clone the Repository**:
    ```sh
    git clone https://github.com/your-username/sales-management-app.git
    cd sales-management-app
    ```

2. **Install Dependencies**:
    ```sh
    npm install
    ```

3. **Start the Application**:
    ```sh
    npm start
    ```

4. **Build for Production**:
    ```sh
    npm run build
    ```

## Usage

### Login
- Users must log in using a dummy username and password.
- Unauthenticated users are redirected to the login page.

### Theme Toggle
- Use the theme toggle switch to switch between light and dark themes.
- The selected theme persists across page reloads.

### Managing Sale Orders
- **Active Sale Orders**: View and manage active sale orders.
  - Click the "+ Sale Order" button to open a modal for creating a new sale order.
  - Click the triple horizontal dots icon on a sale order row to open a modal for editing the order.
  
- **Completed Sale Orders**: View completed sale orders.
  - Sale order details are read-only in the modal.

## Implementation Details

### Contexts
- **AuthContext**: Manages authentication state and logic.
- **ThemeContext**: Manages theme toggling and persistence.

### Components
- **LoginPage**: Handles user authentication.
- **HomePage**: Main page with tabs for active and completed sale orders.
- **ActiveOrders**: Displays active sale orders and provides functionality to edit them.
- **CompletedOrders**: Displays completed sale orders in a read-only format.
- **OrderForm**: Form component used for creating and editing sale orders.
- **OrderModal**: Modal component to display the order form.
- **ThemeToggle**: Switch to toggle between light and dark themes.

### Routing
- Uses `react-router-dom` for routing with a fallback for undefined routes to a NotFoundPage.
- Authenticated routes ensure that only logged-in users can access the main application features.

## Future Improvements
- Backend integration for real data handling.
- Enhanced validation and error handling for forms.
- Role-based access control for different types of users.
- Improved UI/UX with animations and better accessibility features.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License.

---

Happy coding! 🚀
