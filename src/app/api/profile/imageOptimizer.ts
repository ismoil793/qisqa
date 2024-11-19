// Works only on the BE
import sharp from 'sharp';

export const optimizeBase64ToJpeg = async base64Image => {
  const buffer = Buffer.from(base64Image.split(',')[1], 'base64');
  const optimizedBuffer = await sharp(buffer)
    .resize(128, 128) // Resize to a smaller width
    .toFormat('jpeg', { quality: 95 }) // Adjust quality (for JPEG)
    .toBuffer();
  return `data:image/jpeg;base64,${optimizedBuffer.toString('base64')}`;
};

export const optimizeBase64Image = async base64Image => {
  // Extract the format (jpg, jpeg, or png) from the base64 header
  const formatMatch = base64Image.match(/^data:image\/(\w+);base64,/);
  const format = formatMatch ? formatMatch[1] : 'jpeg'; // Default to jpeg if format is missing

  // Decode the base64 image to a Buffer
  const imageBuffer = Buffer.from(base64Image.replace(/^data:image\/\w+;base64,/, ''), 'base64');

  // Process the image with Sharp
  const optimizedBuffer = await sharp(imageBuffer)
    .resize(128, 128) // Resize to exactly 128x128 pixels
    .toFormat(format, format === 'png' ? { compressionLevel: 5 } : { quality: 95 }) // Handle PNG or JPEG specifically
    .toBuffer();

  // Convert the optimized Buffer back to base64
  return `data:image/${format};base64,${optimizedBuffer.toString('base64')}`;
};
