# Song Board

A simple web application that allows users to view songs and add new songs to the board.

## Getting Started

1. **Install Bun**

  Linux and macOS:
  ```bash
  curl -fsSL https://bun.sh/install | bash
  ```

  Windows:
  ```bash
  powershell -c "irm bun.sh/install.ps1 | iex"
   ```

2. **Clone and Setup**
  ```bash
  git clone https://github.com/cooper-gadd/song-board.git
  ```

3. **Go to the project directory**
  ```bash
  cd song-board
  ```

4. **Install dependencies**
  ```bash
  bun install
  ```

5. **Add a `.env` file**
  ```bash
  touch .env
  ```

6. **Add the following to the `.env` file**
  ```bash
  DATABASE_URL="file:./db.sqlite"
  ```

7. **Database Setup**
  ```bash
  bun run db:push
  ```

8. **Start Development Server**
  ```bash
  bun run dev
  ```

## Rapid prototyping with Bun, SQLite, Next.js

* Bun and Next.js enable easy high fidelity prototyping
* Bun includes native sqlite driver and supports many npm libraries/frameworks
* Next.js builds on React with performance and efficiency features

![bunNext](https://github.com/user-attachments/assets/7f9fad74-4401-42dc-815a-a2b0e810332c)

### What is Bun?

![bun](https://github.com/user-attachments/assets/42928faf-2066-4f5d-82ac-c110d916a71c)

* All-in-one high performance JavaScript toolkit
* Includes package manager, bundler, and test kit
* Provides web APIs for quick application scaffolding

#### Package Manager
* Uses JavaScriptCore Engine from Safari for fast speeds
* Compatible with all npm packages
* Adheres to package.json standard
* Enables easy migration from npm projects

#### Web and File System APIs
* Simple APIs that reduce boilerplate code
* Handles file reading, writing, and HTTP requests efficiently
* Improves developer experience

#### Additional Features
* Built-in hot reloading
* Includes bundling tool
* Native sqlite driver support

![carbon](https://github.com/user-attachments/assets/8e933c82-d46d-470c-8b12-8d8498f55c5b)

![carbon(1)](https://github.com/user-attachments/assets/d943de97-b9ce-4e1b-ac69-7b1265e188c2)

![carbon(2)](https://github.com/user-attachments/assets/f3402344-7eed-4681-a6af-d9e87ac771d1)

![carbon(5)](https://github.com/user-attachments/assets/bea986ce-4f73-4251-87bd-3ee79513ca2b)

![carbon(3)](https://github.com/user-attachments/assets/7f957f61-2d96-453f-871c-4e5b73ad2734)

![carbon(4)](https://github.com/user-attachments/assets/421b84f5-7eaf-4516-b451-7e636eaaf4c0)

![Screenshot 2024-11-18 214514](https://github.com/user-attachments/assets/2078d7b6-08e2-4458-a53f-7b707acfc8ad)

### What is Next.js?

![nextjs](https://github.com/user-attachments/assets/726ae889-76d4-4341-8901-c51957a45e3c)

* Framework building on React
* Improves performance through server-side rendering
* Simplifies routing
* Includes serverless API support

#### Server Side Rendering
* Serves fully formed HTML pages
* Provides performance benefits
* Creates better user experience
* Enables fast perceived loading times

#### Benefits over React
* Streamlines routing using a file-based system
* Enables API routes for serverless functionality
* No need for additional backend server
* Includes performance optimizations over React

## Todo

- [ ] Schema
- [ ] Seed data
- [ ] Display songs
- [ ] Create songs
