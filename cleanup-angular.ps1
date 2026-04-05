# Cleanup script to remove all Next.js and React dependencies
# Keep only Angular project files

Write-Host "🧹 Starting Angular project cleanup..." -ForegroundColor Green

# Remove Next.js specific files and directories
$filesToRemove = @(
    "next.config.js",
    "next-env.d.ts",
    ".next",
    "public/next.svg",
    "public/vercel.svg"
)

foreach ($file in $filesToRemove) {
    if (Test-Path $file) {
        Remove-Item -Path $file -Recurse -Force
        Write-Host "✓ Removed: $file" -ForegroundColor Yellow
    }
}

# Remove React/Radix UI component files if they exist
$reactComponentDirs = @(
    "src/components",
    "src/lib",
    "src/hooks"
)

foreach ($dir in $reactComponentDirs) {
    if (Test-Path $dir) {
        Remove-Item -Path $dir -Recurse -Force
        Write-Host "✓ Removed: $dir" -ForegroundColor Yellow
    }
}

# Clean up node_modules to force reinstall with correct dependencies
if (Test-Path "node_modules") {
    Write-Host "🗑️  Removing node_modules..." -ForegroundColor Cyan
    Remove-Item -Path "node_modules" -Recurse -Force
    Write-Host "✓ Removed: node_modules" -ForegroundColor Yellow
}

# Remove package-lock.json to regenerate with clean dependencies
if (Test-Path "package-lock.json") {
    Remove-Item -Path "package-lock.json" -Force
    Write-Host "✓ Removed: package-lock.json" -ForegroundColor Yellow
}

# Update .gitignore to exclude Next.js specific files
$gitignoreContent = @"
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

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
"@

Set-Content -Path ".gitignore" -Value $gitignoreContent
Write-Host "✓ Updated: .gitignore" -ForegroundColor Yellow

Write-Host "`n✅ Cleanup complete!" -ForegroundColor Green
Write-Host "`n📝 Next steps:" -ForegroundColor Cyan
Write-Host "1. Run: npm install" -ForegroundColor White
Write-Host "2. Run: npm start" -ForegroundColor White
Write-Host "3. Your Angular project is ready!" -ForegroundColor White
