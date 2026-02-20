# Setup Fresh Git Repository Script
# Author: yashjeet.singh@avaipl.com
# GitHub: https://github.com/yashjeetsingh-ai

Write-Host "Setting up fresh Git repository..." -ForegroundColor Green

# Navigate to project directory
cd "C:\Aromahpureair web\aromahpure"

# Remove existing git repository and lock files
Write-Host "`nRemoving old Git repository..." -ForegroundColor Yellow
if (Test-Path .git) {
    Remove-Item -Path .git -Recurse -Force
}
if (Test-Path .git\config.lock) {
    Remove-Item -Path .git\config.lock -Force
}

# Initialize fresh Git repository
Write-Host "Initializing new Git repository..." -ForegroundColor Yellow
git init

# Configure Git user
Write-Host "`nConfiguring Git user..." -ForegroundColor Yellow
git config user.email "yashjeet.singh@avaipl.com"
git config user.name "Yashjeet Singh"

# Verify configuration
Write-Host "`nGit Configuration:" -ForegroundColor Green
git config user.email
git config user.name

# Stage all files
Write-Host "`nStaging files..." -ForegroundColor Yellow
git add .

# Create initial commit
Write-Host "`nCreating initial commit..." -ForegroundColor Yellow
git commit -m "Initial commit: Aromahpure Air website"

Write-Host "`n✅ Fresh Git repository created successfully!" -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Cyan
Write-Host "1. Create a new repository on GitHub: https://github.com/new" -ForegroundColor White
Write-Host "2. Repository name: aromahpure (or your preferred name)" -ForegroundColor White
Write-Host "3. DO NOT initialize with README, .gitignore, or license" -ForegroundColor White
Write-Host "4. Run these commands:" -ForegroundColor White
Write-Host "   git remote add origin https://github.com/yashjeetsingh-ai/aromahpure.git" -ForegroundColor Gray
Write-Host "   git branch -M main" -ForegroundColor Gray
Write-Host "   git push -u origin main" -ForegroundColor Gray
