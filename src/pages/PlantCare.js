import React from "react";
import HeroPlantCare from "../components/HeroPlantCare";
import Banner from "../components/Banner";
import { Typography } from "@mui/material";
import { colors, fonts } from "../utils";
import PlantCareList from "../components/PlantCareList";
import BannerFreeOngkir from "../components/BannerFreeOngkir";
import Footer from "../components/Footer";
import LocaleContext from "../contexts/LocaleContext";

const PlantCare = () => {
  const { locale } = React.useContext(LocaleContext);

  return (
    <>
      <HeroPlantCare />
      <Banner>
        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontFamily: fonts.comfortaa,
            lineHeight: 2,
            color: colors.white
          }}
          gutterBottom
        >
          {locale === 'id' ? 'Perawatan Tanaman' : 'Plant Care'}
        </Typography>
        <Typography
          variant="h4"
          component="h3"
          sx={{ fontFamily: fonts.inter, lineHeight: 2, color: colors.white}}
          gutterBottom
        >
          {locale === 'id' ? 'Kiat, trik, dan panduan untuk membuat perawatan tanaman benar-benar mudah.' : 'Tips, tricks, and plant guides to make plant care downright easy.'}
        </Typography>
      </Banner>
      <PlantCareList/>
      <BannerFreeOngkir/>
      <Footer/>
    </>
  );
};

export default PlantCare;
