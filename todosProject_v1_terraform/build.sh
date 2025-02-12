#!/bin/bash

cd ../frontend
npm install >/dev/null
npm run build >/dev/null

# Überprüfen, ob der Build erfolgreich war
if [ -d "dist" ]; then
    # JSON-Ausgabe
    echo '{"build": "completed"}'
else
    # Fehlerausgabe an stderr
    echo "Build failed, 'dist' directory not found!" >&2
    exit 1
fi
