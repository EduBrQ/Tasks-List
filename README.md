# Task List Application

This is a task management application built with Angular. It allows users to add, filter, mark as completed, and delete tasks. The application is designed with modularity and scalability in mind, following Angular best practices.

---

## Features

- **Add Tasks**: Users can add new tasks with a title.
- **Mark as Completed**: Tasks can be marked as completed using a checkbox.
- **Filter Tasks**: Tasks can be filtered by status (All, Completed, Incomplete).
- **Delete Tasks**: Tasks can be deleted with a confirmation dialog.
- **Persistent Storage**: Tasks are saved in the browser's `localStorage` to persist data across sessions.

---

## Project Structure

Technologies Used
- Angular: Framework for building the application.
- RxJS: For reactive state management.
- TypeScript: Strongly typed JavaScript for better maintainability.
- SCSS: For modular and reusable styles.

The project follows a modular structure for better scalability and maintainability.

```plaintext
src/
├── app/
│   ├── core/                # Core module for global services and components
│   │   ├── components/      # Global reusable components
│   │   ├── services/        # Global services (e.g., StorageService)
│   │   ├── core.module.ts   # Core module definition
│   ├── shared/              # Shared module for reusable components, pipes, and directives
│   │   ├── shared.module.ts # Shared module definition
│   ├── features/            # Feature modules for specific functionalities
│   │   ├── task-list/       # Task List feature module
│   │   │   ├── components/  # Components specific to the Task List feature
│   │   │   ├── models/      # Models specific to the Task List feature
│   │   │   ├── task-list.module.ts       # Task List module definition
│   │   │   ├── task-list-routing.module.ts # Task List routing module
│   ├── app.module.ts        # Root module
│   ├── app-routing.module.ts # Root routing module
├── assets/                  # Static assets (images, fonts, etc.)
├── environments/            # Environment-specific configurations
├── styles/                  # Global styles
```

---

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>

2. Install dependencies:
    npm install

---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

---

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

---

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

---

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

---

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

---

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.