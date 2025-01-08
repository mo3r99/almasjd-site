export default function IFrame({ src }) {
  return (
    <iframe
      width="640px"
      height="480px"
      src={src}
      frameBorder="0"
      marginWidth="0"
      marginHeight="0"
      style={{
        border: "none",
        width: "100vw",
        height: "920px",
        maxWidth: "1024px",
        margin: "0 auto",
      }}
      allowFullScreen
      webkitallowfullscreen={"true"}
      mozallowfullscreen={"true"}
      msallowfullscreen={"true"}
    />
  );
}
