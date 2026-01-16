function TagList({ tags }) {
  const lastTag = tags[tags.length - 1];

  return (
    <div className="mb-4">
      <span className="mr-2">หมวด</span>
      {tags
        .filter((tag) => tag !== lastTag)
        .map((tag) => (
          <span key={tag} className="mr-2">
            <span className="underline">{tag}</span>
          </span>
        ))}
      <span className="mr-2">และ</span>
      <span className="underline">{lastTag}</span>
    </div>
  );
}

export default TagList;
