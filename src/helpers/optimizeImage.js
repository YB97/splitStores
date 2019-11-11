export default function optimizeImg(file, quality, maxWidth, maxHeight) {
  return new Promise(resolve => {
    const blobUrl = URL.createObjectURL(file);
    const image = new Image();
    image.src = blobUrl;

    image.onload = function() {
      const resizedImageURL = resizeImg(
        image,
        quality,
        maxWidth,
        maxHeight,
        file.type
      );
      //  URL в blob
      fetch(resizedImageURL)
        .then(res => res.blob())
        .then(blob => {
          //убираем ссылку из карты соответсвий, что garbage collector удалил старый blob
          URL.revokeObjectURL(blobUrl);
          return resolve(blob);
        });
    };
  });
}

function resizeImg(img, quality, maxWidth, maxHeight, type = 'image/jpeg') {
  const canvas = document.createElement('canvas');
  let width = img.width;
  let height = img.height;

  // Вычисляем ширину и длину так, чтобы сохранить пропорции изображения
  if (width > height) {
    if (width > maxWidth) {
      height = Math.round((height *= maxWidth / width));
      width = maxWidth;
    }
  } else {
    if (height > maxHeight) {
      width = Math.round((width *= maxHeight / height));
      height = maxHeight;
    }
  }

  //  рисуем на canvas
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, width, height);

  return canvas.toDataURL(type, quality);
}
