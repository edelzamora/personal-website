export default {
  success: true,
  projects: [
    {
      item: "Personal Website",
      description: [
        "This website is the project and live demo!",
        "Frontend: ",
        "It is written from scratch with no templates, only with HTML, CSS and JS with the React framework.",
        "The site is hosted on AWS Amplify and using AWS Route53 for DNS routing.",
        "Backend: ",
        "It is a severless architecture where there is no servers to maintain. The lambda function uses python for reading, storing and updating to the DB.",
        "It uses API Gateway, Lambda Function and DynamoDB.",
        "My overall goal was to deploy a website to the internet. There are many ways to deploy a website but I choose the AWS serverless route since I was studying for certifcations.",
      ],
      tech: [
        "VisualCode",
        "React",
        "JavaScript",
        "Html",
        "Css",
        "Git",
        "Github",
        "Python",
      ],
      aws: ["Amplify", "Route53", "DynamoDB", "API Gateway", "Lambda"],
      url: "https://www.vectorlogo.zone/logos/python/python-ar21.svg",
    },
    {
      item: "Cloud Resume Challenge",
      description: [
        "The resume tab on this website is the project and live demo!",
        "Frontend: ",
        "Written in HTML, CSS and JS.",
        "The resume is hosted on a S3 bucket, it is set to public but is configured with strict IAM (Identity and Access Management), bucket and object policies.",
        "Backend: ",
        "It is a severless architecture where there is no servers to maintain. The lambda function uses python for reading, storing and updating to the DB.",
        "It uses API Gateway, Lambda Function and DynamoDB.",
        "My overall goal was learn about AWS policies while studying for AWS certifications.",
      ],
      tech: [
        "Html",
        "Css",
        "JavaScript",
        "Python",
        "VisualCode",
        "Git",
        "Github",
      ],
      aws: ["S3", "Amplify", "Route53", "DynamoDB", "API Gateway", "Lambda"],
      url: "https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg",
    },
    {
      item: "FlyBy",
      description: [
        `This project uses an ADS-B Receiver to capture real-time data from aircraft flying nearby. I wanted to display what the receiver picked up near me. The goal is to visualize the detected aircraft using a custom dashboard and add an image.
        Even with a stock antenna, the receiver picks up a surprising number of aircraft. This project processes and displays the data the aircrafts.
        Work In Progress (WIP) but a demo can be found here -> <a href="flyby.edelzamora.tech">flyby.edelzamora.tech</a>
        Code can be found on my github -> <a href="github.com/edelzamora/flyby">github</a>

        `,
      ],
      tech: ["Python", "Golang", "Docker", "Github", "UbuntuLinux"],
      aws: [],
      url: "https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg",
    },
    {
      item: "EZMonitor",
      description: [
        "The project is under construction. It is a work in progress with code on GitHub and no live demo.",
      ],
      tech: ["Python"],
      aws: [],
      url: "https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg",
    },
    {
      item: "CloudLab Guide",
      description: [
        "The project is under construction. It is a work in progress with code on <a href='https://github.com/edelzamora/CloudLab'>Github</a> and no live demo.",
      ],
      tech: ["Terraform", "AWS"],
      aws: [],
      url: "https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg",
    },
    {
      item: "Homelab",
      description: [
        "The project is under construction. It is a work in progress with code on GitHub and no live demo.",
      ],
      tech: ["Ansible", "Linux", "DebianLinux", "Terraform", "FedoraLinux", "Docker", "Kubernetes"],
      aws: [],
      url: "https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg",
    },
  ],
};
