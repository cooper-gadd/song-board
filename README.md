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

## Rapid ProtoTyping with Bun and NextJS

Utilizing the powerful and efficient toolkit of BunJS with NextJS, high fidelity prototyping can be completed with ease. BunJS includes a native sqlite driver, along with a large range of support of many npm libraries, and frameworks. NextJS additionally builds upon react including many features that help to improve performance and increase efficiency in the creation process.

![bunNext](https://github.com/user-attachments/assets/7f9fad74-4401-42dc-815a-a2b0e810332c)

### What is Bun?

![bun](https://github.com/user-attachments/assets/42928faf-2066-4f5d-82ac-c110d916a71c)

Bun is an all-in-one ultra high performance javascript toolkit. Bun includes a package manager, bundler, and test kit. Bun also has a set of web APIs that make it very quick and easy to quickly scaffold applications.

#### Package Manager
Bun package manager utilizes the JavaScriptCore Engine used by apple in safari and this is mostly what accounts for the very fast speeds when compared to other package managers. Bun is also compatible with all npm packages and additionally adheres to the package.json standard offering backwards compatibility, which means npm projects can easily be migrated to bun.

#### Web and File System APIs
Bun offers simple APIs that help to remove the boilerplate code associated with node actions such as file reading, file writing, and http requests which aim to improve efficiency and developer experience.

#### Additional Features
Bun also features hot reloading out of the box, in addition to a bundling tool, and even a driver for sqlite which vastly reduces overhead.

### What is NextJS?

![nextjs](https://github.com/user-attachments/assets/726ae889-76d4-4341-8901-c51957a45e3c)

NextJS is a front end framework that builds on React by improving the performance with features such as server side rendering, and it helps developers by simplifying routing and including serverless API support.

#### Server Side Rendering
Server side rendering involves serving fully formed html pages to the user which has various benefits. This strategy can offer performance benefits in certain scenarios but often results in a better user experience due to the fast perceived loading times.

#### Benefits over React
NextJS helps to solve one the greatest drawbacks of react which is convoluted and often confusing process of implementing routing. NextJS offers a quick and easy to implement file based routing system which eliminates the need of overly complicated libraries. NextJS also offers the creation of API routes in the application for serverless functionality or webhook functionality without the need of an additional backend server. Next also features a plethora of small changes that ultimately result in significant performance gains when compared to react.

## Todo

- [ ] Schema
- [ ] Seed data
- [ ] Display songs
- [ ] Create songs
