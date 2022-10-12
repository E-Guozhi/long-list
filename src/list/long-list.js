import { rowCount } from '../data';
import VirtualList from './virtualList';
let rowArr = [...new Array(rowCount)].map((v,i)=>{
  return {
    id:i,
    name:`card${i}`,
    text:`这是第${i}张卡片,我是卡片的内容`,
    image:`https://cdn.pixabay.com/photo/2010/11/24/autumn-1_1280.jpg`
  }
});
function LongList(){
  return (
    <div>
      <VirtualList list={rowArr} />
    </div>
  )
}

export default LongList;