# Verification script for Angular project
Write-Host "✅ Angular Project Verification" -ForegroundColor Green
Write-Host ""

# Check for Angular files
Write-Host "📋 Checking Angular project structure..." -ForegroundColor Cyan
$angularFiles = @(
    "angular.json",
    "tsconfig.json",
    "tsconfig.app.json",
    "src/main.ts",
    "src/index.html",
    "src/app/app.component.ts"
)

$allPresent = $true
foreach ($file in $angularFiles) {
    if (Test-Path $file) {
        Write-Host "  ✓ $file" -ForegroundColor Green
    } else {
        Write-Host "  ✗ $file (MISSING)" -ForegroundColor Red
        $allPresent = $false
    }
}

Write-Host ""
Write-Host "🔍 Checking for Next.js/React remnants..." -ForegroundColor Cyan

$badFiles = @(
    "next.config.js",
    "next.config.mjs",
    "components.json",
    "pnpm-lock.yaml",
    "postcss.config.mjs"
)

$foundBad = $false
foreach ($file in $badFiles) {
    if (Test-Path $file) {
        Write-Host "  ✗ Found: $file (SHOULD BE REMOVED)" -ForegroundColor Red
        $foundBad = $true
    }
}

if (-not $foundBad) {
    Write-Host "  ✓ No Next.js/React config files found" -ForegroundColor Green
}

Write-Host ""
Write-Host "📦 Checking npm dependencies..." -ForegroundColor Cyan
$npmOutput = npm list --depth=0 2>&1
if ($npmOutput -match "@angular/core") {
    Write-Host "  ✓ Angular dependencies installed" -ForegroundColor Green
} else {
    Write-Host "  ✗ Angular dependencies NOT found" -ForegroundColor Red
}

Write-Host ""
if ($allPresent -and -not $foundBad) {
    Write-Host "✅ Project is ready for development!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🚀 To start the development server:" -ForegroundColor Cyan
    Write-Host "   npm start" -ForegroundColor White
} else {
    Write-Host "⚠️  Project needs attention" -ForegroundColor Yellow
}
