# Song Board

This is a simple web application that allows users to view songs and add new songs to the board.

## Getting Started

1. Install Bun

Linux and macOS:

```bash
curl -fsSL https://bun.sh/install | bash
```

Windows:

```bash
powershell -c "irm bun.sh/install.ps1 | iex"
```

2. Clone the repository

```bash
git clone https://github.com/cooper-gadd/song-board.git
```

3. Go into the project directory

```bash
cd song-board
```

4. Install the dependencies

```bash
bun install
```

5. Push the schema to the database

```bash
bun run db:push
```

6. Start the server

```bash
bun run dev
```

## Todo

- [ ] Schema
- [ ] Seed data
- [ ] Display songs
- [ ] Create songs
