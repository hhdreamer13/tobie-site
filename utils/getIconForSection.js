import ActualitesSectionIcon from "@/components/common/icons/ActualitesSectionIcon";
import AteliersSectionIcon from "@/components/common/icons/AteliersSectionIcon";
import ContactSectionIcon from "@/components/common/icons/ContactSectionIcon";
import ConteSectionIcon from "@/components/common/icons/ConteSectionIcon";
import JeuSectionIcon from "@/components/common/icons/JeuSectionIcon";
import SouvenirsSectionIcon from "@/components/common/icons/SouvenirsSectionIcon";

export const getIconForSection = (sectionSlug) => {
  switch (sectionSlug) {
    case "/sections/actualites":
      return <ActualitesSectionIcon />;
    case "/sections/ateliers":
      return <AteliersSectionIcon />;
    case "/sections/souvenirs":
      return <SouvenirsSectionIcon />;
    case "/sections/conte":
      return <ConteSectionIcon />;
    case "/sections/jeu":
      return <JeuSectionIcon />;
    case "/sections/contact":
      return <ContactSectionIcon />;
    default:
      return null;
  }
};
