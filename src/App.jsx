import React, { useState } from 'react'
import './index.css'

/* ------------------------------------------------------------------ */
/*  EDIT YOUR INVITATION DETAILS HERE                                  */
/* ------------------------------------------------------------------ */
const DETAILS = {
  invocation: '|| श्री गणेशाय नमः ||',
  titleSubtitle: '',

  message: [
    'आपणांस कळविण्यात अत्यंत आनंद होत आहे की आमच्या नव्या घराच्या',
    'शुभप्रसंगी वास्तुशांती व गृहप्रवेश सोहळा आयोजित करण्यात आला आहे.',
  ],
  request: [
    'आपण सहकुटुंब उपस्थित राहून कार्यक्रमाची शोभा',
    'वाढवावी, ही नम्र विनंती.',
  ],

  dateLine: 'शनिवार २२ ऑगस्ट २०२६ रोजी सकाळ ८ वा ',
  dateLine2: 'स्नेहभोजन दु. १२ वा ते आपल्या आगमनापर्यंत',
  dateSubline: 'करण्याचे योजीले आहे तरी आपली उपस्थीती प्रार्थनीय आहे.',

  addressTitle: 'घराचा पत्ता',
  addressLines: ['महालक्ष्मी,', '४९, सावतानगर, ठाकरे मळा', 'मेरी लिंक रोडजवळ, नाशिक'],
  mapsLink: 'https://maps.app.goo.gl/D68g6JcgNcZh3D2D6?g_st=ic',
  directionsLabel: 'दिशा पहा',

  hostsTitle: 'निमंत्रक',
  matriarch: 'श्रीमती शकुंतला रघुनाथ थोरात',
  couples: [
    'सौ. मीरा व श्री. उद्धव रघुनाथ थोरात',
    'सौ. स्वाती व श्री. देविदास रघुनाथ थोरात',
    'सौ. ईश्वरी व श्री. गौरव उद्धव थोरात',
    'सौ. भाग्यश्री व श्री. जयंत उद्धव थोरात',
  ],
  children: 'चि. अनिकेत, कु. अनुश्री, चि. श्रेयस',

  closing: ['आपल्या उपस्थितीची अपेक्षा.', 'आपला स्नेहांकित, थोरात कुटुंब'],

  houseCaption: '',
  footerNote: 'आपली उपस्थिती हाच आहेर',
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
  return (
    <div className="page">
      <main className="card">
        <Garland />
        <Garland flip />

        {/* -- Invocation + title ------------------------------------ */}
        <header className="card__header">
          <div className="invocation">{DETAILS.invocation}</div>
          <img
            className="title-image"
            src={ASSET_PATHS.titleImage}
            alt="वास्तुशांती"
          />
          <p className="title-subtitle">{DETAILS.titleSubtitle}</p>
        </header>

        {/* -- Invitation message -------------------------------------- */}
        <section className="message">
          {DETAILS.message.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
          <p className="message__request">
            {DETAILS.request.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </section>

        {/* -- Date & time ----------------------------------------------- */}
        <div className="date-bar">
          <p className="date-bar__date">{DETAILS.dateLine}</p>
          <p className="date-bar__date">{DETAILS.dateLine2}</p>
          <p className="date-bar__sub">{DETAILS.dateSubline}</p>
        </div>

        {/* -- Address + directions --------------------------------------- */}
        <section className="address">
          <h2>{DETAILS.addressTitle}</h2>
          {DETAILS.addressLines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
          <a
            className="directions-btn"
            href={DETAILS.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="directions-btn__pin">📍</span>
            {DETAILS.directionsLabel}
          </a>
        </section>

        {/* -- House photo --------------------------------------------- */}
        <figure className="house-photo-wrap">
          <ImageAsset
            src={ASSET_PATHS.housePhoto}
            alt={DETAILS.houseCaption}
            className="house-photo"
            label="house-photo.png"
          />
          <figcaption>{DETAILS.houseCaption}</figcaption>
        </figure>

        {/* -- Hosts / inviting family ------------------------------------ */}
        <section className="hosts">
          <h2>{DETAILS.hostsTitle}</h2>
          <p className="hosts__matriarch">{DETAILS.matriarch}</p>
          <div className="hosts__divider" aria-hidden="true" />
          {DETAILS.couples.map((line, i) => (
            <p className="hosts__couple" key={i}>
              {line}
            </p>
          ))}
          <p className="hosts__children">{DETAILS.children}</p>
        </section>

        {/* -- Closing ---------------------------------------------------- */}
        <section className="closing">
          {DETAILS.closing.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </section>

        <BananaLeaves />
        <BananaLeaves flip />

        <footer className="footer">
          <span className="footer__note">{DETAILS.footerNote}</span>
        </footer>
      </main>
    </div>
  )
}
