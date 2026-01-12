const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
const sourceDir = path.join(projectRoot, '_vanilla', 'images');
const targetDir = path.join(projectRoot, 'public', 'images');

// 타겟 디렉토리가 없으면 생성
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 이미지 파일 목록
const images = [
  'ceo.png',
  'client-1.webp',
  'client-2.jpg',
  'client-3.webp',
  'client-4.webp',
  'client-5.png',
  'client-6.png',
  'client-7.png',
  'client-8.png',
  'logo-black.png',
  'logo-icon.png',
  'logo-white.png',
  'thumbnail-1.png',
  'thumbnail-2.jpg',
  'thumbnail-3.png',
  'thumbnail-4.png',
  'thumbnail-5.png',
  'thumbnail-6.png',
];

async function convertToWebP() {
  console.log('🖼️  이미지를 WebP로 변환 시작...\n');

  for (const image of images) {
    const sourcePath = path.join(sourceDir, image);
    const ext = path.extname(image).toLowerCase();
    const baseName = path.basename(image, ext);
    
    // 출력 파일명을 .webp로 변경
    const targetPath = path.join(targetDir, `${baseName}.webp`);

    try {
      const stats = fs.statSync(sourcePath);
      const originalSize = stats.size;

      // 모든 이미지를 WebP로 변환
      await sharp(sourcePath)
        .webp({ 
          quality: 85,
          effort: 6  // 0-6, 높을수록 압축률 좋지만 느림
        })
        .toFile(targetPath);

      const newStats = fs.statSync(targetPath);
      const newSize = newStats.size;
      const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);

      console.log(`✅ ${image} → ${baseName}.webp`);
      console.log(`   ${(originalSize / 1024).toFixed(1)}KB → ${(newSize / 1024).toFixed(1)}KB (${reduction}% 감소)\n`);
    } catch (error) {
      console.error(`❌ ${image} 처리 실패:`, error.message);
    }
  }

  console.log('✨ 이미지 변환 완료!');
  console.log('\n📝 이미지 사용 시 확장자를 .webp로 변경해주세요!');
}

convertToWebP().catch(console.error);
