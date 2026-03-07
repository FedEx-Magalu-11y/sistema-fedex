@echo off
echo ================================
echo   TESTANDO SITE LOCALMENTE
echo ================================
echo.
echo Abrindo servidor local...
echo.
echo Pressione CTRL+C para parar o servidor
echo.
python -m http.server 8000
pause