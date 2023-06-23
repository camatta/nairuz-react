import { useState, useEffect } from "react"

import Image from 'next/image';

const urlAPI = "https://api-instagram-nairuz-v2-gdy2gs33ua-uc.a.run.app/recuperarListaImagens?cliente=NairuzJunho";

export default function FeedInstagram () {

  const [loading, setLoading ] = useState(false)
  const [data, setData] = useState(null)
  const fetchAllData = async () => {
    try {
      setLoading(true)

      const response = await fetch(urlAPI)
      const data = await response.json()

      if (!data) throw 'Failed Request'
      setData(data)

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAllData()
  },[])

  return (
    <div>
      <div className="instagram-feed" id="content-instagram">
        <ul className="insta d-flex justify-content-center">
          {loading && !data &&
          <p>Carregando Feed Instagram...</p>
          }

          {data && data.slice(0, 8).map((item, index) => (
              <li key={index}><a href={item.link} target="_blank" rel="noopener noreferrer"><Image src={item.urlImagem} alt="Instagram Nairuz" width={350} height={350} /></a></li>
          ))
          }

        </ul>
      </div>
    </div>
  )

}

