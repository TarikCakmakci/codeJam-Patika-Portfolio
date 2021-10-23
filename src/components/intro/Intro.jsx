import "./intro.css"
const Intro = () => {
    return (
        <div className="i">
            <div className="i-sol">
                <div className="i-sol-wrapper">
                    <h2 className="i-giris">Merhaba, biz</h2>
                    <h1 className="i-isim">Talimascit takimi</h1>
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
                        Bilgisayar muhendisligi 4.sinif ogrencileriyiz. CodeJam'e katilmaktan mutluluk duyuyoruz.
                    </p>
                </div>
            </div>

            <div className="i-sag">
                <div className="i-bg">
                </div>
                 <img src="https://cdn.discordapp.com/attachments/775808113889509396/901551538055548978/WhatsApp_Image_2020-12-07_at_21.46.23.jpeg" alt="" className="i-foto" />
               
            </div>
        </div>
    )
}

export default Intro
