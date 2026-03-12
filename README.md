# Inovapp

A web application built with Angular 19.

---

## Getting Started — Step-by-Step Guide (Windows 11)

This guide will walk you through everything you need to do to get this app running on your computer. No prior programming experience required! You will use **PowerShell**, which is already installed on Windows 11.

### How to open PowerShell

1. Press the **Windows key** on your keyboard (the key with the Windows logo).
2. Type **PowerShell**.
3. Click on **Windows PowerShell** to open it.

A dark blue (or black) window will appear — this is your terminal. You will type commands here and press **Enter** to run them.

> **Tip:** You can copy a command from this guide and paste it into PowerShell by right-clicking inside the PowerShell window.

---

### Step 1: Install Node.js

Node.js is a tool that lets you run this application on your computer.

1. Open your web browser and go to: **https://nodejs.org**
2. Download the **LTS** version (the big green button on the left). This is the recommended and stable version.
3. Open the downloaded file and follow the installer:
   - Click **Next** on every screen.
   - Keep all settings as they are (don't change anything).
   - Click **Install**, then **Finish**.

#### Verify that Node.js is installed

Open a **new** PowerShell window (close the old one if you had one open, and open a fresh one). Then type this command and press **Enter**:

```
node --version
```

You should see a version number like `v22.x.x` or `v20.x.x`. If you see an error instead, try restarting your computer and opening PowerShell again.

---

### Step 2: Install Git

Git is a tool that lets you download code from GitHub.

1. Open your web browser and go to: **https://git-scm.com/downloads/win**
2. The download should start automatically (the **64-bit installer**). If not, click the correct link for your system.
3. Open the downloaded file and follow the installer:
   - Click **Next** on every screen.
   - Keep all default settings — don't change anything.
   - Click **Install**, then **Finish**.

#### Verify that Git is installed

Close PowerShell and open a **new** PowerShell window. Then type:

```
git --version
```

You should see something like `git version 2.x.x`. If you see an error, restart your computer and try again.

---

### Step 3: Choose a folder for the project

You need to decide where on your computer you want to save the project. We will use the **Desktop** for simplicity.

In PowerShell, type:

```
cd ~/Desktop
```

This moves you to your Desktop folder.

---

### Step 4: Download (clone) the project from GitHub

Now you will download the entire project. Type this command and press **Enter**:

```
git clone https://github.com/woodapples/bip-zaragoza-inova.git
```

Wait until it finishes. You will see some progress messages. When it's done, a new folder called `bip-zaragoza-inova` will appear on your Desktop.

Now move into that folder:

```
cd bip-zaragoza-inova
```

---

### Step 5: Install the project packages

The project needs some additional packages (libraries) to work. Install them by typing:

```
npm install
```

**This will take a few minutes.** You will see a lot of text appearing — that is normal. Just wait until it finishes and you see the blinking cursor again.

> If you see **yellow warnings**, that is okay — you can ignore them.
> If you see **red errors**, something went wrong. Make sure Node.js was installed correctly (go back to Step 1).

---

### Step 6: Start the application

Now you are ready! Type this command:

```
npm start
```

Wait until you see a message like:

```
** Angular Live Development Server is listening on localhost:4200 **
```

---

### Step 7: Open the app in your browser

Open your web browser (Chrome, Edge, Firefox — any will work) and go to:

**http://localhost:4200**

You should now see the application running! 🎉

---

### How to stop the application

When you are done and want to stop the app, go back to the PowerShell window and press:

**`Ctrl + C`**

(Hold the **Ctrl** key and press **C**.) If it asks "Terminate batch job?", type **Y** and press **Enter**.

---

### How to start the app again next time

You don't need to install anything again. Just open PowerShell and type:

```
cd ~/Desktop/bip-zaragoza-inova
npm start
```

Then open **http://localhost:4200** in your browser.

---

### Troubleshooting

| Problem                        | Solution                                                                                     |
| ------------------------------ | -------------------------------------------------------------------------------------------- |
| `node` is not recognized       | Restart your computer after installing Node.js, then try again.                              |
| `git` is not recognized        | Restart your computer after installing Git, then try again.                                  |
| `npm install` shows red errors | Make sure you are inside the project folder (`cd bip-zaragoza-inova`).                       |
| The browser shows a blank page | Wait a bit longer — the app might still be building. Check the PowerShell window for errors. |
| Port 4200 is already in use    | Close any other PowerShell windows that might be running the app, then try again.            |

---

## For Developers

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.

### Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

### Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

### Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
