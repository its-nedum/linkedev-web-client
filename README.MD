# Linked Dev Web Client - Documentation

## Introduction

**Linked Dev** is a platform that allows users (software developers) to create a public profile stating their skill set, years of experience, and a brief summary of them. Every internet user can access this profile, including recruiters and their potential employers.
The name was coined from [LinkedIn](https://www.linkedin.com) (a social networking website for business people to communicate).

## Live Link

[Linked Dev - Client](https://linked-dev.netlify.app/)

[Linked Dev - API](https://linkedev-api-service.onrender.com)

## Installation

To install Linked dev follow these steps
1. Clone the repository from GitHub
```bash
$ git clone https://github.com/its-nedum/linkedev-web-client.git
```
2. Navigate to the project directory
```bash
$ cd linkedev-web-client
```
3. Install the required dependencies
```bash
$ npm install
```

## Usage

To start the development server, run the following command
```bash
$ npm run dev
```
This will start the development server on http://localhost:3000/

## Components

Linked dev is composed of the following components:

- `App`: The top-level component that renders the entire application.
- `Create`: The component that allows user to create their profile.
- `List`: The component that list all the completed user profiles.
- `Show`: The component that shows a single user profile. It also holds actions that allows only the profile owner to either edit or delete their profile.
- `Edit`: The component that allows the profile owner to update their profile.
- `Login`: The component that allows registered users to log onto the platform.
- `Register`: The component that allows users to create an account on the platform.

## Learn More About Technologies Used

To learn more please check out the following documentations

- **Refine** [Docs](https://refine.dev/docs)
- **Chakra UI** [Docs](https://refine.dev/docs/)
- **React Router** [Docs](https://refine.dev/docs/core/providers/router-provider/)
- **REST Data Provider** [Docs](https://refine.dev/docs/packages/documentation/data-providers/simple-rest/)
- **Auth Provider** [Docs](https://refine.dev/docs/tutorial/understanding-authprovider/index/)

## License

MIT
