function ProfilePicture(props) {
  return (
    <div>
      {props.isOpenToWork && (
        <img
          src="/assets/open-to-work.png"
          alt="open-to-work"
          className="w-48 h-48 object-cover -mb-48 relative"
        />
      )}
      <img
        src={props.src}
        alt={props.alt}
        className="w-48 h-48 object-cover rounded-full outline outline-offset-4 outline-1 outline-cyan-400"
      />
    </div>
  );
}

export default ProfilePicture;
