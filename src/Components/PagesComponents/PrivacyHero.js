import React from "react";
import "./PrivacyHero.css";

function PrivacyHero() {
  return (
    <>
      <div className="header">
        <h3>Privacy Statement</h3>
      </div>
      <div className="content">
        <div className="time-update">
          <h3>Last Updated:</h3><h5> June 5, 2023</h5>
        </div>
        <div className="privacy-content">
          <ol>
            <li>
              <h3>Introduction</h3>
              <p>
                At VaccineApp HQ, we are committed to protecting your privacy
                and ensuring the security of your personal information. This
                Privacy Statement outlines how we collect, use, and safeguard
                your data when you use our vaccine app ("the App"). We strive to
                comply with applicable data protection laws and regulations to
                maintain your trust and confidence. By using the App, you
                consent to the practices described in this Privacy Statement.
              </p>
            </li>
            <li>
              <h3>Collection of your personal information</h3>
              <h4>Personal Information</h4>
              <p>
                We may collect and store certain personal information that you
                provide to us voluntarily, such as your name, contact
                information, demographic details, and vaccination history. This
                information is necessary for the functioning of the App and to
                provide you with relevant services, including appointment
                scheduling and reminders.
              </p>
              <p>
                To assist you with managing your vaccination status effectively,
                the App may collect and process health-related data, such as
                your vaccination records, dates of vaccination, and any adverse
                reactions. This data is securely stored and utilized solely for
                the purposes of facilitating your vaccination journey and
                providing relevant information.
              </p>
            </li>
            <li>
              <h3>Data Security:</h3>
              <h4>Data Protection Measures:</h4>
              <p>
                We implement reasonable technical and organizational measures to
                protect your personal information from unauthorized access,
                disclosure, alteration, or destruction. These measures include
                data encryption, secure data storage, access controls, and
                regular security assessments.
              </p>
              <h4>Third-Party Service Providers:</h4>
              <p>
                In some instances, we may engage reputable third-party service
                providers to assist in the delivery and maintenance of the App.
                These providers are contractually obligated to handle your data
                securely and confidentially, and they are prohibited from using
                your information for any other purposes.
              </p>
            </li>
            <li>
              <h3>Data Sharing and Disclosure:</h3>
              <h4>Legal Compliance:</h4>
              <p>
                We may disclose your personal information if required to do so
                by law or in response to valid legal requests, such as court
                orders or government regulations.
              </p>
              <h4> Anonymized and Aggregated Data:</h4>
              <p>
                We may share anonymized and aggregated data derived from the
                App's usage with trusted partners, researchers, or public health
                authorities. This information does not identify you personally
                and is used for statistical analysis, research, and improving
                public health outcomes.
              </p>
            </li>
            <li>
              <h3>User Control and Choices:</h3>
              <h4>Access and Correction:</h4>
              <p>
                You have the right to review, update, or correct your personal
                information stored in the App. You can access and modify this
                information through the App's settings or by contacting our
                support team.
              </p>
              <h4>Opting Out:</h4>
              <p>
                You have the option to opt out of certain data collection and
                processing activities. However, please note that opting out of
                essential data collection may limit or prevent the App from
                functioning properly.
              </p>
            </li>
            <li>
              <h3>Children's Privacy:</h3>
              <p>
                The App is not intended for use by individuals under the age of
                16. We do not knowingly collect personal information from
                children. If we become aware that we have inadvertently
                collected personal data from a child without appropriate
                consent, we will take steps to delete that information as soon
                as possible
              </p>
            </li>
            <li>
              <h3>Updates to this Privacy Statement:</h3>
              <p>
                We may update this Privacy Statement from time to time to
                reflect changes in our practices or legal requirements. We
                encourage you to review this statement periodically for any
                updates. The revised Privacy Statement will be effective as of
                the "Last Updated" date mentioned at the beginning of the
                statement.
              </p>
            </li>
            <li>
              <h3>Contact Us:</h3>
              <p>
                If you have any questions, concerns, or requests regarding this
                Privacy Statement or our data practices, please contact us at
                0812345677
              </p>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default PrivacyHero;
