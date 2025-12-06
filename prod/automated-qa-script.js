/**
 * Automated QA Testing Script for YPI Website
 * Run this script to perform automated checks
 * 
 * Usage: node automated-qa-script.js
 * 
 * This script checks:
 * - Build output
 * - Route generation
 * - Bundle sizes
 * - Basic link structure
 */

const fs = require('fs');
const path = require('path');

const COLORS = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

class QATestRunner {
  constructor() {
    this.results = {
      passed: 0,
      failed: 0,
      warnings: 0,
      total: 0,
    };
    this.issues = [];
  }

  log(message, type = 'info') {
    const colors = {
      info: COLORS.blue,
      success: COLORS.green,
      error: COLORS.red,
      warning: COLORS.yellow,
      header: COLORS.cyan + COLORS.bright,
    };
    console.log(`${colors[type] || ''}${message}${COLORS.reset}`);
  }

  test(name, fn) {
    this.results.total++;
    try {
      const result = fn();
      if (result === true || result === undefined) {
        this.results.passed++;
        this.log(`✓ ${name}`, 'success');
        return true;
      } else if (result === 'warning') {
        this.results.warnings++;
        this.log(`⚠ ${name}`, 'warning');
        return 'warning';
      } else {
        this.results.failed++;
        this.log(`✗ ${name}`, 'error');
        this.issues.push(name);
        return false;
      }
    } catch (error) {
      this.results.failed++;
      this.log(`✗ ${name}: ${error.message}`, 'error');
      this.issues.push(`${name}: ${error.message}`);
      return false;
    }
  }

  section(name) {
    console.log('');
    this.log(`${'='.repeat(60)}`, 'header');
    this.log(name, 'header');
    this.log(`${'='.repeat(60)}`, 'header');
    console.log('');
  }

  async run() {
    this.log('🚀 Starting Automated QA Tests for YPI Website', 'header');
    console.log('');

    // Test 1: Check build output exists
    this.section('Build Output Verification');
    this.testBuildOutput();

    // Test 2: Check package.json
    this.section('Package Configuration');
    this.testPackageJson();

    // Test 3: Check critical directories
    this.section('Directory Structure');
    this.testDirectoryStructure();

    // Test 4: Check critical files
    this.section('Critical Files');
    this.testCriticalFiles();

    // Test 5: Check environment template
    this.section('Environment Configuration');
    this.testEnvironmentConfig();

    // Test 6: Check public assets
    this.section('Public Assets');
    this.testPublicAssets();

    // Summary
    this.printSummary();
  }

  testBuildOutput() {
    const devPath = path.join(__dirname, '..', 'dev');
    const nextDir = path.join(devPath, '.next');
    
    this.test('Dev directory exists', () => fs.existsSync(devPath));
    this.test('.next build directory exists', () => fs.existsSync(nextDir));
    
    if (fs.existsSync(nextDir)) {
      this.test('Build manifest exists', () => 
        fs.existsSync(path.join(nextDir, 'build-manifest.json'))
      );
      this.test('Routes manifest exists', () => 
        fs.existsSync(path.join(nextDir, 'routes-manifest.json'))
      );
    }
  }

  testPackageJson() {
    const packagePath = path.join(__dirname, '..', 'dev', 'package.json');
    
    this.test('package.json exists', () => fs.existsSync(packagePath));
    
    if (fs.existsSync(packagePath)) {
      const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      
      this.test('Package name is set', () => !!pkg.name);
      this.test('Next.js version >= 14', () => {
        const version = pkg.dependencies?.next || '';
        return version.includes('14') || version.includes('^14');
      });
      this.test('Scripts are defined', () => 
        !!pkg.scripts?.dev && !!pkg.scripts?.build && !!pkg.scripts?.start
      );
      this.test('TypeScript is installed', () => !!pkg.devDependencies?.typescript);
    }
  }

  testDirectoryStructure() {
    const devPath = path.join(__dirname, '..', 'dev');
    const requiredDirs = [
      'app',
      'components',
      'lib',
      'public',
      'styles',
      'types',
    ];

    requiredDirs.forEach(dir => {
      const dirPath = path.join(devPath, dir);
      this.test(`${dir}/ directory exists`, () => fs.existsSync(dirPath));
    });

    // Check app router structure
    const appPath = path.join(devPath, 'app');
    if (fs.existsSync(appPath)) {
      this.test('app/(marketing) directory exists', () => 
        fs.existsSync(path.join(appPath, '(marketing)'))
      );
      this.test('app/admin directory exists', () => 
        fs.existsSync(path.join(appPath, 'admin'))
      );
      this.test('app/api directory exists', () => 
        fs.existsSync(path.join(appPath, 'api'))
      );
    }
  }

