#!/bin/bash

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check for Node.js
if ! command_exists node; then
    echo "Node.js is not installed. Please install Node.js from https://nodejs.org/ and try again."
    exit 1
fi

# Check for NativeScript CLI
if ! command_exists ns; then
    echo "NativeScript CLI is not installed. Please install it by running 'npm install -g nativescript' and try again."
    exit 1
fi

# Clone the repository
echo "Cloning the Project Daedalus repository..."
git clone https://github.com/your-username/project-daedalus.git

# Navigate into the project directory
cd project-daedalus || { echo "Failed to navigate into the project directory."; exit 1; }

# Install dependencies
echo "Installing dependencies..."
npm install

echo "Installation complete. You can now run the app using the run.sh script."
