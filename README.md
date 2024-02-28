<center>
  <p align="center">
  &nbsp;&nbsp;&nbsp;
   <img src="https://mirantes.io/_next/static/media/mirantes-white.52c9010f.svg" alt="Fastify Logo" width="150" />&nbsp;&nbsp;
    <img src="https://nodejs.org/static/images/logo.svg" alt="Fastify Logo" width="200" style="margin: 12px" />
  </p>  
  <h2 align="center">🚀 Mirantes Authentication API microservice with NodeJS</h2>
  <p align="center">
   Microservice for the Users Administration backend<br />Using Clean Architecture, DDD, Test Pyramid and the main current market best practices.
  </p>
</center>
<br />

## How to execute?

Just clone the Repository:

###### HTTPS

```sh
git clone https://github.com/herlanderbento/micro-authentication-api-typescript.git
```

###### SSH

```sh
git clone git@github.com:herlanderbento/micro-authentication-api-typescript.git
```

Upload the project containers
<br/>

```sh
docker-compose up -d
```
###### or
```sh
npm run docker:up
```

<br/>

Install the project dependencies

```sh
npm install
```

Run project

```sh
npm run dev
```

Endpoint for see the project

- `http://localhost:3000` the address of project

- `[GET]/v1/api-docs` the documentation of project
- `[GET]/v1/docs` the documentation redocly


<br/>
<Br/>

# Development Environment Setup

## Technologies and Tools Used

- IDE (Visual Studio Code): We recommend using a TypeScript-compatible IDE for efficient development.

- Node 18v or + installed

- Docker: Used to create and manage containers, making it easier to configure the development environment.

<br />

## Architecture and designer patterns

- Domain-Driven Design (DDD): Use the DDD pattern to structure and organize the code, ensuring a solid and modular architecture.

- Clean Architecture: Organize the application following the principles of Clean Architecture, separating the layers clearly: Business Entities, Use Cases, Controllers, etc.
- SOLID: Apply the SOLID principles (Single Responsibility Principle, Open/Closed Principle, Liskov Substitution Principle, Interface Segregation Principle, Dependency Inversion Principle) to promote robust and flexible code design.
- CQS (Command Query Separation): Separate read operations (queries) from write operations (commands) to improve code clarity and maintainability.

## TypeScript application development (Core) by modules

- Account;
  <br />

## CI (Continuous Integration)

### Technologies used:

- GitHub Actions: Setting up workflows for continuous integration.

- Dockerfile for Production: Create a Dockerfile optimized for production.
