function SearchBar({ value, onChange }) {
  return (
    <div className="max-w-4xl mx-auto px-4 mb-8">
      <label className="block mb-1 text-black">ค้นหาที่เที่ยว</label>
      <input
        className="w-full text-center border-b border-gray-300 pb-2 outline-none focus:border-sky-400 placeholder-gray-400"
        type="text"
        placeholder="หาที่เที่ยวแล้วไปกัน ..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBar;
