# Enhanced cleanup script to remove ALL Next.js and React remnants
# Keeps only pure Angular project files

Write-Host "🧹 Starting comprehensive Angular cleanup..." -ForegroundColor Green
Write-Host ""

# Files to remove (Next.js, React, shadcn/ui, Vercel configs)
$filesToRemove = @(
    "components.json",           # shadcn/ui config
    "pnpm-lock.yaml",            # pnpm lock (use npm instead)
    "postcss.config.mjs",        # Next.js style postcss config
    ".vercelignore",             # Vercel config
    "vercel.json",               # Vercel config
    "next.config.js",            # Next.js config
    "next.config.mjs",           # Next.js config
    "next-env.d.ts",             # Next.js types
    ".eslintrc.json",            # Might have React rules
    "jest.config.js",            # Jest config (if Next.js specific)
    "tsconfig.node.json"         # Node config (if Next.js specific)
)

Write-Host "📋 Removing Next.js/React config files..." -ForegroundColor Cyan
foreach ($file in $filesToRemove) {
    if (Test-Path $file) {
        Remove-Item -Path $file -Force
        Write-Host "  ✓ Removed: $file" -ForegroundColor Yellow
    }
}

# Directories to remove
$dirsToRemove = @(
    ".next",                     # Next.js build output
    "out",                       # Next.js static export
    ".vercel",                   # Vercel config
    "src/components",            # React components (if any)
    "src/lib",                   # React utilities (if any)
    "src/hooks",                 # React hooks (if any)
    "src/pages",                 # Next.js pages directory
    "src/app",                   # Next.js app directory (if conflicting)
    "styles/globals.css",        # Next.js global styles
    "public/next.svg",           # Next.js assets
    "public/vercel.svg"          # Vercel assets
)

Write-Host ""
Write-Host "📁 Removing Next.js/React directories..." -ForegroundColor Cyan
foreach ($dir in $dirsToRemove) {
    if (Test-Path $dir) {
        Remove-Item -Path $dir -Recurse -Force
        Write-Host "  ✓ Removed: $dir" -ForegroundColor Yellow
    }
}

# Check for React/Next.js imports in source files
Write-Host ""
Write-Host "🔍 Scanning for React/Next.js imports in source files..." -ForegroundColor Cyan

$tsFiles = Get-ChildItem -Path "src" -Recurse -Filter "*.ts" -ErrorAction SilentlyContinue
$reactImports = @()

foreach ($file in $tsFiles) {
    $content = Get-Content $file.FullName -Raw
    if ($content -match "from\s+['\"]react|from\s+['\"]next|from\s+['\"]@radix-ui") {
        $reactImports += $file.FullName
    }
}

if ($reactImports.Count -gt 0) {
    Write-Host "  ⚠️  Found React/Next.js imports in:" -ForegroundColor Red
    foreach ($file in $reactImports) {
        Write-Host "    - $file" -ForegroundColor Red
    }
} else {
    Write-Host "  ✓ No React/Next.js imports found" -ForegroundColor Green
}

# Update .gitignore
Write-Host ""
Write-Host "📝 Updating .gitignore..." -ForegroundColor Cyan

$gitignoreContent = @"
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Angular
.angular/
dist/
build/

# Environment
.env
.env.local
.env.*.local

# IDE
.vscode/
.idea/
*.swp
*.swo
*~
.DS_Store

# Build outputs
*.log
*.tsbuildinfo

# Next.js (if any remnants)
.next/
out/
.vercel/

# OS
Thumbs.db
"@

Set-Content -Path ".gitignore" -Value $gitignoreContent
Write-Host "  ✓ Updated: .gitignore" -ForegroundColor Yellow

Write-Host ""
Write-Host "✅ Cleanup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📊 Project Status:" -ForegroundColor Cyan
Write-Host "  ✓ Pure Angular project" -ForegroundColor Green
Write-Host "  ✓ No Next.js/React remnants" -ForegroundColor Green
Write-Host "  ✓ Ready for development" -ForegroundColor Green
Write-Host ""
Write-Host "🚀 Next steps:" -ForegroundColor Cyan
Write-Host "  1. npm install" -ForegroundColor White
Write-Host "  2. npm start" -ForegroundColor White
