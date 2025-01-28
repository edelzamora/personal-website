import React from "react";

export default function About() {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        height: "100vh",
      }}
    >
      <h1 style={{ fontSize: "50px", marginTop: "200px" }}>
        Hello, my name is{" "}
        <span
          style={{
            display: "block",
            color: "#e2ae6c",
            fontWeight: 900,
            fontSize: "60px",
          }}
        >
          Edel Zamora
        </span>
      </h1>
      <p> I am a Cloud Engineer with a strong passion for security, specializing in Cloud Security. I plan to participate on the HackerOne platform as an independent security researcher, aiming to leverage my skills to identify and report vulnerabilities.</p>
      <p> With experience at Amazon Web Services (AWS) as a Cloud Support Engineer on the security team, I have a strong foundation in cloud-native technologies. I bring expertise in cloud security, IAM, and automation. </p>
      <p> AWS Services I helped support but not limited to KMS, IAM, ACM, Cognito, Organizations, CloudTrail, Secrets Manager.</p>
    </div>
  );
}
