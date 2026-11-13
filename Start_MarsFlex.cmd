@echo off
cd /d "%~dp0"
where py >nul 2>nul
if errorlevel 1 (
 echo Python 3.12 is required for the local edition.
 echo Install Python from https://www.python.org/downloads/ and try again.
 pause
 exit /b 1
)
py -3.12 launch.py
if errorlevel 1 (
 echo Setup or launch failed. Keep the message above for the technical partner.
 pause
)
