const DEFAULT_UNIQUE_IMAGES_COUNT = 19; // Number of unique images
const TOTAL_DISPLAY_IMAGES_COUNT = 38; // Total images to display, including repeated ones
const GRID_ROW_COUNT = 38; // Number of rows in the grid
const GRID_COLUMN_COUNT = 5; // Number of columns in the grid
const TOTAL_GRID_STYLES_COUNT = 38; // Total number of grid styles, generally matches the number of images

export const generateImagePaths = (
  uniqueImagesCount = DEFAULT_UNIQUE_IMAGES_COUNT,
  totalDisplayImagesCount = TOTAL_DISPLAY_IMAGES_COUNT,
) => {
  const singleSetOfImagePaths = Array.from(
    { length: uniqueImagesCount },
    (_, i) => `/logos/logo${i + 1}.webp`,
  );

  return Array.from(
    { length: totalDisplayImagesCount },
    (_, i) => singleSetOfImagePaths[i % uniqueImagesCount],
  );
};

export const generateGridStyles = (
  rowCount = GRID_ROW_COUNT,
  colCount = GRID_COLUMN_COUNT,
  size = TOTAL_GRID_STYLES_COUNT,
) => {
  const gridStyles = [];

  for (let i = 0; i < size; i++) {
    gridStyles.push({
      "--r": Math.floor(Math.random() * rowCount) + 1,
      "--c": Math.floor(Math.random() * colCount) + 1,
    });
  }

  return gridStyles;
};
