"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import  {motion} from 'framer-motion'

import {Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue} from "@/components/ui/select";
import {FaPhoneAlt,FaEnvelope,FaMapMarkerAlt} from 'react-icons/fa'


const info = [
  {
    icon:<FaPhoneAlt/>,
    title:'Phone',
    description:"(+234) 90 783 297 26"
  },
  {
    icon:<FaEnvelope/>,
    title:'Email',
    description:"obayomisamuel2403@gmail.com"
  },
  {
    icon:<FaMapMarkerAlt/>,
    title:'Address',
    description:"No 3b Michael Shosanya Street,idimu"
  }
]

const Contact = () => {
  return <motion.section
  initial={{ opacity: 0 }}
  animate={{ opacity: 1,transition:{delay:2.4,duration:0.4,ease:"easeIn"} }}
  className="py-6">
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-[30px]">
        <div className="xl:w-[54%] order-2 xl:order-none  ">
          <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-4xl text-accent">Let's Work Together</h3>
            <p className="text-white/60">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos vitae, culpa corporis nostrum dicta temporibus ab porro. Provident assumenda natus laboriosam molestias reiciendis?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <Input type="firstname" placeholder="first name"/>
              <Input type="lastname" placeholder="Last Name"/>
              <Input type="email" placeholder="Email Address"/>
              <Input type="phone" placeholder="Phone Number"/>
            </div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="select a service">

                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value="est">Frontend Development</SelectItem>
                  <SelectItem value="cst" >Backend Development</SelectItem>

                </SelectGroup>
              </SelectContent>
            </Select>
            <Textarea className="h-[200px]" placeholder="Type Your Message Here"
            >

            </Textarea>
            <Button size="md" className="max-w-40">
              Send Message
            </Button>
            </form>
        </div>
        <div className="flex  flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0  ">
<ul className="flex flex-col gap-10">
  {info.map((item,index)=>{
    return <li key={index} className="flex items-center gap-6">
      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
        <div className="text-[28px]">{item.icon}</div>
      </div>
      <div className="text-white/60 flex-1">
        <p className=" text-white/60">{item.title}</p>
        <h3 className="xl:text-sm text-[13px] sm:text-sm md:text-sm">{item.description}</h3>
      </div>
    </li>
  })}
</ul>
        </div>
      </div>
    </div>

  </motion.section>;
};

export default Contact;
