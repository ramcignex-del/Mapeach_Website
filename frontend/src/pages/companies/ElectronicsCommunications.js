import { Cpu, Satellite, Radio, HardHat, DollarSign, Users, TrendingUp, Zap, Scale, Settings } from 'lucide-react';

// --- Page Text Content ---
export const pageText = {
  hero: {
    title: "Specialized Talent for Electronics, Telecom, and Communication Systems",
    subtitle: "Source elite contract engineers and technical staff with deep expertise in hardware design, embedded systems, and 5G infrastructure.",
    cta1: {
      label: "Find Engineers Now",
      link: "/contact"
    },
    cta2: {
      label: "View Case Studies",
    }
  },
  benefits: {
    header: "Why Electronics & Comms Firms Choose Mapeach",
    subheader: "Access high-precision talent for critical hardware development and network scaling projects."
  },
  calculator: {
    header: "Optimize Your Engineering Staffing Budget",
    subheader: "Calculate how much you'll save by bypassing traditional agencies and directly engaging specialized electronics talent through Mapeach."
  },
  process: {
    header: "Our Electronics & Comms Staffing Process",
    subheader: "Matching you with Hardware, Firmware, and Telecom experts in 4 structured steps."
  },
  comparison: {
    header: "Mapeach vs General Technical Staffing",
  },
  ctaSection: {
    title: "Ready to Acceler Scale Your Innovation?",
    subtitle: "Connect with us to find the expert engineers and technicians required for your next complex project.",
    button: "Contact an Expert"
  }
};

// --- Benefits Data ---
export const benefits = [
  {
    icon: Cpu,
    title: "Embedded Systems Specialists",
    description: "Talent focused on low-level programming, microcontrollers, IoT device firmware, and real-time OS."
  },
  {
    icon: Radio,
    title: "Telecom & RF Expertise",
    description: "Experts in 5G, 4G, wireless protocols, antenna design, and network optimization."
  },
  {
    icon: DollarSign,
    title: "Budget-Friendly Solutions",
    description: "Save on typical agency markups with our low-fee model: Onetime $10 + Recurring $1/hour."
  },
  {
    icon: HardHat,
    title: "Hardware Reliability Vetted",
    description: "Professionals rigorously assessed for PCB design, layout, thermal management, and reliability testing."
  },
  {
    icon: Settings,
    title: "Project-Specific Scaling",
    description: "Quickly scale teams for product cycles, from concept and prototype to mass production and quality assurance."
  },
  {
    icon: Scale,
    title: "Flexible Contract Terms",
    description: "On-demand talent for short-term projects, peak demand periods, or long-term specialized needs."
  }
];

// --- Hiring Process Data ---
export const hiringProcess = [
  {
    step: 1,
    title: "Define Technical Specifications",
    description: "We capture precise requirements for hardware platforms, communication standards (e.g., WiFi, Bluetooth, 5G), and project goals."
  },
  {
    step: 2,
    title: "Vetted Specialist Profiles",
    description: "Review profiles of pre-assessed candidates with verified experience in relevant engineering tools and simulations."
  },
  {
    step: 3,
    title: "Direct Technical Interview",
    description: "Interview candidates directly to confirm specialized domain knowledge and hands-on experience."
  },
  {
    step: 4,
    title: "Onboard & Initiate Development",
    description: "Seamless contracting allows the expert to integrate and begin contributing to your hardware/firmware pipeline quickly."
  }
];

// --- Comparison Data ---
export const comparisonData = [
  {
    feature: "Niche Hardware Vetting",
    traditional: "Low",
    mapeach: "High (Specialized Tools)",
    mapeachClass: "text-emerald-600 bg-emerald-50 font-semibold"
  },
  {
    feature: "Access to Embedded Experts",
    traditional: "Slow/Generic",
    mapeach: "Immediate Access",
    mapeachClass: "text-emerald-600 bg-emerald-50 font-semibold"
  },
  {
    feature: "Average Markup",
    traditional: "20-35%",
    mapeach: "Onetime $10 + Recurring $1/hr",
    mapeachClass: "text-emerald-600 bg-emerald-50 font-semibold"
  },
  {
    feature: "Focus Area",
    traditional: "General IT/Engineering",
    mapeach: "Hardware, RF, and Firmware",
    mapeachClass: "text-emerald-600 bg-emerald-50 font-semibold"
  },
  {
    feature: "Time to Fill Specialized Roles",
    traditional: "8+ weeks",
    mapeach: "less than 2 weeks",
    mapeachClass: "text-emerald-600 bg-emerald-50 font-semibold"
  },
  {
    feature: "Contract Flexibility",
    traditional: "Rigid Terms",
    mapeach: "Highly Flexible",
    mapeachClass: "text-emerald-600 bg-emerald-50 font-semibold"
  }
];

