import "./intro.css"
const Intro = () => {
    return (
        <div className="i">
            <div className="i-sol">
                <div className="i-sol-wrapper">
                    <h2 className="i-giris">Merhaba benim adim</h2>
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
                    <div className="i-aciklama">
                        Bilgisayar mühendisliği  Çalışmalarımızı Github hesaplarımızda görebilirsiniz. Bizi takip edin.
                    </div>
                </div>
            </div>

            <div className="i-sag">sag</div>
        </div>
    )
}

export default Intro
