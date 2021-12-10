import React from "react";
import "./style.css";

export default function App() {
  var[images,setImages]= React.useState(
    [
      "https://i.pinimg.com/originals/c5/6e/be/c56ebed6c368d900b30bded63548280e.gif"
    ,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQF9Lck-Pn89YLJmn7M-JbEb3GcQraD_gIPw&usqp=CAU"
    ,
    "https://cdn.dribbble.com/users/695124/screenshots/3754806/media/578f8de12fa8664b9df39b8fa577c94b.png?compress=1&resize=400x300"
    ,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJOUHrEhXYjLacfMk-JV175IQgt_Ej4X-_hg&usqp=CAU"
    ,
    "https://media.istockphoto.com/vectors/red-car-with-trunk-on-roof-on-white-background-vector-id1137278712?k=20&m=1137278712&s=612x612&w=0&h=cuLyez4Fuiy8xVwXDhtFCFPhuNq8AMHvslsB-wceDSs="
    ,
  "https://media1.thehungryjpeg.com/thumbs2/ori_3461638_41e388d9ba60434efda5674174de3a6479cd07fa_retro-travel-red-van-icon-vector-illustration-in-flat-design.jpg"
  ]);
  var [selectedImage,setSelectedImages]= React.useState('https://i.pinimg.com/originals/c5/6e/be/c56ebed6c368d900b30bded63548280e.gif')

  const buttonHandler = (index) => {
    setSelectedImages(images[index]);
  }
  return (
    <div className='betterview'> 
       <img src={selectedImage}/>
       <p>How many tickets?</p>
          <br/>
             {
               images.map((element,index)=>{
                 return(
                   <>
                   <button onClick = {()=>{buttonHandler(index);}}className={element===selectedImage?'true':'flase'}>
                     {index+1}
                     </button>
                   </>
                 )
               })
             }
               <input type="button" value="CONFIRM SEATS"/>
    </div>
  );
}
