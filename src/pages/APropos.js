import "../styles/home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CollapsibleButton from "../components/CollapsibleButton";
import paysage02 from "../assets/paysage02.png";
import "../styles/apropos.css";

function APropos() {
  return (
    <div>
      <Header showBanner={true} bannerImageSrc={paysage02} bannerClassName="large-banner" />
      <div className="apropos">
        <CollapsibleButton
          collapsedText="Fiabilité"
          expandedContent="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />

        <CollapsibleButton
          collapsedText="Respect"
          expandedContent="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <CollapsibleButton
          collapsedText="Service"
          expandedContent="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <CollapsibleButton
          collapsedText="Sécurité"
          expandedContent="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
      <Footer />
    </div>
  );
}

export default APropos;
