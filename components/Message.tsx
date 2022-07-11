interface Props {
  img: string;
  title: string;
  message: string;
}

export const Message = ({ title, img, message }: Props) => {
  return (
    <div className="msg-card">
      <div className="img">
        <img className="object-cover" src={img} />
      </div>
      <div>
        <h6 className="mb-1">{title}</h6>
        <small>{message}</small>
      </div>
    </div>
  );
};
