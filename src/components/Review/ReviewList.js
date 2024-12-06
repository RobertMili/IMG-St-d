import React from "react";
import Review from "./Review";
import "./ReviewList.css";

const reviews = [
  { 
    author: "Margarita C", 
    date: "Augusti 2024", 
    text: "Jag är otroligt nöjd med tjänsten från Img Städ&fastighetsskötsel. De var professionella, pålitliga och utförde städningen till perfektion. Vårt hem har aldrig varit så rent! Deras team var både trevligt och effektivt, och de tog sig tid att säkerställa att varje hörn var skinande rent. Dessutom höll de sig till den överenskomna tidsramen och levererade verkligen över förväntan. Jag kan varmt rekommendera Img städ&fastighetsskötsel till alla som söker en städfirma som levererar hög kvalitet och utmärkt service.", 
    rating: 5 
  },
  { 
    author: "Mariana Ingrid H", 
    date: "April 2024", 
    text: "Jag har höga förväntningar när det gäller städning av huset och Marina har alltid uppfyllt eller överträffat förväntningarna! Hon är pålitlig och trevlig. Kan varmt rekommendera Marina!", 
    rating: 5 
  },
  { 
    author: "Fanny Anneli Ellinor J", 
    date: "April 2024", 
    text: "Marina har städat hos oss en gång i veckan, och vi är alltid lika nöjda. Hon är noggrann, flitig, otroligt ödmjuk och lyhörd. Inget är någonsin ett problem och hon lyssnar in hur man vill ha det och anpassar sig efter det. Hon gör alltid det lilla extra. Dessutom är hon flexibel! En fantastisk kvinna som dessutom blivit en god vän. Kan varmt rekommendera henne! Ni kommer inte ångra er. 😊", 
    rating: 5 
  },
  { 
    author: "Sofia S", 
    date: "Februari 2024", 
    text: "IMG städ är Marina Grgics enskilda firma och hon är en väldigt duktig, plikttrogen och trevlig hjälp i hemmet! Hon har städat åt oss i flera år och vi trivs bra med varandra. Marina är flexibel och lyhörd och mycket hjälpsam. Rekommenderar varmt hennes tjänster.", 
    rating: 5 
  },
];

const ReviewList = () => {
  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <Review key={index} {...review} />
      ))}
    </div>
  );
};

export default ReviewList;
