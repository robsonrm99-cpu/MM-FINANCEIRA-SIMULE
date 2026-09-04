import getColors from 'get-image-colors';
getColors('https://res.cloudinary.com/dsevqnhts/image/upload/v1784729585/WhatsApp_Image_2026-07-22_at_10.04.49_v2dluu.jpg').then(colors => {
  console.log(colors.map(color => color.hex()));
}).catch(console.error);