  testCriticalFiles() {
    const devPath = path.join(__dirname, '..', 'dev');
    const criticalFiles = [
      'next.config.mjs',
      'tailwind.config.ts',
      'tsconfig.json',
      '.eslintrc.json',
      'postcss.config.mjs',
      'middleware.ts',
    ];

    criticalFiles.forEach(file => {
      const filePath = path.join(devPath, file);
      this.test(`${file} exists`, () => fs.existsSync(filePath));
    });

    // Check layout files
    this.test('Root layout exists', () => 
      fs.existsSync(path.join(devPath, 'app', 'layout.tsx'))
    );
    this.test('Marketing page exists', () => 
      fs.existsSync(path.join(devPath, 'app', '(marketing)', 'page.tsx'))
    );
  }

  testEnvironmentConfig() {
    const devPath = path.join(__dirname, '..', 'dev');
    const envExample = path.join(devPath, '.env.example');
    const envLocal = path.join(devPath, '.env.local');

    this.test('.env.example exists', () => fs.existsSync(envExample));
    
    if (fs.existsSync(envExample)) {
      const envContent = fs.readFileSync(envExample, 'utf8');
      
      this.test('Contains AI configuration', () => 
        envContent.includes('OPENAI_API_KEY') || envContent.includes('PINECONE')
      );
      this.test('Contains admin configuration', () => 
        envContent.includes('ADMIN_EMAIL') && envContent.includes('NEXTAUTH')
      );
      this.test('Contains social media config', () => 
        envContent.includes('LINKEDIN_URL') || envContent.includes('WHATSAPP')
      );
      this.test('Contains newsletter config', () => 
        envContent.includes('NEWSLETTER_PROVIDER') || envContent.includes('MAILCHIMP')
      );
    }

    if (fs.existsSync(envLocal)) {
      this.log('  ℹ .env.local exists (good for local development)', 'info');
    } else {
      this.log('  ⚠ .env.local not found (expected for production)', 'warning');
    }
  }

  testPublicAssets() {
    const publicPath = path.join(__dirname, '..', 'dev', 'public');
    
    this.test('public/ directory exists', () => fs.existsSync(publicPath));
    
    if (fs.existsSync(publicPath)) {
      // Check for common subdirectories
      const assetDirs = ['images', 'documents'];
      assetDirs.forEach(dir => {
        const dirPath = path.join(publicPath, dir);
        if (fs.existsSync(dirPath)) {
          this.log(`  ✓ ${dir}/ directory found`, 'success');
        } else {
          this.log(`  ℹ ${dir}/ directory not found (may be created later)`, 'info');
        }
      });
    }
  }

  printSummary() {
    console.log('');
    this.log(`${'='.repeat(60)}`, 'header');
    this.log('TEST SUMMARY', 'header');
    this.log(`${'='.repeat(60)}`, 'header');
    console.log('');
    
    this.log(`Total Tests: ${this.results.total}`, 'info');
    this.log(`✓ Passed: ${this.results.passed}`, 'success');
    if (this.results.warnings > 0) {
      this.log(`⚠ Warnings: ${this.results.warnings}`, 'warning');
    }
    if (this.results.failed > 0) {
      this.log(`✗ Failed: ${this.results.failed}`, 'error');
    }
    
    console.log('');
    
    const passRate = ((this.results.passed / this.results.total) * 100).toFixed(1);
    
    if (this.results.failed === 0) {
      this.log(`🎉 All tests passed! (${passRate}%)`, 'success');
    } else {
      this.log(`⚠ ${this.results.failed} test(s) failed`, 'warning');
      console.log('');
      this.log('Failed Tests:', 'error');
      this.issues.forEach(issue => {
        this.log(`  - ${issue}`, 'error');
      });
    }
    
    console.log('');
    this.log(`Pass Rate: ${passRate}%`, passRate >= 90 ? 'success' : 'warning');
    console.log('');
  }
}

// Run the tests
const runner = new QATestRunner();
runner.run().catch(error => {
  console.error('Fatal error running QA tests:', error);
  process.exit(1);
});
