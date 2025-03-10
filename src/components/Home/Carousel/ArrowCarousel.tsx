interface ArrowCarouselProps {
  src: string;
  onClick: () => void;
}

const ArrowCarousel: React.FC<ArrowCarouselProps> = ({ src, onClick }) => {
  return (
    <div style={{ display: "flex" }}>
      <button
        style={{
          all: "unset",
          color: "white",
          backgroundColor: "grey",
          borderRadius: "5px",
          padding: "2vw  0vw",
          opacity: 0.5,
          transition: "opacity 0.6s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "0.8";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "0.5";
        }}
        onClick={onClick}
      >
        <img
          src={src}
          alt="arrow"
          style={{
            width: "40px",
            height: "auto",
          }}
        />
      </button>
    </div>
  );
};

export default ArrowCarousel;
