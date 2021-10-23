import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://avatars.githubusercontent.com/u/64201275?v=4"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Hakkimizda</h1>
        <p className="a-sub">
         Aktif olarak web, mobil, oyun gelistirme alanlarinda calisiyoruz.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Ea quis nemo doloremque eius natus
          , dolores eum enim minus quo quasi ut, placeat voluptatibus 
          blanditiis atque. Quod, laboriosam magni eos ipsa reiciendis 
          dolor excepturi officiis laborum error assumenda explicabo! Illo, 
          impedit at possimus nisi libero ut ad quibusdam eum accusamus minus.
        </p>
        
        </div>
      </div>
  );
};

export default About;
