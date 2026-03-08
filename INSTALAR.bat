@echo off
echo ========================================
echo   INSTALANDO PORTFOLIO BRUTALIST
echo ========================================
echo.

echo [1/3] Verificando Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js no esta instalado.
    echo Descargalo desde: https://nodejs.org/
    pause
    exit /b 1
)
echo OK - Node.js encontrado
echo.

echo [2/3] Instalando dependencias...
call npm install
if errorlevel 1 (
    echo ERROR: No se pudieron instalar las dependencias
    pause
    exit /b 1
)
echo OK - Dependencias instaladas
echo.

echo [3/3] Iniciando servidor de desarrollo...
echo.
echo El portfolio se abrira en: http://localhost:5173
echo.
echo Para detener el servidor, presiona Ctrl+C
echo.
pause
call npm run dev
