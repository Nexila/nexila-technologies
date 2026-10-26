import { useState } from "react";
import "./Internship.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export function InternForm() {
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [collegeRegisterId, setCollegeRegisterId] = useState("");
  const [graduate, setGraduate] = useState("");
  const [year, setYear] = useState("");
  const [domain, setDomain] = useState("");
  const [duration, setDuration] = useState("");
  const [dateofjoin, setDateofjoin] = useState("");
  const [location, setLocation] = useState("");


  const [showSuccess, setShowSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const PRICING = {
    15: {
      days: "15 days",
      fee: 1999,
      discount: 25,
      discountAmount: 500,
      amount: 1499,
      programme: "Internship",
    },
    30: {
      days: "30 days",
      fee: 3333,
      discount: 25,
      discountAmount: 833,
      amount: 2500,
      programme: "Internship",
    },
    60: {
      days: "60 days",
      fee: 6666,
      discount: 25,
      discountAmount: 1667,
      amount: 5000,
      programme: "Internship",
    },
    90: {
      days: "90 days",
      fee: 9999,
      discount: 25,
      discountAmount: 2500,
      amount: 7499,
      programme: "Project with Internship",
    },
    120: {
      days: "120 days",
      fee: 29999,
      discount: 30,
      discountAmount: 9000,
      amount: 20999,
      programme: "Course",
    },
  };

  const selectedPlan = duration ? PRICING[duration] : null;

  const COLLEGES = [
    "A.V.C.College (Autonomous)",
    "A.V.S. College of Science",
    "Aalim Muhammed Salegh College of Engineering",
    "Aarupadai Veedu Institute of Technology",
    "Adhiparasakthi College of Science",
    "Adhiparasakthi",
    "Adithya Institute of Technology",
    "Agarchand Manmull Jain College (A.M. Jain College)",
    "Agni College of Technology",
    "Alpha Arts And Science College",
    "Alpha College of Engineering",
    "Amrita Vishwa Vidyapeetham",
    "Anand Institute of Higher Technology",
    "Anjalai Ammal Mahalingam Engineering College",
    "Anna University Regional Campus",
    "Anna University",
    "Annai Therasai Arts And science College",
    "Annai Veilankanni's College of Engineering",
    "Apollo Arts and Science College",
    "Arasu Engineering College",
    "Asan Memorial College of Arts And Science",
    "As-Salam College of Engineering and Technology",
    "Auxilium College of Arts and Science for Women",
    "Auxilium College",
    "AVC College of Engineering",
    "AVS Engineering College",

    "B.S. Abdur Rahman Crescent University (BSACIST)",
    "Bannari Amman Institute of Technology (BIT)",
    "Bharath University",
    "Bharathidasan College of Arts and Science",
    "Bharathidasan University",
    "Bishop Hebbur College (Autonomous)",

    "C. Abdul Hakeem College of Engineering and Technology",
    "CARE College of Engineering",
    "Chennai Institute of Technology (CIT)",
    "Coimbatore Institute of Management and Technology",
    "Coimbatore Institute of Technology (CIT)",

    "D.K.M College for Women",
    "DG Vaishnav College",
    "Dhaanish Ahmed College of Engineering",
    "Dhanalakshmi College of Engineering",
    "Dhanalakshmi Srinivasan Engineering College",
    "Dr. Ambedkar Government Arts College",
    "Dr. M.G.R. Janaki College of Arts and Science for Women",
    "Dr. Mahalingam College of Engineering and Technology",
    "Dr. MGR University",
    "Dr. N.G.P. Arts and Science College",
    "Dr. N.G.P. Institute of Technology",

    "Easwari Engineering College",
    "Einstein College of Engineering",
    "Erode Arts College (Autonomous)",
    "Erode Sengunthar Engineering College",
    "Erode Vidya Sangam Sri Vasavi College",
    "Ethiraj College for Women",
    "Excel Engineering College",

    "Fatima College",
    "Francis Xavier Engineering College",

    "G.K.M. College of Engineering and Technology",
    "Ganadipathy Tulsi's Engineering College",
    "Government College of Engineering",
    "Government Vellore Institute of Technology",
    "Guru Nanak College",

    "Hindustan College Of Arts And Science",
    "Hindustan Institute of Technology and Science (HITS)",
    "Hindustan University",
    "Hindusthan College of Engineering and Technology",
    "Hindusthan Institute of Technology",
    "Holy Cross College for Women(Autonomous)",
    "Holy Cross College",

    "Indra Ganesan College of Engineering",
    "Info Institute of Engineering",
    "Islamaiah Women's Arts and Science College",
    "Islamiah College",

    "J.J.College of Arts and science",
    "Jamal Mohammed College",
    "Jeppiaar Engineering College",
    "Jeppiaar Institute of Technology",
    "Jerusalem College of Engineering",

    "K. Ramakrishnan College of Engineering",
    "K. Ramakrishnan College of Technology",
    "K.C.G. College of Technology",
    "K.S.R. College of Engineering (KSR)",
    "K.S.R. Institute for Engineering and Technology (KSR)",
    "K.S.Rangasamy College of Technology (KSR)",
    "Kalasalingam Academy of Research and Education",
    "Kalasalingam University",
    "Karpagam Arts And Science College",
    "Karpagam College of Engineering",
    "Karpagam Institute of Technology",
    "Karunya Institute of Technology and Sciences",
    "Karuppana Mariappan College",
    "KCG College of Technology",
    "Kingston Engineering College",
    "KLN College of Engineering",
    "KLN College of Information Technology",
    "Knowledge Institute of Technology (KIOT)",
    "Kongu Arts and Science College",
    "Kongu College of Arts and Science",
    "Kongu Engineering College (KEC)",
    "Kongunadu College of Engineering and Technology",
    "KPR College of Arts Science and Research",
    "KPR Institute of Engineering and Technology (KPRIET)",
    "Kumaraguru College of Technology (KCT)",

    "Lady Doak College",
    "Loyola College",

    "M.A.M. College of Engineering",
    "M.A.M. School of Engineering",
    "M.O.P Vaishnav College For Women",
    "M.P. Nachimuthu M. Jaganathan Engineering College",
    "M.S. University, Tirunelveli",
    "Madha Engineering College (MEC)",
    "Madha Institute of Engineering and Technology",
    "Madras Christian College (Autonomous)",
    "Madras Christian College (MCC)",
    "Madura College",
    "Madurai Kamaraj University",
    "Mahalakshmi College of Arts and Science",
    "Mahendra Engineering College",
    "Mahendra Institute of Technology",
    "Mass College of Engineering",
    "Meenakshi Ammal Arts And Science College",
    "Meenakshi College for Women",
    "Meenakshi College of Engineering",
    "Meenakshi Sundararajan Engineering College",
    "Mepco Schlenk Engineering College",
    "MOP Vaishnav College for Women",

    "Nandha Arts and Science College",
    "Nandha College of Technology (NCT)",
    "Nandha Engineering College (NEC)",
    "National College",
    "National Engineering College",
    "National Institute of Technology (NIT)",
    "Navarasam Arts and Science College for Women",
    "Nehru Institute of Engineering and Technology",
    "New Prince Shri Bhavani Arts And Science College",
    "New Prince Shri Bhavani College of Engineering and Technology",
    "Oxford Engineering College",

    "P.S.G College of Arts and Science (PSGCAS)",
    "Paavai Engineering College",
    "Pachaiyappa's College",
    "Panimalar Engineering College (PEC)",
    "Panimalar Institute of Technology (PIT)",
    "Park College of Engineering Technology",
    "Pattammal Alagesan College Of Arts And Science",
    "PERI Institute of Technology",
    "Periyar Maniammai Institute of Science and Technology",
    "PET Engineering College",
    "Presidency College",
    "Prince Dr. K. Vasudevan College of Engineering and Technology",
    "Prince Shri Venkateshwara Arts and Science College",
    "Prince Shri Venkateshwara Padmavathy Engineering College",
    "PRIST University",
    "PSG College of Technology (PSGCT)",
    "PSG Institute of Technology and Applied Research (PSG iTech)",
    "PSN College of Engineering and Technology",
    "PSN Institute of Technology and Science",
    "PSNA College of Engineering and Technology",
    "PSR Engineering College",

    "Quaid-e-Millet College",
    "Quaid-e-Millet Government Arts College for Women",
    "Queen Mary's College",

    "R.V.S College Of Arts And Science",
    "Raja Rajeswari Engineering College",
    "Rajalakshmi Engineering College (REC)",
    "Rajalakshmi Institute of Technology (RIT)",
    "Ramco Institute of Technology",
    "Rathinam College of Arts and Science (RCAS)",
    "RMD Engineering College",
    "RMK Engineering College",

    "S.A. Engineering College",
    "S.D.N.B Vaishnav College For Women",
    "S.K.R. Engineering College",
    "S.R.M Arts and Science College",
    "SACS MAVMM Engineering College",
    "Sardar Raja College of Engineering",
    "SASTRA Deemed University",
    "Sasurie College of Engineering",
    "Sathyabama Institute of Science and Technology",
    "Sathyabama University",
    "Saveetha Engineering College",
    "SCAD College of Engineering and Technology",
    "Shanmuga Arts Science Technology Research Academy (SASTRA)",
    "Shree Venkateshwara Hi-Tech Engineering College",
    "SIVET College",
    "SNS Academy",
    "SNS College of Engineering",
    "SNS College of Technology (SNSCT)",
    "Sona College of Technology",
    "Sree Amman Arts and Science College",
    "Sree Saraswathi Thyagaraja College",
    "Sree Sastha Institute of Engineering and Technology",
    "Sri Eshwar College of Engineering",
    "Sri Krishna College of Engineering and Technology (SKCET)",
    "Sri Krishna Engineering College",
    "Sri Krishna Institute of Technology",
    "Sri Lakshmi Ammal Engineering College",
    "Sri Ramakrishna Engineering College (SREC)",
    "Sri Ramakrishna Institute of Technology",
    "Sri Ramakrishna Mission Vidyalaya Arts and Science (Autonomous)",
    "Sri Sai Ram Engineering College",
    "Sri Sai Ram Institute of Technology",
    "Sri Sairam Engineering College",
    "Sri Shanmugha College of Engineering and Technology",
    "Sri Sivasubramaniya Nadar College of Engineering",
    "Sriram College Of Arts and Science",
    "SRM Arts and Science College",
    "SRM Institute of Science and Technology, Kattankulathur (SRMIST)",
    "SRM Institute of Science and Technology (SRMIST)",
    "SRM TRP Engineering College",
    "SRM University, Kattankulathur",
    "SRM University",
    "SRM Valliammai Engineering College (SRM VEC)",
    "SSN College of Engineering (SSN)",
    "St. Joseph's College of Engineering",
    "St. Joseph's Institute of Technology",
    "St.Joseph college of Arts And Science",
    "St.Joseph College",
    "Stella Maris College",
    "Surya Engineering College",

    "T.J. Institute of Technology",
    "Tagore College of Arts & Science",
    "Tagore Engineering College",
    "Thangavelu Engineering College",
    "Thanthai Periyar Government Institute of Technology",
    "The American College",
    "The New College",
    "Thiagarajar College of Engineering (TCE)",
    "Thiagarajar College",
    "Thiagarajar Polytechnic College",
    "Thirukkoilur College of Arts And Science",
    "Thiruthangal Nadar College",
    "Tirupathur Arts and Science College",

    "University of Madras (Madras University)",

    "Valliammal College For Women",
    "Vel Tech",
    "Velalar College of Engineering and Technology",
    "Velammal College of Engineering and Technology",
    "Velammal Engineering College",
    "Velammal Institute of Technology",
    "Vellalar College for Women",
    "Vellore Institute of Technology (VIT)",
    "Vels University",
    "Vidyasagar Women's College",
    "Vinayaka Mission's Kirupananda Variyar Engineering College",
    "Voarhees College",
    "VSB College of Engineering Technical Campus",
    "VSB Engineering College",
  ];

  const TAMIL_NADU_DISTRICTS = [
    "Ariyalur",
    "Chengalpattu",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kancheepuram",
    "Kanniyakumari",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Mayiladuthurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Sivaganga",
    "Tenkasi",
    "Thanjavur",
    "Theni",
    "Thoothukudi",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tirupathur",
    "Tiruppur",
    "Tiruvallur",
    "Tiruvannamalai",
    "Tiruvarur",
    "Vellore",
    "Viluppuram",
    "Virudhunagar",
  ];

  const GRADUATES = [
    "B.A.",
    "B.Com",
    "B.Com (Computer Applications)",
    "B.B.A.",
    "B.C.A.",
    "B.Sc.",
    "B.Sc. Computer Science",
    "B.Sc. Information Technology",
    "B.Sc. Data Science",
    "B.Sc. Artificial Intelligence",
    "B.Sc. Computer Applications",
    "B.E.",
    "B.E. Computer Science and Engineering",
    "B.E. Information Technology",
    "B.E. Artificial Intelligence and Data Science",
    "B.E. Artificial Intelligence and Machine Learning",
    "B.E. Computer Science and Business Systems",
    "B.E. Cyber Security",
    "B.E. Data Science",
    "B.Tech",
    "B.Tech Computer Science and Engineering",
    "B.Tech Information Technology",
    "B.Tech Artificial Intelligence",
    "B.Tech Artificial Intelligence and Data Science",
    "B.Tech Data Science",
    "B.Tech Information Systems",
    "M.A.",
    "M.Com",
    "M.B.A.",
    "M.C.A.",
    "M.Sc.",
    "M.Sc. Computer Science",
    "M.Sc. Information Technology",
    "M.Sc. Data Science",
    "M.Sc. Artificial Intelligence",
    "M.E.",
    "M.Tech",
    "Ph.D.",
    "Other",
  ];

  const IYEAR = ["1st year", "2nd year", "Pre-final year", "Final year"];

  const IDOMS = [
    "Artificial Intelligence",

    "AWS Training & Certification",
    "AWS with DevOps",
    "Azure",
    "Data Analytics",
    "Data Science",
    "Tableau",
    "Power BI",
    "MERN - Full Stack",
    "Python - Full Stack",
    "Java - Full Stack",
    "React JS",

    "Front-End Development",

    "Java",
    "Python",

    "Google Cloud Platform (GCP)",
    "Web Development",
    "Selenium Testing",
    "SoapUI",
    "Manual Testing",
    "Mobile Application Testing",
    "Oracle",
    "MySQL",
    "MongoDB",

    "Android",
    "iOS",

    "MEAN Full Stack",

    "UiPath",
    "Blue Prism",
    "OpenSpan",
    "Automation Anywhere",

    "Angular JS",

    "MATLAB",
    "Informatica",
    ".NET",
  ];

  const sel = (label, array, value, onChange) => (
    <select required value={value} onChange={onChange}>
      <option value="" disabled>
        {label}
      </option>

      {array.map((x) => (
        <option key={x} value={x}>
          {x}
        </option>
      ))}
    </select>
  );

  const isWednesday = (dateString) => {
    if (!dateString) return false;

    const date = new Date(`${dateString}T00:00:00`);
    return date.getDay() === 3;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    const finalName = name.trim();
    const finalPhone = phone.trim();
    const finalCollege = college.trim();
    const finalGraduate = graduate.trim();

    if (!finalName) {
      setMessage("Please enter your name.");
      return;
    }

    if (!/^\d{10}$/.test(finalPhone)) {
      setMessage("Please enter a valid 10 digit mobile number.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email.trim())) {
  setMessage("Please enter a valid email address.");
  return;
}

    if (!finalCollege) {
      setMessage("Please enter your college name.");
      return;
    }

    if (!GRADUATES.includes(finalGraduate)) {
      setMessage("Please search and select your graduate from the list.");
      return;
    }

    if (!year) {
      setMessage("Please select your year of studying.");
      return;
    }

    if (!domain) {
      setMessage("Please select your domain.");
      return;
    }

    if (!duration || !selectedPlan) {
      setMessage("Please select an internship plan.");
      return;
    }

    if (!dateofjoin) {
      setMessage("Please select your joining date.");
      return;
    }

    if (new Date(`${dateofjoin}T00:00:00`).getDay() !== 3) {
      setMessage("Please select a Wednesday.");
      return;
    }

    setLoading(true);

    try {
      const crmData = {
        name: finalName,
        phone: finalPhone,
        email: email.trim(),

        graduate: finalGraduate,
        category: year,
        domain,

        // Selected plan details
        noofday: selectedPlan.days,
        internshipduration: selectedPlan.days,
        fees: selectedPlan.amount,
        feepaid: 0,
        pendingfee: selectedPlan.amount,

        lookingfor: selectedPlan.programme,

        leadstatus: "New Lead",
        leadsource: "website",
        collegename: finalCollege,
        collegeRegisterId: collegeRegisterId.trim(),

        location: location,
        joinstatus: null,
        notes: null,
        remark: null,
        domainreason: null,
        dropreason: null,
        followdate: null,
        demodate: null,
        dateofjoin: dateofjoin
          ? new Date(`${dateofjoin}T00:00:00`).toISOString()
          : null,
        feetype: null,
        assignfrom: null,
        assignto: null,
      };

      const response = await fetch(
        "https://crm.nexilatechnologies.com/api/leads/create-public",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(crmData),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result?.message || "Unable to submit your application.",
        );
      }
setSubmittedData({
  name: finalName,
  nexilaID:
    result?.nexilaID ||
    result?.lead?.nexilaID ||
    result?.data?.nexilaID ||
    "",
});

setShowSuccess(true);

      setName("");
      setPhone("");
      setEmail("")
      setCollege("");
      setCollegeRegisterId("")
      setGraduate("");
      setYear("");
      setDomain("");
      setDateofjoin("");
      setDuration("");
      setLocation("");

      setTimeout(() => {
        setOk(false);
        setMessage("");
      }, 6000);
    } catch (error) {
      console.error("Internship application error:", error);

      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit your application. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (ok) {
    return (
      <div style={{ padding: "12px 0" }}>
        <h3 style={{ fontSize: 24 }}>Application received ✅</h3>

        <p style={{ color: "#C4D1EE" }}>
          Thank you! Our team will contact you shortly.
        </p>

        <p
          style={{
            color: "#C4D1EE",
            fontSize: 13,
            opacity: 0.7,
            marginTop: 10,
          }}
        >
          This form will be available again shortly...
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        placeholder="Name"
        value={name}
        onChange={(e) => {
          const value = e.target.value
            .replace(/[^a-zA-Z\s]/g, "")
            .replace(/\s+/g, " ")
            .split(" ")
            .map((word) =>
              word
                ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                : "",
            )
            .join(" ");

          setName(value);
        }}
      />

      <input
        required
        type="tel"
        inputMode="numeric"
        maxLength={10}
        placeholder="Contact Number"
        value={phone}
        onChange={(e) => {
          const value = e.target.value.replace(/\D/g, "").slice(0, 10);

          setPhone(value);
        }}
      />

      <input
  type="email"
  name="email"
  placeholder="Enter your email address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
/>

      {/* College Name - Searchable + Custom College */}
<input
  type="text"
  name="college"
  list="college-list"
  placeholder="Select or enter your college name"
  value={college}
  onChange={(e) => {
    const value = e.target.value;
    setCollege(value);
  }}
  required
/>

<datalist id="college-list">
  {COLLEGES.map((x) => (
    <option key={x} value={x} />
  ))}
</datalist>

<small
  style={{
    display: "block",
    marginTop: "-8px",
    marginBottom: "12px",
    color: "#8FA4CC",
    fontSize: 12,
  }}
>
  If your college is not listed, type your college name.
</small>

<input
  type="text"
  name="collegeRegisterId"
  placeholder="Enter your college register ID"
  value={collegeRegisterId}
  onChange={(e) => setCollegeRegisterId(e.target.value)}
  required
/>
      <input
        type="text"
        name="location"
        list="district-list"
        placeholder="Select or type your district"
        value={location}
        onChange={(e) => {
          const value = e.target.value;
          setLocation(value.replace(/\b\w/g, (char) => char.toUpperCase()));
        }}
        required
      />

      <datalist id="district-list">
        {TAMIL_NADU_DISTRICTS.map((district) => (
          <option key={district} value={district} />
        ))}
      </datalist>

      <small
        style={{
          display: "block",
          marginTop: "-8px",
          marginBottom: "12px",
          color: "#8FA4CC",
          fontSize: 12,
        }}
      >
        If your district is not listed, type your district name.
      </small>

      {/* Graduate - Searchable but must select from list */}
      <select
        required
        value={graduate}
        onChange={(e) => setGraduate(e.target.value)}
      >
        <option value="" disabled>
          Graduate
        </option>

        {GRADUATES.map((x) => (
          <option key={x} value={x}>
            {x}
          </option>
        ))}
      </select>

      {sel("Year of Studying", IYEAR, year, (e) => setYear(e.target.value))}

      {sel("Domain", IDOMS, domain, (e) => setDomain(e.target.value))}

      {/* Date of Joining - Wednesdays Only */}
      {/* Date of Joining - Wednesdays Only */}
      <div className="joining-date-section">
        <label htmlFor="dateofjoin">Date of Joining</label>

        <DatePicker
          id="dateofjoin"
          selected={dateofjoin ? new Date(`${dateofjoin}T00:00:00`) : null}
          onChange={(date) => {
            if (!date) {
              setDateofjoin("");
              return;
            }

            // Format as YYYY-MM-DD using local date values
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const day = String(date.getDate()).padStart(2, "0");

            setDateofjoin(`${year}-${month}-${day}`);
          }}
          filterDate={(date) => date.getDay() === 3}
          minDate={new Date()}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select a Wednesday"
          calendarStartDay={1}
          required
          autoComplete="off"
        />

        <small>Only Wednesdays are available for joining.</small>
      </div>

      {/* Internship Duration & Pricing */}
      <div className="pricing-section">
        <h3>Choose Your Internship Plan</h3>
        <p className="pricing-subtitle">
          Select a duration to view your discounted programme fee.
        </p>

        <div className="pricing-plans">
          {Object.entries(PRICING).map(([key, plan]) => (
            <button
              key={key}
              type="button"
              className={`pricing-card ${duration === key ? "active" : ""}`}
              onClick={() => setDuration(key)}
            >
              <span className="plan-days">{plan.days}</span>

              <span className="plan-original">
                ₹{plan.fee.toLocaleString("en-IN")}
              </span>

              <span className="plan-price">
                ₹{plan.amount.toLocaleString("en-IN")}
              </span>

              <span className="plan-discount">{plan.discount}% OFF</span>

              <span className="plan-programme">{plan.programme}</span>

              <span className="plan-select">
                {duration === key ? "✓ Selected" : "Choose Plan"}
              </span>
            </button>
          ))}
        </div>

        {selectedPlan && (
          <div className="price-summary">
            <h4>Price Summary</h4>

            <div className="price-row">
              <span>Duration</span>
              <strong>{selectedPlan.days}</strong>
            </div>

            <div className="price-row">
              <span>Original Fee</span>
              <strong>₹{selectedPlan.fee.toLocaleString("en-IN")}</strong>
            </div>

            <div className="price-row">
              <span>Discount ({selectedPlan.discount}%)</span>
              <strong className="discount-value">
                −₹{selectedPlan.discountAmount.toLocaleString("en-IN")}
              </strong>
            </div>

            <div className="price-row total-row">
              <span>Final Amount</span>
              <strong>₹{selectedPlan.amount.toLocaleString("en-IN")}</strong>
            </div>

            <div className="price-programme">
              Programme: <strong>{selectedPlan.programme}</strong>
            </div>
          </div>
        )}
      </div>

      {message && (
        <div
          style={{
            marginTop: 10,
            padding: "10px 14px",
            borderRadius: 8,
            fontSize: 14,
          }}
        >
          {message}
        </div>
      )}

      <button
        className="btn cta"
        type="submit"
        disabled={loading}
        style={{
          opacity: loading ? 0.7 : 1,
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Submitting..." : "Submit Form"}
      </button>
            {showSuccess && submittedData && (
        <div
          className="nex-success-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="nex-success-title"
        >
          <div className="nex-success-card">
            <div className="nex-success-icon">✓</div>

            <span className="nex-enquiry-eyebrow">
              INTERNSHIP APPLICATION RECEIVED
            </span>

            <h2 id="nex-success-title">
              Thank you, {submittedData.name.split(" ")[0]}!
            </h2>

            <p>
              Your internship application has been submitted successfully.
              Our team will contact you with the next steps.
            </p>

            {submittedData.nexilaID && (
              <div className="nex-success-reference">
                <span>Your application reference</span>
                <strong>{submittedData.nexilaID}</strong>
              </div>
            )}

            <button
              type="button"
              className="nex-enquiry-submit"
              onClick={() => {
                setShowSuccess(false);
                setSubmittedData(null);
                setMessage("");
              }}
            >
              Back to Form
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
