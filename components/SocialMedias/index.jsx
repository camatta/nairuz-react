import Image from "next/image"

const SocialMedias = () => {
  return (
    <div className="social-networks">
      <ul>
        <li>
          <a href="https://www.facebook.com/NairuzConsultoriaDigital" target="_blank" rel="noopener noreferrer">
            <Image src="/icon-face-tema.png" alt="Facebook" width={32} height={32} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/nairuzconsultoria" target="_blank" rel="noopener noreferrer">
            <Image src="/icon-instagram-tema.png" alt="Instagram" width={32} height={32}  />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCu70MAqws64Vk2dYQlCFVYg" target="_blank" rel="noopener noreferrer">
            <Image src="/icon-youtube-tema.png" alt="YouTube" width={32} height={32}  />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/nairuz" target="_blank" rel="noopener noreferrer">
            <Image src="/icon-linkedin-tema.png" alt="LinkedIn" width={32} height={32}  />
          </a>
        </li>
      </ul>
    </div>
  )
}

export { SocialMedias }