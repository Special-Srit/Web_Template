#!/bin/bash
# Motionix — install & launch script (Mac / Linux / Git Bash on Windows)

echo ""
echo "================================"
echo "  Motionix — Installing..."
echo "================================"
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
  echo "ERROR: Node.js is not installed."
  echo "Download it from https://nodejs.org/ (v18 or higher)"
  exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
  echo "ERROR: Node.js v18+ required. You have $(node -v)."
  echo "Download the latest from https://nodejs.org/"
  exit 1
fi

echo "Node.js $(node -v) detected."
echo ""
echo "Installing dependencies..."
npm install

echo ""
echo "================================"
echo "  Done! Starting dev server..."
echo "================================"
echo ""
echo "Open http://localhost:3000 in your browser."
echo "Press Ctrl+C to stop."
echo ""

npm run dev
