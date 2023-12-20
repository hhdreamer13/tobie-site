const carousel = {
    name: 'carousel',
    type: 'object',
    title: 'Image Carousel',
    fields: [
      {
        name: 'images',
        type: 'array',
        title: 'Images',
        of: [{ type: 'image' }],
        options: {
          layout: 'grid'
        }
      }
    ]
  };
  
  export default carousel;