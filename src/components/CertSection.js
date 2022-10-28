import React from "react";

export default function CertSection() {
  const imgSize = {
    width: "10%",
    height: "auto",
  };
  return (
    <section className="section-background" id="certifications">
      <h2 className="section-header">Certifications</h2>

      <div className="certifications" style={{ paddingTop: "50px" }}>
        <div className="aws">
          <img
            style={imgSize}
            src="https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified_Solutions-Architect_Associate_512x512.d82aee07920970350c427c8d0542bc239180a486.png"
            alt="aws solutions architect associate logo"
          />
          <img
            style={imgSize}
            src="https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified_Cloud-Practitioner_512x512.bc006f14f986fa4f3ca238b0b62be458ce1fb5ce.png"
            alt="aws cloud practitioner logo"
          />
          <img
            style={imgSize}
            src="https://d1.awsstatic.com/training-and-certification/Certification%20Badges/AWS-Certified_Sysops-Administrator_Associate_512x512.7ee4f9e7f4046349a3bfe27dcb1a54a340e04623.png"
            alt="aws sysops logo"
          />
        </div>

        <div className="comptia">
          <img
            style={{ width: "15%", height: "auto" }}
            src="https://comptiawebsite.blob.core.windows.net/webcontent/images/default-source/siteicons/logonetworkplus.svg?sfvrsn=1ca21668_2"
            alt="comptia network plus logo"
          />
          <img
            style={{ width: "15%", height: "auto" }}
            src="https://comptiawebsite.blob.core.windows.net/webcontent/images/default-source/siteicons/logosecurityplus.svg?sfvrsn=1ca21668_2"
            alt="comptia security plus logo"
          />
        </div>
      </div>
    </section>
  );
}
