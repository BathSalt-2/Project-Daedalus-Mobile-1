#!/bin/bash

# Function to display usage information
usage() {
    echo "Usage: $0 <platform>"
    echo "platform: ios | android"
    exit 1
}

# Check if platform parameter is provided
if [ -z "$1" ]; then
    echo "Error: No platform specified."
    usage
fi

# Validate platform parameter
PLATFORM=$1
if [ "$PLATFORM" != "ios" ] && [ "$PLATFORM" != "android" ]; then
    echo "Error: Invalid platform specified."
    usage
fi

# Run the app on the specified platform
echo "Running Project Daedalus on $PLATFORM..."
ns run $PLATFORM

if [ $? -ne 0 ]; then
    echo "Error: Failed to run the app on $PLATFORM."
    exit 1
fi

echo "App is running on $PLATFORM."
