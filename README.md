# next-13-example

An example project that uses latest features of Next.js 13

## Features
- Uses new `appDir`
- New routing, route groups and layouts
- Uses Tailwind CSS for styling
- Custom email and password authentication
- Server and Client Components
- Uses Prisma ORM
- Written in Typescript

## Roadmap
- [x] Custom email and password authentication
- [x] Build dashboard pages
- [ ] Add Tests
- [ ] Handle types correctly
- [ ] Improve UI and UX

## Getting Started
1. Install the dependencies
```sh
npm install
```
2. Add a `.env` file
```sh
# Update DATABASE_URL according to the provider you set inside prisma.schema 
DATABASE_URL=file:./db.sqlite

SECRET_KEY=<YOUR_JWT_SECRET>
```
3. Run the development server
```sh
npm run dev
```

> **Note** <br />
> This project is still under development and uses beta version of Next.js. You may come across broken / new / unoptimized implementations. Feel free to ping me at [@ruthv1k](https://twitter.com/ruthv1k) for any queries.