// --- Specific Electronics & Communications Roles Data (CONSOLIDATED) ---
export const ecRoles = [
  // From electronics.js
  {
    category: "Circuit & PCB Design",
    items: [
      { role: "Hardware Engineer", skills: ["Analog & Digital Circuit Design", "Schematic Capture", "PCB Layout", "Signal Integrity"] },
      { role: "Electronics Technician", skills: ["Component Testing", "Oscilloscope Usage", "Soldering", "Troubleshooting"] },
      { role: "FPGA Engineer", skills: ["VHDL/Verilog", "FPGA Simulation", "Timing Analysis"] }
    ]
  },
  {
    category: "Power Electronics",
    items: [
      { role: "Power Electronics Engineer", skills: ["Converters & Inverters", "Motor Drives", "Power Management ICs", "Thermal Analysis"] },
      { role: "Test Engineer", skills: ["Load Testing", "EMC/EMI Testing", "Oscilloscope & Analyzer Usage"] }
    ]
  },
  {
    category: "Communications & Networking",
    items: [
      { role: "RF Engineer", skills: ["RF Circuit Design", "Antenna Design", "EM Simulation", "Wireless Protocols"] },
      { role: "Network Engineer", skills: ["5G / LTE", "WiFi / Zigbee / LoRa", "Modulation Techniques", "Signal Processing"] }
    ]
  },
  // From embedded.js
  {
    category: "Embedded Systems & Firmware",
    items: [
      { role: "Embedded Firmware Engineer", skills: ["C/C++", "RTOS", "Device Drivers", "Microcontroller Programming"] },
      { role: "Embedded Software Developer", skills: ["Linux Kernel", "Bare-Metal Programming", "Peripheral Interfaces (UART, SPI, I2C)"] },
      { role: "IoT Developer", skills: ["Sensors & Actuators", "MQTT / CoAP", "Cloud Integration", "Wireless Protocols"] }
    ]
  },
  {
    category: "Chip / VLSI Design",
    items: [
      { role: "ASIC/Chip Design Engineer", skills: ["RTL Design", "Timing Analysis", "Verification & Simulation"] },
      { role: "FPGA/SoC Engineer", skills: ["FPGA Programming", "High-Level Synthesis (HLS)", "SystemVerilog", "Testbenches"] },
      { role: "Verification Engineer", skills: ["Functional Verification", "UVM", "Simulation", "Debugging"] }
    ]
  },
  // From automation.js
  {
    category: "Industrial Automation",
    items: [
      { role: "PLC Engineer", skills: ["PLC Programming", "SCADA/HMI", "Industrial Protocols (Modbus, Profibus)", "Troubleshooting"] },
      { role: "Control Systems Engineer", skills: ["PID Control", "Process Automation", "Instrumentation", "Sensors & Actuators"] },
      { role: "Automation Technician", skills: ["Field Wiring", "Calibration", "Equipment Maintenance"] }
    ]
  },
  {
    category: "Robotics",
    items: [
      { role: "Robotics Engineer", skills: ["ROS", "Robot Kinematics", "Path Planning", "Machine Vision"] },
      { role: "Robot Technician", skills: ["Assembly & Maintenance", "Sensor Calibration", "End-Effector Programming"] },
      { role: "Mechatronics Engineer", skills: ["Actuator & Sensor Integration", "Embedded Control", "Motion Planning"] }
    ]
  },
  // From emerging.js
  {
    category: "AI / ML / Computer Vision",
    items: [
      { role: "AI Engineer", skills: ["Python / TensorFlow / PyTorch", "Deep Learning", "Model Deployment", "Edge AI"] },
      { role: "Computer Vision Engineer", skills: ["Image Processing", "OpenCV", "Object Detection", "3D Vision"] },
      { role: "Data Scientist", skills: ["Data Analysis", "ML Models", "Time-Series Analysis", "Healthcare / Industrial AI"] }
    ]
  },
  {
    category: "IoT & Smart Systems",
    items: [
      { role: "IoT Engineer", skills: ["Embedded Programming", "MQTT / CoAP", "Cloud Integration", "Edge Computing"] },
      { role: "Automation Architect", skills: ["Industrial IoT", "SCADA Integration", "Predictive Maintenance", "Sensors & Actuators"] }
    ]
  },
  {
    category: "Other Emerging Skills",
    items: [
      { role: "Cybersecurity Engineer", skills: ["IoT Security", "Embedded Security", "Network Security", "Penetration Testing"] },
      { role: "Cloud Engineer", skills: ["AWS / Azure / GCP", "Cloud Security", "DevOps / CI-CD Pipelines"] },
      { role: "AR/VR Engineer", skills: ["Unity / Unreal", "3D Modeling", "Simulation for Robotics or Healthcare"] }
    ]
  }
];
