@echo off
setlocal disableDelayedExpansion
set "qt=""
set "qq=","
call :run >movies.json
exit /b

:run
echo [
for /R "movs" %%F in (*.mp4) do echo %qt%%%~nF%qq%
echo ]
exit /b