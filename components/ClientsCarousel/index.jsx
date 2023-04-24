import Image from "next/image"
import Script from "next/script"

const clientsData = [
  {
    "client": "Bialetti",
    "url": "/clientes/bialetti.png",
    "width": 128,
    "height": 60
  },
  {
    "client": "Gaggia",
    "url": "/clientes/gaggia.png",
    "width": 128,
    "height": 60
  },
  {
    "client": "Imeltron",
    "url": "/clientes/imeltron.png",
    "width": 128,
    "height": 60
  },
  {
    "client": "LV Store",
    "url": "/clientes/lvstore.png",
    "width": 128,
    "height": 60
  },
  {
    "client": "Maquiadoro",
    "url": "/clientes/maquiadoro.png",
    "width": 128,
    "height": 60
  },
  {
    "client": "Samsung",
    "url": "/clientes/samsung.png",
    "width": 128,
    "height": 60
  },
  {
    "client": "Docol",
    "url": "/clientes/docol.svg",
    "width": 128,
    "height": 60
  },
  {
    "client": "Pedigree",
    "url": "/clientes/pedigree.png",
    "width": 128,
    "height": 60
  },
  {
    "client": "Minassal",
    "url": "/clientes/minassal.png",
    "width": 128,
    "height": 60
  },
  {
    "client": "Cybelar",
    "url": "/clientes/cybelar.png",
    "width": 128,
    "height": 60
  },
  {
    "client": "GPTW",
    "url": "/clientes/gptw.svg",
    "width": 128,
    "height": 60
  },
  {
    "client": "Grupo Card",
    "url": "/clientes/grupo-card.png",
    "width": 128,
    "height": 60
  },
  {
    "client": "Azul",
    "url": "/clientes/azul.png",
    "width": 128,
    "height": 60
  },
  {
    "client": "Farmácia Sempre Viva",
    "url": "/clientes/sempreviva.png",
    "width": 128,
    "height": 60
  },
  {
    "client": "Nova Medicamentos",
    "url": "/clientes/novamed.png",
    "width": 128,
    "height": 60
  },
  {
    "client": "R.Crio",
    "url": "/clientes/rcrio.png",
    "width": 128,
    "height": 60
  },
  {
    "client": "Athletic",
    "url": "/clientes/athletic.svg",
    "width": 128,
    "height": 60
  },
  {
    "client": "Udiaço",
    "url": "/clientes/udiaco.png",
    "width": 128,
    "height": 60
  },
  {
    "client": "Maravilhas do Lar",
    "url": "/clientes/maravilhas.png",
    "width": 128,
    "height": 60
  },
  {
    "client": "Covabra Supermercados",
    "url": "/clientes/covabra.png",
    "width": 128,
    "height": 60
  }
]

const ClientsCarousel = () => {
  return (
    <>
    <div className="clients-carousel owl-carousel owl-default">
      {clientsData.map( client => (
        <div className="client" key={client.client}>
          <Image
            src={client.url}
            alt={client.client}
            title={client.client}
            width={client.width}
            height={client.height}
          />
        </div>
      ))}
    </div>

    <Script id="show-clientes-carousel" strategy="lazyOnload">
      {`
        $(document).ready(function(){
          $(".owl-carousel.clients-carousel").owlCarousel({
            items: 5,
            margin: 10,
            nav: true,
            autoplay: true,
            loop: true,
            dots: false,
            navText: ["<img src='/chevron-left.svg'>","<img src='/chevron-right.svg'>"],
            responsive: {
              0: {
                items: 2
              },
              576: {
                items: 3
              },
              992: {
                items: 5,
              }
            }
          });
        });
      `}
    </Script>
    </>
  )
}

export { ClientsCarousel }