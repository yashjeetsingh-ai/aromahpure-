# Deploying to Vercel

This guide will help you deploy your Next.js application to Vercel.

## Prerequisites

1. A GitHub account (recommended) or GitLab/Bitbucket
2. A Vercel account (sign up at [vercel.com](https://vercel.com))

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```powershell
   cd "C:\Aromahpureair web\aromahpure"
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import Project on Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Project Settings**
   - **Root Directory**: Set to `aromahpure` (if your repo contains the parent folder)
   - **Framework Preset**: Next.js (auto-detected)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

4. **Add Environment Variables**
   Go to Project Settings → Environment Variables and add:
   ```
   MAIL_HOST=your-smtp-host
   MAIL_PORT=587
   MAIL_USERNAME=your-email@example.com
   MAIL_PASSWORD=your-email-password
   MAIL_FROM_NAME=Aromahpure Air
   MAIL_FROM_ADDRESS=noreply@aromahpureair.com
   ADMIN_EMAIL=admin@aromahpureair.com
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```powershell
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```powershell
   cd "C:\Aromahpureair web\aromahpure"
   vercel login
   ```

3. **Deploy**
   ```powershell
   vercel
   ```
   Follow the prompts:
   - Link to existing project or create new
   - Confirm settings
   - Add environment variables when prompted

4. **For Production Deployment**
   ```powershell
   vercel --prod
   ```

## Environment Variables Required

Make sure to add these in Vercel Dashboard → Project Settings → Environment Variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `MAIL_HOST` | SMTP server hostname | `smtp.gmail.com` |
| `MAIL_PORT` | SMTP port | `587` |
| `MAIL_USERNAME` | SMTP username/email | `your-email@gmail.com` |
| `MAIL_PASSWORD` | SMTP password/app password | `your-app-password` |
| `MAIL_FROM_NAME` | Sender display name | `Aromahpure Air` |
| `MAIL_FROM_ADDRESS` | Sender email address | `noreply@aromahpureair.com` |
| `ADMIN_EMAIL` | Admin email for notifications | `admin@aromahpureair.com` |

## Post-Deployment

1. **Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `aromahpureair.com`)
   - Follow DNS configuration instructions

2. **Verify Email Functionality**
   - Test the contact form
   - Check that emails are being sent correctly

## Troubleshooting

- **Build Errors**: Check the build logs in Vercel dashboard
- **Email Not Working**: Verify environment variables are set correctly
- **Environment Variables Not Loading**: Make sure they're added for the correct environment (Production, Preview, Development)

## Notes

- Vercel automatically handles Next.js optimizations
- The project uses `images.unoptimized: true` in `next.config.mjs` - consider optimizing images for production
- All environment variables are secure and not exposed to the client-side code
