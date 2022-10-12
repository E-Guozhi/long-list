import './card.scss';
export default function Card(props){
  let {item}=props;
  return (
    <div className="card">
        <div className="title">{item.name}</div>
        <img src={item.image} alt="图片" loading='lazy' className="image" />
        <div className="text">{item.text}</div>
    </div>
  )
}