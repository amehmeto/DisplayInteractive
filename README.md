# Display Interactive Technical Test

## Overview

This project is a React application using TypeScript and Vite. It follows a hexagonal architecture to ensure a clean separation of concerns and maintainability.

## Installation

To install the project, follow these steps:

1. Clone the repository:

```
git clone <repository-url>
cd <repository-directory>
})
```

2. Install dependencies:

```
yarn 
```

## Building the project

To build the project for production, run:
```
yarn build
```

## Running the project

To start the development server, run:
```
yarn dev
```

This will start the Vite development server with hot module replacement.

## Hexagonal Architecture

The project follows a hexagonal architecture (also known as ports and adapters architecture). This architecture pattern helps in creating a loosely coupled application by separating the core business logic from the external concerns.  

### Core Concepts
1. Domain Layer: Contains the business logic and domain models. This layer is independent of any external frameworks or technologies.
2. Ports: Interfaces that define the boundaries of the application. They are used by the domain layer to interact with the outside world.
3. Adapters: Implementations of the ports. They handle the communication with external systems like databases, APIs, or user interfaces.
4. Application Layer: Coordinates the application logic and uses the domain layer to perform business operations.

### Project Structure

`src/domain`: Contains the domain models and would host business logic if needed.
`src/infra`: Contains the infrastructure code, including gateways and adapters.
`src/ui`: Contains the user interface components and pages.

By following this architecture,
the project ensures that the core business logic remains independent and easily testable,
while the external concerns can be swapped or modified without affecting the core logic.

