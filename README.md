# byte-market
##  Project Description

ByteMarket is a full-featured full-stack e-commerce web application developed using Angular (frontend) and Django REST Framework (backend).

The platform simulates a modern online shopping system where users can browse a catalog of products, search and filter items, manage a personalized shopping cart, and complete purchases through an order system.

The application is designed to demonstrate real-world architecture of a client-server system, where the frontend interacts with the backend through RESTful APIs. All data is exchanged in JSON format, ensuring a clear separation between presentation and business logic.

The system supports user authentication and authorization using JWT tokens. Each user has a personalized experience: their own cart, order history, and protected access to certain features.

ByteMarket follows a modular structure and demonstrates best practices in full-stack development, including component-based frontend design, API-driven backend architecture, and relational database modeling.

---

### Group Members
* Seitzhapar Dautkhan
* Seitzhaparov Esimkhan
* Tajikossov Nurbolsyn

## 👥 Team Roles

The project is developed by 3 team members, each responsible for a specific part of the system:

* **Seitzhapar Dautkhan** — Backend development (Django REST Framework, models, serializers, API endpoints, authentication, database logic)
* **Seitzhaparov Esimkhan** — Frontend structure and pages (Angular components, routing, forms, UI layout)
* **Tajikossov Nurbolsyn** — Frontend integration (Angular services, HttpClient, API integration, JWT interceptor, error handling)

The project is organized into two main parts:

* `backend/` — Django REST API
* `frontend/` — Angular application






## ⚙️ Extended Functionality

### 🔐 Authentication & User Management

* User registration and login system
* JWT-based authentication
* Token storage and automatic inclusion in API requests
* Logout functionality
* Protected routes and endpoints
* Each user has isolated data (cart, orders)

---

###  Product Management System

* Retrieve and display all available products
* View detailed information about each product
* Filter products by category
* Search products by name or keyword
* Display product attributes (name, price, description, category)
* Dynamic product listing using Angular loops

---

###  Category System

* Organize products into categories
* Navigate products by selected category
* Backend relationship between Category and Product (ForeignKey)

---

###  Shopping Cart System

* Add products to cart
* Remove products from cart
* Update product quantities
* Automatically calculate total price
* Cart linked to authenticated user
* Real-time updates on UI after each action

---

###  Order Management System

* Convert cart into an order
* Save order details in database
* Each order linked to a user
* Each order contains multiple products
* View order history
  

---

###  Frontend–Backend Integration

* Angular communicates with Django API using HttpClient
* RESTful endpoints handle all operations (CRUD)
* Data exchange in JSON format
* HTTP interceptor attaches JWT token to requests
* Error handling for failed API calls

---

###  Frontend Features (Angular)

* Multiple pages using Angular Routing:

  * Home
  * Login
  * Products
  * Cart
  * Orders
* Form handling using [(ngModel)]
* Event-driven interactions (click events triggering API calls)
* Conditional rendering using @if / *ngIf
* Dynamic lists using @for / *ngFor
* Basic responsive UI styling

---

###  Backend Features (Django + DRF)

* Multiple models with relationships:

  * Category
  * Product
  * CartItem
  * Order
* At least two ForeignKey relationships
* Serializers:

  * Serializer
  * ModelSerializer
* Views:

  * Function-Based Views (FBV)
  * Class-Based Views (CBV)
* Full CRUD operations for products and cart
* Authentication endpoints (login/logout)
* Linking created data to request.user
* CORS configuration for frontend access

---

## System Entities

The core entities of the system include:

* User
* Category
* Product
* CartItem
* Order

Relationships:

* One category → many products
* One user → many cart items
* One user → many orders
* One order → multiple products

---

##  Final Result

At the end of the project, ByteMarket will function as a complete online shop application.

A user will be able to:

* register and securely log in
* browse and search products
* filter products by categories
* add and manage items in a shopping cart
* dynamically update quantities and total price
* place an order
* view their personal order history

The frontend (Angular) and backend (Django) will be fully integrated and working together in real time through REST API communication.

The system will be demonstrated as a fully working application during the project defense, including both frontend UI and backend API functionality.

---

## Project Goal

The goal of ByteMarket is to demonstrate advanced full-stack development skills, including:

* Building scalable frontend applications with Angular
* Designing RESTful APIs using Django REST Framework
* Implementing authentication and authorization
* Working with relational databases and model relationships
* Integrating frontend and backend into a unified system

The project will be deployed and demonstrated as a working system during the defense.
