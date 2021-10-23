import "./productList.css";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Proje Ornekleri</h1>
        <p className="pl-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam natus perspiciatis officiis ut non! Cupiditate.
        </p>
      </div>
      <div className="pl-list">
       <img src="https://raw.githubusercontent.com/TarikCakmakci/3d-hyperCasual-Game/main/Assets/RMFile/ss1.png" alt="" className="img-pl-list" />
       <img src="https://raw.githubusercontent.com/TarikCakmakci/3d-hyperCasual-Game/main/Assets/RMFile/ss2.png" alt="" className="img-pl-list" />
       <img src="https://raw.githubusercontent.com/onursonmeznet/MyFirstAndroidApp/main/img.png" alt="" className="img-pl-list"/>
      
  
      </div>
    </div>
  );
};

export default ProductList;