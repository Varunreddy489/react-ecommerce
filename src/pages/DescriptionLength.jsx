import { useState } from "react";
import PropTypes from "prop-types";

const DescriptionLength = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // This variable determines if the description needs to be truncated
  const needsTruncation = description.length > 110; // Adjust this value to change when truncation occurs

  const truncatedText = needsTruncation
    ? `${description.substring(0, 110)}...`
    : description;

  return (
    <div className="overflow-y-auto" style={{ maxHeight: "100px" }}>
      {/* Set a max height to trigger overflow and enable vertical scrollbar */}
      <p className="mb-3 font-normal text-gray-700">
        {isExpanded || !needsTruncation ? description : truncatedText}
      </p>
      {needsTruncation && (
        <button
          className="text-blue-500 hover:text-blue-700"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "See Less" : "See More"}
        </button>
      )}
    </div>
  );
};

DescriptionLength.propTypes = {
  description: PropTypes.string.isRequired,
};

export default DescriptionLength;
