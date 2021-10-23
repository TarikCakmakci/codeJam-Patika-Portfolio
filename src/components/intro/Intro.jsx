import "./intro.css"
import Me from "../../img/Me.png"
const Intro = () => {
    return (
        <div className="i">
            <div className="i-sol">
                <div className="i-sol-wrapper">
                    <h2 className="i-giris">Merhaba, benim adim</h2>
                    <h1 className="i-isim">Talimascit</h1>
                    <div className="i-baslik">
                        <div className="i-baslik-wrapper">
                            <div className="i-baslik-item">Bilgisayar Mühendisligi</div>
                            <div className="i-baslik-item">Web Programlama</div>
                            <div className="i-baslik-item">Oyun Programlama</div>
                            <div className="i-baslik-item">Mobil Programlama</div>
                            <div className="i-baslik-item">Siber Güvenlik</div>
                        </div>
                    </div>
                    <p className="i-aciklama">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi officia atque soluta incidunt ipsum maxime.
                    </p>
                </div>
            </div>

            <div className="i-sag">
                <div className="i-bg">
                </div>
                 <img src={Me} alt="" className="i-foto" />
               
            </div>
        </div>
    )
}

export default Intro
