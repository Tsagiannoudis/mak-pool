import HeroSectionServices from "@/components/services/HeroSectionServices";
import OurBusiness from "@/components/services/OurBusiness";
import Construction from "@/components/services/Constraction";
import PlantRoom from "@/components/services/PlantRoom";
import PoolCare from "@/components/services/PoolCare";
import DesignPool from "@/components/services/DesignPool";  

const Services = () => {
    return (
    <>
      <HeroSectionServices />
      <OurBusiness />
      <Construction />
      <PlantRoom />
      <PoolCare />
      <DesignPool />
    </>
  );

};

export default Services;