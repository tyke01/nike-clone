// 
import { Service } from "../constants"
import ServiceCard from "./ServiceCard"

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {Service.map((service) => (
        <ServiceCard key={service.label} {...service}/>
      ))}
    </section>
  )
}

export default Services