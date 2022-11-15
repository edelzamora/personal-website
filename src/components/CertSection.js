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
            src="https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png"
            alt="aws cloud practitioner logo"
          />
          <img
            style={imgSize}
            src="https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png"
            alt="aws solutions architect associate logo"
          />
          <img
            style={imgSize}
            src="https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-SysOps-Administrator-Associate_badge.c3586b02748654fb588633314dd66a1d6841893b.png"
            alt="aws sysops logo"
          />
          <img
            style={imgSize}
            src="https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Developer-Associate_badge.5c083fa855fe82c1cf2d0c8b883c265ec72a17c0.png"
            alt="aws developer logo"
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
