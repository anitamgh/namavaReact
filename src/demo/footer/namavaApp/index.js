import './style.css'
export default function NamavaApp(){
    return(
        <div className="container flexbox">
            <div className='appDownload'>
                <img src="https://play-lh.googleusercontent.com/ySTHD1A_kELuG-Uqv4d7qUayXLUqirTAs7rBw9SY_ubDw7_yhkF_tYif5i2hlJOmdDA=w240-h480-rw"/>
                <h3>دانلود اپلیکیشن</h3>
            </div>
            <div className="downloadFrom">
                <ul>
                <li><a href="#">
                    <img src="https://barato.ir/wp-content/uploads/2020/11/bazaar-300x300.png"/>
                    <div className='content'>
                        <p>دریافت از</p>
                        <p>بازار</p>
                    </div>
                </a></li>
                <li><a href="#">
                    <img src="https://seeklogo.com/images/1/sibapp-logo-8A5DD412DF-seeklogo.com.png"/>
                    <div className='content'>
                        <p>دریافت از</p>
                        <p>سیب‌اپ</p>
                    </div>
                </a></li>
                <li><a href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Google_Play_2016_icon.svg/1200px-Google_Play_2016_icon.svg.png"/>
                    <div className='content'>
                        <p>دریافت از</p>
                        <p>گوگل پلی</p>
                    </div>
                </a></li>
                </ul>
                <a className="more" href="#"><p>بیشتر</p></a>
            </div>
        </div>
    )
} 