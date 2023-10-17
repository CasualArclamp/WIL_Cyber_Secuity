# WIL_Cyber_Secuity
Group 7

------------

This repository will contain all of the code used to run the website.



All the 4 steps are referenced from https://angular.io/guide/setup-local.
You can check this webpage for more information.

Steps for running this website locally:

1. Node.js is required.
    For more information on installing Node.js, 
    see nodejs.org (https://nodejs.org/en). If you are unsure what version of Node.
    js runs on your system, run node -v in a terminal window.

2. npm package manager is required.
    Angular, the Angular CLI, and Angular applications depend on 
    npm packages (https://docs.npmjs.com/about-npm) for many features and functions. 
    To download and install npm packages, you need an npm package manager. 
    This guide uses the npm client command line interface, which is installed with 
    Node.js by default. 
    To check that you have the npm client (https://docs.npmjs.com/cli/v10/commands/npm-install) 
    installed, run npm -v in a terminal window.

3. Install the Angular CLI:
    You can use the Angular CLI to create projects, generate application and library code, 
    and perform a variety of ongoing development tasks such as testing, bundling, and deployment.
    To install the Angular CLI, open a terminal window and run the following command:

    "npm install -g @angular/cli"

    On Windows client computers, the execution of PowerShell scripts is disabled by default. 
    To allow the execution of PowerShell scripts, which is needed for npm global binaries, 
    you must set the following execution policy:

    "Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned"

    Carefully read the message displayed after executing the command and follow the instructions. 
    Make sure you understand the implications of setting an execution policy.

4. Run the website locally for development:
    open Cyber-Learner folder in terminal. (path of Cyber-Learner foleder: WIL_Cyber_Secuity\Cyber-Learner)
    run the following command: 

    ng serve --open

    The --open (or just -o) option automatically opens your browser to http://localhost:4200/.
