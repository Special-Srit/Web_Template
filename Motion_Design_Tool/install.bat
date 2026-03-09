@echo off
echo.
echo ================================
echo   Motionix -- Installing...
echo ================================
echo.

:: Check Node.js
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed.
    echo Download it from https://nodejs.org/  ^(v18 or higher^)
    pause
    exit /b 1
)

for /f "tokens=1 delims=v." %%a in ('node -v') do set NODE_MAJOR=%%a
for /f "tokens=2 delims=v." %%a in ('node -v') do set NODE_MAJOR=%%a

node -v
echo.
echo Installing dependencies...
call npm install

echo.
echo ================================
echo   Done! Starting dev server...
echo ================================
echo.
echo Open http://localhost:3000 in your browser.
echo Press Ctrl+C to stop.
echo.

call npm run dev
pause
