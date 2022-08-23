import './style.css'
import Header from "./header";
import MovieList from './movieList';
import LiveStream from './liveStream';
import Stars from './stars';
import Collection from './collection';
import Footer from './footer';


let special = [
    {
        title:"شبکه‌ی مخفی زنان",
        type:"series",
        year:1401,
        rating:"78%",
        image:"https://static.namava.ir/Content/Upload/Images/822441c6-7570-48a5-ac1c-225f02e1f9ea.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"پسران",
        type:"series",
        year:2019,
        subtitle:"زیرنویس",
        rating:"90%",
        image:"https://static.namava.ir/Content/Upload/Images/21cb93cc-7a90-467f-9ab8-b903ebb4d468.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"دختران کاغذی",
        type:"series",
        year:2022,
        subtitle:"زیرنویس",
        rating:"67%",
        image:"https://static.namava.ir/Content/Upload/Images/e27a0127-3415-4a57-9e1f-f702c7b78352.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"رویه",
        type:"series",
        year:2022,
        subtitle:"زیرنویس",
        rating:"87%",
        image:"https://static.namava.ir/Content/Upload/Images/c6daf4d4-2926-4acc-956c-7d8eaf0422b9.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"استراحتگاه",
        type:"series",
        year:2022,
        subtitle:"زیرنویس",
        rating:"85%",
        image:"https://static.namava.ir/Content/Upload/Images/f0934899-0798-468d-b30a-9fa15177be29.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"مهمونی",
        type:"series",
        year:1401,
        rating:"94%",
        image:"https://static.namava.ir/Content/Upload/Images/0f59bbac-4756-4a0b-b1bd-1203ce82a27d.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"مریخ",
        type:"series",
        year:1401,
        rating:"84%",
        image:"https://static.namava.ir/Content/Upload/Images/71360ded-609c-47bc-af91-b1ece23453ca.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
]

let liveStream = [
    {
        image:"https://static.namava.ir/Content/Upload/Images/01413285-4335-46b6-bce1-357f8dd0e0cf.jpg?anchor=middlecenter&crop=auto&scale=both&w=600&h=250",
        title:"رم - کرمونزه با گزارش میلاد ملکی",
        sport:"فوتبال",
        matchType:"سری آ ایتالیا",
        startTime:"در حال پخش",
    },
    {
        image:"https://static.namava.ir/Content/Upload/Images/af7407a8-8e73-4d5d-b8c6-2c7a3c9a77e8.jpg?anchor=middlecenter&crop=auto&scale=both&w=600&h=250",
        title:"سمپدوریا - یوونتوس با گزارش میثم مختاری",
        sport:"فوتبال",
        matchType:"سری آ ایتالیا",
        startTime:"زمان شروع: دوشنبه ۳۱ مرداد - ساعت ۲۱:۳۵",
    },
    {
        image:"https://static.namava.ir/Content/Upload/Images/42fbe79c-c320-4d4d-91c2-d9c515c72853.jpg?anchor=middlecenter&crop=auto&scale=both&w=600&h=250",
        title:"منچستریونایتد - لیورپول با گزارش سجاد کاظمی",
        sport:"فوتبال",
        matchType:" لیگ برتر انگلیس",
        startTime:"زمان شروع: دوشنبه ۳۱ مرداد - ساعت ۲۱:۵۰",
    },
]

let namavaSeries = [
    {
        title:"شبکه‌ی مخفی زنان",
        type:"series",
        year:1401,
        rating:"78%",
        image:"https://static.namava.ir/Content/Upload/Images/64d7d95b-e992-4fc2-86f3-dbeaca908eaa.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=400",
    },
    {
        title:"مترجم",
        type:"series",
        year:1400,
        rating:"90%",
        image:"https://static.namava.ir/Content/Upload/Images/9c2b1d49-be38-4cc1-b84f-23defc26bee9.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=400",
    },
    {
        title:"خاتون",
        type:"series",
        year:1400,
        rating:"97%",
        image:"https://static.namava.ir/Content/Upload/Images/57441ace-8a71-4744-bf38-671882d4d11f.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=400",
        imdb: "imdb 7.8"
    },
    {
        title:"خسوف",
        type:"series",
        year:1400,
        rating:"70%",
        image:"https://static.namava.ir/Content/Upload/Images/270dda56-3c7f-48f2-bd9e-e3d79d3c407e.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=400",
        imdb: "imdb 5.5"
    },
    {
        title:"نوبت بیبی",
        type:"series",
        year:1401,
        rating:"85%",
        image:"https://static.namava.ir/Content/Upload/Images/f5979c2f-07a0-4287-ab3c-ee3ff2ef059b.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=400",
    },
    {
        title:"مهمونی",
        type:"series",
        year:1401,
        rating:"94%",
        image:"https://static.namava.ir/Content/Upload/Images/d2a58257-5f97-452e-90c2-d87c52fed14e.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=400",
    },
    {
        title:"حرفه‌ای",
        type:"series",
        year:1401,
        rating:"84%",
        image:"https://static.namava.ir/Content/Upload/Images/3043f20e-001d-4aab-a7f0-5c484ef09950.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=400",
        imdb: "imdb 5.6"
    },
]

let namavaNew = [
    {
        title:"سرآشپز برتر",
        type:"series",
        year:1401,
        rating:"78%",
        image:"https://static.namava.ir/Content/Upload/Images/1cf43875-9a25-4286-81a1-61c73c391b2e.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"غروسک های بازیافتی",
        type:"series",
        year:2019,
        subtitle:"زیرنویس",
        rating:"90%",
        image:"https://static.namava.ir/Content/Upload/Images/dd1462e9-29c2-47ed-8ac7-74868a6112be.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"پارتی",
        type:"series",
        year:2022,
        subtitle:"زیرنویس",
        rating:"67%",
        image:"https://static.namava.ir/Content/Upload/Images/fd7b5833-da26-4727-b15b-e1a1f29c4355.JPG?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"جنگلبان",
        type:"series",
        year:2022,
        subtitle:"زیرنویس",
        rating:"87%",
        image:"https://static.namava.ir/Content/Upload/Images/0242dffa-8f0c-4461-b580-058119f8f724.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"مادر",
        type:"series",
        year:2022,
        subtitle:"زیرنویس",
        rating:"85%",
        image:"https://static.namava.ir/Content/Upload/Images/1a21b552-0991-4cbe-9dcd-68db928e4600.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"بوی کافور عطر یاس",
        type:"series",
        year:1401,
        rating:"94%",
        image:"https://static.namava.ir/Content/Upload/Images/17107cca-b82a-458e-b353-7a72fdb843f7.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"همسر چوبان",
        type:"series",
        year:1401,
        rating:"84%",
        image:"https://static.namava.ir/Content/Upload/Images/c3437cc4-5a8a-446c-818d-ae6db54be1c6.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
]

let updatedSeries = [
    {
        title:"کیمیای روح",
        image:"https://static.namava.ir/Content/Upload/Images/8c7f2377-895c-40f9-8c97-58c9a23ba9c9.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
        update:" فصل ۱ قسمت ۱۷",
        play:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4iObYXu6Fwa2C7XREnwxvyP2PiO6_k7qMPg&usqp=CAU"
    },
    {
        title:"خانم نظافتچی",
        image:"https://static.namava.ir/Content/Upload/Images/5b59d737-c8db-453e-8241-943937cd9bab.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
        update:" فصل ۱ قسمت ۱",
        play:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4iObYXu6Fwa2C7XREnwxvyP2PiO6_k7qMPg&usqp=CAU"
    },
    {
        title:"نوبت لیلی",
        image:"https://static.namava.ir/Content/Upload/Images/755e5041-f856-4d63-b1e9-87bbfcde01ca.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
        update:" فصل ۱ قسمت ۱۹",
        play:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4iObYXu6Fwa2C7XREnwxvyP2PiO6_k7qMPg&usqp=CAU"
    },
    {
        title:"پسران باکوماستو",
        image:"https://static.namava.ir/Content/Upload/Images/b4c9d2e2-0a1d-4c42-b7e3-3883a09c47eb.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
        update:" فصل ۱ قسمت ۷",
        play:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4iObYXu6Fwa2C7XREnwxvyP2PiO6_k7qMPg&usqp=CAU"
    },
    {
        title:"ستاره‌های دنباله‌دار",
        image:"https://static.namava.ir/Content/Upload/Images/ee0007ab-980d-41d1-a7bf-7e4b4082987e.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
        update:" فصل ۱ قسمت ۱۷",
        play:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4iObYXu6Fwa2C7XREnwxvyP2PiO6_k7qMPg&usqp=CAU"
    },
    {
        title:"غار نشینان",
        image:"https://static.namava.ir/Content/Upload/Images/528deb43-b4f7-4ed3-96d1-8e584b290f74.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
        update:" فصل ۳ قسمت ۵",
        play:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4iObYXu6Fwa2C7XREnwxvyP2PiO6_k7qMPg&usqp=CAU"
    },
    {
        title:"سرآشپز برتر",
        image:"https://static.namava.ir/Content/Upload/Images/1cf43875-9a25-4286-81a1-61c73c391b2e.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
        update:" فصل ۱ قسمت ۱۱",
        play:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4iObYXu6Fwa2C7XREnwxvyP2PiO6_k7qMPg&usqp=CAU"
    },
]

let iranianSeries = [
    {
        title:"شبکه‌ی مخفی زنان",
        type:"series",
        year:1401,
        rating:"78%",
        image:"https://static.namava.ir/Content/Upload/Images/822441c6-7570-48a5-ac1c-225f02e1f9ea.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"خاتون",
        type:"series",
        year:1400,
        rating:"94%",
        image:"https://static.namava.ir/Content/Upload/Images/af1c46f4-3a5a-43fc-8fcc-9447b4e7a957.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
        imdb: "imdb 7.8",
    },
    {
        title:"نویت لیلی",
        type:"series",
        year:1401,
        rating:"67%",
        image:"https://static.namava.ir/Content/Upload/Images/755e5041-f856-4d63-b1e9-87bbfcde01ca.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"جادوگر",
        type:"series",
        year:1400,
        rating:"88%",
        image:"https://static.namava.ir/Content/Upload/Images/837613cc-16da-4148-945b-fd5459fcfa97.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"13 شمالی",
        type:"series",
        year:1401,
        rating:"85%",
        image:"https://static.namava.ir/Content/Upload/Images/e6f79894-64b8-420a-817e-9629acbe3599.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"مهمونی",
        type:"series",
        year:1401,
        rating:"94%",
        image:"https://static.namava.ir/Content/Upload/Images/0f59bbac-4756-4a0b-b1bd-1203ce82a27d.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"مریخ",
        type:"series",
        year:1401,
        rating:"84%",
        image:"https://static.namava.ir/Content/Upload/Images/71360ded-609c-47bc-af91-b1ece23453ca.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
]

let namavaDub = [
    {
        title:"ببر برمیخیزد",
        type:"فیلم",
        year:1401,
        subtitle:"دوبله نماوا",
        rating:"78%",
        imdb:"imdb 4.6",
        image:"https://static.namava.ir/Content/Upload/Images/9c437606-454b-46f3-8e04-14a3988dacc8.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=400",
    },
    {
        title:"سگی به نام ایندی",
        type:"فیلم",
        year:2019,
        subtitle:"دوبله نماوا",
        rating:"90%",
        imdb:"imdb 6.4",
        image:"https://static.namava.ir/Content/Upload/Images/b58f7e6d-4b53-4267-8d42-b805c3b47f76.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=400",
    },
    {
        title:"پراوین تمبه کیست",
        type:"فیلم",
        year:2022,
        subtitle:"دوبله نماوا",
        rating:"67%",
        imdb:"imdb 8.4",
        image:"https://static.namava.ir/Content/Upload/Images/987566aa-a345-46ef-be43-942a4d20dfbd.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=400",
    },
    {
        title:"دی شکارچی خون آشام: تشنه خون",
        type:"فیلم",
        year:2022,
        subtitle:"دوبله نماوا",
        rating:"87%",
        imdb:"imdb 7.6",
        image:"https://static.namava.ir/Content/Upload/Images/fa1ef895-d6e9-42c8-aa8a-8968d8125be8.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=400",
    },
    {
        title:"یتیم: اولین قتل",
        type:"فیلم",
        year:2022,
        subtitle:"دوبله نماوا",
        rating:"85%",
        imdb:"imdb 6",
        image:"https://static.namava.ir/Content/Upload/Images/8d4ecc17-20af-4879-9cc5-63e877b5c90e.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=400",
    },
    {
        title:"سگ های اشغالدونی",
        type:"فیلم",
        year:1401,
        rating:"94%",
        imdb:"imdb 5.1",
        subtitle:"دوبله نماوا",
        image:"https://static.namava.ir/Content/Upload/Images/a1b4586e-bbd3-4cd7-92bc-ec55c5530e33.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=400",
    },
    {
        title:"ساحره: دیگری",
        type:"فیلم",
        year:1401,
        subtitle:"دوبله نماوا",
        rating:"84%",
        imdb:"imdb 6.2",
        image:"https://static.namava.ir/Content/Upload/Images/0a52a96a-38bf-4811-92b4-4954399f4c44.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=400",
    },
]

let stars = [
    {
        image:"https://static.namava.ir/Content/Upload/Images/a6ed33e8-7e11-4739-a988-9a90e9db8b9b.jpg?anchor=middlecenter&crop=auto&scale=both&w=140&h=140",
        name:"تام کروز",
    },
    {
        image:"https://static.namava.ir/Content/Upload/Images/ffda31f9-53f4-4901-ad37-3ddf5a18b794.jpg?anchor=middlecenter&crop=auto&scale=both&w=140&h=140",
        name:"نیکول کیدمن",
    },
    {
        image:"https://static.namava.ir/Content/Upload/Images/8a708b1d-889c-43e2-af32-627f9ab1a45c.jpg?anchor=middlecenter&crop=auto&scale=both&w=140&h=140",
        name:"ویل اسمیت",
    },
    {
        image:"https://static.namava.ir/Content/Upload/Images/a83857a1-ae04-46e5-9e90-a5e9e4c13c5c.jpg?anchor=middlecenter&crop=auto&scale=both&w=140&h=140",
        name:"کیت وینسلت",
    },
    {
        image:"https://static.namava.ir/Content/Upload/Images/f89781ea-55c3-46ab-a952-d47294ac7462.png?anchor=middlecenter&crop=auto&scale=both&w=140&h=140",
        name:"جانی دپ",
    },
    {
        image:"https://static.namava.ir/Content/Upload/Images/81389a78-df35-424b-8736-4cb26fea202b.jpg?anchor=middlecenter&crop=auto&scale=both&w=140&h=140",
        name:"جسیکا چستین",
    },
    {
        image:"https://static.namava.ir/Content/Upload/Images/85bb8119-6ff9-4887-a158-f71b29094065.jpg?anchor=middlecenter&crop=auto&scale=both&w=140&h=140",
        name:"برایان کرانستون",
    },
]

let iranian = [
    {
        title:"پارتی",
        type:"series",
        year:2022,
        rating:"67%",
        image:"https://static.namava.ir/Content/Upload/Images/fd7b5833-da26-4727-b15b-e1a1f29c4355.JPG?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"جنگلبان",
        type:"series",
        year:2022,
        rating:"87%",
        image:"https://static.namava.ir/Content/Upload/Images/0242dffa-8f0c-4461-b580-058119f8f724.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"نویت لیلی",
        type:"series",
        year:1401,
        rating:"67%",
        image:"https://static.namava.ir/Content/Upload/Images/755e5041-f856-4d63-b1e9-87bbfcde01ca.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"جادوگر",
        type:"series",
        year:1400,
        rating:"88%",
        image:"https://static.namava.ir/Content/Upload/Images/837613cc-16da-4148-945b-fd5459fcfa97.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"13 شمالی",
        type:"series",
        year:1401,
        rating:"85%",
        image:"https://static.namava.ir/Content/Upload/Images/e6f79894-64b8-420a-817e-9629acbe3599.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"مادر",
        type:"series",
        year:2022,
        rating:"85%",
        image:"https://static.namava.ir/Content/Upload/Images/1a21b552-0991-4cbe-9dcd-68db928e4600.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"بوی کافور عطر یاس",
        type:"series",
        year:1401,
        rating:"94%",
        image:"https://static.namava.ir/Content/Upload/Images/17107cca-b82a-458e-b353-7a72fdb843f7.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
]

let collection1 = [
    {
        image:"https://static.namava.ir/Content/Upload/Images/8737ea17-ed69-4b2a-b35d-843dcaf79432.jpg?anchor=middlecenter&crop=auto&scale=both&w=360&h=171",
        title:"مجموعه فیلم‌های دنیای سینمایی دی سی",
    },
    {
        image:"https://static.namava.ir/Content/Upload/Images/a317ef64-199d-4739-bae6-1a764eaa4278.jpg?anchor=middlecenter&crop=auto&scale=both&w=360&h=171",
        title:"مجموعه فیلم‌های اره",
    },
    {
        image:"https://static.namava.ir/Content/Upload/Images/7b54fa90-7a19-44fd-a7c7-88af764ba2d1.jpg?anchor=middlecenter&crop=auto&scale=both&w=360&h=171",
        title:"مجموعه فیلم‌های ترانسپورتر",
    },
]

let twentyTwentyTwo = [
    {
        title:"ناظر",
        type:"series",
        year:1401,
        rating:"78%",
        image:"https://static.namava.ir/Content/Upload/Images/a2342611-9673-4af3-a62b-59163ef2bb2e.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"سگی به نام ایندی",
        type:"series",
        year:1400,
        rating:"90%",
        image:"https://static.namava.ir/Content/Upload/Images/a7c3c334-fc91-4f36-8c6d-e8c493ac958c.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"ضد گلوله",
        type:"series",
        year:1400,
        rating:"97%",
        image:"https://static.namava.ir/Content/Upload/Images/78e465b8-cfeb-4527-a1c8-c0d825b98f27.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
        imdb: "imdb 7.8"
    },
    {
        title:"خانم نطافتچی",
        type:"series",
        year:1400,
        rating:"70%",
        image:"https://static.namava.ir/Content/Upload/Images/5b59d737-c8db-453e-8241-943937cd9bab.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
        imdb: "imdb 5.5"
    },
    {
        title:"خاندان اژدها",
        type:"series",
        year:1401,
        rating:"85%",
        image:"https://static.namava.ir/Content/Upload/Images/f2a59090-285d-45ed-a5eb-358f7b8c9141.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
        imdb: "imdb 7.8"
    },
    {
        title:"کیمیاگر تمام فلزی: انتقام اسکار",
        type:"series",
        year:1401,
        rating:"94%",
        image:"https://static.namava.ir/Content/Upload/Images/7c304da3-3d8a-4459-bce8-71f0ddbeb7c7.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
        imdb: "imdb 7.8"
    },
    {
        title:"پرایون تمبه کیست",
        type:"series",
        year:1401,
        rating:"84%",
        image:"https://static.namava.ir/Content/Upload/Images/640d1214-3830-4ec2-bb09-81c077205a46.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
        imdb: "imdb 5.6"
    },
]

let eduHub = [
    {
        title:"خانه‌های ونی",
        type:"series",
        year:1401,
        rating:"78%",
        image:"https://static.namava.ir/Content/Upload/Images/a4e6b357-ba9b-4955-befb-53304e04db5c.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"سفر علمی",
        type:"series",
        year:2017,
        rating:"90%",
        image:"https://static.namava.ir/Content/Upload/Images/bf92b224-b1e8-4e20-b0e7-9aaa2e28bcb6.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"از استوری بات‌ها بپرس",
        type:"series",
        year:1400,
        rating:"97%",
        image:"https://static.namava.ir/Content/Upload/Images/a9c2062e-150d-4aa1-9515-c129a2b12bb4.JPG?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
        imdb: "imdb 7.8"
    },
    {
        title:"پختن غیرممکن‌ها",
        type:"series",
        year:1400,
        rating:"70%",
        image:"https://static.namava.ir/Content/Upload/Images/7b07e8ee-30ed-48d0-958c-97c4a5c08efd.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
        imdb: "imdb 5.5"
    },
    {
        title:"آموزش علم بهتر خوابیدن",
        type:"series",
        year:1401,
        rating:"85%",
        image:"https://static.namava.ir/Content/Upload/Images/c69997ed-194b-4aff-a5d1-ae283a8df053.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
        imdb: "imdb 7.8"
    },
    {
        title:"آموزش غکاسی با حیمز",
        type:"series",
        year:1401,
        rating:"94%",
        image:"https://static.namava.ir/Content/Upload/Images/de845f5c-f613-48f4-b67e-4bb04ea2d922.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
        imdb: "imdb 7.8"
    },
    {
        title:"آموزش شطرنج با گری",
        type:"series",
        year:1401,
        rating:"84%",
        image:"https://static.namava.ir/Content/Upload/Images/c1eb1a89-7a45-46ef-8e52-0e29df0c55dd.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
        imdb: "imdb 5.6"
    },
]

let family = [
    {
        title:"ناظر",
        type:"series",
        year:1401,
        rating:"78%",
        image:"https://static.namava.ir/Content/Upload/Images/a2342611-9673-4af3-a62b-59163ef2bb2e.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"سگی به نام ایندی",
        type:"series",
        year:1400,
        rating:"90%",
        image:"https://static.namava.ir/Content/Upload/Images/a7c3c334-fc91-4f36-8c6d-e8c493ac958c.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"غروسک های بازیافتی",
        type:"series",
        year:2019,
        subtitle:"زیرنویس",
        rating:"90%",
        image:"https://static.namava.ir/Content/Upload/Images/dd1462e9-29c2-47ed-8ac7-74868a6112be.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"خانم نطافتچی",
        type:"series",
        year:1400,
        rating:"70%",
        image:"https://static.namava.ir/Content/Upload/Images/5b59d737-c8db-453e-8241-943937cd9bab.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
        imdb: "imdb 5.5"
    },
    {
        title:"همسر چوبان",
        type:"series",
        year:1401,
        rating:"84%",
        image:"https://static.namava.ir/Content/Upload/Images/c3437cc4-5a8a-446c-818d-ae6db54be1c6.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"مادر",
        type:"series",
        year:2022,
        rating:"85%",
        image:"https://static.namava.ir/Content/Upload/Images/1a21b552-0991-4cbe-9dcd-68db928e4600.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"پرایون تمبه کیست",
        type:"series",
        year:1401,
        rating:"84%",
        image:"https://static.namava.ir/Content/Upload/Images/640d1214-3830-4ec2-bb09-81c077205a46.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
        imdb: "imdb 5.6"
    },
]

let collection2 = [
    {
        image:"https://static.namava.ir/Content/Upload/Images/1b01d67e-756a-445e-9e22-eb515c38d069.jpg?anchor=middlecenter&crop=auto&scale=both&w=360&h=171",
        title:"مجموعه فیلم‌های پلیس آهنی",
    },
    {
        image:"https://static.namava.ir/Content/Upload/Images/e7b9aa10-0801-4f3d-8884-0bedbd284110.jpg?anchor=middlecenter&crop=auto&scale=both&w=360&h=171",
        title:"مجموعه فیلم‌های شبی در موزه",
    },
    {
        image:"https://static.namava.ir/Content/Upload/Images/3e2351d1-aefb-44fd-9b62-92dfa9c80c60.jpg?anchor=middlecenter&crop=auto&scale=both&w=360&h=171",
        title:"مجموعه فیلم‌های هری کثیف",
    },
]

let trueStory = [
    {
        title:"پرایون تمبه کیست",
        type:"series",
        year:1401,
        rating:"84%",
        image:"https://static.namava.ir/Content/Upload/Images/640d1214-3830-4ec2-bb09-81c077205a46.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
        imdb: "imdb 5.6"
    },
    {
        title:"دختر داخل غکس",
        type:"series",
        year:2019,
        subtitle:"زیرنویس",
        rating:"90%",
        image:"https://static.namava.ir/Content/Upload/Images/8ba0ecfd-2fc2-497b-9ffb-0a07ab8e54df.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"پنج روز در بیمارستان مموریال",
        type:"series",
        year:2022,
        subtitle:"زیرنویس",
        rating:"67%",
        image:"https://static.namava.ir/Content/Upload/Images/26036ef9-3755-469d-a918-71c986d07508.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"رویه",
        type:"series",
        year:2022,
        subtitle:"زیرنویس",
        rating:"87%",
        image:"https://static.namava.ir/Content/Upload/Images/c6daf4d4-2926-4acc-956c-7d8eaf0422b9.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"ایپ من 2",
        type:"series",
        year:2022,
        subtitle:"زیرنویس",
        rating:"85%",
        image:"https://static.namava.ir/Content/Upload/Images/27845e88-636a-42fe-a6a1-4473d197d4e1.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"مامور زیرک",
        type:"series",
        year:1401,
        rating:"94%",
        image:"https://static.namava.ir/Content/Upload/Images/e5ea1198-646b-49c1-8959-8582850ef664.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
    {
        title:"قتل‌های واقعی اتلانتا",
        type:"series",
        year:1401,
        rating:"84%",
        image:"https://static.namava.ir/Content/Upload/Images/fce7a215-83aa-460e-b294-f90e59e2c80c.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294",
    },
]

let directors = [
    {
        image:"https://static.namava.ir/Content/Upload/Images/40bb9444-8818-4af8-b0bd-e647bf49417a.jpg?anchor=middlecenter&crop=auto&scale=both&w=140&h=140",
        name:"استیون اسپیلبرگ",
    },
    {
        image:"https://static.namava.ir/Content/Upload/Images/443dcac3-a910-45c2-8d64-97bf8ba244af.jpg?anchor=middlecenter&crop=auto&scale=both&w=140&h=140",
        name:"کنت برانا",
    },
    {
        image:"https://static.namava.ir/Content/Upload/Images/e813ea37-9ae9-4223-8495-7356fe293a78.jpg?anchor=middlecenter&crop=auto&scale=both&w=140&h=140",
        name:"پل توماس اندرسون",
    },
    {
        image:"https://static.namava.ir/Content/Upload/Images/eb3fc17a-2eff-4d24-acd2-ecf367ff1d9a.jpg?anchor=middlecenter&crop=auto&scale=both&w=140&h=140",
        name:"ریدلی اسکات",
    },
    {
        image:"https://static.namava.ir/Content/Upload/Images/ef4b020e-11c8-4b32-8430-2ee71c22580c.jpg?anchor=middlecenter&crop=auto&scale=both&w=140&h=140",
        name:"الفونسو کوارون",
    },
    {
        image:"https://static.namava.ir/Content/Upload/Images/fa96e3fa-5b37-417c-9786-b43a7e59a7ec.jpg?anchor=middlecenter&crop=auto&scale=both&w=140&h=140",
        name:"کوئنتین تارانتینو",
    },
    {
        image:"https://static.namava.ir/Content/Upload/Images/67ae2370-7286-4174-b538-480be7bb277a.jpg?anchor=middlecenter&crop=auto&scale=both&w=140&h=140",
        name:"کلینت ایستوود",
    },
]

export default function MergeAll(){
    return(
        <div>
            <div className='containerFull'>
                <Header/>
                <MovieList title="ویژه" listName={special}/>
                <LiveStream title="پجش رنده" listName={liveStream}/>
                <MovieList title="سریال های اختصاصی نماوا" listName={namavaSeries}/>
                <MovieList title="تازه‌های نماوا" listName={namavaNew}/>
                <MovieList title="سریال های به روز شده" listName={updatedSeries}/>
                <MovieList title="سریال‌های ابرانی" listName={iranianSeries}/>
                <MovieList title="دوبله نماوا" listName={namavaDub}/>
                <Stars title="ستارگان" listName={stars}/>
                <MovieList title="ایرانی" listName={iranian}/>
                <Collection listName={collection1}/>
                <MovieList title="2022" listName={twentyTwentyTwo}/>
                <MovieList title="آموزش و سرگرمی" listName={eduHub}/>
                <Collection listName={collection2}/>
                <MovieList title="خانوادگی" listName={family}/>
                <MovieList title="بر اساس داسنان واقغی" listName={trueStory}/>
                <Stars title="ستارگان" listName={directors}/>
                <MovieList title="تازه‌های نماوا" listName={namavaNew}/>
                <MovieList title="سریال‌های ابرانی" listName={iranianSeries}/>
            </div>
            <Footer/>
        </div>
    )
}