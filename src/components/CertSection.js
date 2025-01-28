import React from "react";

export default function CertSection() {
  const imgSize = {
    width: "12%",
    height: "auto",
  };
  return (
    <section className="section-background" id="certifications">
      <h2 className="section-header">Certifications</h2>

      <div className="certifications" style={{ paddingTop: "50px" }}>

        <div className="azure">
          <img
            style={{ width: "10%", height: "auto"}}
            src="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg"
            alt="azure fundamentals logo"
          />
          <img
            style={{ width: "9%", height: "auto"}}
            src="https://badges.peoplecert.org/Badges/Template/en/180/63804148-665a-4881-aac6-eaec58799a85"
            alt="itil logo"
          />
        </div>

        <div className="sans-giac">
          <img
            style={{ width: "10%", height: "auto" }}
            src="https://images.contentstack.io/v3/assets/blt36c2e63521272fdc/blt004bab7d36fb246a/63c71c12e97936109ef2bcab/GCLD.png"
            alt="comptia a plus logo"
          />
          <img
            style={{ width: "10%", height: "auto" }}
            src="https://images.contentstack.io/v3/assets/blt36c2e63521272fdc/bltf556f2bfd19bbb7f/63c71c1708b84c3d9e4c98db/GPCS.png"
            alt="comptia network plus logo"
          />
          <img
            style={{ width: "10%", height: "auto" }}
            src="https://images.contentstack.io/v3/assets/blt36c2e63521272fdc/bltd563d9bbeb847722/63c71c13b871667594492d83/GCSA.png"
            alt="comptia security plus logo"
          />
        </div>

        <div className="comptia">
          <img
            style={{ width: "12%", height: "auto" }}
            src="https://comptiawebsite.blob.core.windows.net/webcontent/images/default-source/siteicons/logoaplus.svg?sfvrsn=1ca21668_2"
            alt="comptia a plus logo"
          />
          <img
            style={{ width: "12%", height: "auto" }}
            src="https://comptiawebsite.blob.core.windows.net/webcontent/images/default-source/siteicons/logonetworkplus.svg?sfvrsn=1ca21668_2"
            alt="comptia network plus logo"
          />
          <img
            style={{ width: "12%", height: "auto" }}
            src="https://comptiawebsite.blob.core.windows.net/webcontent/images/default-source/siteicons/logosecurityplus.svg?sfvrsn=1ca21668_2"
            alt="comptia security plus logo"
          />
          <img
            style={{ width: "12%", height: "auto" }}
            src="https://comptiawebsite.blob.core.windows.net/webcontent/images/default-source/siteicons/logocloudplus.svg?sfvrsn=1ca21668_2"
            alt="comptia cloud plus logo"
          />
        </div>

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
          <img
            style={imgSize}
            src="https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Security-Specialty_badge.75ad1e505c0241bdb321f4c4d9abc51c0109c54f.png"
            alt="aws security specialty logo"
          />
        </div>

      </div>
    </section>
  );
}
