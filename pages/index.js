import Layout from "../components/Layout";
import css from "../styles/Home.module.scss";

export default function Home() {
  const TAGS = [
    "anal",
    "bbc",
    "bbw",
    "bdsm",
    "bear",
    "bigCock",
    "bigTits",
    "caucasian",
    "creampie",
    "cuckold",
    "daddy",
    "dominant",
    "facial",
    "feet",
    "fit",
    "french",
    "gay",
    "german",
    "hairyPussy",
    "italian",
    "milf",
    "lesbian",
    "mature",
    "muscle",
    "portuguese",
    "redhead",
    "roleplay",
    "sexToy",
    "shavedPussy",
    "spanish",
    "tattoos",
    "teen",
    "twink",
  ];

  const genders = ["Girl", "Men", "Trans", "couples"];

  const models = [
    {
      name: "raph",
      img: "images/AudreyHempburnePornstars.png",
    },
    {
      name: "noémie",
      img: "images/EmmaBlancoPornstars.png",
    },
    {
      name: "gab",
      img: "images/MeganMarx_Pornstars.png",
    },
    {
      name: "gob",
      img: "images/TristanSummers_Pornstars.png",
    },
  ];

  const SectionHeader = ({ title, slug }) => {
    return (
      <div className={css.section_header}>
        <h2>{title}</h2>
        <button>see all</button>
      </div>
    );
  };

  return (
    <Layout currentPage="home">
      <div className={css.container}>
        <div className={css.feed}>
          <div>
            <video
              className="player"
              controls
              controlsList="nodownload"
              disablePictureInPicture
              preload="true"
              muted
            >
              <source src={"/videos/fast_photo.mp4"} />
            </video>
          </div>
          <div className={css.survey}>
            <div>
              <h2>FIND YOUR PERFECT JERKOFF PARTNER</h2>
              <h1>WHAT ARE YOU LOOKING FOR?</h1>
            </div>

            <div className={css.survey_wrapper}>
              {genders.map((gender) => {
                return (
                  <button className={css.survey_cta} key={gender}>
                    {gender}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className={css.models}>
          <SectionHeader title="POPULAR CAM MODELS" />

          <div className={css.models_row}>
            {models.map((model) => {
              return (
                <div
                  key={model.name}
                  className={css.model}
                  style={{ backgroundImage: `url(${model.img})` }}
                />
              );
            })}
          </div>
        </div>

        <div>
          <SectionHeader title="POPULAR CATEGORIES" />
          <div className={css.tags}>
            {TAGS.map((tag) => {
              return (
                <span key={tag} className={css.tag}>
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
        <div className={css.seo}>
          <h2>JERKMATE – LIVE SEX CAM GIRLS AND ADULT WEBCAM SEX CHAT ROOMS</h2>
          <h3>The Hottest Live Masturbation Cam Site On The Web! - JerkMate</h3>
          <p>
            Meet Cute Live Cam Girls and masturbate on camera. Our extremely
            horny cam girls and boys are waiting to share an intimate
            masturbation experience with you. Jerkmate, the first A.I driven
            live cam site where you can meet people that match your desire to
            discuss on cam to cam live sex!
          </p>
        </div>
      </div>
    </Layout>
  );
}
