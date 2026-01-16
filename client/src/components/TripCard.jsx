import TagList from "./TagList";
import ThumbnailGallery from "./ThumbnailGallery";

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
        <TagList tags={tags} />

        {/* Thumbnail Images */}
        <ThumbnailGallery photos={photos} alt={title} />
      </div>
    </article>
  );
}

export default TripCard;
