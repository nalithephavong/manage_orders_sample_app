# About The Project
Manage Orders is a web application built with Next and Express. The app simulates a portal allowing users to create and update dummy orders.
- Installation of a third-party database is not required. Data is stored in a local object on the Express server.
- Simple interface design: column sorting, intuitive buttons, and paging.


# Getting Started

## Prerequisites
This project requires Node.js version >= 16.


## Installation
Install dependencies under each subfolder (`server` and `ui`) using the npm command: ```npm install```.


## Running The App
First, start the server by navigating to the `server` subfolder and running: ```npm run dev```.
Then, run the ui by navigating to the `ui` folder and running: ```npm run dev```.


# Usage
On startup, the landing page will be displayed. Click the button to enter website.

<p align="center">
<img width="700" alt="Error_Popup" src="https://github.com/nalithephavong/manage_orders_sample_app/assets/54182038/05c9b17f-b5bb-4b7a-862b-55beb3c46c6a.png">
</p>

From the Orders Page, users will have an overview of current orders in the system as well as their statuses. Orders can be created using the (+) button.

<p align="center">
<img width="800" alt="Error_Popup" src="https://github.com/nalithephavong/manage_orders_sample_app/assets/54182038/e8c20111-a1d6-45ea-b8f5-3ae360bcdcea.png">
</p>

Orders can be modified and deleted, by selecting one or more orders, and using the appropriate toolbar buttons.

<p align="center">
<img width="800" alt="Error_Popup" src="https://github.com/nalithephavong/manage_orders_sample_app/assets/54182038/179a6443-2714-4331-9893-e9954311b94e.png">
</p>

The End: 
<p align="center">
<img width="800" alt="Error_Popup" src="https://user-images.githubusercontent.com/54182038/161456308-6cecb063-9626-411f-b733-2b99bb17c6d1.gif">
</p>


# Roadmap
- [ ] Add DB
- [ ] Secure endpoints
- [ ] Add user management capabilities (sign-in, sign-out)
- [ ] Add additional pages (Customers, Dashboard, etc.)
