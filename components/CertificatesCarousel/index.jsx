import Image from "next/image"
import Script from "next/script"

const CertificatesCarousel = () => {
  return (
    <>
    <ul className="certificates-carousel owl-carousel">
      <li><Image src="/cases/linx/Linx_Logo_.png" alt="Linx" width={118} height={70} /></li>
      <li><Image src="/cases/linx/Logo_google.png" alt="Google Partner" width={105} height={75} /></li>
      <li><Image src="/cases/linx/Selo_platinum_rd-station-partners_2022.png" alt="RD Platinum" width={129} height={61} /></li>
      <li><Image src="/cases/linx/eouro.png" alt="E-commerce Ouro" width={81} height={81} /></li>
      <li><Image src="/cases/linx/hub.png" alt="HubSport Academy" width={119} height={67} /></li>
    </ul>

    <Script id="show-certificates-carousel" strategy="lazyOnload">
      {`
        $(document).ready(function(){
          $(".owl-carousel.certificates-carousel").owlCarousel({
            items: 5,
            nav: false,
            margin: 10,
            dots: false,
            responsive: {
              0: {
                items: 2,
                autoplay: true,
                loop: true
              },
              576: {
                items: 2,
                autoplay: true,
                loop: true
              },
              992: {
                items: 5,
                autoplay: false
              }
            }
          });
        });
      `}
    </Script>
    </>
  )
}

export { CertificatesCarousel }