import React, { useState } from 'react'
import './index.css'

const LANGUAGE_CONTENT = {
  mr: {
    invocation: '|| श्री गणेशाय नमः ||',
    titleSubtitle: '',
    message: [
      'आपणांस कळविण्यात अत्यंत आनंद होत आहे की आमच्या नूतन वास्तूचा ',
      'वास्तुशांती व गृहप्रवेश सोहळा आयोजित करण्यात आला आहे.',
    ],
    request: [
      'आपण सहकुटुंब उपस्थित राहून कार्यक्रमाची शोभा',
      'वाढवावी, ही नम्र विनंती.',
    ],
    dateLine: 'शनिवार २२ ऑगस्ट २०२६ रोजी सकाळ ८ वा ',
    dateLine2: 'गृहप्रवेश व स्नेहभोजन दु. १२ वा',
    dateSubline: '',
    addressTitle: 'घराचा पत्ता',
    addressLines: ['महालक्ष्मी,', '४९, सावतानगर, ठाकरे मळा', 'डॉ. नानासाहेब धर्माधिकारी मार्ग, नाशिक'],
    directionsLabel: 'Location',
    hostsTitle: 'निमंत्रक',
    matriarch: 'श्रीमती शकुंतला रघुनाथ थोरात',
    couples: [
      'सौ. मीरा व श्री. उद्धव रघुनाथ थोरात',
      'सौ. स्वाती व श्री. देविदास रघुनाथ थोरात',
      'सौ. ईश्वरी व श्री. गौरव उद्धव थोरात',
      'सौ. भाग्यश्री व श्री. जयंत उद्धव थोरात',
    ],
    children: 'चि. अनिकेत, कु. अनुश्री, चि. श्रेयस',
    closing: ['संपर्क: 9833002056, 9820397903', '9833706046'],
    footerNote: 'आपली उपस्थिती हाच आमचा आहेर',
  },
  en: {
    invocation: '|| Shri Ganeshaya Namah ||',
    titleSubtitle: '',
    message: [
      'We are delighted to invite you to the auspicious ceremony of our new home’s',
      'Vastu Shanti and Griha Pravesh.',
    ],
    request: [
      'Your presence with your family will add grace to the occasion.',
      'We humbly request your blessings and company.',
    ],
    dateLine: 'Saturday, 22 August 2026 at 8:00 AM',
    dateLine2: 'Griha Pravesh & Lunch at 12:00 PM',
    dateSubline: '',
    addressTitle: 'Address',
    addressLines: ['Mahalaxmi,', '49, Savatanagar, Thakare Mala', 'Dr Nanasaheb Dharmadhikari Marg, Nashik'],
    directionsLabel: 'Directions',
    hostsTitle: 'Invited By',
    matriarch: 'Smt. Shakuntala Raghunath Thorat',
    couples: [
      'Sau. Meera & Shri Uddhav Raghunath Thorat',
      'Sau. Swati & Shri Devidas Raghunath Thorat',
      'Sau. Ishwari & Shri Gaurav Uddhav Thorat',
      'Sau. Bhagyashree & Shri Jayant Uddhav Thorat',
    ],
    children: 'Aniket, Anushree, Shreyas',
    closing: ['Contact: 9833002056, 9820397903', '9833706046'],
    footerNote: 'Your presence is our greatest blessing',
  },
}

/* ------------------------------------------------------------------ */
/*  IMAGE ASSETS                                                       */
/* ------------------------------------------------------------------ */
/*  garland.png and banana-leaf.png are optional decorative corner     */
/*  images — drop them into public/assets/ any time (see the README    */
/*  there). title-vastu-shanti.png and house-photo.png are already     */
/*  included in this project.                                          */
const ASSET_PATHS = {
  garland: '/assets/garland.png',
  bananaLeaf: '/assets/banana-leaf.png',
  titleImage: '/assets/title-vastu-shanti.png',
  housePhoto: '/assets/house-photo.png',
}

/**
 * Renders an image asset. If the file hasn't been added yet, shows a
 * dashed placeholder with the expected filename so you know exactly
 * what to drop into public/assets/.
 */
function ImageAsset({ src, alt, className, label }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={`${className} img-placeholder`}>
        <span>{label}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  )
}

/** A hanging marigold + leaf garland image, used at top corners */
function Garland({ flip = false }) {
  return (
    <ImageAsset
      src={ASSET_PATHS.garland}
      alt=""
      className={`garland ${flip ? 'garland--right' : 'garland--left'}`}
      label="garland.png"
    />
  )
}

/** Banana-leaf cluster image for bottom corners */
function BananaLeaves({ flip = false }) {
  return (
    <ImageAsset
      src={ASSET_PATHS.bananaLeaf}
      alt=""
      className={`banana ${flip ? 'banana--right' : 'banana--left'}`}
      label="banana-leaf.png"
    />
  )
}

/* ------------------------------------------------------------------ */
/*  APP                                                                 */
/* ------------------------------------------------------------------ */
export default function App() {
  const [language, setLanguage] = useState('mr')
  const details = LANGUAGE_CONTENT[language]

  return (
    <div className="page">
      <main className="card">
        <Garland />
        <Garland flip />

        <div className="language-toggle" aria-label="Language selector">
          <button
            type="button"
            className={language === 'mr' ? 'is-active' : ''}
            onClick={() => setLanguage('mr')}
          >
            मराठी
          </button>
          <button
            type="button"
            className={language === 'en' ? 'is-active' : ''}
            onClick={() => setLanguage('en')}
          >
            English
          </button>
        </div>

        {/* -- Invocation + title ------------------------------------ */}
        <header className="card__header">
          <div className="invocation">{details.invocation}</div>
          <img
            className="title-image"
            src={ASSET_PATHS.titleImage}
            alt="वास्तुशांती"
          />
          <p className="title-subtitle">{details.titleSubtitle}</p>
        </header>

        {/* -- Invitation message -------------------------------------- */}
        <section className="message">
          {details.message.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
          <p className="message__request">
            {details.request.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </section>

        {/* -- Date & time ----------------------------------------------- */}
        <div className="date-bar">
          <p className="date-bar__date">{details.dateLine}</p>
          <p className="date-bar__date">{details.dateLine2}</p>
          <p className="date-bar__sub">{details.dateSubline}</p>
        </div>

        {/* -- Address + directions --------------------------------------- */}
        <section className="address">
          <h2>{details.addressTitle}</h2>
          {details.addressLines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
          <a
            className="directions-btn"
            href="https://maps.app.goo.gl/D68g6JcgNcZh3D2D6?g_st=ic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="directions-btn__pin">📍</span>
            {details.directionsLabel}
          </a>
        </section>

        {/* -- House photo --------------------------------------------- */}
        <figure className="house-photo-wrap">
          <ImageAsset
            src={ASSET_PATHS.housePhoto}
            alt={details.footerNote}
            className="house-photo"
            label="house-photo.png"
          />
        </figure>

        {/* -- Hosts / inviting family ------------------------------------ */}
        <section className="hosts">
          <h2>{details.hostsTitle}</h2>
          <p className="hosts__matriarch">{details.matriarch}</p>
          {details.couples.map((line, i) => (
            <p className="hosts__couple" key={i}>
              {line}
            </p>
          ))}
          <p className="hosts__children">{details.children}</p>
        </section>

        {/* -- Closing ---------------------------------------------------- */}
        <section className="closing">
          {details.closing.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </section>

        <BananaLeaves />
        <BananaLeaves flip />

        <footer className="footer">
          <span className="footer__note">{details.footerNote}</span>
        </footer>
      </main>
    </div>
  )
}
