@echo off
echo ========================================
echo   REPARAR INSTALACION
echo ========================================
echo.
echo Este script eliminara node_modules y reinstalara
echo las dependencias con las versiones correctas.
echo.
pause

echo [1/2] Eliminando instalacion anterior...
if exist node_modules (
    rmdir /s /q node_modules
    echo OK - node_modules eliminado
) else (
    echo OK - node_modules no existe
)

if exist package-lock.json (
    del /q package-lock.json
    echo OK - package-lock.json eliminado
) else (
    echo OK - package-lock.json no existe
)
echo.

echo [2/2] Instalando dependencias limpias...
call npm install
if errorlevel 1 (
    echo ERROR: No se pudieron instalar las dependencias
    pause
    exit /b 1
)
echo.
echo ========================================
echo   INSTALACION REPARADA
echo ========================================
echo.
echo Ahora ejecuta: npm run dev
echo.
pause
