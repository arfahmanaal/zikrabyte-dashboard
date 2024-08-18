import ServiceCard from "@/app/ui/services/ServiceCard";
import Tools from "@/app/ui/services/tools/Tools";
import MoreServices from "@/app/ui/services/moreservices/MoreServices";
const Services = ()=>{
    return(
        <div>
          <ServiceCard/>
          <MoreServices/>
          <Tools/>
        </div>
    )

}
export default Services;