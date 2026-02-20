import React from "react"

export default function MapSection() {
  return (
    <section className="w-full">
      {/* Interactive Map Container */}
      <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px]">
        <iframe
          src="https://www.google.com/maps?q=AVA%20International%20Pvt.%20Ltd.%2C%205th%20Floor%2C%20Eco%20Towers%2C%20Plot%2014%2C%20Sector-125%2C%20Noida%2C%20201313&output=embed&z=17"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="AVA International Pvt. Ltd. Location"
          className="rounded-none"
        />
      </div>
    </section>
  )
}
