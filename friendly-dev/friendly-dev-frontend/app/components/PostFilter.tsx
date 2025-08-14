type PostFilterProps = {
  searchQuery: string;
  onSearchChange: (query: string) => void;
};

const PostFilter = ({ searchQuery, onSearchChange }: PostFilterProps) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search Posts..."
        onChange={(e) => onSearchChange(e.target.value)}
        value={searchQuery}
      />
    </div>
  );
};

export default PostFilter;
