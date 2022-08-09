@echo OFF
ECHO Script.bat file to run CorporateClassified Portal Front End
ECHO Please wait...

ECHO ==========================
call npm install


ECHO Please wait Installing jquery...
ECHO ==========================
call npm install jquery --save --force


ECHO Please wait Installing @types/jquery...
ECHO ==========================
call npm install @types/jquery --save --force


@echo off
call :getError
echo %errorlevel%
pause
goto :eof

:getError 
exit /b 2