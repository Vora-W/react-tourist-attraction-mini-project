function TripCard({ title, description, url, photos, tags }) {

  return (
    <article className="flex gap-8 py-8 border-b border-gray-100 relative">
      {/* Main Image */}
      <div className="w-1/3">
        <img
          src={photos[0]}
          alt={title}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Title */}
        <a
          href={url}
          className="text-black  hover:text-sky-800 hover:underline"
        >
          <h2 className="text-xl font-semibold">{title}</h2>
        </a>

        {/* Description */}
        <p className="leading-relaxed mb-2">
          {description.substring(0, 100)} ...
          <br />
          <a
            href={url}
            target="_blank" // เปิดลิงก์ใน tab ใหม่
            rel="noopener noreferrer" // ความปลอดภัย: ป้องกัน tabnabbing attack และไม่ส่ง referrer
            className="text-sky-400 underline hover:text-sky-800"
          >
            อ่านต่อ
          </a>
        </p>

        {/* Tags */}
        <div className="mb-4">
          <span className="mr-2">หมวด</span>
          {tags
            .filter((tag) => tag !== tags[[tags.length - 1]])
            .map((tag) => (
              <span key={tag} className="mr-2">
                <span className="underline">{tag}</span>
              </span>
            ))}
          <span className="mr-2">และ</span>
          <span className="underline">{tags[tags.length - 1]}</span>
        </div>

        {/* Thumbnail Images */}
        <div className="flex gap-8">
          {photos
            .filter((photo) => photo !== photos[0])
            .map((photo) => (
              <img
                key={photo}
                src={photo}
                alt={title}
                className="w-24 h-24 object-cover rounded-xl "
              />
            ))}
        </div>
      </div>

    </article>
  );
}

export default TripCard;
