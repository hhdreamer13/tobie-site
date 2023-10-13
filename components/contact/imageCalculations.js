export const generateImagePaths = (
  uniqueImagesCount,
  totalDisplayImagesCount,
  partnersLogos
) => {
  // Generate URLs based on fetched data
  const singleSetOfImagePaths = partnersLogos.map(logo => logo.imageSrc);

  return Array.from(
    { length: totalDisplayImagesCount },
    (_, i) => singleSetOfImagePaths[i % uniqueImagesCount],
  );
};

export const generateGridStyles = (rowCount, colCount, uniqueImagesCount) => {
  const gridStyles = [];

  for (let i = 0; i < uniqueImagesCount; i++) {
    gridStyles.push({
      "--r": Math.floor(Math.random() * rowCount) + 1,
      "--c": Math.floor(Math.random() * colCount) + 1,
    });
  }

  return gridStyles;
};
