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
<img width="700" alt="landing page" src="https://github-production-user-asset-6210df.s3.amazonaws.com/54182038/264739109-05c9b17f-b5bb-4b7a-862b-55beb3c46c6a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230831%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230831T181949Z&X-Amz-Expires=300&X-Amz-Signature=e59b9a3d44b4ff679121f5781f0fa37b1c5f044a1cbb9be71069385dde51843c&X-Amz-SignedHeaders=host&actor_id=54182038&key_id=0&repo_id=683130997">
</p>

From the Orders Page, users will have an overview of current orders in the system as well as their statuses. Orders can be created using the (+) button.

<p align="center">
<img width="800" alt="orders" src="https://github-production-user-asset-6210df.s3.amazonaws.com/54182038/264737641-e8c20111-a1d6-45ea-b8f5-3ae360bcdcea.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230831%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230831T181931Z&X-Amz-Expires=300&X-Amz-Signature=1411010bd3003c33c78c88291ffba9bc812a32843b0d630b3e79828ab504e142&X-Amz-SignedHeaders=host&actor_id=54182038&key_id=0&repo_id=683130997">
</p>

Orders can be modified and deleted, by selecting one or more orders, and using the appropriate toolbar buttons.

<p align="center">
<img width="800" alt="orders edit" src="https://github-production-user-asset-6210df.s3.amazonaws.com/54182038/264738173-179a6443-2714-4331-9893-e9954311b94e.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230831%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230831T181855Z&X-Amz-Expires=300&X-Amz-Signature=ee5d31138646c8bd826a3387d034ba2e6993c2141b514e7c09393d0bada31269&X-Amz-SignedHeaders=host&actor_id=54182038&key_id=0&repo_id=683130997">
</p>

The End: 
<p align="center">
<img width="800" alt="meme" src="https://user-images.githubusercontent.com/54182038/161456308-6cecb063-9626-411f-b733-2b99bb17c6d1.gif">
</p>


# Roadmap
- [ ] Add DB
- [ ] Secure endpoints
- [ ] Add user management capabilities (sign-in, sign-out)
- [ ] Add additional pages (Customers, Dashboard, etc.)
