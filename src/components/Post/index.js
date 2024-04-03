const Post = ({ subtitle, title, children, author, dateTime }) => {
  return (
    <div className="post mx-2">
      <div className="img-post"></div>
      <h5>{subtitle}</h5>
      <h3>{title}</h3>
      <p>{children}</p>

      <div className="flex pt-2">
        <div className="img-profile"></div>
        <div className="desc-profile ml-2">
          <h6 className="color-blue">{author}</h6>
          <p>{dateTime}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
