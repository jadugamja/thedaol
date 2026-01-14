import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function convertToWebP() {
  const inputPath = path.join(__dirname, 'public/images/thumbnail/customs.png');
  const outputPath = path.join(__dirname, 'public/images/thumbnail/customs.webp');

  console.log('🔄 Converting:', inputPath);
  console.log('📝 Output:', outputPath);

  try {
    await sharp(inputPath)
      .webp({ quality: 80 }) // 80% 품질로 압축
      .toFile(outputPath);
    
    console.log('✅ Successfully converted nia.png to nia.webp');
  } catch (error) {
    console.error('❌ Error converting image:', error);
  }
}

convertToWebP();
