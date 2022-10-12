import { rowCount } from '../data';
import Card from './card';

let rowArr = [...new Array(rowCount)].map((v,i)=>{
  return {
    id:i,
    name:`card${i}`,
    text:`这是第${i}张卡片,我是卡片的内容`,
    image:`https://cdn.pixabay.com/photo/2010/11/24/autumn-1_1280.jpg`
  }
});
export default function List() {
  return (
    <div>
      {rowArr.map((v, i) => {
        return <Card idx={i} key={v.id} item={v} />
      })}
    </div>
  )
}