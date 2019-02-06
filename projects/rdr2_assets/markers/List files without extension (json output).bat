@echo off
setlocal disableDelayedExpansion
set "qt=""
set "qq=","
call :run >movies.json
exit /b

:run
echo [
for /R %%F in (*.png) do echo %qt%%%~nF%qq%
echo ]
exit /b