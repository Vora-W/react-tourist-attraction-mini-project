function ThumbnailGallery({ photos, alt }) {
  return (
    <div className="flex gap-8">
      {photos
        .filter((photo) => photo !== photos[0])
        .map((photo) => (
          <img
            key={photo}
            src={photo}
            alt={alt}
            className="w-24 h-24 object-cover rounded-xl"
          />
        ))}
    </div>
  );
}

export default ThumbnailGallery;
